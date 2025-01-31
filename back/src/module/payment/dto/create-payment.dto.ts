import { IsNumber, IsString, IsOptional } from 'class-validator';

export class CreatePaymentDto {
    @IsNumber()
    amount: number;

    @IsString()
    currency: string;

    @IsOptional()
    @IsString()
    description?: string;
}