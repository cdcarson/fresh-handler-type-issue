import { MiddlewareHandlerContext } from '$fresh/server.ts';
import { MyMiddlewareState } from '../types.ts';
export async function handler(
  _request: Request,
  context: MiddlewareHandlerContext<MyMiddlewareState>,
) {
  context.state.foo = 'baz';
  context.state.bar = 1;
  const resp = await context.next();
  return resp;
}
