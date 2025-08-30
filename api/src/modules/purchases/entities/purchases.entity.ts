import { UserEntity } from "../../../modules/user/entities/user.entity";
import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from "typeorm";
import { PurchasesItemsEntity } from "./purchasesItems.entity";

export enum OrderStatus {
	PENDING = "pending",
	COMPLETED = "completed",
	CANCELED = "canceled",
}

@Entity({ name: "purchases" })
export class PurchasesEntity {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column({ name: "user_id", type: "uuid" })
	userId: string;

	@Column({ name: "total_amount", type: "integer", default: 0 })
	totalAmount: number;

	@Column({
		name: "status",
		type: "enum",
		enum: OrderStatus,
		default: OrderStatus.PENDING,
	})
	status: OrderStatus;

	@CreateDateColumn({ name: "created_at" })
	createdAt: Date;

	@UpdateDateColumn({ name: "updated_at" })
	updatedAt: Date;

	@OneToMany(
		() => PurchasesItemsEntity,
		(purchasesItem) => purchasesItem.purchases,
		{ onDelete: "CASCADE" },
	)
	purchasesItems: PurchasesItemsEntity[];

	@ManyToOne(() => UserEntity, (user) => user.purchases, {
		onDelete: "CASCADE",
	})
	@JoinColumn({ name: "user_id" })
	user: UserEntity;
}
