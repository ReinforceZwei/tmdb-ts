"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CertificationEndpoint = void 0;
const base_1 = require("./base");
class CertificationEndpoint extends base_1.BaseEndpoint {
    accessToken;
    constructor(accessToken) {
        super(accessToken);
        this.accessToken = accessToken;
    }
    async movies() {
        return await this.api.get('/certification/movie/list');
    }
    async tvShows() {
        return await this.api.get('/certification/tv/list');
    }
}
exports.CertificationEndpoint = CertificationEndpoint;
//# sourceMappingURL=certification.js.map