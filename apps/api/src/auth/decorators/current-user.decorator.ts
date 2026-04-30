import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CurrentUser = createParamDecorator(
  (
    _data: unknown,
    ctx: ExecutionContext,
  ): { sub: string; email: string; role: string } => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);