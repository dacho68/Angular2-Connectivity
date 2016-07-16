import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable }  from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Post} from './post';

@Injectable()
export class PostService{

    private _url = 'http://jsonplaceholder.typicode.com/posts';
    constructor(private _http: Http){
    }

    getPosts() : Promise<Post[]>{
        return this._http.get(this._url)
        .map(res=>res.json()).toPromise()
    }

    createPost(postBody){
       return  this._http.post(this._url,JSON.stringify(postBody)).map(res=>res.json());
    }
}