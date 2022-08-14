import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { requestProviders } from './providers/request.providers';
import {
    FileCrudController,
    RequestCrudController,
    EnvCrudController,
    EnvVarCrudController,
    UserCrudController,
    UserSettingCrudController,
    WorkspaceCrudController,
    WorkspaceMemberCrudController,
    RequestController
} from './request.controller';
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
import {ListCollectionService} from "./service/list-collection.service";
import {CreateARequestService} from "./service/create-a-request.service";

@Module({
  imports: [DatabaseModule],
  controllers: [RequestController,FileCrudController, RequestCrudController,EnvCrudController,EnvVarCrudController,UserCrudController,UserSettingCrudController,WorkspaceCrudController,WorkspaceMemberCrudController],
  providers: [
      RequestService,
      FileService,
      EnvService,
      EnvVarService,
      UserService,
      UserSettingService,
      WorkspaceService,
      WorkspaceMemberService,
      ListCollectionService,
      CreateARequestService,
      CreateFileService,
    ...requestProviders,
  ]
})
export class RequestModule {}
