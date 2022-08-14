// 1. 获取目录tree
// 2. 根据fileId获取eg或request的详情
// 3
// Get directory tree

import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { File } from "../entities/file.entity";
import { Request } from "../entities/request.entity";
import {Workspace} from "../entities/workspace.entity";

@Injectable()
export class ListCollectionService {
    constructor(
        @Inject('FileRepository')
        private fileRepository: Repository<File>,
        @Inject('RequestRepository')
        private requestRepository: Repository<Request>,
    ) {}
    async invoke() {
        //判断类型1 2 3
        const arr = await this.fileRepository.find();
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
