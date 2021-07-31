import { Component } from '@angular/core';
import { UserService } from 'src/app/user/user.service';
import { ContentService } from '../../content.service';
import { IPost, ITheme } from '../../shared/interfaces';

@Component({
  selector: 'app-theme',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})
export class ThemesComponent {

  get isLogged(): boolean{
    return this.userService.isLogged;
  }

  themes: ITheme[] | undefined;
  recentPosts: IPost[] | undefined;

  constructor(
    private contentService: ContentService,
    private userService: UserService
    ) {
    this.fetchThemes();
    this.fetchRecentPosts();
  }

  fetchRecentPosts(): void {
    this.recentPosts = undefined;
    this.contentService.loadPosts(5).subscribe(posts => this.recentPosts = posts);
  }

  fetchThemes(): void {
    this.themes = undefined;
    this.contentService.loadThemes().subscribe(themes => this.themes = themes);
  }
}

