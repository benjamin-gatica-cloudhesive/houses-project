import { APIGatewayProxyEvent } from "aws-lambda"
import { handler } from "./delete"
import { deleteItem } from "../../db/operations"

jest.mock('../../db/operations', () => ({
  deleteItem: jest.fn()
}))

const event = {
  pathParameters: {
    id: '3918a00f-52c2-44a8-9e8d-6162a326726f'
  }
}

describe('delete lambda function tests', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should say that the ID was not received', async () => {
    const result = await handler({} as APIGatewayProxyEvent)

    expect(result.statusCode).toBe(400)
    expect(JSON.parse(result.body).message).toBe('Id not received')
  })

  it('should remove the house', async () => {
    (deleteItem as jest.Mock).mockReturnValueOnce({})

    const result = await handler(event as unknown as APIGatewayProxyEvent)
    
    expect(result.statusCode).toBe(200)
    expect(JSON.parse(result.body).message).toBe('House removed successfully')
  })

  it('should return an error message', async () => {
    (deleteItem as jest.Mock).mockRejectedValue(new Error('DynamoDB error'))

    const result = await handler(event as unknown as APIGatewayProxyEvent)

    expect(result.statusCode).toBe(500)
    expect(JSON.parse(result.body).message).toBe('DynamoDB error')
  })
})