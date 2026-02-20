import { IUserRepository }
from '../../domain/repositories/IUserRepository'

export class CreateUserCommand {

  constructor(
    private repo: IUserRepository
  ) {}

  execute(input: {
    name: string
    email: string
  }) {

    return this.repo.create(input)

  }

}
