import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  Max,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateEntryDto {
  @IsDateString()
  date: string;

  @IsString()
  @IsNotEmpty()
  project: string;

  @Type(() => Number)
  @IsNumber({ allowNaN: false, allowInfinity: false })
  @IsPositive( { message: 'Hours must be greater than 0' })
  @Max(24, { message: 'Hours per day cannot exceed 24' })
  hours: number;

  @IsString()
  @IsNotEmpty()
  description: string;
}
