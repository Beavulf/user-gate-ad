import { ActorEntity } from "src/actor/entities/actor.entity";
import { ReviewEntity } from "src/review/entities/review.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { MoviePosterEntity } from "./poster.entity";

export enum Genre {
    ACTION = 'action',
    ADVENTURE = 'adventure',
    COMEDY = 'comedy'
}

@Entity({name: 'movies'})
export class MovieEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: 'varchar',
        length: 152,
        unique: true,
    })
    title: string;

    @Column({
        type: 'int',
        unsigned: true,
        name: 'release_year',
    })
    releaseYear: number;

    @Column({
        type: 'decimal',
        precision: 2,
        scale: 1,
        default: 0.0
    })
    rating: number;

    @Column({
        type: 'boolean',
        default: false,
        name: 'is_avalibale',
    })
    isAvalibale: boolean;

    @Column({
        type: 'date',
        nullable: true,
    })
    releaseDate: string;

    @Column({
        type: 'enum',
        enum: Genre,
        default: Genre.ACTION,
    })
    genre: Genre;

    @Column({
        type: 'uuid',
        name: 'poster_id',
        nullable: true,
    })
    posterId: string;
    
    @OneToOne(() => MoviePosterEntity, (poster) => poster.movie, {onDelete: 'CASCADE', nullable:true})
    @JoinColumn({name: 'poster_id'})
    poster:MoviePosterEntity | null;

    @OneToMany(() => ReviewEntity, (review) => review.movie)
    reviews: ReviewEntity[]

    @ManyToMany(() => ActorEntity, (actor) => actor.movies)
    @JoinTable({
        name: 'movie_actors',
        joinColumn: {
            name: 'movie_id',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'actor_id',
            referencedColumnName: 'id',
        }
    })
    actors: ActorEntity[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

