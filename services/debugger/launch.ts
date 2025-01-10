import { handler as getAll } from "../lambdas/houses/getAll";
import { handler as createProduct } from "../lambdas/houses/create";

// getAll({} as any)
createProduct({
  body: JSON.stringify({
    address: 'vicuña mackenna 1234',
    city: 'santiago',
    country: 'chile'
  })
} as any)
