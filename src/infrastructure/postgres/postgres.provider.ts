import { Provider } from '@nestjs/common';
import * as postgres from 'postgres';
import { POSTGRES_INJECTION_TOKEN } from './postgres.injection-token';
import { ConfigService } from '@nestjs/config';
import { Config } from '../config/config.interface';

export const PostgresProvider: Provider = {
  provide: POSTGRES_INJECTION_TOKEN,
  useFactory: (configService: ConfigService<Config>) => {
    const isDevMode = configService.get('MODE') === 'DEV';

    return postgres({
      host: configService.get('DB_HOST'),
      port: configService.get('DB_PORT'),
      database: configService.get('DB_NAME'),
      user: configService.get('DB_USER'),
      password: configService.get('DB_PASSWORD'),
      debug: isDevMode,
      transform: {
        ...postgres.camel,
        undefined: null,
      },
    });
  },
  inject: [ConfigService<Config>],
};
