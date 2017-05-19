import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';

@Component({
    selector: 'app-posts',
    template: require('./posts.component.html')
})
export class PostsComponent implements OnInit {
    posts: any = [];

    constructor(private postsService: PostsService) {}

    ngOnInit() {
        this.postsService.getAllPosts()
            .subscribe(posts => this.posts = posts);
    }
}