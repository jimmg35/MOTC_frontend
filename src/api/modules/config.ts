/* eslint space-before-function-paren: ["error", "never"] */
/* eslint-env es6 */

export interface IApiConfigParam {
  protocol: 'http' | 'https'
  domain: string
  port: string
}

export default class ApiConfig {
  protocol: 'http' | 'https'
  domain: string
  port: string
  serverString: string

  constructor(options: IApiConfigParam) {
    this.protocol = options.protocol
    this.domain = options.domain
    this.port = options.port
    this.serverString = `${this.protocol}://${this.domain}:${this.port}`
  }
}

export const airServiceApiConfig = new ApiConfig({
  protocol: 'http',
  domain: '140.122.82.98',
  port: '82'
})

export const authServiceApiConfig = new ApiConfig({
  protocol: 'http',
  domain: '140.122.82.98',
  port: '86'
})
