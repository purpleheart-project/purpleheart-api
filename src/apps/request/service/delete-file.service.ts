import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { File } from "../entities/file.entity";
import { Request } from "../entities/request.entity";

@Injectable()
export class DeleteFileService {
    constructor(
        @Inject('file_REPOSITORY')
        private fileRepository: Repository<File>,
        @Inject('request_REPOSITORY')
        private requestRepository: Repository<Request>,
    ) {}
    async invoke(params) {
        //判断类型1 2 3

        const {id} = params


        const b = await this.fileRepository.delete({ id });

        return { b };
    }
}
