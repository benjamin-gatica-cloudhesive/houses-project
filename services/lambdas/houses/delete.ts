import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { DynamoDBClient } from "@aws-sdk/client-dynamodb"
import { errorResponse, formattedResponse, getIdFromParameters, isIdInParameters } from '../../utils/utils'
import { deleteItem } from '../../db/operations'

const ddbClient = new DynamoDBClient()

async function handler(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
  try {
    if (!isIdInParameters(event)) {
      return formattedResponse(400, { message: 'Id not received' })
    }

    const id = getIdFromParameters(event)!

    await deleteItem({
      ddbClient,
      id
    })

    return formattedResponse(200, {
      message: 'House removed successfully',
    })
  } catch (error) {
    return errorResponse(error, 'Error trying to delete house')
  }
}

export { handler }
