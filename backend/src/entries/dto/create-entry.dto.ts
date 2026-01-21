import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  Max,
  Min
} from 'class-validator';

export class CreateEntryDto {
  @IsDateString()
  date: string;

  @IsString()
  @IsNotEmpty()
  project: string;

  @IsNumber()
  @IsPositive()
  @Max(24)
  @Min(0.01, { message: 'Hours must be greater than 0' })
  hours: number;

  @IsString()
  @IsNotEmpty()
  description: string;
}
