import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import helmet from 'helmet';
import * as compression from 'compression';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  // Security
  app.use(helmet());
  app.enableCors({
    origin: configService.get('CORS_ORIGIN') || 'http://localhost:3000',
    credentials: true,
  });

  // Compression
  app.use(compression());

  // Global prefix
  const apiPrefix = configService.get('API_PREFIX') || 'api';
  app.setGlobalPrefix(apiPrefix);

  // Validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  // Swagger documentation
  const config = new DocumentBuilder()
    .setTitle('Rafale Knowledge Bridge API')
    .setDescription(
      'API for knowledge transfer platform between Dassault Aviation and Tata ASL',
    )
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('auth', 'Authentication endpoints')
    .addTag('users', 'User management')
    .addTag('documents', 'Document management')
    .addTag('skills', 'Skills and tacit knowledge')
    .addTag('training', 'Training modules and certifications')
    .addTag('quality', 'Quality and non-conformities')
    .addTag('tools', 'Tools and outillages')
    .addTag('analytics', 'Analytics and reporting')
    .addTag('search', 'Search and RAG')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(`${apiPrefix}/docs`, app, document);

  // Start server
  const port = configService.get('PORT') || 4000;
  await app.listen(port);

  console.log(`
  ╔═══════════════════════════════════════════════════════════════╗
  ║                                                               ║
  ║  🚀 Rafale Knowledge Bridge API                               ║
  ║                                                               ║
  ║  Server running on: http://localhost:${port}                    ║
  ║  API Docs: http://localhost:${port}/${apiPrefix}/docs              ║
  ║  Environment: ${configService.get('NODE_ENV') || 'development'}                              ║
  ║                                                               ║
  ╚═══════════════════════════════════════════════════════════════╝
  `);
}

bootstrap();
