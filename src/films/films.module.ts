import { Module } from '@nestjs/common';
import { FilmsController } from './controller/films/films.controller';
import { FilmsService } from './services/films.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Film } from 'src/typeorm/entities/Film';

@Module({
  imports: [TypeOrmModule.forFeature([Film])],
  controllers: [FilmsController],
  providers: [FilmsService],
})
export class FilmsModule {}
