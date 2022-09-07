import { Module } from "@nestjs/common";
import {databaseProviders, mongodbProviders} from "./database.providers";

@Module({
  providers: [...mongodbProviders],
  exports: [...mongodbProviders],
})
export class DatabaseModule {}
