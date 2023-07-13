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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KopeechkaClass = void 0;
const axios_1 = __importDefault(require("axios"));
class KopeechkaClass {
    constructor(apiKey, apiVersion) {
        this.api_key = apiKey;
        this.api_version = apiVersion;
    }
    //get Balance 
    getBalance() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default.get(`http://api.kopeechka.store/user-balance?token=${this.api_key}&type=&TYPE&api=${this.api_version}`);
                return response.data;
            }
            catch (error) {
                throw new Error('Data retrieval failed');
            }
        });
    }
    // getEmailRequest
    getEmailRequest(obj) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default.get(`http://api.kopeechka.store/mailbox-get-email?site=${obj.site}&mail_type=${obj.mailType}&regex=&token=${this.api_key}&api=${this.api_version}`);
                return response.data;
            }
            catch (error) {
                throw new Error(`Connection Failed or error occurded : ${error}`);
            }
        });
    }
    recieveEmail(objj) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default.get(`http://api.kopeechka.store/mailbox-get-message?full=1&id=${objj.taskID}&token=${this.api_key}&type=json&api=${this.api_version}`);
                return response.data;
            }
            catch (error) {
                throw new Error(`Connection Failed or error occurded : ${error}`);
            }
        });
    }
}
exports.KopeechkaClass = KopeechkaClass;
