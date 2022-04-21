import { handleResponse } from "../utils/customResponse";
import { handleError } from "../utils/customError";

export const withErrorAndResponse = handler => {
    return async (req, res) => {
        try {
            const result = await handler(req, res);
            return handleResponse(req, res, result);
        } catch (error) {
            return handleError(req, res, error);
        }
    };
};
