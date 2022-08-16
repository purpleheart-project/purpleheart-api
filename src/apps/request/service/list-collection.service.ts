// 1. 获取目录tree
// 2. 根据fileId获取eg或request的详情
// 3
// Get directory tree

import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { FileEntity } from "../entities/file.entity";
import { RequestEntity } from "../entities/request.entity";
import {WorkspaceEntity} from "../entities/workspace.entity";

@Injectable()
export class ListCollectionService {
    constructor(
        @Inject('FileEntityRepository')
        private fileRepository: Repository<FileEntity>,
        @Inject('RequestEntityRepository')
        private requestRepository: Repository<RequestEntity>,
    ) {}
    async invoke() {


        const arr = await this.fileRepository
            .createQueryBuilder('file')
            .where({})
            .leftJoinAndSelect(RequestEntity, 'request', `request.id=file.relationship_request_id`)
            .select([
                'file.id as id',
                'file.name as name',
                'file.pid as pid',
                'file.node_type as nodeType',
                'file.relationship_request_id as relationshipRequestId',
                'request.method as requestMethod',
            ])
            .getRawMany()


        //判断类型1 2 3
        // const arr = await this.fileRepository.find();
        // const rrr = await this.fileRepository
        // const allRequests = await this.requestRepository.find()
        function arrToTree(arr: any, pid = 0) {
            const newArr: any = [];
            arr.forEach((item: any) => {
                if (item.pid === pid) {
                    newArr.push({
                        ...item,
                        key:String(item.id),
                        title:item.name,
                        children: arrToTree(arr, item.id)
                    });
                }
            });
            return newArr;
        }
        return arrToTree(arr)
    }
}
