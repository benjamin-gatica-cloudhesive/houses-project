import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { DynamoDBClient } from "@aws-sdk/client-dynamodb"
import { createRandomId, errorResponse, formattedResponse, getBodyFromEvent } from '../../utils/utils'
import { createItem } from '../../db/operations'

const ddbClient = new DynamoDBClient()

async function handler(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
  try {
    const house = getBodyFromEvent(event)
    const houseId = createRandomId()
    house.id = houseId

    await createItem({
      ddbClient,
      item: house
    })

    return formattedResponse(201, {
      message: 'House created successfully',
      info: {
        house
      }
    })
  } catch (error) {
    return errorResponse(error, 'Error trying to store house')
  }
}

export { handler }
