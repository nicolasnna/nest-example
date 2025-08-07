import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'

export type User = {
  userId: number
  username: string
  password: string
  status: boolean
}

export let users: User[] = []

const getId = (arr: User[]) => {
  if (arr.length === 0) {
    return 1
  }
  return arr[arr.length - 1].userId + 1
}

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    const newUserId = getId(users)
    const newUser: User = {
      userId: newUserId,
      ...createUserDto,
      status: true
    }
    users = [...users, newUser]
    return newUser
  }

  findAll() {
    return users
  }

  findOne(id: number) {
    const userFinded = users.find((c) => c.userId === id)
    return userFinded
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const userFinded = this.findOne(id)
    if (!userFinded) {
      return 'No existe id'
    }
    const userUpdated: User = { ...userFinded, ...updateUserDto }
    users = [...users.map((u) => (u.userId === id ? userUpdated : u))]
    return userUpdated
  }

  remove(id: number) {
    const updateUserDto: UpdateUserDto = {
      status: false
    }
    return this.update(id, updateUserDto)
  }
}
