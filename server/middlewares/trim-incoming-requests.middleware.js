import trimObjectStrings from "../utils/trimObjectStrings";
import { middlewareLogger } from "../utils/debug";

export function withTrimIncomingRequests(handler) {
  return (req, res) => {
    middlewareLogger(`withTrimIncomingRequests(${handler.name})`);
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
