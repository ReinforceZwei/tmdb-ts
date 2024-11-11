"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditsEndpoint = void 0;
const base_1 = require("./base");
class CreditsEndpoint extends base_1.BaseEndpoint {
    accessToken;
    constructor(accessToken) {
        super(accessToken);
        this.accessToken = accessToken;
    }
    async getById(id) {
        return await this.api.get(`/credit/${id}`);
    }
}
exports.CreditsEndpoint = CreditsEndpoint;
//# sourceMappingURL=credits.js.map