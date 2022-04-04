"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const schema_1 = __importDefault(require("../../joiSchemas/schema"));
const validate_1 = __importDefault(require("../../middlewares/validate"));
const verify_1 = __importDefault(require("../../middlewares/verify"));
const index_1 = __importDefault(require("./index"));
const admin_1 = __importDefault(require("../admin"));
const verifyAdmin_1 = __importDefault(require("../../middlewares/verifyAdmin"));
const router = (0, express_1.Router)();
const val = new schema_1.default();
router.post('/addevent', (0, validate_1.default)(val.changeEvent), verify_1.default, index_1.default.addEvent);
router.post('/isAttended', verifyAdmin_1.default, index_1.default.changeIsAttended);
router.post('/isCancelled', verify_1.default, index_1.default.changeIsCancelled);
router.post('/ongoingevents', index_1.default.getOnGoingEvents);
router.post('/pastevents', index_1.default.getPastEvents);
router.post('/upcomingevents', index_1.default.getUpcomingEvents);
router.post('/getevent', index_1.default.getEventDetails);
router.post('/signup', (0, validate_1.default)(val.signup), index_1.default.signUp);
router.post('/sendmail', index_1.default.sendMail);
router.post('/changepassword', index_1.default.changepassword);
router.post('/verifyotp', index_1.default.verifyotp);
router.post('/login', (0, validate_1.default)(val.login), index_1.default.login);
router.post('/verifyuser', verify_1.default, admin_1.default.verifyAdmin);
router.post('/userdetails', verify_1.default, index_1.default.getUserDetails);
exports.default = router;
