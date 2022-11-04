import { Controller, Get, Body, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserRequest } from './create-user-request.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  createUser(@Body() craeteUserRequest: CreateUserRequest){
    this.appService.createUser(craeteUserRequest)
  }

  
  @Get('analytics')
  getAnalytics() {
    return this.appService.getAnalytics();
  }

}
