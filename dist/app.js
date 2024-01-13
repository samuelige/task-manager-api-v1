"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var express_1 = __importDefault(require("express"));
var tasks_routes_1 = __importDefault(require("./routes/tasks.routes"));
var db_1 = __importDefault(require("./db"));
var notFound_1 = __importDefault(require("./middleware/notFound"));
var errorHandler_1 = __importDefault(require("./middleware/errorHandler"));
var app = (0, express_1.default)();
app.use(express_1.default.static('./public'));
app.use(express_1.default.json());
app.use('/api/v1/tasks', tasks_routes_1.default);
app.use(notFound_1.default);
app.use(errorHandler_1.default);
(0, db_1.default)(app);
