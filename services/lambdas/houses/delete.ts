import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { DynamoDBClient } from "@aws-sdk/client-dynamodb"
import { createRandomId, formattedResponse, getBodyFromEvent, getIdFromParameters, isIdInParameters } from '../../utils/utils'
import { deleteItem } from '../../db/operations'

const ddbClient = new DynamoDBClient()

async function handler(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
  try {
    if (!isIdInParameters(event)) {
      return formattedResponse(400, 'Id not received')
    }

    const id = getIdFromParameters(event)!

    await deleteItem({
      ddbClient,
      id
    })

    return formattedResponse(204, 'House removed successfully')
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
      return formattedResponse(500, error.message)
    }

    return formattedResponse(500, 'Error trying to store house')
  }
}

export { handler }
