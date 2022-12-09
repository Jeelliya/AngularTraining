import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddpostComponent } from './addpost/addpost.component';
import { NewPostComponent } from './addpost/new-post/new-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TotalPostComponent } from './addpost/total-post/total-post.component';

import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AddpostComponent,
    NewPostComponent,
    TotalPostComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
