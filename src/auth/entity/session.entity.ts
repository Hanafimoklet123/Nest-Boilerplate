import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { User } from '../../user/entity/user';

@Entity()
export class Session {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(
    () => {
      return User;
    },
    (user) => {
      return user.id;
    },
  )
  user: User;

  @Column()
  refresh_token: string;

  @Column({ default: true })
  status: boolean;

  @CreateDateColumn({
    type: 'timestamp with time zone',
    nullable: false,
  })
  createdAt: Date;
}
