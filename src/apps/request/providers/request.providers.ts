import { Connection } from "typeorm";
import { Request } from "../entities/request.entity";
import { File } from "../entities/file.entity";
import {Workspace} from "../entities/workspace.entity";
import {WorkspaceMember} from "../entities/workspace-member.entity";
import {Env} from "../entities/env.entity";
import {EnvVar} from "../entities/env-var.entity";
import {User} from "../entities/user.entity";
import {UserSetting} from "../entities/user-setting.entity";

export const requestProviders = [
  {
    provide: "RequestRepository",
    useFactory: (connection: Connection) => connection.getRepository(Request),
    inject: ["DATABASE_CONNECTION"],
  },
  {
    provide: "FileRepository",
    useFactory: (connection: Connection) => connection.getRepository(File),
    inject: ["DATABASE_CONNECTION"],
  },
  {
    provide: "EnvRepository",
    useFactory: (connection: Connection) => connection.getRepository(Env),
    inject: ["DATABASE_CONNECTION"],
  },
  {
    provide: "EnvVarRepository",
    useFactory: (connection: Connection) => connection.getRepository(EnvVar),
    inject: ["DATABASE_CONNECTION"],
  },
  {
    provide: "UserRepository",
    useFactory: (connection: Connection) => connection.getRepository(User),
    inject: ["DATABASE_CONNECTION"],
  },
  {
    provide: "UserSettingRepository",
    useFactory: (connection: Connection) => connection.getRepository(UserSetting),
    inject: ["DATABASE_CONNECTION"],
  },
  {
    provide: "WorkspaceRepository",
    useFactory: (connection: Connection) => connection.getRepository(Workspace),
    inject: ["DATABASE_CONNECTION"],
  },
  {
    provide: "WorkspaceMemberRepository",
    useFactory: (connection: Connection) => connection.getRepository(WorkspaceMember),
    inject: ["DATABASE_CONNECTION"],
  },
];
