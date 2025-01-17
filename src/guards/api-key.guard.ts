import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";


@Injectable()
export class ApiKeyGuard implements CanActivate {
    private readonly expectedApiKey: 'Jazzband123'

    canActivate(context: ExecutionContext): boolean  {
        const request = context.switchToHttp().getRequest();
        const apiKey = request.header('x-api-key');

        return apiKey === this.expectedApiKey;
     }    
}