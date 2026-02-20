import { UserRepository }
from '../../../src/features/users/infrastructure/repositories/UserRepository'

import { GetUsersQuery }
from '../../../src/features/users/application/queries/GetUsersQuery'

import { CreateUserCommand }
from '../../../src/features/users/application/commands/CreateUserCommand'

class Container {

  private userRepo =
    new UserRepository()

  getUsersQuery() {

    return new GetUsersQuery(
      this.userRepo
    )

  }

  createUserCommand() {

    return new CreateUserCommand(
      this.userRepo
    )

  }

}

export const container =
  new Container()
