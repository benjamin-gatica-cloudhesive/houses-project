import { fetchAuthSession, signIn, SignInOutput } from "@aws-amplify/auth"
import { Amplify } from "aws-amplify"

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: process.env.USER_POOL_ID ?? '',
      userPoolClientId: process.env.USER_POOL_CLIENT_ID ?? '',
    }
  }
})

export class AuthService {
  public async login(userName: string, password: string) {
    try {
      const signInOutput: SignInOutput = await signIn({
        username: userName,
        password: password,
        options: {
          authFlowType: 'USER_PASSWORD_AUTH'
        }
      })

      return signInOutput
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message)
      }

      throw new Error('Error trying to log in')
    }
  }

  /** 
  * call only after login
  */
  public async getIdToken() {
    const authSesion = await fetchAuthSession()
    return authSesion.tokens?.idToken?.toString()
  }
}
