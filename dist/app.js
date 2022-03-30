"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const routes_1 = __importDefault(require("./routes"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const url = "mongodb+srv://Shiva:Rgukt123@cluster0.juncu.mongodb.net/event-management?retryWrites=true&w=majority";
mongoose_1.default.connect(url)
    .then((res) => console.log("successfully connected"))
    .catch((err) => {
    console.log(err.message);
});
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
app.use((0, cors_1.default)(({ origin: ['http://localhost:3000', 'https://realshiva.rocks', 'http://realshiva.rocks', 'https://realshiva.rocks:3000', 'http://146.190.8.10:3000', 'http://192.168.137.61:3000', 'http://192.168.0.181:3000', 'http://192.168.30.134:3000', 'http://192.168.23.16:3000', 'http://192.168.43.207:3000', 'http://192.168.30.5:3000', 'http://192.168.6.42:3000', 'http://192.168.4.43:3000'], credentials: true })));
app.use((0, cookie_parser_1.default)());
app.use('/', routes_1.default);
exports.default = app;
