import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import {Repository} from 'typeorm';
import {v4 as uuid} from 'uuid';
import { CreateLessonInput } from './lesson.input';

@Injectable()
export class LessonService {
    constructor(
        @InjectRepository(Lesson) private lessonRepository:Repository<Lesson>
    ) {}

    async getLesson(id: string): Promise<Lesson> {
        return this.lessonRepository.findOneBy({id});
    }

    async getallLesson():Promise<Lesson[]> {
        return this.lessonRepository.find();
    }
    async createLesson(CreateLessonInput:CreateLessonInput):Promise<Lesson> {
        const {lesson_name,startdate,enddate} = CreateLessonInput;
        const lesson = this.lessonRepository.create({
            id:uuid(),
            lesson_name,
            startdate,
            enddate 
        });

        return this.lessonRepository.save(lesson); 
    }
}
