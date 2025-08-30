import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from "typeorm";
import { PurchasesEntity } from "./purchases.entity";

@Entity("purchases_items")
export class PurchasesItemsEntity {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column({ name: "purchases_id", type: "uuid" })
	purchasesId: string;

	@Column({ name: "furniture_id", type: "uuid" })
	furnitureId: string;

	@Column({ name: "quantity", type: "integer", default: 1 })
	quantity: number;

	@CreateDateColumn({ name: "created_at" })
	createdAt: Date;

	@UpdateDateColumn({ name: "updated_at" })
	updatedAt: Date;

	@ManyToOne(() => PurchasesEntity, (purchases) => purchases.purchasesItems)
	@JoinColumn({ name: "purchases_id" })
	purchases: PurchasesEntity;
}
