import { IUserRepository }
from '../../domain/repositories/IUserRepository'

export class GetUsersQuery {

  constructor(
    private repo: IUserRepository
  ) {}

  execute() {
    return this.repo.getAll()
  }

}
