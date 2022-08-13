
import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { File } from "../entities/file.entity";
import { Request } from "../entities/request.entity";

@Injectable()
export class RetrieveRequestService {
    constructor(
        @Inject('file_REPOSITORY')
        private fileRepository: Repository<File>,
        @Inject('request_REPOSITORY')
        private requestRepository: Repository<Request>,
    ) {}

    invoke(params){
        console.log(params,params.id)
        return this.requestRepository.findOneBy({id: Number(params.id)})
    }
}
