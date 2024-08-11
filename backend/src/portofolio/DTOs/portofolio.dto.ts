import { IsBoolean, IsNotEmpty, IsOptional, IsString, IsUrl } from "class-validator";

export class CreatePortofolioDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsOptional()
    @IsUrl()
    imageUrl?: string;

    @IsOptional()
    @IsUrl()
    clientLink?: string;

    @IsOptional()
    @IsBoolean()
    isVisible?: boolean = true;
}

export class UpdatePortofolioDto {
    @IsOptional()
    @IsString()
    title?: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsOptional()
    @IsUrl()
    imageURL?: string;

    @IsOptional()
    @IsUrl()
    clientLink?: string;

    @IsOptional()
    @IsBoolean()
    isVisible?: boolean;
}