import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { DynamoDBClient } from "@aws-sdk/client-dynamodb"
import { getItems } from '../../db/operations'
import { errorResponse, formattedResponse } from '../../utils/utils'

const ddbClient = new DynamoDBClient()

async function handler(_event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
  try {
    const houses = await getItems({ ddbClient })
    
    return formattedResponse(200, {
      message: 'Houses found successfully',
      info: houses
    })

  } catch (error) {
    return errorResponse(error, 'Error trying to retrieve houses')
  }
}

export { handler }
