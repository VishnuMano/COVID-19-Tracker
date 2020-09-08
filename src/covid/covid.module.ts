import { Module } from '@nestjs/common';
import { CovidController } from './covid.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CovidSchema } from './covid.schema';
import { CovidRepository } from './covid.repository';

@Module({
    imports: [MongooseModule.forFeature([{name: 'Covid', schema: CovidSchema}])],
    controllers: [CovidController],
    providers: [CovidRepository],
})
export class CovidModule {};