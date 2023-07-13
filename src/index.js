"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KopeechkaClass = void 0;
var axios_1 = require("axios");
var KopeechkaClass = /** @class */ (function () {
    function KopeechkaClass(apiKey, apiVersion) {
        this.api_key = apiKey;
        this.api_version = apiVersion;
    }
    //get Balance 
    KopeechkaClass.prototype.getBalance = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get("http://api.kopeechka.store/user-balance?token=".concat(this.api_key, "&type=&TYPE&api=").concat(this.api_version))];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                    case 2:
                        error_1 = _a.sent();
                        throw new Error('Data retrieval failed');
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // getEmailRequest
    KopeechkaClass.prototype.getEmailRequest = function (obj) {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get("http://api.kopeechka.store/mailbox-get-email?site=".concat(obj.site, "&mail_type=").concat(obj.mailType, "&regex=&token=").concat(this.api_key, "&api=").concat(this.api_version))];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                    case 2:
                        error_2 = _a.sent();
                        throw new Error("Connection Failed or error occurded : ".concat(error_2));
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    KopeechkaClass.prototype.recieveEmail = function (objj) {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get("http://api.kopeechka.store/mailbox-get-message?full=1&id=".concat(objj.taskID, "&token=").concat(this.api_key, "&type=json&api=").concat(this.api_version))];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                    case 2:
                        error_3 = _a.sent();
                        throw new Error("Connection Failed or error occurded : ".concat(error_3));
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return KopeechkaClass;
}());
exports.KopeechkaClass = KopeechkaClass;
/*
                              http://api.kopeechka.store/mailbox-get-email?site=${site}&mail_type=$MAIL_TYPE&sender=$SENDER&regex=&token=${this.api_key}&api=${this.api_version}
*/
/*
  http://api.kopeechka.store/mailbox-get-message?full=1&id=${objj.taskID}&token=${this.api_key}&type=json&api=${this.api_version}
*/ 
