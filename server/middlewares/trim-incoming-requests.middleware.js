import trimObjectStrings from "../utils/trimObjectStrings";

export function withTrimIncomingRequests(handler) {
    return (req, res) => {
        if (req.body) {
            req.body = trimObjectStrings(req.body);
        }

        if (req.query) {
            req.query = trimObjectStrings(req.query);
        }

        if (req.params) {
            req.params = trimObjectStrings(req.params);
        }

        return handler(req, res);
    };
}
