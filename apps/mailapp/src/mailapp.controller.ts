import { Controller, Get } from '@nestjs/common';
import { MailappService } from './mailapp.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class MailappController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly mailappService: MailappService) {}

  // @Get()
  // getHello(): string {
  //   return this.mailappService.getHello();
  // }
  @EventPattern('new_mail')
  handleNewEmail(data:any){
    console.log('Este el evento entrante', data)
  }
}
