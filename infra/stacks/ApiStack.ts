import { Stack, StackProps } from "aws-cdk-lib";
import { Cors, LambdaIntegration, ResourceOptions, RestApi } from "aws-cdk-lib/aws-apigateway";
import { Construct } from "constructs";

interface ApiStackProps extends StackProps {
  getAllHousesLambdaIntegration: LambdaIntegration
  createHouseLambdaIntegration: LambdaIntegration
  loginIntegration: LambdaIntegration
}

export class ApiStack extends Stack {
  constructor(scope: Construct, id: string, props: ApiStackProps) {
    super(scope, id, props)

    const api = new RestApi(this, 'HousesApi')

    const optionsWithCors: ResourceOptions = {
      defaultCorsPreflightOptions: {
        allowOrigins: Cors.ALL_ORIGINS,
        allowMethods: Cors.ALL_METHODS
      }
    }

    const housesResource = api.root.addResource('houses', optionsWithCors)
    housesResource.addMethod('GET', props.getAllHousesLambdaIntegration)
    housesResource.addMethod('POST', props.createHouseLambdaIntegration)
    
    const loginResource = api.root.addResource('login', optionsWithCors)
    loginResource.addMethod('POST', props.loginIntegration)
  }
}
