import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
//entidades que ao ser usadas pra conctar no banco de dados
@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  completed: boolean;

}