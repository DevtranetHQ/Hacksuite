import cors from "cors";

export const withCors = handler => {
    return withMiddleware(cors(), handler);
};
