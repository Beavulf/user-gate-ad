import { Column, CreateDateColumn, Entity, Generated, PrimaryColumn, UpdateDateColumn } from "typeorm";

export enum Genre {
    ACTION = 'action',
    ADVENTURE = 'adventure',
    COMEDY = 'comedy'
}

@Entity({name: 'movies'})
export class MovieEntity {

    @PrimaryColumn()
    @Generated('uuid')
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

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

