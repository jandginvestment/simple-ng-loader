# simple-ng-loader

 This package intercept your http request and shows the loader for you on each request and is in beta version.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.7.

**Note:** Package has been upgraded to Angular 18 with TypeScript 5.2, RxJS 7.8, and modern dependencies.

## Installation

The developer can install this package using the below command
````
    c:\projects\your-project> npm install simple-ng-loader --save
````    



## Compatibility

Compatible with Angular 18.0.7 and modern Angular versions (v18+)
- TypeScript: 5.2+
- Node.js: 22.22.3+, 24.15.0+, or 26.0.0+
- RxJS: 7.8+

## Dependancy

### Required
- `@angular/common`: 18.0.7+
- `@angular/core`: 18.0.7+
- `@angular/platform-browser`: 18.0.7+
- `rxjs`: 7.8+

### Peer Dependencies
- `HttpClientModule` (from @angular/common/http)


## How to use
 In AppModule
 ```
 import { BrowserModule } from '@angular/platform-browser';
 import { NgModule } from '@angular/core';

 import { AppRoutingModule } from './app-routing.module';
 import { AppComponent } from './app.component';
 import { SimpleNgLoaderModule } from 'simple-ng-loader';
 import { HttpClientModule } from '@angular/common/http';

 @NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SimpleNgLoaderModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
 })
 export class AppModule { }
 ```

In app.component.html 
````
<simple-ng-loader type="dots"></simple-ng-loader>
````

## Inputs

Input|value
---|---
type|"dots","circle","bar"
delayTime| from 0 to 500 (milli sec)

## Development

### Build the package
```bash
npm run build
```

### Run tests
```bash
npm test
```

### Run linting
```bash
npm run lint
```

### Development server
```bash
npm start
```

## Migration from v1.x (Angular 9)

If upgrading from simple-ng-loader v1.x:
- Update to Node.js 22.22.3+ or 24.15.0+ or 26.0.0+
- Run `npm install` with `--legacy-peer-deps` if needed
- All APIs remain backward compatible; no code changes required
- Test component rendering after upgrade


````
jandginvestment@gmail.com
````
# stackblitz
[https://stackblitz.com/edit/simple-ng-loader](https://stackblitz.com/edit/simple-ng-loader)

###### End of the file
