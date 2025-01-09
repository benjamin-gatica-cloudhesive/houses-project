import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb"
import { unmarshall } from "@aws-sdk/util-dynamodb"

export const getItems = async (ddbClient: DynamoDBClient) => {
  const result = await ddbClient.send(new ScanCommand({
    TableName: process.env.TABLE_NAME
  }))

  return result.Items?.map(item => unmarshall(item))
}
