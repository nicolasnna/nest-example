import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PhrasesModule } from './phrases/phrases.module'
import { UsersModule } from './users/users.module';

@Module({
  imports: [PhrasesModule, UsersModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
