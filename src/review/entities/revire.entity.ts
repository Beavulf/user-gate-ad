import { Column, CreateDateColumn, Entity, Generated, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'reviews'})
export class ReviewEntity {

    @PrimaryColumn()
    @Generated('uuid')
    id: string;

    @Column({
        type: 'varchar',
        length: 152,
        unique: true,
    })
    text: string;

    @Column({
        type: 'decimal',
        precision: 2,
        scale: 1,
        default: 0.0
    })
    rating: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

