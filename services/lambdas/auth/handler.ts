import { formattedResponse, getCognitoClient, getBodyFromEvent, getToken, logIn, validateStructureLoginCredentials } from "../../utils/utils";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

async function handler(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
  try {
    const credentials = getBodyFromEvent(event)

    validateStructureLoginCredentials(credentials)

    const { userName, password } = credentials

    const cognitoClient = getCognitoClient()

    const logInResponse = await logIn({
      userName,
      password,
      cognitoClient
    })

    const token = getToken(logInResponse)

    return formattedResponse(200, { token })
  } catch (error) {
    if (error instanceof Error) {
      return formattedResponse(500, error.message)
    }

    return formattedResponse(500, 'Error trying to retrieve houses')
  }
}

export { handler }
