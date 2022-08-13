import {
  Controller,
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

@Crud({
  model: {
    type: Request,
  },
})
@Controller("request")
export class RequestController implements CrudController<Request> {
  constructor(public service: RequestService) {}
}

@Crud({
  model: {
    type: File
  }
})
@Controller("file")
export class FileController implements CrudController<File> {
  constructor(public service: FileService) {}
}

@Crud({
  model: {
    type: Env,
  },
})
@Controller("env")
export class EnvController implements CrudController<Env> {
  constructor(public service: EnvService) {}
}

@Crud({
  model: {
    type: EnvVar
  }
})
@Controller("envvar")
export class EnvVarController implements CrudController<EnvVar> {
  constructor(public service: EnvVarService) {}
}

@Crud({
  model: {
    type: User,
  },
})
@Controller("user")
export class UserController implements CrudController<User> {
  constructor(public service: UserService) {}
}

@Crud({
  model: {
    type: UserSetting
  }
})
@Controller("usersetting")
export class UserSettingController implements CrudController<UserSetting> {
  constructor(public service: UserSettingService) {}
}

@Crud({
  model: {
    type: Workspace,
  },
})
@Controller("workspace")
export class WorkspaceController implements CrudController<Workspace> {
  constructor(public service: WorkspaceService) {}
}

@Crud({
  model: {
    type: WorkspaceMember
  }
})
@Controller("workspacemember")
export class WorkspaceMemberController implements CrudController<WorkspaceMember> {
  constructor(public service: WorkspaceMemberService) {}
}