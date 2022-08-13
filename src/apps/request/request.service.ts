import { Injectable } from "@nestjs/common";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { Request } from "./entities/request.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {File} from './entities/file.entity'
import {Env} from "./entities/env.entity";
import {EnvVar} from "./entities/env-var.entity";
import {User} from "./entities/user.entity";
import {UserSetting} from "./entities/user-setting.entity";
import {Workspace} from "./entities/workspace.entity";
import {WorkspaceMember} from "./entities/workspace-member.entity";


@Injectable()
export class RequestService extends TypeOrmCrudService<Request> {
  constructor(@InjectRepository(Request) repo) {
    super(repo);
  }
}

@Injectable()
export class FileService extends TypeOrmCrudService<File> {
  constructor(@InjectRepository(File) repo) {
    super(repo);
  }
}

@Injectable()
export class EnvService extends TypeOrmCrudService<Env> {
  constructor(@InjectRepository(Env) repo) {
    super(repo);
  }
}

@Injectable()
export class EnvVarService extends TypeOrmCrudService<EnvVar> {
  constructor(@InjectRepository(EnvVar) repo) {
    super(repo);
  }
}

@Injectable()
export class UserService extends TypeOrmCrudService<User> {
  constructor(@InjectRepository(User) repo) {
    super(repo);
  }
}

@Injectable()
export class UserSettingService extends TypeOrmCrudService<UserSetting> {
  constructor(@InjectRepository(UserSetting) repo) {
    super(repo);
  }
}

@Injectable()
export class WorkspaceService extends TypeOrmCrudService<Workspace> {
  constructor(@InjectRepository(Workspace) repo) {
    super(repo);
  }
}

@Injectable()
export class WorkspaceMemberService extends TypeOrmCrudService<WorkspaceMember> {
  constructor(@InjectRepository(WorkspaceMember) repo) {
    super(repo);
  }
}