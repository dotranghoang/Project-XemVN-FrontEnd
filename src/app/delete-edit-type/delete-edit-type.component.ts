import { Component, OnInit } from '@angular/core';
import {XemVnService} from '../xem-vn.service';
import {TypePost} from '../TypePost';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-delete-edit-type',
  templateUrl: './delete-edit-type.component.html',
  styleUrls: ['./delete-edit-type.component.scss']
})
export class DeleteEditTypeComponent implements OnInit {

  public typeList: TypePost[] = [];
  inputControl = new FormControl();


  constructor(private xemVnService: XemVnService) {
    this.typeList = [];
  }

  ngOnInit() {
    this.xemVnService.getTypeList().subscribe(
      result => {
        this.typeList = result;
      }, error => {
        alert('Có lỗi lấy dữ liệu ');
      }
    );
  }

  editType(i) {
    console.log(i);
    const type = this.typeList[i];
    if (this.inputControl.value != null) {
      type.type = this.inputControl.value;
    } else {
      return alert('Không có gì thay đổi');
    }
    return this.xemVnService.editType(type).subscribe(
      next => {
        alert('Chỉnh sửa thành công');
        this.inputControl.setValue('');
        document.location.reload();
      }, error => {
        alert('Có lỗi');
      }
    );
  }

  deleteType(i) {
    const type = this.typeList[i];
    console.log(type);
    return this.xemVnService.deleteType(type).subscribe(
      next => {
        alert('Đã xóa thành công');
        this.inputControl.setValue('');
        document.location.reload();
      }, error => {
        alert('Có lỗi xảy ra');
      }
    );
  }


}
