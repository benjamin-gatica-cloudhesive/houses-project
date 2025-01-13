# Houses REST API

This file provides examples of how to make requests to the API using `cURL`. Make sure to replace the authorization token with a valid one before executing the requests

## Endpoints

Base URL: `https://w9paej22ka.execute-api.us-east-1.amazonaws.com/prod/`

### Login
#### 1. Get token
Endpoint: `/login`  
Method: `POST`

```bash
curl -X POST "https://w9paej22ka.execute-api.us-east-1.amazonaws.com/prod/login" \
-H "Content-Type: application/json" \
-d '{
  "userName": "pedrito",
  "password": "Qwerty1234."
}'
```
Response:

```bash
{"AccessToken":"eyJraWQiOiJ6NTZoaE5LM2pLUTE5c0FGd0lnaGk4a1hyN2NcLzE5aE5ZUjdvUUxMNFp3WT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIzNGQ4NDQzOC0xMGQxLTcwYTUtOWVkMy1hY2I2MDk5NWVhNGEiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9pSEVaek15aWIiLCJjbGllbnRfaWQiOiIxOG5nOXU0M2dlMGtiNHJua2lnaGpyZWF0ZCIsIm9yaWdpbl9qdGkiOiJhYjBlZTkxOS1hN2M0LTRmYmEtOGViNC1hZTFlY2Q1ZmZlODciLCJldmVudF9pZCI6IjNiMmEwMDczLWQ4MmUtNDU5Ni1iN2Q3LWNmYzBhNGI1MjlkOCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE3MzY3ODI4MTIsImV4cCI6MTczNjc4NjQxMiwiaWF0IjoxNzM2NzgyODEyLCJqdGkiOiJkNjllYTA0Mi0yYTc5LTRhZjMtOTg4NC1mZGJkZjNhMjZmOTEiLCJ1c2VybmFtZSI6InBlZHJpdG8ifQ.G6R8Nu_JcOvY2pxJRUzXh39g9ooM-fsPtjLlC3HWhP2l2INUCOZAAej_le_IxdBkI1vXRRH50NDzig3-VekDn3myUs5kx-EWFthu_U4jxAH0eE9TKeRQpn9FeI5lbo5dvhXLvtykShbaz13Z-vW4KJ8gzFq7Tg7QGeEe7KkXNEAVOaK5lP1K_UgO6Nypvjz9ma_f9bxej0HqAMm1Ng7uQaMX7Ahvt7TAuDLbL2wWOnWjXj9hFmayMaJ3340VwOVvDeO3gHsL6Tvui2SCPJFhY3in8kjC_JUfjwuqLKVa23Ydfj-4-XI3ufKuu2XlRY5WDWhKg2igetKzQGkLRYf2lg","ExpiresIn":3600,"IdToken":"eyJraWQiOiJhVHRYVkRCWGJlSzlcL1dseVwvSERZMnBwbnJic1N2NW43WVF1UHVmM0pHa2M9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiIzNGQ4NDQzOC0xMGQxLTcwYTUtOWVkMy1hY2I2MDk5NWVhNGEiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9pSEVaek15aWIiLCJjb2duaXRvOnVzZXJuYW1lIjoicGVkcml0byIsIm9yaWdpbl9qdGkiOiJhYjBlZTkxOS1hN2M0LTRmYmEtOGViNC1hZTFlY2Q1ZmZlODciLCJhdWQiOiIxOG5nOXU0M2dlMGtiNHJua2lnaGpyZWF0ZCIsImV2ZW50X2lkIjoiM2IyYTAwNzMtZDgyZS00NTk2LWI3ZDctY2ZjMGE0YjUyOWQ4IiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE3MzY3ODI4MTIsImV4cCI6MTczNjc4NjQxMiwiaWF0IjoxNzM2NzgyODEyLCJqdGkiOiJlNWM1NjBjMy1hNzI3LTQ1MGYtOGU2Ni1jYjg4YTFkMWZlMmEiLCJlbWFpbCI6InBlZHJpdG9AZ21haWwuY29tIn0.oAvBUyGiCCVFPf-A18O2PFMB3e3bx-d-pU3AjxpwFllE7k6hM5BqQFW6IJ1MdDz50MOpwJoVKqtbkh53BvvAnK9cZlL2TolgL-Xt__Y-Au30lCYXAEQqgv29cf885iECsXr4To2rfdoN0WmaOKyVzff4n3qEHB9PHZxcO6EwAPxA7_qHWgcpr5xBYDx4TFXuWElF0wGlxgTV-kohaBIsfBQ-hdHwJkKN65lqXFzT6CvcEjFhR9GfsysjZ75lbEIbA5wAeqXQckGsarGCRoMwfIlVtUgGMpT1YBxknPnp-DPgjo7R52LIPrvxtiTekFbnNIihGuEj0efpD1RVIoXYqQ","RefreshToken":"eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.S3UlPKxscBbsxRkMR8yOkduB-dlXkRHqExEu-P2LvScH8A22akB5y3Z6zg9y9QEaFKh_l6uOFdFArWE2D7J2UdnNcrXb9TpK-lygYsMrFyZgYiFlgXpKo1iyGmtA2fz77Ch8sCJxhjziY5bpDe-xIDuaMM2eyHKm-0_iACwtfzppGrYAKPXmLK0k_iQzjmbOvz1uKiUmc6KHoJYJlKfWsF86UAitM28XMhzs2L2Rrjfvqp5vCvYbOG_7MEQzjek057nicvmy6KxqUDvIwaLfgZxDeh20_YzYOjhVO2OXJr8vPbUoJbWYNAQuSmaVXlOjBte11rG_D7pJuWJ6bsYyxw.0IGfS7JrZiy0f2oh.f8keABtq1hihfYyBo5ZqZF5GriZK5KI1oqx_pLpFzSAdAd4SjXGIwkR95bsLSZIbKhTaFHoAW3xTM26_R3JAenEzSuFbzHpYNu-amapCjr3NtzPwCJR78RBw7M_Ir42K1TVZCJ8Hxgq_6djNyaEw853lvPdLDtByF_E6fD6QGehvRVwVx0PmjQMCs6KkgNx1Y_iZ_0P8r38_B1rBdZtLMWmaf6cnx3M67in_-i718XeB8ZNx7FFKYbA7M8mNAFFLknzb1Yw4ZkhEBqvjZVpI4vVxY8DLZ6KApV6SmD75-J9BXPAIYPCP2pE-gtqdN0_HEhE6ubEACHjY7Awgfcy0FbpdnZXeUapbxBeVwhEraaOH5B5cwG2AElA-mln_F5J7JmK17p_ylmbjDReM9YbaHPHCBB1EVnhqsjlK15-Hzd_S6EiDug4-S1veqtHzq3fbLueushDrXFo0a02EjZdqSznAgZ1o7u5KEPEag_fGiNYLWhEUTG7F1o33yurA2ufw6pjby7mrzOpRYsCFkAMoXxFgMQsihcAhMKe9plfqe7--p-NC-iwx0NFRc2w1hYlrErq3fCig8mI3g9pJafv1uH7U1UR2t1vr0aAtRCx9LjvDpD53KjH1iFCGM94scjSxKv6s3Aw36_hhK5oGzOfvpKOfjwUJPU6ejgmzkb4ldjz-SZxhl_g6x5yhjzcK-mJttLn6IA2SxvJfuwI1eRT_1yLpUg6xkEx4k3mQvjBljssqerQg72KYDK9n5IARp7noWqFlNM24MNRSAR2APlgzpSL48BT5ToYqKY4lfhrW7bqCXVZvyf986LfFN-eZVy8HJtciMj_HZaDOk_6kIsdt0pKJyDSrZLDyrM5vXO5tD7VWQeSra__iInsHL54oiXzAJC8AyORDjyioQIIL3BXvZQZkjT5aacYwmPRJacESkYC3oUsWidKc8eVwdTr05lrPa6RepGVy7h1HJvXiv01-6tPNPgOSh6caEzbRj8-GACL-3AtfOC8FvQ4ge_tf8zfW3PibSCiWcavMQgQXWA-XEz_mdEP9AcoWobgRRYyNFNVFe45UcQxqWLGcGZjnMJUnYr67iweR3W7O3G2cptyDJhDinfIjNDq9-UzzxAP324qcZTUKGJ_5flD3RbUIoQYhQ3p4piusP0rdqaTPIiRFPjjccyVa48jc1E-ylaz8RRrnPbB2UOJOdH58EMRmAYtTgYtyKwEB4SolBLRpxymJkPVY2tl-Lewk7-tsRZeqkoNaN3N8FcdFV0mIsHk8SPowZCr2m8Dt.Lr9bA4VP6xUiMcVZGqe9Nw","TokenType":"Bearer"}
```

