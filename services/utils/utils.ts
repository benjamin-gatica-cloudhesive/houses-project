import { APIGatewayProxyEvent } from "aws-lambda"
import { v4 } from "uuid"

export const formattedResponse = (statusCode: number, body: any) => {
  return {
    statusCode,
    body: JSON.stringify(body)
  }
}

export const getBodyFromEvent = (event: APIGatewayProxyEvent) => {
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

export const createRandomId = () => {
  return v4()
}

export const validateStructureLoginCredentials = (credentials: any) => {
  if (!credentials.userName) {
    throw new Error('userName not received')
  }

  if (!credentials.password) {
    throw new Error('password not received')
  }

  if (typeof credentials.userName !== 'string') {
    throw new Error('userName must be type string')
  }

  if (typeof credentials.password !== 'string') {
    throw new Error('password must be type string')
  }
}

export const isIdInParameters = (event: APIGatewayProxyEvent) => {
  if (!event.queryStringParameters) {
    return false
  }

  if (!event.queryStringParameters?.id) {
    return false
  }

  return true
}

export const getIdFromParameters = (event: APIGatewayProxyEvent) => {
  return event.queryStringParameters?.id
}