import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { requestProviders } from './providers/request.providers';
import {FileController, RequestController,EnvController,EnvVarController,UserController,UserSettingController,WorkspaceController,WorkspaceMemberController} from './request.controller';
import {
    EnvService,
    EnvVarService,
    FileService,
    RequestService,
    UserService,
    UserSettingService, WorkspaceMemberService, WorkspaceService
} from './request.service';
import { CreateFileService } from './service/create-file.service';
import { RetrieveFileService } from './service/retrieve-file.service';
import { RetrieveRequestService } from './service/retrieve-request.service';
import { UpdateRequestService } from './service/update-request.service';
import { DeleteFileService } from './service/delete-file.service';
import {ListWorkspaceService} from "./service/list-workspace.service";

@Module({
  imports: [DatabaseModule],
  controllers: [FileController, RequestController,EnvController,EnvVarController,UserController,UserSettingController,WorkspaceController,WorkspaceMemberController],
  providers: [
      RequestService,
      FileService,
      EnvService,
      EnvVarService,
      UserService,
      UserSettingService,
      WorkspaceService,
      WorkspaceMemberService,
    ...requestProviders,
  ]
})
export class RequestModule {}
