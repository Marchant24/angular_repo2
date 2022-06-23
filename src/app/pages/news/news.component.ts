import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { ArticleModel } from '../../models/article.models';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private   newsService: NewsService) {}

   public articles: ArticleModel[]=[];

ngOnInit(): void{
 this.newsService.getNews().subscribe((response:any)=>{
 console.log(response.articles);
 this.articles=response.articles;
});
}

  }
