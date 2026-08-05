# simple-ng-loader

[![npm version](https://img.shields.io/npm/v/simple-ng-loader.svg?style=flat-skin)](https://www.npmjs.com/package/simple-ng-loader)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

An Angular library that intercepts HTTP requests and automatically displays a loading indicator. 

> [!NOTE]
> This package is currently in **Beta** and has been upgraded to support Angular 18+, TypeScript 5.2+, and RxJS 7.8+.

---

## Installation

Install the package via npm:

```bash
npm install simple-ng-loader --save
```

---

## Compatibility

Compatible with Angular 18.0.7 and modern Angular versions (v18+).

- **Node.js**: `22.22.3+`, `24.15.0+`, or `26.0.0+`
- **TypeScript**: `5.2+`
- **RxJS**: `7.8+`

### Dependencies

#### Required
- `@angular/common`: `18.0.7+`
- `@angular/core`: `18.0.7+`
- `@angular/platform-browser`: `18.0.7+`
- `rxjs`: `7.8+`

#### Peer Dependencies
- `HttpClientModule` (from `@angular/common/http`)

---

## Usage

### 1. Import the Module

Add `SimpleNgLoaderModule` and `HttpClientModule` to your `AppModule` imports:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SimpleNgLoaderModule } from 'simple-ng-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SimpleNgLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### 2. Add to Template

Place the loader component in your root template (e.g., `app.component.html`):

```html
<simple-ng-loader type="dots" [delayTime]="200"></simple-ng-loader>
```

---

## Component Inputs

| Input | Type | Default | Allowed Values | Description |
|---|---|---|---|---|
| `type` | `string` | `"dots"` | `"dots"`, `"circle"`, `"bar"` | Visual style of the loader animation. |
| `delayTime` | `number` | `0` | `0` to `500` (ms) | Debounce time in milliseconds before the loader appears. |

---

## Development

### Build
To build the package, run:
```bash
npm run build
```

### Tests
To execute unit tests:
```bash
npm test
```

### Linting
To run static code analysis:
```bash
npm run lint
```

### Development Server
To start a local development server:
```bash
npm start
```

---

## Migration from v1.x (Angular 9)

When upgrading from `simple-ng-loader` v1.x:
- Ensure your environment runs Node.js `22.22.3+`, `24.15.0+`, or `26.0.0+`.
- If you encounter dependency resolution issues during installation, use:
  ```bash
  npm install simple-ng-loader --legacy-peer-deps
  ```
- All APIs remain backward compatible; no code changes are required.
- Test that the component renders correctly after upgrading.

---

## Demo & Support

- **Live Demo:** [StackBlitz Playground](https://stackblitz.com/edit/simple-ng-loader)
- **Support / Feedback:** Contact [jandginvestment@gmail.com](mailto:jandginvestment@gmail.com)
