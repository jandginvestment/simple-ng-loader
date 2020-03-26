import { NgModule } from '@angular/core';
import { SimpleNgLoaderComponent } from './components/simple-ng-loader/simple-ng-loader.component';

import {SimpleNgLoaderService } from './services/simple-ng-loader.service' ;
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SimpleNgLoaderInterceptor } from './interceptors/simple-ng-loader.interceptor';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [SimpleNgLoaderComponent],
  imports: [CommonModule
  ],
  exports: [SimpleNgLoaderComponent],
  providers: [SimpleNgLoaderService, { provide: HTTP_INTERCEPTORS,
     useClass: SimpleNgLoaderInterceptor, multi: true }  ]
})
export class SimpleNgLoaderModule { }
