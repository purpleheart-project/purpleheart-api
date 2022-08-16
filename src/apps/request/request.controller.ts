import {
  Body,
  Controller, Get, Post,
  Request, UseGuards
} from "@nestjs/common";
import {
  EnvService,
  EnvVarService,
  FileService,
  RequestService,
  UserService,
  UserSettingService,
  WorkspaceMemberService,
  WorkspaceService
} from "./request.service";
import {Crud, CrudController} from "@nestjsx/crud";
import {RequestEntity} from './entities/request.entity'
import {FileEntity} from './entities/file.entity'
import {EnvEntity} from "./entities/env.entity";
import {EnvVarEntity} from "./entities/env-var.entity";
import {UserEntity} from "./entities/user.entity";
import {UserSettingEntity} from "./entities/user-setting.entity";
import {WorkspaceEntity} from "./entities/workspace.entity";
import {WorkspaceMemberEntity} from "./entities/workspace-member.entity";
import {AppService} from "../../app.service";
import {ListCollectionService} from "./service/list-collection.service";
import {CreateARequestService} from "./service/create-a-request.service";
import {CreateFileService} from "./service/create-file.service";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";

@Crud({
  model: {
    type: RequestEntity,
  },
})
@Controller("request")
export class RequestCrudController implements CrudController<RequestEntity> {
  constructor(public service: RequestService) {}
}

@Crud({
  model: {
    type: FileEntity
  }
})
@Controller("file")
export class FileCrudController implements CrudController<FileEntity> {
  constructor(public service: FileService) {}
}

@Crud({
  model: {
    type: EnvEntity,
  },
})
@Controller("env")
export class EnvCrudController implements CrudController<EnvEntity> {
  constructor(public service: EnvService) {}
}

@Crud({
  model: {
    type: EnvVarEntity
  }
})
@Controller("envvar")
export class EnvVarCrudController implements CrudController<EnvVarEntity> {
  constructor(public service: EnvVarService) {}
}

@Crud({
  model: {
    type: UserEntity,
  },
})
@Controller("user")
export class UserCrudController implements CrudController<UserEntity> {
  constructor(public service: UserService) {}
}

@Crud({
  model: {
    type: UserSettingEntity
  }
})
@Controller("usersetting")
export class UserSettingCrudController implements CrudController<UserSettingEntity> {
  constructor(public service: UserSettingService) {}
}

@Crud({
  model: {
    type: WorkspaceEntity,
  },
})
@Controller("workspace")
export class WorkspaceCrudController implements CrudController<WorkspaceEntity> {
  constructor(public service: WorkspaceService) {}
}

@Crud({
  model: {
    type: WorkspaceMemberEntity
  }
})
@Controller("workspacemember")
export class WorkspaceMemberCrudController implements CrudController<WorkspaceMemberEntity> {
  constructor(public service: WorkspaceMemberService) {}
}

// 手撸的接口
@Controller("")
export class RequestController {
  constructor(
      private readonly listCollectionService: ListCollectionService,
  private readonly createARequestService: CreateARequestService,
      private readonly createFileService: CreateFileService
  ) {}

  @Get('/collection')
  listCollection(): any {
    return this.listCollectionService.invoke()
  }
  @UseGuards(JwtAuthGuard)
  @Post('/collection')
  createACollection(@Body() params,@Request() request: { user: { id: number } }): any{
    return this.createFileService.invoke(request.user.id,params)
  }
}