import { APIGatewayProxyEvent } from "aws-lambda"
import { v4 } from "uuid"

export const formattedResponse = (statusCode: number, body: any) => {
  return {
    statusCode,
    body: JSON.stringify(body)
  }
}

export const getItemFromEvent = (event: APIGatewayProxyEvent) => {
  try {
    if (!event.body) {
      throw new Error('Not body found in event')
    }

    return JSON.parse(event.body)
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }

    throw new Error('Error parsing event')
  }
}

export function createRandomId() {
  return v4()
}
