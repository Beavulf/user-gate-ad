import { IsBoolean, IsNotEmpty, IsOptional, IsString, Length } from "class-validator";

export class UpdateTaskDto {
    @IsString({message: 'Тип строка'})
    @IsNotEmpty({message: 'Поле не может быть пустым'})
    @Length(3,20, {message: 'Не больше 20 не меньше 3'})
    title: string;

    @IsBoolean({message: 'Тип булеан'})
    isCompleted: boolean;
}