import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose"
import { Covid } from "./covid";
import { Model } from "mongoose";

@Injectable()
export class CovidRepository {

    constructor(@InjectModel('Covid')private covidModel: Model<Covid>) {}
    async findAll(): Promise<Covid[]> {
        const test = this.covidModel.find();
        console.log('test', test);
        
        return test;
    }

    async updateCovid(id: string, changes: Partial<Covid>) {
        return this.covidModel.findOneAndUpdate({_id: id}, changes, {new: true})
    }

}