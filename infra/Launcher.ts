import { App } from "aws-cdk-lib";
import { DataStack } from "./stacks/DataStack";
import { LambdaStack } from "./stacks/LambdaStack";
import { ApiStack } from "./stacks/ApiStack";
import { AuthStack } from "./stacks/AuthStack";

const app = new App()
const dataStack = new DataStack(app, 'HousesDataStack')
const lambdaStack = new LambdaStack(app, 'HousesLambdaStack', {
  housesTable: dataStack.housesTable
})
new ApiStack(app, 'HousesApiStack', {
  createHouseLambdaIntegration: lambdaStack.createHouseLambdaIntegration,
  getAllHousesLambdaIntegration: lambdaStack.getAllHousesLambdaIntegration
})
new AuthStack(app, 'HousesAuthStack')