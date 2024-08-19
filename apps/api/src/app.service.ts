import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getHello(): string {
    const a = 1
    a = 2
    return 'Nestjs'
  }
}
