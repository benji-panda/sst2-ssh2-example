import { StackContext, NextjsSite, Api, Cron,} from "sst/constructs";

export function Default({ stack }: StackContext) {

  const api = new Api(stack, "api", {
    routes: {
      "GET /": {
        function: {
          handler: "packages/functions/src/time.handler",
        }
      }
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

