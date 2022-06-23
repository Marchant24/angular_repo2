import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardcomponentComponent } from './cardcomponent/cardcomponent.component';
import { NewsComponent } from './pages/news/news.component';

const routes: Routes = [
  {path:"news", component: NewsComponent },
    {path:"cards", component: CardcomponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
