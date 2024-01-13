"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var customError_1 = require("../errors/customError");
var errorHandlerMiddleware = function (err, _req, res, _next) {
    if (err instanceof customError_1.CustomAPIError) {
        return res.status(err.statusCode).json({ msg: err.message });
    }
    return res.status(500).json({ msg: 'Something went wrong, please try again' });
};
exports.default = errorHandlerMiddleware;
