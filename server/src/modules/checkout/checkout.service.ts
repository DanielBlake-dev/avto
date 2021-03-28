import { CheckoutDocument, Checkout } from './models/checkout.model';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateCheckoutDTO } from './dto/create-checkout.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CheckoutService {
  constructor(
    @InjectModel(Checkout.name)
    private readonly checkoutModel: Model<CheckoutDocument>,
  ) {}

  public getAll() {
    return this.checkoutModel.find({}).populate('resourceId');
  }

  public getOne(id: string) {
    return this.checkoutModel.findById(id).populate('resourceId');
  }

  public create(payload: CreateCheckoutDTO) {
    return this.checkoutModel.create(payload);
  }

  public update(id: string, payload: any) {
    return this.checkoutModel.findByIdAndUpdate(id, payload);
  }

  public delete(id: string) {
    return this.checkoutModel.deleteOne({ id });
  }
}
