import { Module } from '@nestjs/common';
import { WeatherController } from './weather.controller';
import { WeatherService } from './weather.service';
import { HttpModule } from '@nestjs/axios';
import { EventsModule } from '~/events/events.module';
import { PrismaModule } from '~/common/service/prisma.module';

@Module({
  imports: [HttpModule, EventsModule, PrismaModule],
  controllers: [WeatherController],
  providers: [WeatherService],
})
export class WeatherModule {}
