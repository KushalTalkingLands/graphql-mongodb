import { Field, InputType } from "@nestjs/graphql";
import { MinLength,IsDateString } from "class-validator";

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
}