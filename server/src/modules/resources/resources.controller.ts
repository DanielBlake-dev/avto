import {
  Query,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Body,
  Param,
} from '@nestjs/common';
import { CreateResourceDTO } from './dto/create-resource.dto';
import { ResourcesService } from './resources.service';

@Controller('resources')
export class ResourcesController {
  constructor(private readonly resourcesService: ResourcesService) {}

  @Get('')
  public async getAll() {
    return {
      total: (await this.resourcesService.getAll()).length,
      data: await this.resourcesService.getAll(),
      errors: {},
    };
  }

  @Get(':id')
  public async getOne(@Param('id') id: string) {
    return {
      data: await this.resourcesService.getOne(id),
      errors: {},
    };
  }

  @Post('/')
  public create(@Body() payload: CreateResourceDTO) {
    return this.resourcesService.create(payload);
  }

  @Put(':id')
  public update(@Param('id') id: string, @Body() payload: CreateResourceDTO) {
    return this.resourcesService.update(id, payload);
  }

  @Delete('/delete')
  public delete(@Query('id') id: string) {
    return this.resourcesService.delete(id);
  }
}
