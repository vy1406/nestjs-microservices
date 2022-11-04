import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './create-user.event';

@Injectable()
export class AppService {
  private readonly fakeDBAnalytics: any[] = [];
  getHello(): string {
    return 'Hello World!';
  }

  handleUserCreated(data: CreateUserEvent){
    console.log('handleUserCreated - ANALYTICS', data);
    this.fakeDBAnalytics.push({
      email: data.email,
      timestamp: new Date()
    })
    
  }

  getAnalytics() {
    return this.fakeDBAnalytics
  }
}
