import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { WebsiteComponent } from './website.component'

@NgModule({
	imports: 		[ BrowserModule ],
	declarations: 	[ WebsiteComponent ],
	bootstrap:		[ WebsiteComponent ]
})
export class WebsiteModule{}