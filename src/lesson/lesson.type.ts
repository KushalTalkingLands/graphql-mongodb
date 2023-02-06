import { ObjectType,Field,ID } from "@nestjs/graphql";
import { StudentType } from "src/student/student.type";

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

    @Field(type => [StudentType])
    students:string[];
}