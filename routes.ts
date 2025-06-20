/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = [
  "/",
  "/landing/docs/campamento-sierra-juarez.pdf",
  "/registro",
  "/success",
  "/auth/new-verification",
  "/api/webhook",
  "/api/webhook/guest",
];

/**
 * An array of routes that are used for authentication
 * These routes will redirect logged in users to /settings
 * @type {string[]}
 */
export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/reset",
  "/auth/new-password",
];

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * These routes will redirect logged in users to /settings
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * the default redirect path after logging in
 * Routes that start with this prefix are used for API authentication purposes
 * These routes will redirect logged in users to /settings
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/home";
