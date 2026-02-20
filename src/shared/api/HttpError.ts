export interface HttpErrorOptions {
  message: string
  status?: number
  code?: string
  details?: unknown
}

export class HttpError extends Error {
  readonly status?: number
  readonly code?: string
  readonly details?: unknown

  constructor(options: HttpErrorOptions) {
    super(options.message)
    this.name = 'HttpError'
    this.status = options.status
    this.code = options.code
    this.details = options.details
  }
}