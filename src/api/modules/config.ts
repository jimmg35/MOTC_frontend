/* eslint space-before-function-paren: ["error", "never"] */
/* eslint-env es6 */

export interface IApiConfigParam {
  protocol: 'http' | 'https'
  domain: string
  port: string
}

class ApiConfig {
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

export default new ApiConfig({
  protocol: 'https',
  domain: 'localhost',
  port: '44398'
})
