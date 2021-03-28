import { CheckoutModule } from './modules/checkout/checkout.module';
import { MongooseConfigService } from './modules/db/Mongo.db';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { MongooseModule } from '@nestjs/mongoose';
import { ResourcesModule } from './modules/resources/resources.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useClass: MongooseConfigService,
      inject: [ConfigService],
    }),
    ResourcesModule,
    CheckoutModule,
  ],
})
export class AppModule {}
