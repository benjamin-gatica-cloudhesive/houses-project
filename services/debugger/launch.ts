import { handler as getAll } from "../lambdas/houses/getAll";
import { handler as createProduct } from "../lambdas/houses/create";
import { handler as login } from "../lambdas/auth/handler";

// getAll({} as any)

// createProduct({
//   body: JSON.stringify({
//     address: 'vicuña mackenna 1234',
//     city: 'santiago',
//     country: 'chile'
//   })
// } as any)

login({
  body: JSON.stringify({
    userName: 'pedrito',
    password: 'Qwerty1234.'
  })
} as any)