### Houses
#### 1. Get all houses
Endpoint: `/houses`  
Method: `GET`

```bash
curl -X GET "https://w9paej22ka.execute-api.us-east-1.amazonaws.com/prod/houses" \
-H "Content-Type: application/json" \
-H "Authorization: eyJraWQiOiJhVHRYVkRCWGJlSzlcL1dseVwvSERZMnBwbnJic1N2NW43WVF1UHVmM0pHa2M9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiIzNGQ4NDQzOC0xMGQxLTcwYTUtOWVkMy1hY2I2MDk5NWVhNGEiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9pSEVaek15aWIiLCJjb2duaXRvOnVzZXJuYW1lIjoicGVkcml0byIsIm9yaWdpbl9qdGkiOiJhYjBlZTkxOS1hN2M0LTRmYmEtOGViNC1hZTFlY2Q1ZmZlODciLCJhdWQiOiIxOG5nOXU0M2dlMGtiNHJua2lnaGpyZWF0ZCIsImV2ZW50X2lkIjoiM2IyYTAwNzMtZDgyZS00NTk2LWI3ZDctY2ZjMGE0YjUyOWQ4IiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE3MzY3ODI4MTIsImV4cCI6MTczNjc4NjQxMiwiaWF0IjoxNzM2NzgyODEyLCJqdGkiOiJlNWM1NjBjMy1hNzI3LTQ1MGYtOGU2Ni1jYjg4YTFkMWZlMmEiLCJlbWFpbCI6InBlZHJpdG9AZ21haWwuY29tIn0.oAvBUyGiCCVFPf-A18O2PFMB3e3bx-d-pU3AjxpwFllE7k6hM5BqQFW6IJ1MdDz50MOpwJoVKqtbkh53BvvAnK9cZlL2TolgL-Xt__Y-Au30lCYXAEQqgv29cf885iECsXr4To2rfdoN0WmaOKyVzff4n3qEHB9PHZxcO6EwAPxA7_qHWgcpr5xBYDx4TFXuWElF0wGlxgTV-kohaBIsfBQ-hdHwJkKN65lqXFzT6CvcEjFhR9GfsysjZ75lbEIbA5wAeqXQckGsarGCRoMwfIlVtUgGMpT1YBxknPnp-DPgjo7R52LIPrvxtiTekFbnNIihGuEj0efpD1RVIoXYqQ"
```
Response:
```bash
[{"city":"talca","address":"avenida apoquindo","id":"7c2a0d14-71fa-4ae6-bc25-3476add30a30","country":"chile"},{"city":"iquique","address":"avenida del mar","id":"93fa388f-8e64-4baf-8c21-8bae31c75e5f","country":"chile"},{"city":"roma","address":"avenida roma","id":"b73a44bf-0662-4f97-b99e-f3b558b87d65","country":"italia"}]
```

