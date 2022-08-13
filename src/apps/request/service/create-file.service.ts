import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { File } from "../entities/file.entity";
import { Request } from "../entities/request.entity";

@Injectable()
export class CreateFileService {
  constructor(
    @Inject('file_REPOSITORY')
    private fileRepository: Repository<File>,
    @Inject('request_REPOSITORY')
    private requestRepository: Repository<Request>,
  ) {}
  async invoke(params) {
    //判断类型1 2 3

    const { type,name,pid } = params;
    let a: any = {};
    let relationshipRequestId = 0
    // 请求 或者 eg
    if (type === 1 || type === 2) {
      a = await this.requestRepository.insert({ endpoint: "123" });
      relationshipRequestId = a.identifiers[0].id
      // console.log(a.identifiers[0].id,'a')
    }

    const b = await this.fileRepository.insert({ name: name,type:type,pid:pid,relationshipRequestId:relationshipRequestId });

    return { a, b };
  }
}
