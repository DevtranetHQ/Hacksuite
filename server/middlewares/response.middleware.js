import { handleResponse } from "../utils/customResponse";
import { handleError } from "../utils/customError";
import { middlewareLogger } from "./../utils/debug";

export const withErrorAndResponse = handler => {
    return async (req, res) => {
        middlewareLogger(`withErrorAndResponse(${handler.name})`);
        try {
            const result = await handler(req, res);
            return handleResponse(req, res, result);
        } catch (error) {
            return handleError(req, res, error);
        }
    };
};
