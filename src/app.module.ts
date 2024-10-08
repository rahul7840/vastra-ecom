import { Module, ValidationPipe } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AllExceptionsFilter } from './common/filters/all.exception.filter';
import { HttpExceptionFilter } from './common/filters/http.exception.filter';
import { ResponseInterceptor } from './common/interceptor/response.interceptor';
import { CouponsModule } from './module/admin/coupons/coupons.module';
import { ProductsModule } from './module/admin/products/products.module';
import { AddressModule } from './module/customer/address/address.module';
import { AuthModule } from './module/customer/auth/auth.module';
import { CartModule } from './module/customer/cart/cart.module';
import { DashboardModule } from './module/customer/dashboard/dashboard.module';
import { ReviewModule } from './module/customer/review/review.module';
import { PrismaModule } from './module/prisma/prisma.module';
import { SubscribeModule } from './module/customer/subscribe/subscribe.module';
import { ProductModule } from './module/customer/product/product.module';
import { ShippingModule } from './shipping/shipping.module';

@Module({
  imports: [
    PrismaModule,
    ProductsModule,
    CouponsModule,
    AuthModule,
    DashboardModule,
    CartModule,
    AddressModule,
    ReviewModule,
    ProductModule,
    SubscribeModule,
    ShippingModule,
  ],
  controllers: [AppController],
  providers: [
    { provide: APP_INTERCEPTOR, useClass: ResponseInterceptor },
    { provide: APP_FILTER, useClass: AllExceptionsFilter },
    { provide: APP_FILTER, useClass: HttpExceptionFilter },
    { provide: APP_PIPE, useClass: ValidationPipe },
    AppService,
  ],
})
export class AppModule {}
