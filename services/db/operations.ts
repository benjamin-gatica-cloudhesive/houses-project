import { DeleteItemCommand, DynamoDBClient, GetItemCommand, PutItemCommand, ScanCommand, UpdateItemCommand } from "@aws-sdk/client-dynamodb"
import { marshall, unmarshall } from "@aws-sdk/util-dynamodb"

interface DBOperationsArgs {
  ddbClient: DynamoDBClient
}

interface createItemArgs extends DBOperationsArgs {
  item: any
}

interface deleteItemArgs extends DBOperationsArgs {
  id: string
}

interface updateItemArgs extends DBOperationsArgs, deleteItemArgs {
  item: Record<string, any>
}

interface getItemByIdArgs extends deleteItemArgs {}

export const getItems = async (args: DBOperationsArgs) => {
  const { ddbClient } = args

  const result = await ddbClient.send(new ScanCommand({
    TableName: process.env.TABLE_NAME
  }))

  return result.Items?.map(item => unmarshall(item))
}

export const getItemById = async (args: getItemByIdArgs) => {
  const { ddbClient, id } = args

  const getItemResponse = await ddbClient.send(new GetItemCommand({
    TableName: process.env.TABLE_NAME,
    Key: {
      'id': {
        S: id
      }
    }
  }))

  if (!getItemResponse.Item) return false

  return unmarshall(getItemResponse.Item!)
}

export const createItem = async (args: createItemArgs) => {
  const { ddbClient, item } = args

  return ddbClient.send(new PutItemCommand({
    TableName: process.env.TABLE_NAME,
    Item: marshall(item)
  }))
}

export const deleteItem = async (args: deleteItemArgs) => {
  const { ddbClient, id } = args

  return ddbClient.send(new DeleteItemCommand({
    TableName: process.env.TABLE_NAME,
    Key: {
      'id': { S: id }
    }
  }))
}

export const updateItem = async (args: updateItemArgs) => {
  const { ddbClient, id, item } = args

  if (!item || Object.keys(item).length === 0) {
    throw new Error("No fields provided to update.")
  }

  const updateExpressionParts: string[] = []
  const expressionAttributeValues: Record<string, any> = {}
  const expressionAttributeNames: Record<string, string> = {}

  for (const [key, value] of Object.entries(item)) {
    const placeholderKey = `#${key}`
    const placeholderValue = `:${key}`

    updateExpressionParts.push(`${placeholderKey} = ${placeholderValue}`)
    expressionAttributeValues[placeholderValue] = { S: value.toString() }
    expressionAttributeNames[placeholderKey] = key
  }

  const updateExpression = `SET ${updateExpressionParts.join(', ')}`

  const updateResult = await ddbClient.send(new UpdateItemCommand({
    TableName: process.env.TABLE_NAME,
    Key: {
      'id': { S: id }
    },
    UpdateExpression: updateExpression,
    ExpressionAttributeValues: expressionAttributeValues,
    ExpressionAttributeNames: expressionAttributeNames,
    ReturnValues: 'UPDATED_NEW'
  }))

  return updateResult
}
