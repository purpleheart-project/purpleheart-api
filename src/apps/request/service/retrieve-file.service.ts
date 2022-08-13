// 1. 获取目录tree
// 2. 根据fileId获取eg或request的详情
// 3
// Get directory tree

import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { File } from "../entities/file.entity";
import { Request } from "../entities/request.entity";

@Injectable()
export class RetrieveFileService {
  constructor(
    @Inject('file_REPOSITORY')
    private fileRepository: Repository<File>,
    @Inject('request_REPOSITORY')
    private requestRepository: Repository<Request>,
  ) {}
  async getDirectoryTree(params) {
    //判断类型1 2 3

    const arr = await this.fileRepository.find();

    // // 方法二
    // function arrToTree(arr, pid = 0) {
    //   const newArr = [];
    //   arr.forEach((item) => {
    //     if (item.pid === pid) {
    //       newArr.push({
    //         ...item,
    //         children: arrToTree(arr, item.id),
    //       },);
    //     }
    //   },);
    //   return newArr;
    // }

    return arr
  }
}
