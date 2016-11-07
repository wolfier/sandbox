import { Component } from '@angular/core';

@Component({
	selector: 'website',
	template: '<h1>{{title}}</h1>'
})
export class WebsiteComponent {
	title = "Welcome to my Website"
}
