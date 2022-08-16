import { Injectable } from "@nestjs/common";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { RequestEntity } from "./entities/request.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {FileEntity} from './entities/file.entity'
import {EnvEntity} from "./entities/env.entity";
import {EnvVarEntity} from "./entities/env-var.entity";
import {UserEntity} from "./entities/user.entity";
import {UserSettingEntity} from "./entities/user-setting.entity";
import {WorkspaceEntity} from "./entities/workspace.entity";
import {WorkspaceMemberEntity} from "./entities/workspace-member.entity";


@Injectable()
export class RequestService extends TypeOrmCrudService<RequestEntity> {
  constructor(@InjectRepository(RequestEntity) repo) {
    super(repo);
  }
}

@Injectable()
export class FileService extends TypeOrmCrudService<FileEntity> {
  constructor(@InjectRepository(FileEntity) repo) {
    super(repo);
  }
}

@Injectable()
export class EnvService extends TypeOrmCrudService<EnvEntity> {
  constructor(@InjectRepository(EnvEntity) repo) {
    super(repo);
  }
}

@Injectable()
export class EnvVarService extends TypeOrmCrudService<EnvVarEntity> {
  constructor(@InjectRepository(EnvVarEntity) repo) {
    super(repo);
  }
}

@Injectable()
export class UserService extends TypeOrmCrudService<UserEntity> {
  constructor(@InjectRepository(UserEntity) repo) {
    super(repo);
  }
}

@Injectable()
export class UserSettingService extends TypeOrmCrudService<UserSettingEntity> {
  constructor(@InjectRepository(UserSettingEntity) repo) {
    super(repo);
  }
}

@Injectable()
export class WorkspaceService extends TypeOrmCrudService<WorkspaceEntity> {
  constructor(@InjectRepository(WorkspaceEntity) repo) {
    super(repo);
  }
}

@Injectable()
export class WorkspaceMemberService extends TypeOrmCrudService<WorkspaceMemberEntity> {
  constructor(@InjectRepository(WorkspaceMemberEntity) repo) {
    super(repo);
  }
}