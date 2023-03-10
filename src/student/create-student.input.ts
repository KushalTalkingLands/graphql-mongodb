import { Field, InputType } from "@nestjs/graphql";

import { MinLength,IsDateString } from "class-validator";

@InputType()
export class CreateStudentInput{
    @MinLength(1)
    @Field()
    firstname: string;

    @MinLength(1)
    @Field()
    lastname: string;

    // @Field()
    // enddate: string;
}