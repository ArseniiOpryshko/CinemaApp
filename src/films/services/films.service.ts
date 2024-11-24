import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Film } from 'src/typeorm/entities/Film';
import { Repository } from 'typeorm';
import { createFilmDto } from '../dtos/CreateFilm.dto';
import { UpdateFilmDto } from '../dtos/UpdateFilm.dto';

@Injectable()
export class FilmsService {
  constructor(
    @InjectRepository(Film) private filmRepository: Repository<Film>,
  ) {}
  fetchFilms() {
    return this.filmRepository.find();
  }

  createFilm(filmData: createFilmDto) {
    const newFilm = this.filmRepository.create({ ...filmData });
    return this.filmRepository.save(newFilm);
  }

  updateFilm(id: number, updateFilmData: UpdateFilmDto) {
    return this.filmRepository.update({ id }, { ...updateFilmData });
  }
  deleteFilm(id: number) {
    return this.filmRepository.delete({ id });
  }
}
