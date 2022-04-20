export class CustomError extends Error {
    /**
     * Create custom error
     *
     * @param {*} message Error message for request response
     * @param {number} statusCode HTTP status code. Default is 400
     */
    constructor(message, statusCode) {
        super(message);
        this.status = statusCode || 400;
    }
}

/**
 * Handles thrown errors in controller functions and returns an error HTTP response
 * @param {Request} req HTTP request object
 * @param {Response} res HTTP response object
 * @param {Error} error Error object
 */
export function handleError(req, res, error) {
    if (error instanceof CustomError) {
        res.status(error.status).send({ message: error.message });
        return;
    }

    if (error.constructor.name == "MongoError" && error.code == 11000) {
        // Catch duplicate key field error
        const field = Object.entries(error.keyValue)[0][0];
        res.status(400).send({ message: `${field} already exists` });
        return;
    }

    if (invalidRequestErrorNames.includes(error.constructor.name)) {
        res.status(400).send({ message: error.message });
        return;
    }

    res.status(500).send({ message: error.message });
}

const invalidRequestErrorNames = [
    "CastError",
    "JsonWebTokenError",
    "ValidationError",
    "SyntaxError",
    "MongooseError",
    "MongoError"
];
