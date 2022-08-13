
import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { File } from "../entities/file.entity";
import { Request } from "../entities/request.entity";

@Injectable()
export class UpdateRequestService {
    constructor(
        @Inject('file_REPOSITORY')
        private fileRepository: Repository<File>,
        @Inject('request_REPOSITORY')
        private requestRepository: Repository<Request>,
    ) {}
    invoke(params){
        const newparams = JSON.parse(JSON.stringify(params))
        delete newparams.id
        return this.requestRepository.update({id:Number(params.id)},newparams)
    }
}
