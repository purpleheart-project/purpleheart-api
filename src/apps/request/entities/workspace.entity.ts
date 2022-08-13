import { Column, Entity } from "typeorm";
import { CommonBaseEntity } from "../../../common/base/common-base.entity";

@Entity('workspace')
export class Workspace extends CommonBaseEntity {
  @Column({
    type: 'varchar',
    default: '',
    comment: '名称',
  })
  name: string;

  @Column({
    type: 'int',
    default: 0,
    comment: '创建人',
  })
  creator: number;
}
