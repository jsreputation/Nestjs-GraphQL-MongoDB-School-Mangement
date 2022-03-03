import {Field, InputType} from "@nestjs/graphql";
import {IsDateString, MaxLength, MinLength} from "class-validator";

@InputType()
export class CreateLessonInput {
    @MinLength(1)
    @MaxLength(32)
    @Field()
    name: string;

    @IsDateString()
    @Field()
    startDate: string;

    @IsDateString()
    @Field()
    endDate: string;
}