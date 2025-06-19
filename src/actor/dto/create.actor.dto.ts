import { IsNotEmpty, IsString } from "class-validator";

export class CreateActorDto {
    @IsNotEmpty()
    @IsString()
    name: string
}