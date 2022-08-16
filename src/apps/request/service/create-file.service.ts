import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { FileEntity } from "../entities/file.entity";
import { RequestEntity } from "../entities/request.entity";

@Injectable()
export class CreateFileService {
  constructor(
      @Inject('FileEntityRepository')
      private fileRepository: Repository<FileEntity>,
      @Inject('RequestEntityRepository')
      private requestRepository: Repository<RequestEntity>,
  ) {}
  async invoke(currentUser, params) {
    console.log(currentUser,'currentUser')
    //判断类型1 2 3

    const { nodeType,name,pid } = params;
    let a: any = {};
    let relationshipRequestId = 0
    // 请求 或者 eg
    if (nodeType === 1 || nodeType === 2) {
      a = await this.requestRepository.insert({ endpoint: "123" });
      relationshipRequestId = a.identifiers[0].id
      // console.log(a.identifiers[0].id,'a')
    }

    const b = await this.fileRepository.insert({ name: name,nodeType:nodeType,pid:pid,relationshipRequestId:relationshipRequestId,creator: currentUser });

    return { a, b };
  }
}
