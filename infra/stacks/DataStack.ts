import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { getSuffixFromStack } from "../utils/utils";
import { AttributeType, ITable, Table } from "aws-cdk-lib/aws-dynamodb";

export class DataStack extends Stack {
  public readonly housesTable: ITable

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)

    const suffix = getSuffixFromStack(this)
    
    this.housesTable = new Table(this, 'HousesTable', {
      partitionKey: {
        name: 'id',
        type: AttributeType.STRING
      },
      tableName: `HousesTable-${suffix}`
    })
  }
}