#### 2. Get a specific house
Endpoint: `/houses/:id`  
Method: `GET`

```bash
curl -X GET "https://w9paej22ka.execute-api.us-east-1.amazonaws.com/prod/houses/7c2a0d14-71fa-4ae6-bc25-3476add30a30" \
-H "Content-Type: application/json" \
-H "Authorization: eyJraWQiOiJhVHRYVkRCWGJlSzlcL1dseVwvSERZMnBwbnJic1N2NW43WVF1UHVmM0pHa2M9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiIzNGQ4NDQzOC0xMGQxLTcwYTUtOWVkMy1hY2I2MDk5NWVhNGEiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9pSEVaek15aWIiLCJjb2duaXRvOnVzZXJuYW1lIjoicGVkcml0byIsIm9yaWdpbl9qdGkiOiJhYjBlZTkxOS1hN2M0LTRmYmEtOGViNC1hZTFlY2Q1ZmZlODciLCJhdWQiOiIxOG5nOXU0M2dlMGtiNHJua2lnaGpyZWF0ZCIsImV2ZW50X2lkIjoiM2IyYTAwNzMtZDgyZS00NTk2LWI3ZDctY2ZjMGE0YjUyOWQ4IiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE3MzY3ODI4MTIsImV4cCI6MTczNjc4NjQxMiwiaWF0IjoxNzM2NzgyODEyLCJqdGkiOiJlNWM1NjBjMy1hNzI3LTQ1MGYtOGU2Ni1jYjg4YTFkMWZlMmEiLCJlbWFpbCI6InBlZHJpdG9AZ21haWwuY29tIn0.oAvBUyGiCCVFPf-A18O2PFMB3e3bx-d-pU3AjxpwFllE7k6hM5BqQFW6IJ1MdDz50MOpwJoVKqtbkh53BvvAnK9cZlL2TolgL-Xt__Y-Au30lCYXAEQqgv29cf885iECsXr4To2rfdoN0WmaOKyVzff4n3qEHB9PHZxcO6EwAPxA7_qHWgcpr5xBYDx4TFXuWElF0wGlxgTV-kohaBIsfBQ-hdHwJkKN65lqXFzT6CvcEjFhR9GfsysjZ75lbEIbA5wAeqXQckGsarGCRoMwfIlVtUgGMpT1YBxknPnp-DPgjo7R52LIPrvxtiTekFbnNIihGuEj0efpD1RVIoXYqQ"
```
Response:
```bash
{"message":"House found successfully","house":{"city":"talca","address":"avenida apoquindo","id":"7c2a0d14-71fa-4ae6-bc25-3476add30a30","country":"chile"}}
```

