import { Column, Entity } from 'typeorm'
import { CommonBaseEntity } from '../../../common/base/common-base.entity'

@Entity('user_setting')
export class UserSetting extends CommonBaseEntity {
    @Column({
        type: 'varchar',
        default: '',
        comment: '主题颜色',
        name: 'themeColor',
    })
    theme_color: string

    @Column({
        type: 'varchar',
        default: '',
        comment: '主题',
        name: 'theme',
    })
    theme: string

    @Column({
        type: 'int',
        default: 0,
        comment: '用户id',
        name: 'user_id',
    })
    userId: number
}