import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UserEntity } from "../user/entities/user.entity";
import { Response } from "express";

@Controller("auth")
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Post("login")
	async login(@Body() user: UserEntity, res: Response) {
    return this.authService.login(user, res);
  }
}
