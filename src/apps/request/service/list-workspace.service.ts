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
export class ListWorkspaceService {
    constructor(
        @Inject('workspace_EntityRepository')
        private workspaceRepository: Repository<WorkspaceEntity>,
    ) {}
    async listworkspace(params) {
        //判断类型1 2 3
        const arr = await this.workspaceRepository.find();
        return arr
    }
}
