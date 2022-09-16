import {Entity, Column, BaseEntity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class campaign extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id!: number;
  @Column({ type: 'varchar', nullable: false })
  name!: string;
  @Column({ type: 'int', nullable: false })
  status!: number;
  @Column({ type: 'timestamp', nullable: true })
  start_date!: Date | null;
  @Column({ type: 'varchar', nullable: true })
  image_path!: string;
}