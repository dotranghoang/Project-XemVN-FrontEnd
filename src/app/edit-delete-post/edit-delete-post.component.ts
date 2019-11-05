import { Component, OnInit } from '@angular/core';
import {XemVnService} from '../xem-vn.service';
import {FormControl} from '@angular/forms';
import {TypePost} from '../TypePost';
import {Post} from '../post';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-delete-post',
  templateUrl: './edit-delete-post.component.html',
  styleUrls: ['./edit-delete-post.component.scss']
})
export class EditDeletePostComponent implements OnInit {
  constructor(private xemVnService: XemVnService,
              private activatedRoute: ActivatedRoute) {
  }

  inputTitle = new FormControl();
  inputType = new FormControl();
  inputImage = new FormControl();
  id: string;
  post: Post;
  fileUpload: File;


  public typeList: TypePost[] = [];
  handleFileChooser(files: FileList) {
    this.fileUpload = files.item(0);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.id = params.postId;
    });

    this.xemVnService.getTypeList().subscribe(
      result => {
        this.typeList = result;
      }, error => {
        alert('Loi');
      }
    );

    this.xemVnService.getPost(this.id).subscribe(
      result => {
        this.post = result;
      }, error => {
        alert('Loi');
      });
  }

  editPost() {
    if ( this.inputTitle.value == null || this.inputImage.value == null || this.inputType.value == null) {
      return alert('Bạn phải nhập đủ thông tin');
    }

    this.post.title =  this.inputTitle.value;
    this.post.typeId = this.inputType.value;

    console.log(this.inputTitle.value);
    console.log(this.inputImage.value);
    console.log(this.inputType.value);
    console.log(this.post.user.id);

    const form = new FormData();
    form.append('title', this.post.title);
    form.append('image', this.fileUpload);
    form.append('typeId', this.post.typeId.toString());
    form.append('userId', this.post.userId.toString());

    return this.xemVnService.editPost(form, this.post.id).subscribe(
      next => {
        alert('Đăng bài thành công');
      }, error => {
        alert('error');
      });
  }
}

