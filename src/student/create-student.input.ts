import {Field, InputType} from "@nestjs/graphql";
import {MaxLength, MinLength} from "class-validator";

@InputType()
export class CreateStudentInput {
    @MinLength(1)
    @MaxLength(32)
    @Field()
    firstName: string;

    @MinLength(1)
    @MaxLength(32)
    @Field()
    lastName: string;
}