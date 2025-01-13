import { handler as getAll } from "../lambdas/houses/getAll";
import { handler as createProduct } from "../lambdas/houses/create";
import { handler as deleteHouse } from "../lambdas/houses/delete";
import { handler as updateHouse } from "../lambdas/houses/update";
import { handler as getHouseById } from "../lambdas/houses/get";
import { handler as login } from "../lambdas/auth/handler";

getAll({} as any)

// createProduct({
//   body: JSON.stringify({
//     address: 'vicuña mackenna 1234',
//     city: 'santiago',
//     country: 'chile'
//   })
// } as any)

// login({
//   body: JSON.stringify({
//     userName: 'pedrito',
//     password: 'Qwerty1234.'
//   })
// } as any)

// deleteHouse({
//   queryStringParameters: {
//     id: '3918a00f-52c2-44a8-9e8d-6162a326726f'
//   }
// } as any)
// updateHouse({
//   queryStringParameters: {
//     id: '3918a00f-52c2-44a8-9e8d-6162a326726f'
//     // id: 'b73a44bf-0662-4f97-b99e-f3b558b87d65'
//   },
//   body: JSON.stringify({
//     address: 'avenida roma',
//     city: 'roma',
//     country: 'italia'
//   })
// } as any)
// getHouseById({
//   pathParameters: {
//     id: '7c2a0d14-71fa-4ae6-bc25-3476add30a30?'
//   }
// } as any)