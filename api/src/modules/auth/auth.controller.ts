import { Body, Controller, Post, Res } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UserEntity } from "../user/entities/user.entity";
import { Response } from "express";
import { LoginDto } from "./dto/login.dto";

@Controller("auth")
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Post("login")
	async login(
		@Body() loginDto: LoginDto,
		@Res({ passthrough: true }) res: Response,
	) {
		const user = await this.authService.validateUser(loginDto);
		return this.authService.login(user, res);
	}
}
