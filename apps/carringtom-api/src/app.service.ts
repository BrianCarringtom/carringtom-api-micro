import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class AppService {

  constructor(
  @Inject('MAIL_SERVICE') private readonly clientMail:ClientProxy,
  @InjectRepository(User) private readonly userRepository: Repository<User>,

) {}

  async newUser(body: { name: string; email: string }) {
    const user = this.userRepository.create(body);
    const savedUser = await this.userRepository.save(user);

    this.clientMail.emit('new_email', user);
    return savedUser;

  }
}
