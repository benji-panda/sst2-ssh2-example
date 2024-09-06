import { StackContext, NextjsSite, Api,} from "sst/constructs";

export function Default({ stack }: StackContext) {

  const api = new Api(stack, "api", {
    routes: {
      "GET /": "packages/functions/src/time.handler",
    },
  });

  const site = new NextjsSite(stack, "site", {
    path: "packages/web",
  });

  stack.addOutputs({
    SiteUrl: site.url,
    ApiUrl: api.url,
  });
}

