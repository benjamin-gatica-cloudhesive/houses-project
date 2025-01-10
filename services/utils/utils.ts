import { CognitoIdentityProviderClient, InitiateAuthCommand, InitiateAuthCommandOutput } from "@aws-sdk/client-cognito-identity-provider"
import { APIGatewayProxyEvent } from "aws-lambda"
import { v4 } from "uuid"

export const formattedResponse = (statusCode: number, body: any) => {
  return {
    statusCode,
    body: JSON.stringify(body)
  }
}

export const getBodyFromEvent = (event: APIGatewayProxyEvent) => {
  try {
    if (!event.body) {
      throw new Error('Not body found in event')
    }

    return JSON.parse(event.body)
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }

    throw new Error('Error parsing event')
  }
}

export const createRandomId = () => {
  return v4()
}

export const validateStructureLoginCredentials = (credentials: any) => {
  if (!credentials.userName) {
    throw new Error('userName not received')
  }

  if (!credentials.password) {
    throw new Error('password not received')
  }

  if (typeof credentials.userName !== 'string') {
    throw new Error('userName must be type string')
  }

  if (typeof credentials.password !== 'string') {
    throw new Error('password must be type string')
  }
}

export const getCognitoClient = () => {
  const AWS_REGION = process.env.AWS_REGION ?? ''
  return new CognitoIdentityProviderClient({ region: AWS_REGION });
}

interface LogInArgs {
  userName: string
  password: string
  cognitoClient: CognitoIdentityProviderClient
}

export const logIn = async ({ userName, password, cognitoClient }: LogInArgs) => {
  const USER_POOL_CLIENT_ID = process.env.USER_POOL_CLIENT_ID ?? ''

  const command = new InitiateAuthCommand({
    AuthFlow: 'USER_PASSWORD_AUTH',
    ClientId: USER_POOL_CLIENT_ID,
    AuthParameters: {
      USERNAME: userName,
      PASSWORD: password
    }
  });

  return cognitoClient.send(command)
}

export const getToken = (logInResponse: InitiateAuthCommandOutput) => {
  return logInResponse.AuthenticationResult?.IdToken
}
