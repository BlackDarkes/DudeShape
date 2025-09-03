import { Controller, Get, Param } from '@nestjs/common';
import { FurnitureService } from './furniture.service';

@Controller('furniture')
export class FurnitureController {
  constructor(private readonly furnitureService: FurnitureService) {}

  @Get("")
  async allFurniture() {
    return this.furnitureService.getAll();
  }

  @Get(":id")
  async getOne(@Param("id") id: string) {
    return this.furnitureService.getById(id);
  }
}
