import { Injectable } from "@nestjs/common";
import { UserService } from "../user/user.service";
import { RegisterDto } from "./dto/register.dto";
import * as bcrypt from "bcrypt";
import { LoginDto } from "./dto/login.dto";
import { UserEntity } from "../user/entities/user.entity";
import { Response } from "express";
import { IJwtPayload } from "src/types/jwtPayload.interface";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
	constructor(
		private readonly userService: UserService,
		private readonly jwtService: JwtService,
	) {}

	async register(dto: RegisterDto) {
		const { name, email, password } = dto;
		const hashedPassword = await bcrypt.hash(password, 10);
		const user = await this.userService.findByEmail(email);

		if (user) {
			return { message: "Пользователь с такой почтой уже есть!" };
		}

		await this.userService.create({
			name,
			email,
			password: hashedPassword,
		});

		return { message: "Вы успешно авторизовались!" };
	}

	async validateUser(dto: LoginDto): Promise<any> {
		const { email, password } = dto;
		const user = await this.userService.findByEmail(email);

		if (!user || !(await bcrypt.compare(password, user.password))) {
			return { message: "Не верные данные!" };
		}

		return user;
	}

	async login(user: UserEntity, res: Response) {
		res.clearCookie("asses_token");
		res.clearCookie("refresh_token");

		const payload: IJwtPayload = { email: user.email, sub: user.id };

		const assess_token = this.jwtService.sign(payload, {
			expiresIn: "1h",
		});

		const refresh_token = this.jwtService.sign(payload, {
			expiresIn: "7d",
		});

		res.cookie("assess_token", assess_token, {
			httpOnly: true,
			secure: false,
			sameSite: "strict",
			maxAge: 60 * 60 * 1000, //1h
		});

		res.cookie("refresh_token", refresh_token, {
			httpOnly: true,
			secure: false,
			sameSite: "strict",
			maxAge: 7 * 24 * 60 * 60, //7d
		});

		return {
			message: "Вы успешно вошли в аккаунт!",
			user: {
				id: user.id,
				name: user.name,
				email: user.email,
			},
		};
	}
}
