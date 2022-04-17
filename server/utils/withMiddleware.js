/**
 * Composes handler function with express style middleware.
 * @param {Function} middleware Express middleware function
 * @param {Function} handler Request handler function to compose with
 * @returns Composed handler function
 */
export function withMiddleware(middleware, handler) {
    return function (req, res) {
        middleware(req, res, result => {
            if (result instanceof Error) {
                throw result;
            }

            handler(req, res);
        });
    };
}
