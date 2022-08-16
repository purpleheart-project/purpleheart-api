import { Connection } from "typeorm";
import { RequestEntity } from "../entities/request.entity";
import { FileEntity } from "../entities/file.entity";
import {WorkspaceEntity} from "../entities/workspace.entity";
import {WorkspaceMemberEntity} from "../entities/workspace-member.entity";
import {EnvEntity} from "../entities/env.entity";
import {EnvVarEntity} from "../entities/env-var.entity";
import {UserEntity} from "../entities/user.entity";
import {UserSettingEntity} from "../entities/user-setting.entity";

export const requestProviders = [
  {
    provide: "RequestEntityRepository",
    useFactory: (connection: Connection) => connection.getRepository(RequestEntity),
    inject: ["DATABASE_CONNECTION"],
  },
  {
    provide: "FileEntityRepository",
    useFactory: (connection: Connection) => connection.getRepository(FileEntity),
    inject: ["DATABASE_CONNECTION"],
  },
  {
    provide: "EnvEntityRepository",
    useFactory: (connection: Connection) => connection.getRepository(EnvEntity),
    inject: ["DATABASE_CONNECTION"],
  },
  {
    provide: "EnvVarEntityRepository",
    useFactory: (connection: Connection) => connection.getRepository(EnvVarEntity),
    inject: ["DATABASE_CONNECTION"],
  },
  {
    provide: "UserEntityRepository",
    useFactory: (connection: Connection) => connection.getRepository(UserEntity),
    inject: ["DATABASE_CONNECTION"],
  },
  {
    provide: "UserSettingEntityRepository",
    useFactory: (connection: Connection) => connection.getRepository(UserSettingEntity),
    inject: ["DATABASE_CONNECTION"],
  },
  {
    provide: "WorkspaceEntityRepository",
    useFactory: (connection: Connection) => connection.getRepository(WorkspaceEntity),
    inject: ["DATABASE_CONNECTION"],
  },
  {
    provide: "WorkspaceMemberEntityRepository",
    useFactory: (connection: Connection) => connection.getRepository(WorkspaceMemberEntity),
    inject: ["DATABASE_CONNECTION"],
  },
];