#### 3. Create a house
Endpoint: `/houses`  
Method: `POST`

```bash
curl -X POST "https://w9paej22ka.execute-api.us-east-1.amazonaws.com/prod/houses/" \
-H "Content-Type: application/json" \
-H "Authorization: eyJraWQiOiJhVHRYVkRCWGJlSzlcL1dseVwvSERZMnBwbnJic1N2NW43WVF1UHVmM0pHa2M9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiIzNGQ4NDQzOC0xMGQxLTcwYTUtOWVkMy1hY2I2MDk5NWVhNGEiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9pSEVaek15aWIiLCJjb2duaXRvOnVzZXJuYW1lIjoicGVkcml0byIsIm9yaWdpbl9qdGkiOiJhYjBlZTkxOS1hN2M0LTRmYmEtOGViNC1hZTFlY2Q1ZmZlODciLCJhdWQiOiIxOG5nOXU0M2dlMGtiNHJua2lnaGpyZWF0ZCIsImV2ZW50X2lkIjoiM2IyYTAwNzMtZDgyZS00NTk2LWI3ZDctY2ZjMGE0YjUyOWQ4IiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE3MzY3ODI4MTIsImV4cCI6MTczNjc4NjQxMiwiaWF0IjoxNzM2NzgyODEyLCJqdGkiOiJlNWM1NjBjMy1hNzI3LTQ1MGYtOGU2Ni1jYjg4YTFkMWZlMmEiLCJlbWFpbCI6InBlZHJpdG9AZ21haWwuY29tIn0.oAvBUyGiCCVFPf-A18O2PFMB3e3bx-d-pU3AjxpwFllE7k6hM5BqQFW6IJ1MdDz50MOpwJoVKqtbkh53BvvAnK9cZlL2TolgL-Xt__Y-Au30lCYXAEQqgv29cf885iECsXr4To2rfdoN0WmaOKyVzff4n3qEHB9PHZxcO6EwAPxA7_qHWgcpr5xBYDx4TFXuWElF0wGlxgTV-kohaBIsfBQ-hdHwJkKN65lqXFzT6CvcEjFhR9GfsysjZ75lbEIbA5wAeqXQckGsarGCRoMwfIlVtUgGMpT1YBxknPnp-DPgjo7R52LIPrvxtiTekFbnNIihGuEj0efpD1RVIoXYqQ" \
-d '{"city": "la serena", "address": "avenida la serena", "country": "chile"}'
```
Response:
```bash
{"city":"la serena","address":"avenida la serena","country":"chile","id":"cf14e73e-0300-4874-bc47-5d3581d7a56f"}
```

#### 4. Update a house
Endpoint: `/houses/:id`  
Method: `PUT`

