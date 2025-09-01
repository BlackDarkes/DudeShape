import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "./entities/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(UserEntity)
		private readonly userRepository: Repository<UserEntity>,
	) {}

	async create(user: Partial<UserEntity>): Promise<UserEntity> {
		const newUser = this.userRepository.create(user);
		const saveUser = await this.userRepository.save(newUser);

		return saveUser;
	}

	async findByEmail(email: string): Promise<UserEntity | null> {
		return this.userRepository.findOne({
			where: { email },
		});
	}

	async findById(id: string): Promise<UserEntity | null> {
		return this.userRepository.findOne({
			where: { id },
		});
	}
}
