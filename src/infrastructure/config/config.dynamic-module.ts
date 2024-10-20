import { ConfigModule } from '@nestjs/config';

export const ConfigDynamicModule = ConfigModule.forRoot({ isGlobal: true });
