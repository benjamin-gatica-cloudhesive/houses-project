import { APIGatewayProxyEvent } from "aws-lambda"
import { handler } from "./get"
import { getItemById } from "../../db/operations"


jest.mock('../../db/operations', () => ({
  getItemById: jest.fn()
}))

const event = {
  pathParameters: {
    id: '3918a00f-52c2-44a8-9e8d-6162a326726f'
  }
}

const house = {
  city: "roma",
  address: "avenida roma",
  id: "b73a44bf-0662-4f97-b99e-f3b558b87d65",
  country: "italia"
}

describe('get lambda function tests', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should say that the ID was not received', async () => {
    const result = await handler({} as APIGatewayProxyEvent)

    expect(result.statusCode).toBe(400)
    expect(JSON.parse(result.body).message).toBe('Id not received')
  })

  it('should say the house was not found', async () => {
    (getItemById as jest.Mock).mockReturnValueOnce(false)

    const result = await handler(event as unknown as APIGatewayProxyEvent)

    expect(result.statusCode).toBe(404)
    expect(JSON.parse(result.body).message).toBe('House not found')
  })

  it('should say the house was found successfully', async () => {
    (getItemById as jest.Mock).mockReturnValueOnce(house)

    const result = await handler(event as unknown as APIGatewayProxyEvent)

    expect(result.statusCode).toBe(200)
    expect(JSON.parse(result.body).message).toBe('House found successfully')
    expect(JSON.parse(result.body).info).toMatchObject(house)
  })

  it('should return an error message', async () => {
    (getItemById as jest.Mock).mockRejectedValue(new Error('DynamoDB error'))

    const result = await handler(event as unknown as APIGatewayProxyEvent)

    expect(result.statusCode).toBe(500)
    expect(JSON.parse(result.body).message).toBe('DynamoDB error')
  })
})