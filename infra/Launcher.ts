import { App } from "aws-cdk-lib";
import { DataStack } from "./stacks/DataStack";
import { LambdaStack } from "./stacks/LambdaStack";

const projectName = 'Houses'

const app = new App()
const dataStack = new DataStack(app, 'HousesDataStack')
new LambdaStack(app, 'HousesLambdaStack', {
  housesTable: dataStack.housesTable
})
