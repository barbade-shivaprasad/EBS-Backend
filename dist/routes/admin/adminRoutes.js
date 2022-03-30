"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const schema_1 = __importDefault(require("../../joiSchemas/schema"));
const validate_1 = __importDefault(require("../../middlewares/validate"));
const upload_1 = require("../../middlewares/upload");
const index_1 = __importDefault(require("./index"));
const verifyAdmin_1 = __importDefault(require("../../middlewares/verifyAdmin"));
const router = (0, express_1.Router)();
const val = new schema_1.default();
router.post('/createadmin', (0, validate_1.default)(val.signup), verifyAdmin_1.default, index_1.default.createAdmin);
router.post('/addevent', (0, validate_1.default)(val.event), verifyAdmin_1.default, upload_1.upload.single('file'), index_1.default.addevent);
router.post('/login', (0, validate_1.default)(val.login), index_1.default.login);
router.get('/getimg/:id', index_1.default.getImg);
router.post('/temp', index_1.default.temp);
router.post('/verifyadmin', verifyAdmin_1.default, index_1.default.verifyAdmin);
router.post('/deleteevent', index_1.default.deleteEvent);
exports.default = router;
