import { Component, OnInit } from '@angular/core';
import { Followers, FollowersService } from '../followers.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  followers!: Followers[];

  constructor(private followerService: FollowersService) { }

  ngOnInit(): void {
    this.loadFollowers();
  }

  loadFollowers() {
    this.followerService.getFollowers().subscribe(followers => {
      this.followers = followers;
    })
  }

}
