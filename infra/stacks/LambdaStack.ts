import { Stack, StackProps } from "aws-cdk-lib";
import { LambdaIntegration } from "aws-cdk-lib/aws-apigateway";
import { ITable } from "aws-cdk-lib/aws-dynamodb";
import { PolicyStatement } from "aws-cdk-lib/aws-iam";
import { Runtime } from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";
import { join } from "path";

interface LambdaStackProps extends StackProps {
  housesTable: ITable,
  userPoolId: string,
  userPoolClientId: string
}

export class LambdaStack extends Stack {
  public readonly getAllHousesLambdaIntegration: LambdaIntegration
  public readonly createHouseLambdaIntegration: LambdaIntegration
  public readonly deleteHouseLambdaIntegration: LambdaIntegration
  public readonly updateHouseLambdaIntegration: LambdaIntegration
  public readonly loginIntegration: LambdaIntegration

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

    this.getAllHousesLambdaIntegration = new LambdaIntegration(getAllHouses)

    const createHouse = new NodejsFunction(this, 'CreateHouse', {
      runtime: Runtime.NODEJS_22_X,
      handler: 'handler',
      entry: (join(__dirname, '..','..', 'services', 'lambdas', 'houses', 'create.ts')),
      environment: {
        TABLE_NAME: props.housesTable.tableName
      },
    })

    createHouse.addToRolePolicy(new PolicyStatement({
      resources: [props.housesTable.tableArn],
      actions: [
        'dynamodb:PutItem'
      ]
    }))

    this.createHouseLambdaIntegration = new LambdaIntegration(createHouse)

    const deleteHouse = new NodejsFunction(this, 'DeleteHouse', {
      runtime: Runtime.NODEJS_22_X,
      handler: 'handler',
      entry: (join(__dirname, '..','..', 'services', 'lambdas', 'houses', 'delete.ts')),
      environment: {
        TABLE_NAME: props.housesTable.tableName
      },
    })

    deleteHouse.addToRolePolicy(new PolicyStatement({
      resources: [props.housesTable.tableArn],
      actions: [
        'dynamodb:DeleteItem'
      ]
    }))

    this.deleteHouseLambdaIntegration = new LambdaIntegration(deleteHouse)

    const updateHouse = new NodejsFunction(this, 'UpdateHouse', {
      runtime: Runtime.NODEJS_22_X,
      handler: 'handler',
      entry: (join(__dirname, '..','..', 'services', 'lambdas', 'houses', 'update.ts')),
      environment: {
        TABLE_NAME: props.housesTable.tableName
      },
    })

    updateHouse.addToRolePolicy(new PolicyStatement({
      resources: [props.housesTable.tableArn],
      actions: [
        'dynamodb:UpdateItem'
      ]
    }))

    this.updateHouseLambdaIntegration = new LambdaIntegration(updateHouse)

    const login = new NodejsFunction(this, 'Login', {
      runtime: Runtime.NODEJS_22_X,
      handler: 'handler',
      entry: (join(__dirname, '..','..', 'services', 'lambdas', 'auth', 'handler.ts')),
      environment: {
        USER_POOL_CLIENT_ID: props.userPoolClientId
      },
    })

    login.addToRolePolicy(new PolicyStatement({
      actions: [
        'cognito-idp:AdminInitiateAuth'
      ],
      resources: [
        `arn:aws:cognito-idp:${this.region}:${this.account}:userpool/${props.userPoolId}`
      ],
    }));

    this.loginIntegration = new LambdaIntegration(login)
  }
}