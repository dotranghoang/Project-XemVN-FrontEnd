import { Component, OnInit } from '@angular/core';
import {XemVnService} from '../xem-vn.service';
import {FormControl} from '@angular/forms';
import {User} from '../user';
import {TypePost} from '../TypePost';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  inputAccount = new FormControl();
  inputPassword = new FormControl();
  inputConfirmPassword = new FormControl();
  inputName = new FormControl();

  constructor(private xemVnService: XemVnService) { }

  ngOnInit() {
  }

  createNewUser(){
    if (this.inputAccount.value == null || this.inputName.value == null ||
       this.inputPassword.value == null || this.inputConfirmPassword.value == null) {
      return alert('Bạn phải nhập đủ thông tin!');
    }

    if (this.inputPassword.value === this.inputConfirmPassword.value) {
      const user: Partial<User> = {
        account: this.inputAccount.value,
        nickName: this.inputName.value,
        password: this.inputPassword.value
      };
      return this.xemVnService.createUser(user).subscribe(
        next => {
          alert('Đăng kí tài khoản thành công');
          document.location.reload();
        } , error => {
          alert('error');
        });
    } else {
      return alert('Mật khẩu chưa chính xác!');
    }
  }

}
