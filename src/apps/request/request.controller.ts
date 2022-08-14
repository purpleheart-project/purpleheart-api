import {
  Body,
  Controller, Get, Post,
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
import {Request} from './entities/request.entity'
import {File} from './entities/file.entity'
import {Env} from "./entities/env.entity";
import {EnvVar} from "./entities/env-var.entity";
import {User} from "./entities/user.entity";
import {UserSetting} from "./entities/user-setting.entity";
import {Workspace} from "./entities/workspace.entity";
import {WorkspaceMember} from "./entities/workspace-member.entity";
import {AppService} from "../../app.service";
import {ListCollectionService} from "./service/list-collection.service";
import {CreateARequestService} from "./service/create-a-request.service";
import {CreateFileService} from "./service/create-file.service";

@Crud({
  model: {
    type: Request,
  },
})
@Controller("request")
export class RequestCrudController implements CrudController<Request> {
  constructor(public service: RequestService) {}
}

@Crud({
  model: {
    type: File
  }
})
@Controller("file")
export class FileCrudController implements CrudController<File> {
  constructor(public service: FileService) {}
}

@Crud({
  model: {
    type: Env,
  },
})
@Controller("env")
export class EnvCrudController implements CrudController<Env> {
  constructor(public service: EnvService) {}
}

@Crud({
  model: {
    type: EnvVar
  }
})
@Controller("envvar")
export class EnvVarCrudController implements CrudController<EnvVar> {
  constructor(public service: EnvVarService) {}
}

@Crud({
  model: {
    type: User,
  },
})
@Controller("user")
export class UserCrudController implements CrudController<User> {
  constructor(public service: UserService) {}
}

@Crud({
  model: {
    type: UserSetting
  }
})
@Controller("usersetting")
export class UserSettingCrudController implements CrudController<UserSetting> {
  constructor(public service: UserSettingService) {}
}

@Crud({
  model: {
    type: Workspace,
  },
})
@Controller("workspace")
export class WorkspaceCrudController implements CrudController<Workspace> {
  constructor(public service: WorkspaceService) {}
}

@Crud({
  model: {
    type: WorkspaceMember
  }
})
@Controller("workspacemember")
export class WorkspaceMemberCrudController implements CrudController<WorkspaceMember> {
  constructor(public service: WorkspaceMemberService) {}
}


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
  @Post('/collection')
  createACollection(@Body() params): any{
    return this.createFileService.invoke(params)
  }
}