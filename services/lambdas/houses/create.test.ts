import { APIGatewayProxyEvent } from "aws-lambda"
import { createItem } from "../../db/operations"
import { handler } from "./create"

jest.mock('../../db/operations', () => ({
  createItem: jest.fn()
}))

const event = {
  body: JSON.stringify({
    address: 'vicuña mackenna 1234',
    city: 'santiago',
    country: 'chile'
  })
}

describe('create lambda function tests', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should create a house', async () => {
    (createItem as jest.Mock).mockReturnValueOnce({})

    const result = await handler(event as APIGatewayProxyEvent)

    expect(result.statusCode).toBe(201)
    expect(JSON.parse(result.body)).toMatchObject({ message: 'House created successfully' })
  })

  it('should return an error message', async () => {
    const result = await handler({} as APIGatewayProxyEvent)

    expect(result.statusCode).toBe(500)
    expect(result.body).not.toBeNull()
  })
})