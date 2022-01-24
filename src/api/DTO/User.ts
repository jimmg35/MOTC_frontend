/* eslint-disable */

export interface IUser {
  email: string
  password: string
}

export class User {
  email: string
  password: string

  constructor(options: IUser) {
    this.email = options.email
    this.password = options.password
  }

}