```bash
curl -X PUT "https://w9paej22ka.execute-api.us-east-1.amazonaws.com/prod/houses/cf14e73e-0300-4874-bc47-5d3581d7a56f" \
-H "Content-Type: application/json" \
-H "Authorization: eyJraWQiOiJhVHRYVkRCWGJlSzlcL1dseVwvSERZMnBwbnJic1N2NW43WVF1UHVmM0pHa2M9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiIzNGQ4NDQzOC0xMGQxLTcwYTUtOWVkMy1hY2I2MDk5NWVhNGEiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9pSEVaek15aWIiLCJjb2duaXRvOnVzZXJuYW1lIjoicGVkcml0byIsIm9yaWdpbl9qdGkiOiJhYjBlZTkxOS1hN2M0LTRmYmEtOGViNC1hZTFlY2Q1ZmZlODciLCJhdWQiOiIxOG5nOXU0M2dlMGtiNHJua2lnaGpyZWF0ZCIsImV2ZW50X2lkIjoiM2IyYTAwNzMtZDgyZS00NTk2LWI3ZDctY2ZjMGE0YjUyOWQ4IiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE3MzY3ODI4MTIsImV4cCI6MTczNjc4NjQxMiwiaWF0IjoxNzM2NzgyODEyLCJqdGkiOiJlNWM1NjBjMy1hNzI3LTQ1MGYtOGU2Ni1jYjg4YTFkMWZlMmEiLCJlbWFpbCI6InBlZHJpdG9AZ21haWwuY29tIn0.oAvBUyGiCCVFPf-A18O2PFMB3e3bx-d-pU3AjxpwFllE7k6hM5BqQFW6IJ1MdDz50MOpwJoVKqtbkh53BvvAnK9cZlL2TolgL-Xt__Y-Au30lCYXAEQqgv29cf885iECsXr4To2rfdoN0WmaOKyVzff4n3qEHB9PHZxcO6EwAPxA7_qHWgcpr5xBYDx4TFXuWElF0wGlxgTV-kohaBIsfBQ-hdHwJkKN65lqXFzT6CvcEjFhR9GfsysjZ75lbEIbA5wAeqXQckGsarGCRoMwfIlVtUgGMpT1YBxknPnp-DPgjo7R52LIPrvxtiTekFbnNIihGuEj0efpD1RVIoXYqQ" \
-d '{"city": "coquimbo"}'
```
Response:
```bash
{"message":"House updated successfully","updatedHouse":{"id":"cf14e73e-0300-4874-bc47-5d3581d7a56f","city":"coquimbo"}}
```

#### 5. Remove a house
Endpoint: `/houses/:id`  
Method: `DELETE`

```bash
curl -X DELETE "https://w9paej22ka.execute-api.us-east-1.amazonaws.com/prod/houses/cf14e73e-0300-4874-bc47-5d3581d7a56f" \
-H "Authorization: eyJraWQiOiJhVHRYVkRCWGJlSzlcL1dseVwvSERZMnBwbnJic1N2NW43WVF1UHVmM0pHa2M9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiIzNGQ4NDQzOC0xMGQxLTcwYTUtOWVkMy1hY2I2MDk5NWVhNGEiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9pSEVaek15aWIiLCJjb2duaXRvOnVzZXJuYW1lIjoicGVkcml0byIsIm9yaWdpbl9qdGkiOiJhYjBlZTkxOS1hN2M0LTRmYmEtOGViNC1hZTFlY2Q1ZmZlODciLCJhdWQiOiIxOG5nOXU0M2dlMGtiNHJua2lnaGpyZWF0ZCIsImV2ZW50X2lkIjoiM2IyYTAwNzMtZDgyZS00NTk2LWI3ZDctY2ZjMGE0YjUyOWQ4IiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE3MzY3ODI4MTIsImV4cCI6MTczNjc4NjQxMiwiaWF0IjoxNzM2NzgyODEyLCJqdGkiOiJlNWM1NjBjMy1hNzI3LTQ1MGYtOGU2Ni1jYjg4YTFkMWZlMmEiLCJlbWFpbCI6InBlZHJpdG9AZ21haWwuY29tIn0.oAvBUyGiCCVFPf-A18O2PFMB3e3bx-d-pU3AjxpwFllE7k6hM5BqQFW6IJ1MdDz50MOpwJoVKqtbkh53BvvAnK9cZlL2TolgL-Xt__Y-Au30lCYXAEQqgv29cf885iECsXr4To2rfdoN0WmaOKyVzff4n3qEHB9PHZxcO6EwAPxA7_qHWgcpr5xBYDx4TFXuWElF0wGlxgTV-kohaBIsfBQ-hdHwJkKN65lqXFzT6CvcEjFhR9GfsysjZ75lbEIbA5wAeqXQckGsarGCRoMwfIlVtUgGMpT1YBxknPnp-DPgjo7R52LIPrvxtiTekFbnNIihGuEj0efpD1RVIoXYqQ"
```
Response:
```bash
```