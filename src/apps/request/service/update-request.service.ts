
import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { FileEntity } from "../entities/file.entity";
import { RequestEntity } from "../entities/request.entity";

@Injectable()
export class UpdateRequestService {
    constructor(
        @Inject('file_EntityRepository')
        private fileRepository: Repository<FileEntity>,
        @Inject('request_EntityRepository')
        private requestRepository: Repository<RequestEntity>,
    ) {}
    invoke(params){
        const newparams = JSON.parse(JSON.stringify(params))
        delete newparams.id
        return this.requestRepository.update({id:Number(params.id)},newparams)
    }
}
