/**
 * Route Configuration Index
 *
 * This module exports all application routes organized by category.
 * Routes are split into separate files for maintainability:
 * - coreRoutes: Home, legal, about, contact, resources, and general pages
 * - practiceAreaRoutes: Practice area and specialty service pages
 * - locationRoutes: California city-specific trade attorney pages
 * - specializedRoutes: Keyword-specific pages (CBP audit, Section 301, UFLPA, etc.)
 */

import type { RouteObject } from 'react-router-dom';
import { coreRoutes, notFoundRoute } from './coreRoutes';
import { practiceAreaRoutes } from './practiceAreaRoutes';
import { locationRoutes } from './locationRoutes';
import { specializedRoutes } from './specializedRoutes';

/**
 * Combined application routes
 * Order matters: more specific routes should come before general ones
 * The 404 route should always be last
 */
export const appRoutes: RouteObject[] = [
  ...coreRoutes,
  ...practiceAreaRoutes,
  ...locationRoutes,
  ...specializedRoutes,
  notFoundRoute,
];

// Re-export individual route modules for direct access if needed
export { coreRoutes, notFoundRoute } from './coreRoutes';
export { practiceAreaRoutes } from './practiceAreaRoutes';
export { locationRoutes } from './locationRoutes';
export { specializedRoutes } from './specializedRoutes';
