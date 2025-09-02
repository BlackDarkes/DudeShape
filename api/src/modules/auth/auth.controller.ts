import { Body, Controller, Post, Req, Res, UnauthorizedException, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UserEntity } from "../user/entities/user.entity";
import { Request, Response } from "express";
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";
import { JwtAuthGuard } from "./guard/jwt-auth.guard";

@Controller("auth")
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Post("register")
	async register(@Body() dto: RegisterDto) {
		return this.authService.register(dto);
	}

	@Post("login")
	async login(
		@Body() loginDto: LoginDto,
		@Res({ passthrough: true }) res: Response,
	) {
		const user = await this.authService.validateUser(loginDto);
		return this.authService.login(user, res);
	}

	@Post("logout")
	@UseGuards(JwtAuthGuard)
	async logout(@Res() res: Response) {
		res.clearCookie("access_token");
		res.clearCookie("refresh_token");
		return res.status(200).json({ message: "Вы вышли из аккаунта!" });
	}

	@Post("refresh") //Maybe using UseGuard(JwtAuthGuard) !!!!TEST
	async refresh(@Req() req: Request, @Res() res: Response) {
		const refreshToken = req.cookies?.refresh_token;

		if (!refreshToken) {
			throw new UnauthorizedException("refresh token not fond!");
		}

		try {
			const result = this.authService.refreshToken(refreshToken, res);
			return res.status(200).json(result);
		} catch(error) {
			res.clearCookie("access_token")
			res.clearCookie("refresh_token");
			throw new UnauthorizedException("Failed to refresh token!");
		}
	}
}
