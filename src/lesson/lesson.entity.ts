import {Entity,PrimaryColumn,Column,ObjectIdColumn} from 'typeorm';

@Entity()
export class Lesson{
    @ObjectIdColumn()
    _id:string;
    
    @PrimaryColumn()
    id: string;

    @Column()
    lesson_name: string;

    @Column()
    startdate: string;

    @Column()
    enddate:string;
}