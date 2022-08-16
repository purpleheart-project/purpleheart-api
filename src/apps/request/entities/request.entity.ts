import { Column, Entity } from "typeorm";
import { CommonBaseEntity } from "../../../common/base/common-base.entity";

@Entity('request')
export class RequestEntity extends CommonBaseEntity {
  @Column({
    type: 'varchar',
    default: '',
    comment: 'endpoint',
  })
  endpoint: string;

  @Column({
    type: 'varchar',
    default: '',
    comment: 'method',
  })
  method: string;
}
