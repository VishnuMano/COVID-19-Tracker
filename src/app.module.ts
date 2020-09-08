import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CovidModule } from './covid/covid.module';
import { MongooseModule } from '@nestjs/mongoose'
import { MONGO_CONNECTION } from './covid/constants'
import { CovidRepository } from './covid/covid.repository';
@Module({
  imports: [
    CovidModule,
    MongooseModule.forRoot(MONGO_CONNECTION)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}