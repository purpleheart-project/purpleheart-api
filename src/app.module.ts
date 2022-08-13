import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MockController } from './apps/mock/mock.controller';
import { RequestModule } from './apps/request/request.module';
import {join} from "path";
import { ServeStaticModule } from '@nestjs/serve-static'

@Module({
  imports: [RequestModule,    ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'client'),
  }),],
  controllers: [AppController, MockController],
  providers: [AppService],
})
export class AppModule {}
