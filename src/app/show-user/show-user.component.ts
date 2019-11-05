import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {XemVnService} from '../xem-vn.service';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.scss']
})
export class ShowUserComponent implements OnInit {

  public userList: User[] = [];
  constructor(private xemVnService: XemVnService) {
    this.userList = [];
  }

  ngOnInit() {
    this.xemVnService.getUserList().subscribe(next => {
      this.userList = next;
    }, error => {
      alert('Loi');
    });
  }

}
