import { MovieEntity } from "src/movie/entities/movie.entity";
import { Column, CreateDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'actors'})
export class ActorEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: 'varchar',
        length: 64,
    })
    name: string;

    @ManyToMany(()=>MovieEntity, (movie) => movie.actors)
    movies: MovieEntity[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

