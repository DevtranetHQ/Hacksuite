import { middlewareLogger } from "./debug";

/**
 * Composes handler function with express style middleware.
 * @param {Function} middleware Express middleware function
 * @param {Function} handler Request handler function to compose with
 * @returns Composed handler function
 */
export function withMiddleware(middleware, handler) {
  return function (req, res) {
    middlewareLogger(`withMiddleware(${middleware.name}, ${handler.name})`);
    return middleware(req, res, result => {
      if (result instanceof Error) {
        throw result;
      }

      return handler(req, res);
    });
  };
}
