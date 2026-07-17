/**
 * This file is part of helpers4.
 * Copyright (C) 2025 baxyz
 * SPDX-License-Identifier: LGPL-3.0-or-later
 *
 * Rewrites the sidebar computed by starlight-sidebar-topics so that a page
 * under a versioned sub-tree (typescript/v2/*, typescript/next/*, ...) links
 * to its own categories/reference/comparisons/legal instead of the ones
 * generated for the topic's root (latest stable). Uses Starlight's route-data
 * middleware API (https://starlight.astro.build/reference/route-data/) —
 * the same extension point starlight-versions itself uses for this, see its
 * middleware.ts — so it composes with starlight-sidebar-topics instead of
 * requiring a whole-site versioning plugin.
 */
import { defineRouteMiddleware, type StarlightRouteData } from '@astrojs/starlight/route-data';
import versions from './data/versions.json';

type SidebarEntry = StarlightRouteData['sidebar'][number];

function versionSlugFor(product: string, entryId: string): string | undefined {
	const entries = (versions as Record<string, { slug: string; role: string }[]>)[product];
	if (!entries) return undefined;

	return [...entries]
		.sort((a, b) => b.slug.length - a.slug.length)
		.find((v) => v.role !== 'latest' && (entryId === v.slug || entryId.startsWith(`${v.slug}/`)))?.slug;
}

function rewriteHref(href: string, product: string, versionSlug: string): string {
	const rootPrefix = `/${product}/`;
	if (!href.startsWith(rootPrefix) || href.startsWith(`/${versionSlug}/`)) return href;

	return `/${versionSlug}/${href.slice(rootPrefix.length)}`;
}

function rewriteEntries(entries: SidebarEntry[], product: string, versionSlug: string): SidebarEntry[] {
	return entries.map((entry) => {
		if (entry.type === 'link') {
			return { ...entry, href: rewriteHref(entry.href, product, versionSlug) };
		}
		if (entry.type === 'group') {
			return { ...entry, entries: rewriteEntries(entry.entries, product, versionSlug) };
		}
		return entry;
	});
}

export const onRequest = defineRouteMiddleware((context) => {
	const { starlightRoute } = context.locals;
	const [product] = starlightRoute.entry.id.split('/');
	if (!product) return;

	const versionSlug = versionSlugFor(product, starlightRoute.entry.id);
	if (!versionSlug) return;

	starlightRoute.sidebar = rewriteEntries(starlightRoute.sidebar, product, versionSlug);
});
