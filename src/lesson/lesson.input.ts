import { Field, InputType ,ID} from "@nestjs/graphql";
import { MinLength,IsDateString,IsUUID } from "class-validator";

@InputType()
export class CreateLessonInput{
    @MinLength(1)
    @Field()
    lesson_name: string;

    @IsDateString()
    @Field()
    startdate: string;

    @IsDateString()
    @Field()
    enddate: string;

    @IsUUID("4",{each: true})
    @Field(()=>[ID],{defaultValue:[]})
    students: string[];
}