import { ServerError } from '../errors/server-error'
import { type HttpResponse } from '../protocols/http'

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})

export const serverErrorRequest = (): HttpResponse => ({
  statusCode: 500,
  body: new ServerError()
})
