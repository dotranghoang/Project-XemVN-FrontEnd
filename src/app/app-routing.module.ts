import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateTypeComponent} from './create-type/create-type.component';
import {DeleteEditTypeComponent} from './delete-edit-type/delete-edit-type.component';
import {ShowUserComponent} from './show-user/show-user.component';
import {CreateUserComponent} from './create-user/create-user.component';
import {CreatePostComponent} from './create-post/create-post.component';
import {HomeComponent} from './home/home.component';
import {EditDeletePostComponent} from './edit-delete-post/edit-delete-post.component';
import {ManagePostComponent} from './manage-post/manage-post.component';



const routes: Routes = [{
    path: 'create-type',
    component: CreateTypeComponent
  },
  {
    path: 'edit-type',
    component: DeleteEditTypeComponent
  },
  {
    path: 'show-user',
    component: ShowUserComponent
  },
  {
    path: 'create-user',
    component: CreateUserComponent
  },
  {
    path: 'create-post',
    component: CreatePostComponent
  },
  {
    path: '' ,
    component: HomeComponent
  },
  {
    path: 'edit-post/:postId',
    component: EditDeletePostComponent
  },
  {
    path: 'manage-post',
    component: ManagePostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
