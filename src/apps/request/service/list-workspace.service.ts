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
export class ListWorkspaceService {
    constructor(
        @Inject('workspace_REPOSITORY')
        private workspaceRepository: Repository<Workspace>,
    ) {}
    async listworkspace(params) {
        //判断类型1 2 3
        const arr = await this.workspaceRepository.find();
        return arr
    }
}
