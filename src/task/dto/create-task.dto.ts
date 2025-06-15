import { IsArray, IsEnum, IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, IsUrl, IsUUID, Length, Matches, MaxLength, MinLength } from "class-validator";
import { StartsWith } from "../decorators/starts-with.decorator";

export enum TaskTag {
    WORK = 'work',
    PERSONAL = 'personal',
    SCHOOL = 'school'
}

export class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    @Length(3,20)
    @StartsWith('Task:')
    title: string;

    @IsString({message: 'Тип строка'})
    @IsOptional()
    description: string;

    @IsInt({message: 'Тип целое'})
    @IsOptional()
    @IsPositive()
    priority: number;

    @IsOptional()
    @IsArray()
    @IsNotEmpty()
    @IsEnum(TaskTag, {message: 'Недопустимое значение', each: true})
    tags: TaskTag[];

}