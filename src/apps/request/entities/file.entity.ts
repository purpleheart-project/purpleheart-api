import { Column, Entity } from "typeorm";
import { CommonBaseEntity } from "../../../common/base/common-base.entity";

@Entity('file')
export class FileEntity extends CommonBaseEntity {
  @Column({
    type: 'varchar',
    default: '',
    comment: 'name',
  })
  name: string;

  @Column({
    type: 'int',
    default: 0,
    comment: '父id',
  })
  pid: number;

  // 1请求 2e.g 3文件夹
  @Column({
    type: 'int',
    default: 0,
    comment: '类型',
    name:'node_type'
  })
  nodeType: number;

  @Column({
    type: 'int',
    default: 0,
    comment: '关系请求的id',
    name:'relationship_request_id'
  })
  relationshipRequestId: number;

  @Column({
    type: 'int',
    default: 0,
    comment: '团队id',
    name: 'workspace_id',
  })
  workspaceId: number;

  @Column({
    type: 'int',
    default: 0,
    comment: '创建人',
  })
  creator: number;
}
