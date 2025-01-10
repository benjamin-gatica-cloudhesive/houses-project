import { getToken, logIn } from "../../utils/cognitoUtils";
import { formattedResponse, getBodyFromEvent, validateStructureLoginCredentials } from "../../utils/utils";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

async function handler(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
  try {
    const credentials = getBodyFromEvent(event)

    validateStructureLoginCredentials(credentials)

    const { userName, password } = credentials

    const logInResponse = await logIn({ userName, password })

    const token = getToken(logInResponse)

    return formattedResponse(200, { token })
  } catch (error) {
    if (error instanceof Error) {
      return formattedResponse(500, error.message)
    }

    return formattedResponse(500, 'Error trying to make logIn')
  }
}

export { handler }
