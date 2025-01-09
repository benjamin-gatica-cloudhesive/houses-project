import { App } from "aws-cdk-lib";
import { DataStack } from "./stacks/DataStack";

const projectName = 'Houses'

const app = new App()
new DataStack(app, `${projectName}-DataStack`)
