import { Column, Entity } from "typeorm";
import { CommonBaseEntity } from "../../../common/base/common-base.entity";

@Entity('env')
export class EnvEntity extends CommonBaseEntity {
  @Column({
    type: 'varchar',
    default: '',
    comment: '名称',
  })
  name: string;

  @Column({
    type: 'int',
    default: 0,
    comment: '团队id',
    name: 'workspace_id',
  })
  workspaceId: number;
}
