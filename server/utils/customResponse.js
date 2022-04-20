import { formatMessage } from "./formatMessage";

export class CustomResponse {
    /**
     * Create custom response
     *
     * @param {number} statusCode HTTP status code
     * @param {string} message Response message
     * @param {*} data Data to be returned
     */
    constructor(statusCode, message, data) {
        this.message = formatMessage(message);
        this.status = statusCode;
        this.data = data || null;
    }
}

/**
 * Handler result returned by controller methods and returns an HTTP response
 * @param {Request} req HTTP request object
 * @param {Response} res HTTP response object
 * @param {*} result Controller result
 */
export function handleResponse(req, res, result) {
    if (result instanceof CustomResponse) {
        res.status(result.status).json(result);
    } else {
        res.status(200).json(result);
    }
}
