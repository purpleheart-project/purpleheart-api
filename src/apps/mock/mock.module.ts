import { Module } from '@nestjs/common'
import { DatabaseModule } from '../database/database.module'
import {CatsService} from "./cats.service";
import {catsProviders} from "./providers/cats.providers";
import {MockController} from "./mock.controller";

@Module({
    imports: [DatabaseModule],
    controllers: [MockController],
    providers: [
        CatsService,
        ...catsProviders,
    ],
})
export class MockModule {}