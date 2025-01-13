import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { DynamoDBClient } from "@aws-sdk/client-dynamodb"
import { errorResponse, formattedResponse, getBodyFromEvent, getIdFromParameters, isIdInParameters } from '../../utils/utils'
import { updateItem } from '../../db/operations'

const ddbClient = new DynamoDBClient()

async function handler(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
  try {
    if (!isIdInParameters(event)) {
      return formattedResponse(400, { message: 'Id not received' })
    }

    const id = getIdFromParameters(event)!

    const house = getBodyFromEvent(event)

    await updateItem({
      ddbClient,
      id,
      item: house
    })

    return formattedResponse(200, {
      message: 'Houses updated successfully',
      info: house
    })
  } catch (error) {
    return errorResponse(error, 'Error trying to update house')
  }
}

export { handler }
