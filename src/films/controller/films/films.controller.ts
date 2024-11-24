import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { createFilmDto } from 'src/films/dtos/CreateFilm.dto';
import { UpdateFilmDto } from 'src/films/dtos/UpdateFilm.dto';
import { FilmsService } from 'src/films/services/films.service';

@Controller('films')
export class FilmsController {
  constructor(private filmService: FilmsService) {}
  @Get()
  async getFilms() {
    const films = await this.filmService.fetchFilms();
    return films;
  }

  @UsePipes(new ValidationPipe())
  @Post()
  createFilm(@Body() createFilmDto: createFilmDto) {
    return this.filmService.createFilm(createFilmDto);
  }
  @Put(':id')
  async updateFilmById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateFilmDto: UpdateFilmDto,
  ) {
    await this.filmService.updateFilm(id, updateFilmDto);
  }

  @Delete(':id')
  async deleteFilmById(@Param('id', ParseIntPipe) id: number) {
    await this.filmService.deleteFilm(id);
  }
}
