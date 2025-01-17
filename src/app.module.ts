import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    username: 'root',
    host: 'localhost',
    port: 3306,
    password: 'Jazzband123',
    database: 'to_do',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true
  }),UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
