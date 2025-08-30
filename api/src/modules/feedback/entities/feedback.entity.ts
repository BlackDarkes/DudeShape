import { UserEntity } from "../../../modules/user/entities/user.entity";
import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from "typeorm";

@Entity({ name: "feedback" })
export class FeedbackEntity {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column({ name: "user_id", type: "uuid" })
	userId: string;

	@Column({ name: "message", type: "text", default: "" })
	message: string;

	@Column({
		name: "stars",
		type: "decimal",
		precision: 3,
		scale: 1,
		default: 1.0,
	})
	stars: number;

	@CreateDateColumn({ name: "created_at" })
	createdAt: Date;

	@UpdateDateColumn({ name: "updated_at" })
	updatedAt: Date;

	@ManyToOne(() => UserEntity, (user) => user.feedbacks, {
		onDelete: "CASCADE",
	})
	@JoinColumn({ name: "user_id" })
	user: UserEntity;
}
