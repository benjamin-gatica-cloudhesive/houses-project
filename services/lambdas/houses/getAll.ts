import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { DynamoDBClient } from "@aws-sdk/client-dynamodb"
import { getItems } from '../../db/operations'
import formattedResponse from '../../utils/formattedResponse'

const ddbClient = new DynamoDBClient()

async function handler(_event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
  const houses = await getItems(ddbClient)

  return formattedResponse(200, houses)
}

export { handler }
