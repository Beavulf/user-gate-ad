import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { type ConfigService } from '@nestjs/config';

export async function getTypeOrmConfig(configService: ConfigService):Promise<TypeOrmModuleOptions> {
    return {
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        synchronize: true,
        autoLoadEntities: true,
    }
}