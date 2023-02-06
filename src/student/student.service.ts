import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import { Student } from './student.entity';
import {Repository} from 'typeorm';
import { CreateStudentInput } from './create-student.input';
import {v4 as uuid} from 'uuid';


@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(Student) private studentRepository:Repository<Student>,
    ) {}

    async getallStudent():Promise<Student[]> {
        return this.studentRepository.find();
    }

    async getStudent(id: string): Promise<Student> {
        return this.studentRepository.findOneBy({id});
    }

    async createStudent(createStudentInput:CreateStudentInput): Promise<Student> {
        const {firstname, lastname} = createStudentInput;
        const student = this.studentRepository.create({
            id:uuid(),
            firstname,
            lastname
        });
        return this.studentRepository.save(student); 

    }

    async getManyStudents(studentIds: string[] ): Promise<Student[]> {
        return await this.studentRepository.find({
            where:{
                // ...studentIds.map(id => ({ id })),
                id: {
                    // @ts-ignore
                    $in: studentIds
                }
            },
        });
    }
}
