import { Resource, ResourceDocument } from './models/resource.model';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateResourceDTO } from './dto/create-resource.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ResourcesService {
  constructor(
    @InjectModel(Resource.name)
    private readonly resourcesModel: Model<ResourceDocument>,
  ) {}

  public getAll() {
    return this.resourcesModel.find({});
  }

  public getOne(id: string) {
    return this.resourcesModel.findById(id);
  }

  public create(payload: CreateResourceDTO) {
    console.log(payload);
    return this.resourcesModel.create(payload);
  }

  public update(id: string, payload: any) {
    return this.resourcesModel.findByIdAndUpdate(id, payload);
  }

  public delete(id: string) {
    return this.resourcesModel.deleteOne({ id });
  }
}
