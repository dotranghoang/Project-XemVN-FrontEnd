import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment';
import {TypePost} from '../TypePost';
import {Post} from '../post';
import {User} from '../user';
import {XemVnService} from '../xem-vn.service';

@Component({
  selector: 'app-manage-post',
  templateUrl: './manage-post.component.html',
  styleUrls: ['./manage-post.component.scss']
})
export class ManagePostComponent implements OnInit {

  imgUrl = environment.imgUrl;
  public typeList: TypePost[] = [];
  public postList: Post[] = [];
  public userList: User[] = [];

  constructor(private xemVnService: XemVnService) {
    this.typeList = [];
  }

  ngOnInit() {
    this.xemVnService.getTypeList().subscribe(
      result => {
        this.typeList = result;
      }, error => {
        alert('Loi');
      }
    );

    this.xemVnService.getPostList().subscribe(
      result => {
        this.postList = result;
      }, error => {
        alert('Loi');
      });

    this.xemVnService.getUserList().subscribe(
      result => {
        this.userList = result;
      }
    );
  }
}
