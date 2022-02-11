import { Component, OnInit } from '@angular/core';
import { Post, PostService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts!: Post[];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts() {
    this.postService.get().subscribe(post => {
      this.posts = post.reverse();
    })
  }

  toggleRead(post: Post) {
    post.isRead = !post.isRead;
    this.postService.update(post).subscribe(_post => {
      console.log("C'est mis à jour chef !");
    })
  }

  deletePost(id: number | undefined) {
    if (id) {
      this.postService.delete(id).subscribe(_post => {
        console.log("C'est supprimé chef :D");
        this.loadPosts();
      });
    }    
  }
  
  addPost(title: string) {
    const post: Post = {
      title: title,
      body: "on l'a ajouté depuis angular \\o/",
      userId: 2,
      isRead: false
    }
    this.postService.add(post).subscribe(_post => {
      console.log("c'est ajouté chef ;-\)");
      this.loadPosts();
    })
  }

}
