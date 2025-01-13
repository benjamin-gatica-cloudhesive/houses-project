import { Stack, StackProps } from "aws-cdk-lib";
import { AuthorizationType, CognitoUserPoolsAuthorizer, Cors, LambdaIntegration, MethodOptions, ResourceOptions, RestApi } from "aws-cdk-lib/aws-apigateway";
import { UserPool } from "aws-cdk-lib/aws-cognito";
import { Construct } from "constructs";

interface ApiStackProps extends StackProps {
  getAllHousesLambdaIntegration: LambdaIntegration
  getHouseLambdaIntegration: LambdaIntegration
  createHouseLambdaIntegration: LambdaIntegration
  deleteHouseLambdaIntegration: LambdaIntegration
  updateHouseLambdaIntegration: LambdaIntegration
  loginIntegration: LambdaIntegration
  userPool: UserPool
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

    const authorizer = new CognitoUserPoolsAuthorizer(this, 'HousesApiAuthorizer', {
      cognitoUserPools: [props.userPool],
      identitySource: 'method.request.header.Authorization'
    })
    authorizer._attachToApi(api)

    const optionsWithAuth: MethodOptions = {
      authorizationType: AuthorizationType.COGNITO,
      authorizer: {
        authorizerId: authorizer.authorizerId
      }
    }

    const housesResource = api.root.addResource('houses', optionsWithCors)
    housesResource.addMethod('GET', props.getAllHousesLambdaIntegration, optionsWithAuth)
    housesResource.addMethod('POST', props.createHouseLambdaIntegration, optionsWithAuth)

    const housesByIdResource = housesResource.addResource('{id}', optionsWithCors)
    housesByIdResource.addMethod('DELETE', props.deleteHouseLambdaIntegration, optionsWithAuth)
    housesByIdResource.addMethod('PUT', props.updateHouseLambdaIntegration, optionsWithAuth)
    housesByIdResource.addMethod('GET', props.getHouseLambdaIntegration, optionsWithAuth)
    
    const loginResource = api.root.addResource('login', optionsWithCors)
    loginResource.addMethod('POST', props.loginIntegration)
  }
}
