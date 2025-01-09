import { Stack, StackProps } from "aws-cdk-lib";
import { ITable } from "aws-cdk-lib/aws-dynamodb";
import { PolicyStatement } from "aws-cdk-lib/aws-iam";
import { Runtime } from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";
import { join } from "path";

interface LambdaStackProps extends StackProps {
  housesTable: ITable
}

export class LambdaStack extends Stack {
  constructor(scope: Construct, id: string, props: LambdaStackProps) {
    super(scope, id, props)

    const getAllHouses = new NodejsFunction(this, 'GetAllHouses', {
      runtime: Runtime.NODEJS_22_X,
      handler: 'handler',
      entry: (join(__dirname, '..','..', 'services', 'lambdas', 'houses', 'getAll.ts')),
      environment: {
        TABLE_NAME: props.housesTable.tableName
      },
    })

    getAllHouses.addToRolePolicy(new PolicyStatement({
      resources: [props.housesTable.tableArn],
      actions: [
        'dynamodb:Scan'
      ]
    }))
  }
}