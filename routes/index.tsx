/** @jsx h */
import { h } from "preact";
import { MiddlewareState } from '../types.ts';
import { HandlerContext, Handlers, PageProps } from '$fresh/server.ts';

type RouteData = { foo: string, bar: number };
export const handler: Handlers = {
  GET: async (request: Request, ctx: HandlerContext<RouteData, MiddlewareState>) => {
    const resp = await ctx.render({...(ctx.state as MiddlewareState)});
    resp.headers.set('X-Custom-Header', 'Hello');
    return resp;
  },
};

export default function Home(props: PageProps<RouteData>) {
  return (
    <div>
      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <pre>{JSON.stringify(props, null, 1)}</pre>
      
    </div>
  );
}
