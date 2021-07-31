import { Component } from '@angular/core';
import { ContentService } from './content.service';
import { IPost, ITheme } from './shared/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  recentPosts: IPost[] | undefined;
  themes: ITheme[] | undefined;

  toggleTemplate = false;

  constructor(private contentService: ContentService) {
    this.fetchThemes();
    this.fetchRecentPosts();
  }

  fetchThemes(): void{
    this.themes = undefined;
    this.contentService.loadThemes().subscribe(themes => this.themes = themes)
  }


  fetchRecentPosts(): void {
    this.recentPosts = undefined;
    this.contentService.loadPosts(5).subscribe(posts => this.recentPosts = posts);
  }

}
function fetchRecentPosts() {
  throw new Error('Function not implemented.');
}

