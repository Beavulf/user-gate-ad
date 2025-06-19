import { IsNotEmpty, IsNumber, IsString, IsUUID, Max, Min } from "class-validator"

export class CreateReviewDto {
    @IsNotEmpty()
    @IsString()
    text: string

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    @Max(10)
    rating: number

    @IsUUID()
    movieId: string
}