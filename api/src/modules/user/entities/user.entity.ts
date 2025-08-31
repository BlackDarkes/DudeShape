import { CartEntity } from "../../../modules/cart/entities/cart.entity";
import { FeedbackEntity } from "../../../modules/feedback/entities/feedback.entity";
import { PurchasesEntity } from "../../../modules/purchases/entities/purchases.entity";
import {
	Column,
	CreateDateColumn,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from "typeorm";

@Entity({ name: "users" })
export class UserEntity {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column({ name: "name", type: "varchar", length: 128, nullable: false })
	name: string;

	@Column({ name: "avatar", type: "text", nullable: true, default: null })
	avatar: string;

	@Column({ name: "email", type: "varchar", length: 255, nullable: false, unique: true })
	email: string;

	@Column({ name: "password", type: "text", nullable: false })
	password: string;

	@CreateDateColumn({ name: "created_at" })
	createdAt: Date;

	@UpdateDateColumn({ name: "updated_at" })
	updatedAt: Date;

	@OneToMany(() => FeedbackEntity, (feedback) => feedback.user)
	feedbacks: FeedbackEntity[];

	@OneToMany(() => CartEntity, (cart) => cart.user)
	carts: CartEntity[];

	@OneToMany(() => PurchasesEntity, (purchases) => purchases.user)
	purchases: PurchasesEntity[];
}
