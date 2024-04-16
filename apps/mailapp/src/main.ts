import { NestFactory } from '@nestjs/core';
import { MailappModule } from './mailapp.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

// Estos es el microservicio MAIL

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    MailappModule,
    {
      transport: Transport.TCP,
    },
  );
  await app.listen();
}
bootstrap();
