import { UserEntity } from "../../../modules/user/entities/user.entity";
import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
	Unique,
	UpdateDateColumn,
} from "typeorm";

@Entity({ name: "cart" })
@Unique(["userId", "furnitureId"])
export class CartEntity {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column({ name: "user_id", type: "uuid" })
	userId: string;

	@Column({ name: "furniture_id", type: "uuid", nullable: false })
	furnitureId: string;

	@Column({ name: "quantity", type: "integer", default: 1 })
	quantity: number;

	@CreateDateColumn({ name: "created_at" })
	createdAt: Date;

	@UpdateDateColumn({ name: "updated_at" })
	updatedAt: Date;

	@ManyToOne(() => UserEntity, (user) => user.carts, { onDelete: "CASCADE" })
	@JoinColumn({ name: "user_id" })
	user: UserEntity;
}
