import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment';
import {TypePost} from '../TypePost';
import {Post} from '../post';
import {XemVnService} from '../xem-vn.service';
import {User} from '../user';
import {FormControl} from '@angular/forms';
import {MultiFile} from '../MultiFile';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imgUrl = environment.imgUrl;

  public postList: Post[] = [];

  constructor(private xemVnService: XemVnService) {
  }

  ngOnInit() {
    this.xemVnService.getPostList().subscribe(
      result => {
        this.postList = result;
      }, error => {
        alert('Loi');
      });
  }
}
