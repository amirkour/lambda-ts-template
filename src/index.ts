import { Context, APIGatewayProxyResult, APIGatewayEvent } from "aws-lambda";

export const handler = async (
  event: APIGatewayEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  console.log(`Event: ${JSON.stringify(event)}`);
  console.log(`Context: ${JSON.stringify(context)}`);

  const response = { statusCode: 200, body: "" };
  let requestBody: any = null;

  try {
    // TODO - handler logic here.
    // WARNING: the request MIGHT look different depending on how you invoke this lambda
    // (eg: from api gateway, or straight-up - remember that the types are just hints
    // for typescript, and in the end, it's all just javascript running in aws.)

    response.statusCode = 200;
  } catch (e) {
    // TODO - update response appropriately
    response.statusCode = 500;
  }

  return response;
};
