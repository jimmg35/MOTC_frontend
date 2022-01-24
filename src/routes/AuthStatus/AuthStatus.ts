/* eslint-disable */
import api from '../../api'

export class AuthStatus {
  public isAuthenticated: boolean

  constructor() {
    this.isAuthenticated = false
  }

  public authenticateToken = async (token: string) => {
    const response = await api.auth.validateToken(token)
    if (response.status === 200) {
      this.isAuthenticated = true
      return this.isAuthenticated
    }
    this.isAuthenticated = false
    return this.isAuthenticated
  }
}

export default new AuthStatus()
