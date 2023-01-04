import { Controller, Get, Post, Req, Res, Body, Delete, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): {} {
    return this.appService.getHello();
  }

  @Get('/user')
  getUser(): {} {
    return this.appService.getUser();
  }

  @Post('/user')
    async addUser(
        @Body("name") name: string,
        @Body("email") email: string
    ) {
    try {
      const res = await this.appService.addUser(name, email)
      return res
    } catch (error) {
      console.log(error)
    }
  }
}
