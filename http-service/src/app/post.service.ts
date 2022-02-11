import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseElement, DataService } from './data.service';

export interface Post extends baseElement {
  userId: number,
  title: string,
  body: string,
  isRead: boolean
}

@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService<Post> {
  override url="http://localhost:3000/posts";

  constructor(http: HttpClient) { 
    super(http);
  }
}
