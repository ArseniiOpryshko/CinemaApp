import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'films' })
export class Film {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  publishDate: Date;

  @Column()
  filmImage: string;

  @Column({ nullable: true })
  rating: number;
}
