import { IsArray, IsInt, IsNotEmpty, IsOptional, IsString, IsUUID, Length, Max, Min } from "class-validator";

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
    
    @IsNotEmpty()
    @IsArray()
    @IsUUID('4', {each: true})
    actorIds: string[];

    @IsNotEmpty()
    @IsString()
    imageUrl: string;
}