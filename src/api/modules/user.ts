import { userServiceApiConfig } from './config'
import { RegisterUser } from '../DTO/User'

export const registerUser = async (registerInfo: RegisterUser) => {
  const headersList = {
    Accept: '*/*',
    'Content-Type': 'application/x-www-form-urlencoded'
  }
  const response = await fetch(`${userServiceApiConfig.serverString}/api/User/register`, {
    method: 'POST',
    body: `username=${registerInfo.username}&password=${registerInfo.password}&email=${registerInfo.email}&phoneNumber=${registerInfo.phoneNumber}&roleId=1`,
    headers: headersList
  })
  return response
}
