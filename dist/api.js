"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api = void 0;
const utils_1 = require("./utils");
const constants_1 = require("./common/constants");
class Api {
    accessToken;
    constructor(accessToken) {
        this.accessToken = accessToken;
        this.accessToken = accessToken;
    }
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    async get(path, options) {
        const params = (0, utils_1.parseOptions)(options);
        const response = await fetch(`${constants_1.BASE_URL_V3}${path}?${params}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${this.accessToken}`,
                'Content-Type': 'application/json;charset=utf-8',
            },
        });
        if (!response.ok) {
            return Promise.reject((await response.json()));
        }
        return (await response.json());
    }
}
exports.Api = Api;
//# sourceMappingURL=api.js.map