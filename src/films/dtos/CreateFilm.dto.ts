import { IsNotEmpty, isString } from 'class-validator';

export class createFilmDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  description: string;
  @IsNotEmpty()
  filmImage: string;
  publishDate: Date;
}
