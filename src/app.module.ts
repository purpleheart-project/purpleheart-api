import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MockController } from './apps/mock/mock.controller';
import { RequestModule } from './apps/request/request.module';
import {join} from "path";
import { ServeStaticModule } from '@nestjs/serve-static'
import {AuthModule} from "./apps/auth/auth.module";
import {MockModule} from "./apps/mock/mock.module";
import {CoreModule} from "./apps/core/core.module";

@Module({
  imports: [CoreModule,AuthModule,ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'client'),
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
