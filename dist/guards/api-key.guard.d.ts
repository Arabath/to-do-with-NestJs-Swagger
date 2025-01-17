import { CanActivate, ExecutionContext } from "@nestjs/common";
export declare class ApiKeyGuard implements CanActivate {
    private readonly expectedApiKey;
    canActivate(context: ExecutionContext): boolean;
}
