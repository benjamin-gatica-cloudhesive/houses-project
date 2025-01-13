import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { DynamoDBClient } from "@aws-sdk/client-dynamodb"
import { formattedResponse, getIdFromParameters, isIdInParameters } from '../../utils/utils'
import { getItemById } from '../../db/operations'

const ddbClient = new DynamoDBClient()

async function handler(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
  try {
    if (!isIdInParameters(event)) {
      return formattedResponse(400, 'Id not received')
    }

    const id = getIdFromParameters(event)!

    const house = await getItemById({
      ddbClient,
      id
    })

    if (!house) {
      return formattedResponse(404, 'House not found')
    }

    return formattedResponse(200, {
      message: 'House found successfully',
      house
    })
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
      return formattedResponse(500, error.message)
    }

    return formattedResponse(500, 'Error trying to retrieve house')
  }
}

export { handler }
