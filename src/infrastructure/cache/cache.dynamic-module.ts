import { CacheModule } from '@nestjs/cache-manager';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Config } from '../config/config.interface';
import { redisStore } from 'cache-manager-redis-yet';

export const CacheDynamicModule = CacheModule.registerAsync({
  isGlobal: true,
  imports: [ConfigModule],
  useFactory(configService: ConfigService<Config>) {
    return {
      store: redisStore,
      url: configService.get('REDIS_URL'),
    };
  },
  inject: [ConfigService],
});
