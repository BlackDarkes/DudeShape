import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from "typeorm";

@Entity({ name: "furniture" })
export class FurnitureEntity {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column({ name: "image", type: "text", nullable: true, default: null })
	image: string;

	@Column({ name: "name", type: "varchar", length: 255, default: "" })
	name: string;

	@Column({ name: "price", type: "integer", default: 0 })
	price: number;

	@CreateDateColumn({ name: "created_at" })
	createdAt: Date;

	@UpdateDateColumn({ name: "updated_at" })
	updatedAt: Date;
}
