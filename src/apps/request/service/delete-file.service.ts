import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { FileEntity } from "../entities/file.entity";
import { RequestEntity } from "../entities/request.entity";

@Injectable()
export class DeleteFileService {
    constructor(
        @Inject('file_EntityRepository')
        private fileRepository: Repository<FileEntity>,
        @Inject('request_EntityRepository')
        private requestRepository: Repository<RequestEntity>,
    ) {}
    async invoke(params) {
        //判断类型1 2 3

        const {id} = params


        const b = await this.fileRepository.delete({ id });

        return { b };
    }
}
