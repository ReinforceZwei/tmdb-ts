"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseOptions = void 0;
/* eslint-disable  @typescript-eslint/no-explicit-any */
function parseOptions(options) {
    return options
        ? new URLSearchParams(Object.entries(options).filter(([, v]) => v) // remove undefined
        ).toString()
        : '';
}
exports.parseOptions = parseOptions;
//# sourceMappingURL=parseOptions.js.map