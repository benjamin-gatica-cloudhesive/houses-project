import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { formattedResponse, getItemFromEvent, validateStructureLoginCredentials } from '../../utils/utils'
import { AuthService } from './AuthService'

async function handler(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
  try {
    const credentials = getItemFromEvent(event)

    validateStructureLoginCredentials(credentials)

    const { userName, password } = credentials

    return formattedResponse(200, { userName })
  } catch (error) {
    if (error instanceof Error) {
      return formattedResponse(500, error.message)
    }

    return formattedResponse(500, 'Error trying to retrieve houses')
  }
}

export { handler }
