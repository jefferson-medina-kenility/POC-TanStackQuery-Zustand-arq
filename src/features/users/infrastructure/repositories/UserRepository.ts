import { IUserRepository }
from '../../domain/repositories/IUserRepository'

import { httpClient }
from '../../../../shared/api/httpClient'

import { User }
from '../../domain/entities/User'

export class UserRepository
implements IUserRepository {

  async getAll(): Promise<User[]> {

    const res =
      await httpClient.get('/users')

    return res.data.map(
      (u: any) =>
        new User(
          u.id,
          u.name,
          u.email,
          new Date(u.createdAt)
        )
    )

  }

  async create(input: {
    name: string
    email: string
  }): Promise<User> {

    const res =
      await httpClient.post(
        '/users',
        input
      )

    const u = res.data

    return new User(
      u.id,
      u.name,
      u.email,
      new Date(u.createdAt)
    )

  }

}
