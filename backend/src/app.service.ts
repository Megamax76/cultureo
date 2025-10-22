import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealth() {
    return {
      status: 'ok',
      message: 'Rafale Knowledge Bridge API is running',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    };
  }

  getVersion() {
    return {
      version: '1.0.0',
      name: 'Rafale Knowledge Bridge API',
      description: 'Knowledge transfer platform Dassault Aviation - Tata ASL',
    };
  }
}
