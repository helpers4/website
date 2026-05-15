/**
 * This file is part of helpers4.
 * Copyright (C) 2025 baxyz
 * SPDX-License-Identifier: LGPL-3.0-or-later
 */

export const TOPICS = ['typescript', 'devcontainer', 'action'] as const;
export type Topic = (typeof TOPICS)[number];
