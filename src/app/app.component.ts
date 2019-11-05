import {Component, OnInit} from '@angular/core';
import {TypePost} from './TypePost';
import {FormControl} from '@angular/forms';
import {XemVnService} from './xem-vn.service';
import {Post} from './post';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'XemVN';

  imgUrl = environment.imgUrl ;

  public typeList: TypePost[] = [];
  public postList: Post[] = [];

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
  }

}
