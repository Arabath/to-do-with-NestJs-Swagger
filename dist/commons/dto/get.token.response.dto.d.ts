export declare class GetUrlResponseDto<T> {
    statusCode: number;
    message: string;
    timestamp: string;
    data: T;
    error: boolean;
    url?: string;
    constructor({ message, data, url }: {
        message: string;
        data: T;
        url: string;
    });
}
