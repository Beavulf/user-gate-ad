import { IsArray, IsEnum, IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, IsUrl, IsUUID, Length, Matches, MaxLength, MinLength } from "class-validator";

export enum TaskTag {
    WORK = 'work',
    PERSONAL = 'personal',
    SCHOOL = 'school'
}

export class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    @Length(3,20)
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

    // @IsString()
    // @MinLength(8, {message: 'Пароль должен содержать не менее 8 символов'})
    // @IsOptional()
    // @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 
    //     {message: 'Пароль должен содержать как минимум одну заглавную букву, одну строчную букву, одну цифру и один спецсимвол'})
    // password: string;

    // @IsUrl({protocols: ['https'], require_protocol:false, require_port: false, require_valid_protocol: true, host_whitelist: ['google.com']}, {message:'Неправильный формат'})
    // webssiteUrl: string;

    // @IsUUID('all', {message: 'Неправильный формат'})
    // userId: string;
}