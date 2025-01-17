"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUrlResponseDto = void 0;
class GetUrlResponseDto {
    constructor({ message, data, url }) {
        this.error = false;
        this.timestamp = new Date().toISOString();
        this.message = message;
        this.data = data;
        this.url = url;
    }
}
exports.GetUrlResponseDto = GetUrlResponseDto;
//# sourceMappingURL=get.token.response.dto.js.map