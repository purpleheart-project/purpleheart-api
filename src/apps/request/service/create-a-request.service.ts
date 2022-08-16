import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { FileEntity } from "../entities/file.entity";
import { RequestEntity } from "../entities/request.entity";

@Injectable()
export class CreateARequestService {
    constructor(
        @Inject('FileEntityRepository')
        private fileRepository: Repository<FileEntity>,
        @Inject('RequestEntityRepository')
        private requestRepository: Repository<RequestEntity>,
    ) {}
    async invoke(params) {


        const a = await this.requestRepository.insert({method:params.method,endpoint:params.endpoint})
        console.log(a,'a')
        const b = await this.fileRepository.insert({name:params.name,nodeType:1,pid:params.pid,relationshipRequestId:a.identifiers[0].id})

        return{a,b}
        // return { a, b };
    }
}
