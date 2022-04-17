import trimObjectStrings from "../utils/trimObjectStrings";

function trimIncomingRequests(req, res, next) {
    if (req.body) {
        req.body = trimObjectStrings(req.body);
    }

    if (req.query) {
        req.query = trimObjectStrings(req.query);
    }

    if (req.params) {
        req.params = trimObjectStrings(req.params);
    }

    next();
}

export default trimIncomingRequests;
