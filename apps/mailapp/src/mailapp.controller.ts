import { Controller, Get } from '@nestjs/common';
// import { MailappService } from './mailapp.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class MailappController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  constructor ( ) { }

  @EventPattern('new_mail')
  handleNewEmail(data: unknown){
    console.log( {data})
  }
}
