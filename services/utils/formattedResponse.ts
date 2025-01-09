const formattedResponse = (statusCode: number, body: any) => {
  return {
    statusCode,
    body: JSON.stringify(body)
  }
}

export default formattedResponse
