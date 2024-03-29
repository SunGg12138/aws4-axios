"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aws4Interceptor = exports.getAuthErrorMessage = exports.interceptor = void 0;
var interceptor_1 = require("./interceptor");
Object.defineProperty(exports, "aws4Interceptor", { enumerable: true, get: function () { return interceptor_1.aws4Interceptor; } });
var getAuthErrorMessage_1 = require("./getAuthErrorMessage");
Object.defineProperty(exports, "getAuthErrorMessage", { enumerable: true, get: function () { return getAuthErrorMessage_1.getAuthErrorMessage; } });
/**
 * @deprecated Please use the alternative export of `aws4Interceptor`
 */
exports.interceptor = interceptor_1.aws4Interceptor;
exports.default = interceptor_1.aws4Interceptor;
