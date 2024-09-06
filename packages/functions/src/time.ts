import { ApiHandler } from "sst/node/api";
import Client from 'ssh2-sftp-client'

export const handler = ApiHandler(async (evt) => {

  console.log(`Client: ${Client.name}`)
  return {
    statusCode: 200,
    body: evt.requestContext.time,
  };
});