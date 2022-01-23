import { authServiceApiConfig } from './config'
import { User } from '../DTO/User'

export const authenticateUser = async (user: User) => {
  const headersList = {
    Accept: '*/*',
    'Content-Type': 'application/x-www-form-urlencoded'
  }
  const response = await fetch(`${authServiceApiConfig.serverString}/api/Auth/authenticate`, {
    method: 'POST',
    body: `username=${user.username}&password=${user.password}`,
    headers: headersList
  })
  return response
}
