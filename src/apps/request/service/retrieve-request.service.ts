
import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { FileEntity } from "../entities/file.entity";
import { RequestEntity } from "../entities/request.entity";

@Injectable()
export class RetrieveRequestService {
    constructor(
        @Inject('file_EntityRepository')
        private fileRepository: Repository<FileEntity>,
        @Inject('request_EntityRepository')
        private requestRepository: Repository<RequestEntity>,
    ) {}

    invoke(params){
        console.log(params,params.id)
        return this.requestRepository.findOneBy({id: Number(params.id)})
    }
}
