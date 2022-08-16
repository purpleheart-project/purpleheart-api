import { Inject, Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UserService } from './user.service'
import axios from 'axios'
import { Repository } from 'typeorm'
import { User } from './entities/user.entity'

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    @Inject('user_EntityRepository')
    private userRepository: Repository<User>,
  ) {}
  async validateUser(username: string, password: string): Promise<any> {
    console.log(
      'AuthService.validateUser 第二步：拿到数据去user服务里校验信息',
      username,
      password,
    )
    const user = await this.userService.passwordLogin({ username, password })
    if (user) {
      return user
    } else {
      return null
    }
  }

  async login(user: any) {
    const payload = {
      username: user.username,
      id: Number(user.id),
      roles: user.role.split(','),
    }
    console.log('AuthService.login 第三步：存储信息', payload)
    return {
      token: this.jwtService.sign(payload),
    }
  }

  async oauthToken(params) {
    // 3.登陆逻辑
    const zaicha = await this.userRepository.findOneBy({ id: 1 })
    return this.login({
      username: zaicha.username,
      id: zaicha.id,
      role: zaicha.role,
    })
  }

  async getUserinfo({ userId }) {
    return this.userRepository.findOneBy({ id: userId })
  }
}
