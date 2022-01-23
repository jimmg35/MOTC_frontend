/* eslint-disable */

export interface IUser {
  username: string
  password: string
}

export class User {
  username: string
  password: string

  constructor(options: IUser) {
    this.username = options.username
    this.password = options.password
  }

}