import { APIGatewayProxyEvent } from "aws-lambda"
import { handler } from "./update"
import { updateItem } from "../../db/operations"

jest.mock('../../db/operations', () => ({
  updateItem: jest.fn()
}))

const event = {
  pathParameters: {
    id: '3918a00f-52c2-44a8-9e8d-6162a326726f'
  },
  body: JSON.stringify({
    address: 'vicuña mackenna 1234',
    city: 'santiago',
    country: 'chile'
  })
}

describe('update lambda function tests', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should say the ID was not received', async () => {
    const result = await handler({} as APIGatewayProxyEvent)
    
    expect(result.statusCode).toBe(400)
    expect(JSON.parse(result.body).message).toBe('Id not received')
  })

  it('should say the house was updated successfully', async () => {
    const result = await handler(event as unknown as APIGatewayProxyEvent)
    
    expect(result.statusCode).toBe(200)
    expect(JSON.parse(result.body).message).toBe('Houses updated successfully')
  })

  it('should return an error message', async () => {
    (updateItem as jest.Mock).mockRejectedValue(new Error('DynamoDB error'))

    const result = await handler(event as unknown as APIGatewayProxyEvent)

    expect(result.statusCode).toBe(500)
    expect(JSON.parse(result.body).message).toBe('DynamoDB error')
  })
})