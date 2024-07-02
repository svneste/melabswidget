import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('leads')
export class Leads {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  createdPhone: Date;

  @Column({ type: 'bigint' })
  phone: number;

  @Column({ nullable: true })
  mnp: number;

  @Column({ nullable: true })
  agent: string;

  @Column({ nullable: true })
  ref: string;
}
