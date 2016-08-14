// core of angular2. always need it
import {Component,OnInit} from '@angular/core';
import {PostService} from './services/post.services';
import {HTTP_PROVIDERS} from '@angular/http';
import {Post} from './services/post';
import {GitHubProfileComponent} from './github-profile.component';

@Component({
    // element selector my-app
    selector: 'my-app',
    template: `<h1>Welcome to Angular 2 - Connectivity</h1>
              <h2>Simple post http</h2>
              <div *ngIf="isLoading">
                <i class="fa fa-spinner fa-spin fa-3x"></i> 
              </div>
              <h2>Exercise</h2>
              <github-profile></github-profile>
              `,
   directives:[GitHubProfileComponent],         
   providers:[PostService,HTTP_PROVIDERS]
})

export class AppComponent implements OnInit  {

    isLoading:boolean = true;

    constructor(private _postService: PostService){
      //this._postService.createPost( {userId:1,title:"aa",body:"b"} );
    }

    ngOnInit(){
     this._postService.getPosts()
         .then(posts=>{
           console.log(posts[0].id);
           this.isLoading = false;
         });
    }
 
}