export declare class ResponseDto<T> {
    statusCode: number;
    message: string;
    timestamp: string;
    data: T;
    error: boolean;
    constructor({ message, data }: {
        message: string;
        data: T;
    });
}
