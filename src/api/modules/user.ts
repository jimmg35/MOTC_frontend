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

export const isUserExist = async (username: string) => {
  const headersList = {
    Accept: '*/*'
  }
  const response = await fetch(`${userServiceApiConfig.serverString}/api/User/isUserExists?username=${username}`, {
    method: 'GET',
    headers: headersList
  })
  return response
}

export const isEmailUsed = async (email: string) => {
  const headersList = {
    Accept: '*/*'
  }
  const response = await fetch(`${userServiceApiConfig.serverString}/api/User/isEmailUsed?email=${email}`, {
    method: 'GET',
    headers: headersList
  })
  return response
}
