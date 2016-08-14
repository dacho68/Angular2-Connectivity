# Angular2-Connectivity
In this section you will learn of how to build forms and validations. In Angular, there are 2 types of forms : Template-Driven and
Model-Driven Forms.

The Template-Driven is easier to implement but it's limited to the validation. In other hand, the Model-Driven requires more code but you have full control over validation.
Most of the samples are from the course [Angular 2 with TypeScript](https://www.udemy.com/angular-2-tutorial-for-beginners/learn/v4/overview) by Mosh Hamedi on Udemy.
I'm developping the Angular 2 samples along way I'm learning Angular 2. If you have time, I recommend you to take the course because it has richer contents.

- [Jumpstart](https://github.com/dacho68/Angular2-Jumpstart) - Quick understanding of how to build an App with Angular 2.
- [101](https://github.com/dacho68/Angular2-101) - Property Binding, Class and Style Binding, Event Binding, Two way Binding.
- [102](https://github.com/dacho68/Angular2-102) - Component API in depth, Input and Output properties.
- [103](https://github.com/dacho68/Angular2-103) - Controlling Rendering of the HTML - ngId, ngSwitch, ngFor, Leading *, Pipes, ngClass, ngStyle, Elvis Operator, ng-content. 
- [104](https://github.com/dacho68/Angular2-104) - Forms and Validations.
- [Connectivity](https://github.com/dacho68/Angular2-Connectivity) - Connecting to the server.

## jsonplaceholder.typicode.com

we are going to use [jsonplaceholder](http://jsonplaceholder.typicode.com/) website for testing our REST call.


## Lifecycle Hooks

    • OnInit: to execute logic after component’s data-bound properties have been initialized. 
    • OnChanges: to execute logic if any bindings have changed 
    • AfterContentInit: to execute logic when a component’s content (<ng-content>) has been fully initialized. 
    • AfterContentChecked: to execute logic after every check of component’s content. 
    • AfterViewInit: to execute logic when a component’s view has been fully initialized. 
    • AfterViewChecked: to execute logic after every check of component’s view. 
    • OnDestroy: to execute clean up logic when a component is destroyed.




https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html

## Connecting to the server
Adding the Http script: In index.html:

``` html
<script	 src=“node_modules/angular2/bundles/http.dev.js”/>	
```

## Http Class

``` javascript
http.get(url) .map(response	=>	 response.json());	
  
http.post(url,	JSON.stringify(obj)).map(response =>response.json());

```

Using Http

``` TypeScript
import {Http} from ‘@angular/http’;	

 @Injectable() export class	
  PostService	
  {
    constructor(private _http:	Http) {}
    getPosts()	{
      return this._http.get(url).map(res => res.json()); 
    }
  }
```

In the Component

``` TypeScript
import	{HTTP_PROVIDERS} from '@angular2/core';

@Component ({
    providers: [PostService, HTTP_PROVIDERS]
})
export class AppComponent implements OnInit {
  posts: any[];
  inLoading = true;
  ngOnInt() {
      this._postService.getPosts()
          .subscribe(post => {
             this.posts= posts
             this.isLoading = false; });
  }
}
```

Showing a Loader Icon in View

``` html
<i *ngIf=“isLoading” class=“fa fa-­‐spinner	fa-­‐spin fa-­‐3x”></i>
```

