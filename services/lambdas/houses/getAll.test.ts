import { APIGatewayProxyEvent } from "aws-lambda"
import { handler } from "./getAll"
import { getItems } from "../../db/operations"

jest.mock('../../db/operations', () => ({
  getItems: jest.fn()
}))

const houses = [
  {
    city: "talca",
    address: "avenida apoquindo",
    id: "7c2a0d14-71fa-4ae6-bc25-3476add30a30",
    country: "chile"
  },
  {
    city: "iquique",
    address: "avenida del mar",
    id: "93fa388f-8e64-4baf-8c21-8bae31c75e5f",
    country: "chile"
  },
  {
    city: "roma",
    address: "avenida roma",
    id: "b73a44bf-0662-4f97-b99e-f3b558b87d65",
    country: "italia"
  }
]

describe('getAll lambda function tests', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should return all houses', async () => {
    (getItems as jest.Mock).mockReturnValueOnce(houses)

    const result = await handler({} as APIGatewayProxyEvent)

    expect(result.statusCode).toBe(200)
    expect(JSON.parse(result.body).message).toBe('Houses found successfully')
    expect(JSON.parse(result.body).info).toMatchObject(houses)
  })

  it('should return an error message', async () => {
    (getItems as jest.Mock).mockRejectedValue(new Error('DynamoDB error'))

    const result = await handler({} as APIGatewayProxyEvent)

    expect(result.statusCode).toBe(500)
    expect(JSON.parse(result.body).message).toBe('DynamoDB error')
  })
})