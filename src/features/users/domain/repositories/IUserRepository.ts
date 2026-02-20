import { User } from '../entities/User'

export interface IUserRepository {

  getAll(): Promise<User[]>

  create(input: {
    name: string
    email: string
  }): Promise<User>

}
