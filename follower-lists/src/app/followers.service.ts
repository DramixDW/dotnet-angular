import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Followers {
  login: string,
  html_url: string,
  avatar_url: string,
}

@Injectable({
  providedIn: 'root'
})
export class FollowersService {

  constructor(private http: HttpClient) { }

  getFollowers() {
    return this.http.get('https://api.github.com/users/octocat/followers') as Observable<Followers[]>;
  }
}
