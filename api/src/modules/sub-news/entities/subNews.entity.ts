import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "subscribe_news" })
export class SubNewsEntity {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column({ name: "email", type: "varchar", length: 255 })
	email: string;
}
