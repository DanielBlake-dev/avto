import { Resource, ResourceSchema } from './models/resource.model';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ResourcesService } from './resources.service';
import { ResourcesController } from './resources.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Resource.name, schema: ResourceSchema },
    ]),
  ],
  controllers: [ResourcesController],
  providers: [ResourcesService],
})
export class ResourcesModule {}
