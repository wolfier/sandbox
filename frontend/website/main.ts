import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { WebsiteModule } from './website.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(WebsiteModule);