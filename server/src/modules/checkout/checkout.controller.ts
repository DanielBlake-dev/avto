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
import { CreateCheckoutDTO } from './dto/create-checkout.dto';
import { CheckoutService } from './checkout.service';

@Controller('orders')
export class CheckoutController {
  constructor(private readonly checkoutService: CheckoutService) {}

  @Get('')
  public async getAll() {
    return {
      data: await this.checkoutService.getAll(),
      total: (await this.checkoutService.getAll()).length,
      errors: {},
    };
  }

  @Get(':id')
  public async getOne(@Param('id') id: string) {
    return {
      data: await this.checkoutService.getOne(id),
      errors: {},
    };
  }

  @Post('/')
  public create(@Body() payload: any) {
    return this.checkoutService.create(payload);
  }

  @Put(':id/update')
  public update(@Query('id') id: string, @Body() payload: CreateCheckoutDTO) {
    return this.checkoutService.update(id, payload);
  }

  @Delete(':id')
  public delete(@Query('id') id: string) {
    return this.checkoutService.delete(id);
  }
}
