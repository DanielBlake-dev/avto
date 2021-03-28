import { Checkout, CheckoutSchema } from './models/checkout.model';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { CheckoutService } from './checkout.service';
import { CheckoutController } from './checkout.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Checkout.name, schema: CheckoutSchema },
    ]),
  ],
  controllers: [CheckoutController],
  providers: [CheckoutService],
})
export class CheckoutModule {}
