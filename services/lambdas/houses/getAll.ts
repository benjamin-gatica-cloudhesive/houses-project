import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { DynamoDBClient } from "@aws-sdk/client-dynamodb"
import { getItems } from '../../db/operations'
import { formattedResponse } from '../../utils/utils'

const ddbClient = new DynamoDBClient()

async function handler(_event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
  try {
    const houses = await getItems({ ddbClient })
    return formattedResponse(200, houses)
  } catch (error) {
    if (error instanceof Error) {
      return formattedResponse(500, error.message)
    }

    return formattedResponse(500, 'Error trying to retrieve houses')
  }
}

export { handler }
