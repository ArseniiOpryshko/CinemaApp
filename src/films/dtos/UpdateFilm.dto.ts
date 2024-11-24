import { IsNotEmpty } from 'class-validator';

export class UpdateFilmDto {
  name: string;
  description: string;
  filmImage: string;
  publishDate: Date;
}
