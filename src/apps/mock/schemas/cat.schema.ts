import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type CatDocument = Cat & Document

@Schema()
export class Cat {
    @Prop()
    tags: string[]
    @Prop()
    msg: string
    @Prop({
        default:()=>new Date()
    })
    createdAt: Date
}

export const CatSchema = SchemaFactory.createForClass(Cat)