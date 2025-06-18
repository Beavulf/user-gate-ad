import { IsInt, IsNotEmpty, IsOptional, IsString, Length, Max, Min } from "class-validator";

export class MovieDTO {
    @IsNotEmpty()
    @IsString()
    @Length(3,25)
    title: string;

    @IsNotEmpty()
    @IsInt()
    @Min(1900)
    @Max(new Date().getFullYear())
    releaseYear: number;
    
}