import { DeleteItemCommand, DynamoDBClient, PutItemCommand, ScanCommand } from "@aws-sdk/client-dynamodb"
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

export const getItems = async (args: DBOperationsArgs) => {
  const { ddbClient } = args

  const result = await ddbClient.send(new ScanCommand({
    TableName: process.env.TABLE_NAME
  }))

  return result.Items?.map(item => unmarshall(item))
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
