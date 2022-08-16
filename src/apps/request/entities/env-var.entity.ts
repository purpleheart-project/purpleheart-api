import { Column, Entity } from "typeorm";
import { CommonBaseEntity } from "../../../common/base/common-base.entity";

@Entity('env_var')
export class EnvVarEntity extends CommonBaseEntity {
  @Column({
    type: 'varchar',
    default: '',
    comment: '变量名',
  })
  variable: string;

  @Column({
    type: 'varchar',
    default: '',
    comment: '初始值',
    name:'initial_value'
  })
  initialValue: string;

  @Column({
    type: 'int',
    default: 0,
    comment: '环境id',
    name: 'env_id',
  })
  envId: number;
}
