import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
/**
 * Esta esa la APP PRINCIPAL
 */
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('user')
  public async newUser(@Body() body: { name: string; email: string }) {

    const carrigmtonUser = {
      name: 'Carrigmton',
      email: 'carrigmton@gmail.com'

    };

    body = (Object.keys(body).length) ? body : carrigmtonUser;

    return this.appService.newUser(body);
  }
}
