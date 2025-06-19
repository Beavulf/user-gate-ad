import { ActorEntity } from "src/actor/entities/actor.entity";
import { ReviewEntity } from "src/review/entities/review.entity";
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { MovieEntity } from "./movie.entity";

export enum Genre {
    ACTION = 'action',
    ADVENTURE = 'adventure',
    COMEDY = 'comedy'
}

@Entity({name: 'movie_posters'})
export class MoviePosterEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: 'varchar',
        length: 255,
        unique: true,
    })
    url: string;

    @OneToOne(()=>MovieEntity, (movie) => movie.poster)
    movie: MovieEntity;

    @CreateDateColumn()
    created_at: Date;

}

