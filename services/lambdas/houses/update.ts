import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { DynamoDBClient } from "@aws-sdk/client-dynamodb"
import { formattedResponse, getBodyFromEvent, getIdFromParameters, isIdInParameters } from '../../utils/utils'
import { updateItem } from '../../db/operations'

const ddbClient = new DynamoDBClient()

async function handler(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
  try {
    if (!isIdInParameters(event)) {
      return formattedResponse(400, 'Id not received')
    }

    const id = getIdFromParameters(event)!

    const house = getBodyFromEvent(event)

    await updateItem({
      ddbClient,
      id,
      item: house
    })

    return formattedResponse(202, {
      message: 'House updated successfully',
      updatedHouse: {
        id,
        ...house
      }
    })
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
      return formattedResponse(500, error.message)
    }

    return formattedResponse(500, 'Error trying to update house')
  }
}

export { handler }
