import { Column, Entity } from "typeorm";
import { CommonBaseEntity } from "../../../common/base/common-base.entity";

@Entity('workspace_member')
export class WorkspaceMember extends CommonBaseEntity {
  @Column({
    type: 'int',
    default: 0,
    comment: '成员id',
    name: 'member_id',
  })
  memberId: number;

  @Column({
    type: 'int',
    default: 0,
    comment: 'workspaceId',
    name: 'workspace_id',
  })
  workspaceId: number;
}
