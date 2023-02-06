import { ObjectType,Field,ID } from "@nestjs/graphql";

@ObjectType('Lesson')
export class LessonType{
    @Field(type=>ID)
    id: string;
    @Field()
    lesson_name: string;
    @Field()
    startdate: string;
    @Field()
    enddate:string;
}