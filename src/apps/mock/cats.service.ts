import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import {CatDocument} from "./schemas/cat.schema";
// import { Cat } from './interfaces/cat.interface';
// import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatsService {
    constructor(
        @Inject('MONGODB_CONNECTION_CatRepository')
        private coverageModel: Model<CatDocument>,
    ) {}

    async listCat(createCatDto: any): Promise<any> {
        // const createdCat = new this.coverageModel.find({});
        return this.coverageModel.insertMany([{
            name:"zt"
        }])
    }
}