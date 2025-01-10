import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { DynamoDBClient } from "@aws-sdk/client-dynamodb"
import { createRandomId, formattedResponse, getItemFromEvent } from '../../utils/utils'
import { createItem } from '../../db/operations'

const ddbClient = new DynamoDBClient()

async function handler(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
  try {
    const house = getItemFromEvent(event)
    const houseId = createRandomId()
    house.id = houseId

    await createItem({
      ddbClient,
      item: house
    })

    return formattedResponse(201, house)
  } catch (error) {
    if (error instanceof Error) {
      return formattedResponse(500, error.message)
    }

    return formattedResponse(500, 'Error trying to store house')
  }
}

export { handler }
