import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { myRoutes } from './app.routes';

import { AllCommunityModule, ClientSideRowModelModule, ModuleRegistry, PaginationModule } from 'ag-grid-community';

ModuleRegistry.registerModules([AllCommunityModule]);

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(myRoutes)
  ]
};
