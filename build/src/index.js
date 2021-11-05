"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
//Settings
app.set('port', 3000);
//Starting the Server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
