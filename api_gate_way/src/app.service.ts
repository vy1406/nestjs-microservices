import { CreateUserEvent } from './create-user.event';
import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices'
import { CreateUserRequest } from './create-user-request.dto';

@Injectable()
export class AppService {
  private readonly fakeDbUsers: any[] = []

  constructor(@Inject('COMMUNICATION') private readonly communicationClient: ClientProxy) {

  }

  getHello(): string {
    return 'Hello World!';
  }

  createUser(createUserRequst: CreateUserRequest){
    this.fakeDbUsers.push(createUserRequst)
    this.communicationClient.emit('user_created', new CreateUserEvent(createUserRequst.email))
  }
}
