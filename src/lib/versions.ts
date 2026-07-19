/**
 * This file is part of helpers4.
 * Copyright (C) 2025 baxyz
 * SPDX-License-Identifier: LGPL-3.0-or-later
 */
import versions from '../data/versions.json';
import { TOPICS, type Topic } from './topics';

export type VersionEntry = {
	slug: string;
	label: string;
	role: 'next' | 'latest' | 'archive';
	/** Kept in versions.json (the doc-gen pipeline still owns it) but left out of the dropdown. */
	hidden?: boolean;
};

// Precomputed once at module-evaluation time (ES modules are cached, so this runs a single time
// for the whole build), not per page render. Preserves versions.json's own authored order — this
// is what VersionSelect.astro renders as the dropdown's option order.
export const VERSIONS_BY_PRODUCT: Partial<Record<Topic, VersionEntry[]>> = Object.fromEntries(
	TOPICS.map((topic) => [
		topic,
		((versions as Record<string, VersionEntry[]>)[topic] ?? []).filter((v) => !v.hidden),
	]),
);

/**
 * Finds which version entry the given pathname belongs to, for a product's version list.
 * Longest-slug-first so `typescript/v2/...` resolves before the bare `typescript` root —
 * sorted separately from VERSIONS_BY_PRODUCT so that display order stays untouched.
 */
export function findVersionForPathname(entries: VersionEntry[], pathname: string): VersionEntry | undefined {
	return [...entries]
		.sort((a, b) => b.slug.length - a.slug.length)
		.find((v) => pathname === `/${v.slug}/` || pathname.startsWith(`/${v.slug}/`));
}
