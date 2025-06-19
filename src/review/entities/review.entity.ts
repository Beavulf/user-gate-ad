import { MovieEntity } from "src/movie/entities/movie.entity";
import { Column, CreateDateColumn, Entity, Generated, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'reviews'})
export class ReviewEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: 'text',
    })
    text: string;

    @Column({
        type: 'decimal',
        precision: 2,
        scale: 1,
        default: 0.0
    })
    rating: number;

    @Column({
        type:'uuid',
        name: 'movie_id',
    })
    movieId: string;

    @ManyToOne(()=>MovieEntity, (movie) => movie.reviews, {onDelete: 'CASCADE'})
    @JoinColumn({name: 'movie_id'})
    movie: MovieEntity;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

