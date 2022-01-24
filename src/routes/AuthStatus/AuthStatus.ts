/* eslint-disable */
import api from '../../api'

export interface IUserInfo {
  username: string
  email: string
  alias: string
}

export class UserInfo {
  public username: string
  public email: string
  public alias: string

  constructor(options: IUserInfo) {
    this.username = options.username
    this.email = options.email
    this.alias = options.alias
  }
}

export class AuthStatus {
  public userInfo: UserInfo | undefined
  public isAuthenticated: boolean

  constructor() {
    this.userInfo = undefined
    this.isAuthenticated = false
  }

  public authenticateToken = async (token: string) => {
    const response = await api.auth.validateToken(token)
    console.log(response.json())
    if (response.status === 200) {
      this.isAuthenticated = true
      return this.isAuthenticated
    }
    this.isAuthenticated = false
    return this.isAuthenticated
  }
}

export default new AuthStatus()
