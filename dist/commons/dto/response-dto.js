"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseDto = void 0;
class ResponseDto {
    constructor({ message, data }) {
        this.error = false;
        this.timestamp = new Date().toISOString();
        this.message = message;
        this.data = data;
    }
}
exports.ResponseDto = ResponseDto;
//# sourceMappingURL=response-dto.js.map