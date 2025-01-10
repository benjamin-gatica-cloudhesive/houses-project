import { App } from "aws-cdk-lib";
import { DataStack } from "./stacks/DataStack";
import { LambdaStack } from "./stacks/LambdaStack";
import { ApiStack } from "./stacks/ApiStack";
import { AuthStack } from "./stacks/AuthStack";

const app = new App()

const dataStack = new DataStack(app, 'HousesDataStack')

const authStack = new AuthStack(app, 'HousesAuthStack')

const lambdaStack = new LambdaStack(app, 'HousesLambdaStack', {
  housesTable: dataStack.housesTable,
  userPoolClientId: authStack.userPoolClient.userPoolClientId,
  userPoolId: authStack.userPool.userPoolId
})

new ApiStack(app, 'HousesApiStack', {
  createHouseLambdaIntegration: lambdaStack.createHouseLambdaIntegration,
  getAllHousesLambdaIntegration: lambdaStack.getAllHousesLambdaIntegration,
  loginIntegration: lambdaStack.loginIntegration,
  userPool: authStack.userPool
})
