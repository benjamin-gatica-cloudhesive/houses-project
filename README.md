# Houses REST API

This file provides examples of how to make requests to the API using `cURL`. Make sure to replace the authorization token with a valid one before executing the requests

## Execute tests
```bash
npm run test
```

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
{
  "message": "Token obtained successfully",
  "info": {
    "AccessToken": "eyJraWQiOiJ6NTZoaE5LM2pLUTE5c0FGd0lnaGk4a1hyN2NcLzE5aE5ZUjdvUUxMNFp3WT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIzNGQ4NDQzOC0xMGQxLTcwYTUtOWVkMy1hY2I2MDk5NWVhNGEiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9pSEVaek15aWIiLCJjbGllbnRfaWQiOiIxOG5nOXU0M2dlMGtiNHJua2lnaGpyZWF0ZCIsIm9yaWdpbl9qdGkiOiJkYWI3OGExYi1kM2MwLTQzMjctYjJkNy1jZjY3ZTU3ZDFkYzEiLCJldmVudF9pZCI6ImIzMTNiNDI1LWI3ZmUtNDA2Yi04NmRlLTkxYWE4YzYyZGU2NiIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE3MzY3ODc3MTIsImV4cCI6MTczNjc5MTMxMiwiaWF0IjoxNzM2Nzg3NzEyLCJqdGkiOiIwNjBmYTg4OC0yNGNhLTRmOTAtYjJmYy00NmQyNzg5YmNhYjgiLCJ1c2VybmFtZSI6InBlZHJpdG8ifQ.R-bhKK4iwL2KdqZjQsHHrhxZiPoIDu__sMRr1iZl4c5ixYCSHuILPUU0HmbBEb9-ZNGpp8AIYvKY9C3TSbWQoxSNiY2eX-RNBGtKQen-l3fe7HC2zxjvyjTN751o0ywXU2dkwNE8MOVAWNzCd83CC206Lss07c9KH3sxlPg0Bwln2keIlBV1LYNPH1lOXPOSn4LwlglJqQ5EVTwrqB1A5Cu8E0UNzaAjs7IwRcdg1AjOT9cYmPmpTNvebuossEUpGtIpcSaJLEm-EGvP4uESwbp1V6uTz0DKxfJdIdRgbMccusfigLJe2ErZn0pNaW1XXMWafz1zT5gpa2yuQE8C7w",
    "ExpiresIn": 3600,
    "IdToken": "eyJraWQiOiJhVHRYVkRCWGJlSzlcL1dseVwvSERZMnBwbnJic1N2NW43WVF1UHVmM0pHa2M9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiIzNGQ4NDQzOC0xMGQxLTcwYTUtOWVkMy1hY2I2MDk5NWVhNGEiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9pSEVaek15aWIiLCJjb2duaXRvOnVzZXJuYW1lIjoicGVkcml0byIsIm9yaWdpbl9qdGkiOiJkYWI3OGExYi1kM2MwLTQzMjctYjJkNy1jZjY3ZTU3ZDFkYzEiLCJhdWQiOiIxOG5nOXU0M2dlMGtiNHJua2lnaGpyZWF0ZCIsImV2ZW50X2lkIjoiYjMxM2I0MjUtYjdmZS00MDZiLTg2ZGUtOTFhYThjNjJkZTY2IiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE3MzY3ODc3MTIsImV4cCI6MTczNjc5MTMxMiwiaWF0IjoxNzM2Nzg3NzEyLCJqdGkiOiJmOTlmNTk0OC05M2Y0LTRlZTgtYmEzYS03ZDlhNzJkNGFkNTciLCJlbWFpbCI6InBlZHJpdG9AZ21haWwuY29tIn0.cRG4U4su2czagVLawkvRLw5EDRIedvjXwaA6kKnSSy20KQMgPfhaXgsNAHQVkmBnNym9AXBNVlmMjLb9AIN7RjJRkerPUZjzhe7Ub73816Zf6kMD52C39Y9rwonvn6TQ1N9A2DTvlTk-raIc44SDkeQyTOKwMZ6O9KJZ7Jp51RsspFsUIODY0qQBhHY0rD9ipBkedIiyXnyoMRRlP8nBupmxQbpqgoipgRXRK7N7C9bp6W5oIrGhk4N4PtXbOiKwSAxhERWZsUI6LwCFNEgevS5fwetYOywbr9AybOGNgAGFDgfA7OkyKPjcTjr4L6OL_-kBiWX-sEyzn5j0G4JdjQ",
    "RefreshToken": "eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.VCNeWeTnEzClUW2BOsQDOvgsl5YgItjCw_Xh4ij7aE7UXfByOOW-B0lVfqOsV3qEpVfmg_RyQaWdLNTXYfy1rnmEoR97njsazqBfx-5eOuSHd0l808BgVQE3-RL7MfnSVY9LX4Ds9QLePMu8iQzjARFQYieY90SctVU4T3UwOpZkLPU3c5kYpRK0Q5XRyfYId2imeOu3pQGj5vRGw3A3XyjN5gSdOIpfRZo7LxoxTPVQ0-x_q9n1H5BWGwh_dnIH81Y9QlzDLt2L8tpD_gH9UG3v5Dr6npj9-zvw-m3rWLfbrWJFikInw8ktkWp6oNV9ibmtaJOGmuaqLTCOxoa0zQ.S_XCaDRvO72RRft5.QFTRxjuWUWnroDZQW6hWFPLsC7Q_892oZTB_lkY8hhK53tMRRqOH3RZkd_ZtcUyCsu4vgSO8o2wFGjfq-J7RyKbNIdsYBKb8G7f3qk9EpwQR-ugUnHO0dziKPphM7rtiNFgzjIgOAQfSmf6c4sP50hbrGDCvIcOR68bL634KmFMJb3OSf5auv_hpAq-neXuAH-v82HN3g4SHG4fNGII1w7UjvJCkpz5y_Su6Q4nU-LvZptB7Qb9NBnYcN6zzjOtyLL769RIWbvETna6CEs6y_2HSmoK8qq77aik8oyYI0xqLxRgy-FEoXqI5Pqv3UUe9fHdZSaNgKpBLjKPUb1SjBG9CEjNAL5y4eHlHQ6H3h_tYWOzO4cSXeF4V_2Tj2B5mldWEAVqH0cHyHRrYf_5XNwCahTHkgZLxMZ4twxQyhnhRBUYE-FXVTe8P9v39DLUxiW3dwvOvw854wQaRTN8-N0eKzGTcEYtz2g62OlZC15PlMPdbo5CcMBHSbei2hCkCY0XZ2FBkkBU7hiisUmAlmJDiU1RNGXLTu6yTAfdK0zRK5Ywnplzlzwkb_J8dNze3Y-5MBbo_H-fkJzvcxfDqxgcm03DpF0rTi98RybTkjwLZYm7sw6xjY1oI8KKYWiLafk_VXk4BdEZcBCGzgLhUFnM3AElf49iJ5Tah8fFDAeo2FX1GsKfUj3KZtKi3jvb4MV_W_24uqF51UMtAYNBmks9QfOKSb-bL61OcBR-VeyLDg7O6_bVZrc7EdBLOZGAlcyzF0e34ugS25VTGQCb3P0RtgZKZgiTyQUUnvs957-Els3G211v9VTDIBbZ4m3yJrUE8kJaUpw2x_6TdlGtz5Mw2DIWk7a1ecedXSz-il6TGcc60JyRKQoeWwbg0Bk5b2y6hiimc_bxg1kg4uxW3SfR0tJ-BIX6ym2dxVKcKaKvUJAGP53q2kkyhxU1vJE_wg8u1glHbftnN6jU5Nejt95Crz9odR3iOZnNWQpK2SLvf-GnIcOZtycksPLy4XuyiP8pUBRuukB0MDEM8dnHlzlj_EZBiBs83ITr3zEL_-hYer3IFQf316BBbxZSlyj0Y8ookDt0KypYKk8HrBhK9p6AtVv2QuEkgoAdlWaY1VH9-sgT3kvuxY9nEDIIdPRGeulx5MeLMucbzf6ZppyCgsp94EgmXJfbj0n_6ba0kvnhxDf7AO7CqZ7q03T7HeL0o2kd7t37Aji__StrRGwwSMek-PbpS4Hid3VKaIFpZOoqAVc7Mv55FOMfDBhiawkcTn_35vwtU.DM8HrQi95ywhqGVg97Bk8Q",
    "TokenType": "Bearer"
  }
}
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
{
  "message": "Houses found successfully",
  "info": [
    {
      "city": "talca",
      "address": "avenida apoquindo",
      "id": "7c2a0d14-71fa-4ae6-bc25-3476add30a30",
      "country": "chile"
    },
    {
      "city": "iquique",
      "address": "avenida del mar",
      "id": "93fa388f-8e64-4baf-8c21-8bae31c75e5f",
      "country": "chile"
    },
    {
      "city": "roma",
      "address": "avenida roma",
      "id": "b73a44bf-0662-4f97-b99e-f3b558b87d65",
      "country": "italia"
    }
  ]
}
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
{
  "message": "House found successfully",
  "info": {
    "city": "roma",
    "address": "avenida roma",
    "id": "b73a44bf-0662-4f97-b99e-f3b558b87d65",
    "country": "italia"
  }
}
```

#### 3. Create a house
Endpoint: `/houses`  
Method: `POST`

```bash
curl -X POST "https://w9paej22ka.execute-api.us-east-1.amazonaws.com/prod/houses/" \
-H "Content-Type: application/json" \
-H "Authorization: eyJraWQiOiJhVHRYVkRCWGJlSzlcL1dseVwvSERZMnBwbnJic1N2NW43WVF1UHVmM0pHa2M9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiIzNGQ4NDQzOC0xMGQxLTcwYTUtOWVkMy1hY2I2MDk5NWVhNGEiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9pSEVaek15aWIiLCJjb2duaXRvOnVzZXJuYW1lIjoicGVkcml0byIsIm9yaWdpbl9qdGkiOiJhYjBlZTkxOS1hN2M0LTRmYmEtOGViNC1hZTFlY2Q1ZmZlODciLCJhdWQiOiIxOG5nOXU0M2dlMGtiNHJua2lnaGpyZWF0ZCIsImV2ZW50X2lkIjoiM2IyYTAwNzMtZDgyZS00NTk2LWI3ZDctY2ZjMGE0YjUyOWQ4IiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE3MzY3ODI4MTIsImV4cCI6MTczNjc4NjQxMiwiaWF0IjoxNzM2NzgyODEyLCJqdGkiOiJlNWM1NjBjMy1hNzI3LTQ1MGYtOGU2Ni1jYjg4YTFkMWZlMmEiLCJlbWFpbCI6InBlZHJpdG9AZ21haWwuY29tIn0.oAvBUyGiCCVFPf-A18O2PFMB3e3bx-d-pU3AjxpwFllE7k6hM5BqQFW6IJ1MdDz50MOpwJoVKqtbkh53BvvAnK9cZlL2TolgL-Xt__Y-Au30lCYXAEQqgv29cf885iECsXr4To2rfdoN0WmaOKyVzff4n3qEHB9PHZxcO6EwAPxA7_qHWgcpr5xBYDx4TFXuWElF0wGlxgTV-kohaBIsfBQ-hdHwJkKN65lqXFzT6CvcEjFhR9GfsysjZ75lbEIbA5wAeqXQckGsarGCRoMwfIlVtUgGMpT1YBxknPnp-DPgjo7R52LIPrvxtiTekFbnNIihGuEj0efpD1RVIoXYqQ" \
-d '{"city": "iquique", "address": "avenida del mar", "country": "chile"}'
```
Response:
```bash
{
  "message": "House created successfully",
  "info": {
    "house": {
      "city": "iquique",
      "address": "avenida del mar",
      "country": "chile",
      "id": "03b712f5-6753-4043-afd2-c861fddc6185"
    }
  }
}
```

#### 4. Update a house
Endpoint: `/houses/:id`  
Method: `PUT`

```bash
curl -X PUT "https://w9paej22ka.execute-api.us-east-1.amazonaws.com/prod/houses/cf14e73e-0300-4874-bc47-5d3581d7a56f" \
-H "Content-Type: application/json" \
-H "Authorization: eyJraWQiOiJhVHRYVkRCWGJlSzlcL1dseVwvSERZMnBwbnJic1N2NW43WVF1UHVmM0pHa2M9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiIzNGQ4NDQzOC0xMGQxLTcwYTUtOWVkMy1hY2I2MDk5NWVhNGEiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9pSEVaek15aWIiLCJjb2duaXRvOnVzZXJuYW1lIjoicGVkcml0byIsIm9yaWdpbl9qdGkiOiJhYjBlZTkxOS1hN2M0LTRmYmEtOGViNC1hZTFlY2Q1ZmZlODciLCJhdWQiOiIxOG5nOXU0M2dlMGtiNHJua2lnaGpyZWF0ZCIsImV2ZW50X2lkIjoiM2IyYTAwNzMtZDgyZS00NTk2LWI3ZDctY2ZjMGE0YjUyOWQ4IiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE3MzY3ODI4MTIsImV4cCI6MTczNjc4NjQxMiwiaWF0IjoxNzM2NzgyODEyLCJqdGkiOiJlNWM1NjBjMy1hNzI3LTQ1MGYtOGU2Ni1jYjg4YTFkMWZlMmEiLCJlbWFpbCI6InBlZHJpdG9AZ21haWwuY29tIn0.oAvBUyGiCCVFPf-A18O2PFMB3e3bx-d-pU3AjxpwFllE7k6hM5BqQFW6IJ1MdDz50MOpwJoVKqtbkh53BvvAnK9cZlL2TolgL-Xt__Y-Au30lCYXAEQqgv29cf885iECsXr4To2rfdoN0WmaOKyVzff4n3qEHB9PHZxcO6EwAPxA7_qHWgcpr5xBYDx4TFXuWElF0wGlxgTV-kohaBIsfBQ-hdHwJkKN65lqXFzT6CvcEjFhR9GfsysjZ75lbEIbA5wAeqXQckGsarGCRoMwfIlVtUgGMpT1YBxknPnp-DPgjo7R52LIPrvxtiTekFbnNIihGuEj0efpD1RVIoXYqQ" \
-d '{"city": "barcelona"}'
```
Response:
```bash
{
  "message": "Houses updated successfully",
  "info": {
    "city": "barcelona"
  }
}
```

#### 5. Remove a house
Endpoint: `/houses/:id`  
Method: `DELETE`

```bash
curl -X DELETE "https://w9paej22ka.execute-api.us-east-1.amazonaws.com/prod/houses/cf14e73e-0300-4874-bc47-5d3581d7a56f" \
-H "Authorization: eyJraWQiOiJhVHRYVkRCWGJlSzlcL1dseVwvSERZMnBwbnJic1N2NW43WVF1UHVmM0pHa2M9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiIzNGQ4NDQzOC0xMGQxLTcwYTUtOWVkMy1hY2I2MDk5NWVhNGEiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9pSEVaek15aWIiLCJjb2duaXRvOnVzZXJuYW1lIjoicGVkcml0byIsIm9yaWdpbl9qdGkiOiJkODEyODdmNC01OWQ1LTQzOWUtOTRjOS05MzZjNjk3MDkwYTciLCJhdWQiOiIxOG5nOXU0M2dlMGtiNHJua2lnaGpyZWF0ZCIsImV2ZW50X2lkIjoiOWJlYTZkYzItZDU1OC00MTEzLTkyYmItNzQ4YWQ3MTZlMzk3IiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE3MzY3ODYzNjAsImV4cCI6MTczNjc4OTk2MCwiaWF0IjoxNzM2Nzg2MzYwLCJqdGkiOiJhYmZlNTk4ZC1hZTZmLTRlNjEtOWIyZS00ZWZkMDBjZDZlMGIiLCJlbWFpbCI6InBlZHJpdG9AZ21haWwuY29tIn0.n7E5rPHweDz0be-InwU2a9V0ENrIMxL1eQ75zQ1GMSR_1T2NFb8lqVJleGkWJZuYrGg4S96zuEBZBg0TmA7MWC7ceduCnN_77L0seZdZurEmNRE4mzm7t8kHECqNQNNsbE-ugLcFs58KcTlZ6iGRPYVir-HsyZR3DLLxp5iNbG-FFJDpYPNxDyXfkypphbp8zgnWpUW276Egb1m7RfLr9s3yMGOhBeZnUivyUmyfePLCqB8O4SVq8jt2PFpdA-A2aupJHfBXT5QT6_j01XW_AkLz4gN6398NMjyo2s9dCn6BhiLAzAKiq668y-OLS2bSx8CCobWZ2RSxyoevBn9CjQ"
```
Response:
```bash
{
  "message": "House removed successfully"
}
```