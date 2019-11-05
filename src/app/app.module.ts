import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CreateTypeComponent } from './create-type/create-type.component';
import { DeleteEditTypeComponent } from './delete-edit-type/delete-edit-type.component';
import { UserComponent } from './user/user.component';
import { ShowUserComponent } from './show-user/show-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { HomeComponent } from './home/home.component';
import { EditDeletePostComponent } from './edit-delete-post/edit-delete-post.component';
import { ManagePostComponent } from './manage-post/manage-post.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateTypeComponent,
    DeleteEditTypeComponent,
    UserComponent,
    ShowUserComponent,
    CreateUserComponent,
    DetailUserComponent,
    CreatePostComponent,
    HomeComponent,
    EditDeletePostComponent,
    ManagePostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
