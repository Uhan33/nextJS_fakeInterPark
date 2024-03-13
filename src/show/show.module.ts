import { Module, forwardRef } from '@nestjs/common';
import { ShowService } from './show.service';
import { ShowController } from './show.controller';
import { Show } from './entities/show.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConcertHallModule } from 'src/concert-hall/concert-hall.module';
import { ReservationModule } from 'src/reservation/reservation.module';
import { ReservationInfo } from 'src/reservation/entities/reservationInfo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Show, ReservationInfo]), ConcertHallModule],
  providers: [ShowService],
  controllers: [ShowController],
  exports: [ShowService]
})
export class ShowModule {}
