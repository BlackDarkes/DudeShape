import { NestMiddleware } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Request, Response } from "express";
import { UserService } from "src/modules/user/user.service";

export class AuthMiddleware implements NestMiddleware {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async use(req: Request, res: Response, next: (error?: any) => void) {
    try {
      const authRouterToSkip = [
        "*/auth/login",
        "*/auth/register",
        "*/auth/refresh",
        "*/auth/logout",
      ];

      if (authRouterToSkip.includes(req.url)) {
        return next();
      }

      const accessToken = req.cookies?.access_token;

      if (accessToken) {
        try {
          const payload = this.jwtService.verify(accessToken);
          req.user = payload;
          req.headers.authorization = `Bearer ${accessToken}`;
        } catch(e) {
          res.clearCookie("access_token");
        }
      }

      next();
    } catch(e) {
      res.clearCookie("access_token");
      res.clearCookie("refresh_token");
      return next();
    }
  }
}