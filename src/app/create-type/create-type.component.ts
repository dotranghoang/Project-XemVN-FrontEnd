import { Component, OnInit } from '@angular/core';
import {TypePost} from '../TypePost';
import {XemVnService} from '../xem-vn.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-create-type',
  templateUrl: './create-type.component.html',
  styleUrls: ['./create-type.component.scss']
})
export class CreateTypeComponent implements OnInit {
  inputControl = new FormControl();


  ngOnInit(): void {
  }
  constructor(private xemVnService: XemVnService) { }

  createNewType() {
    if (this.inputControl.value == null) {
      return alert('Vui lòng điền tên');
    }
    const typePost: Partial<TypePost> = {
      type: this.inputControl.value
    };
    console.log(typePost);
    return this.xemVnService.createType(typePost).subscribe(
      next => {
        alert('Thêm mới thành công');
        this.inputControl.setValue('');
        document.location.reload();
      }, error => {
        alert('Thêm mới thất bại');
      }
    );
  }
}
