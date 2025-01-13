import { APIGatewayProxyEvent } from "aws-lambda";
import { createRandomId, errorResponse, formattedResponse, getBodyFromEvent, getIdFromParameters, isIdInParameters, validateStructureLoginCredentials } from "./utils";

describe('utils unit tests', () => {
  describe('formattedResponse tests', () => {
    it('should return a properly formatted response with status code and stringified body', () => {
      const statusCode = 200;
      const body = {
        message: 'Success',
        info: { key: 'value' },
      };

      const result = formattedResponse(statusCode, body);

      expect(result).toEqual({
        statusCode,
        body: JSON.stringify(body),
      });
    });

    it('should handle a body with only the message property', () => {
      const statusCode = 400;
      const body = {
        message: 'Error occurred',
      };

      const result = formattedResponse(statusCode, body);

      expect(result).toEqual({
        statusCode,
        body: JSON.stringify(body),
      });
    });

    it('should return a valid response when body info is undefined', () => {
      const statusCode = 500;
      const body = {
        message: 'Internal Server Error',
        info: undefined,
      };

      const result = formattedResponse(statusCode, body);

      expect(result).toEqual({
        statusCode,
        body: JSON.stringify(body),
      });
    });
  })

  describe('errorResponse tests', () => {
    it('should return a valid response when error is an instance of Error', () => {
      const error = new Error('test error')

      const result = errorResponse(error, 'message for the error')

      expect(result).toEqual({ statusCode: 500, body: '{"message":"test error"}' })
    })

    it('should return a valid response when error is not an instance of Error', () => {
      const result = errorResponse('any message', 'message for the error')

      expect(result).toEqual({ statusCode: 500, body: '{"message":"message for the error"}' })
    })
  })

  describe('getBodyFromEvent tests', () => {
    it('should throw an error if event has not body', () => {
      const event = {}
      try {
        getBodyFromEvent(event as APIGatewayProxyEvent)
      } catch (error) {
        expect(error).toBeInstanceOf(Error)
        if (error instanceof Error) {
          expect(error.message).toEqual('Not body found in event')
        }
      }
    })

    it('should return the body of the event', () => {
      const body = {
        address: 'vicuña mackenna 1234',
        city: 'santiago',
        country: 'chile'
      }

      const event = {
        body: JSON.stringify(body)
      }

      const result = getBodyFromEvent(event as APIGatewayProxyEvent)

      expect(result).toMatchObject(body)
    })
  })

  describe('createRandomId tests', () => {
    it('should return a chain with a length of 36', () => {
      const result = createRandomId()
      const idArray = result.split('-')
      expect(idArray.length).toBe(5)
      expect(result.length).toBe(36)
    })
  })

  describe('validateStructureLoginCredentials tests', () => {
    it('should not throw an error if credentials are valid', () => {
      const credentials = {
        userName: 'validUser',
        password: 'validPassword',
      };

      expect(() => validateStructureLoginCredentials(credentials)).not.toThrow();
    });

    it('should throw an error if userName is not provided', () => {
      const credentials = {
        password: 'validPassword',
      };

      expect(() => validateStructureLoginCredentials(credentials)).toThrowError(
        'userName not received'
      );
    });

    it('should throw an error if password is not provided', () => {
      const credentials = {
        userName: 'validUser',
      };

      expect(() => validateStructureLoginCredentials(credentials)).toThrowError(
        'password not received'
      );
    });

    it('should throw an error if userName is not a string', () => {
      const credentials = {
        userName: 12345, // Not a string
        password: 'validPassword',
      };

      expect(() => validateStructureLoginCredentials(credentials)).toThrowError(
        'userName must be type string'
      );
    });

    it('should throw an error if password is not a string', () => {
      const credentials = {
        userName: 'validUser',
        password: 12345, // Not a string
      };

      expect(() => validateStructureLoginCredentials(credentials)).toThrowError(
        'password must be type string'
      );
    });

    it('should throw an error if credentials is null', () => {
      const credentials = null;

      expect(() => validateStructureLoginCredentials(credentials)).toThrowError(
        "Cannot read properties of null (reading 'userName')"
      );
    });

    it('should throw an error if credentials is undefined', () => {
      const credentials = undefined;

      expect(() => validateStructureLoginCredentials(credentials)).toThrowError(
        "Cannot read properties of undefined (reading 'userName')"
      );
    });
  });

  describe('isIdInParameters', () => {
    it('should return false if pathParameters is not present in the event', () => {
      const event = {} as APIGatewayProxyEvent;
  
      const result = isIdInParameters(event);
  
      expect(result).toBe(false);
    });
  
    it('should return false if pathParameters is null', () => {
      const event = { pathParameters: null } as unknown as APIGatewayProxyEvent;
  
      const result = isIdInParameters(event);
  
      expect(result).toBe(false);
    });
  
    it('should return false if pathParameters does not contain id', () => {
      const event = { pathParameters: { otherKey: 'value' } } as unknown as APIGatewayProxyEvent;
  
      const result = isIdInParameters(event);
  
      expect(result).toBe(false);
    });
  
    it('should return false if pathParameters.id is null', () => {
      const event = { pathParameters: { id: null } } as unknown as APIGatewayProxyEvent;
  
      const result = isIdInParameters(event);
  
      expect(result).toBe(false);
    });
  
    it('should return false if pathParameters.id is undefined', () => {
      const event = { pathParameters: { id: undefined } } as unknown as APIGatewayProxyEvent;
  
      const result = isIdInParameters(event);
  
      expect(result).toBe(false);
    });
  
    it('should return true if pathParameters.id is present and valid', () => {
      const event = { pathParameters: { id: '12345' } } as unknown as APIGatewayProxyEvent;
  
      const result = isIdInParameters(event);
  
      expect(result).toBe(true);
    });
  });

  describe('getIdFromParameters tests', () => {
    it('should return the id', () => {
      const event = {
        pathParameters: {
          id: '1'
        }
      }

      const result = getIdFromParameters(event as unknown as APIGatewayProxyEvent)

      expect(result).toBe('1')
    })
  })
})