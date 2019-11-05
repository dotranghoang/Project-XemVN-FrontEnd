import { Component, OnInit } from '@angular/core';
import {TypePost} from '../TypePost';
import {XemVnService} from '../xem-vn.service';
import {FormControl} from '@angular/forms';
import {Post} from '../post';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  constructor(private xemVnService: XemVnService) {
    this.typeList = [];
  }
  inputTitle = new FormControl();
  inputType = new FormControl();
  inputImage = new FormControl();
  userID = 7;
  postId;

  fileUpload: File;
  public typeList: TypePost[] = [];
  public postList: Post[] = [];

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
         if (this.postList == null) {
           this.postId = 1;
         } else {
           this.postId = this.postList.length + 1;
           console.log(this.postList.length);
         }
         console.log(this.postId);
      }, error => {
        alert('Lỗi lấy danh sách bài viết ');
      }
    );
  }
  handleFileChooser(files: FileList) {
    this.fileUpload = files.item(0);
  }

  createPost() {
    if ( this.inputTitle.value == null || this.inputImage.value == null || this.inputType.value == null) {
      return alert('Bạn phải nhập đủ thông tin');
    }
    const post: Partial<Post> = {
      id: this.postId ,
      title: this.inputTitle.value,
      typeId: this.inputType.value,
      userId: this.userID
    };

    this.xemVnService.createPost(post).subscribe(
      next => {
      }, error => {
        return alert('error add post');
      });
  }

  uploadFile() {
    const form = new FormData();
    form.append('postId', (this.postId).toString());
    form.append('file', this.fileUpload);

    setTimeout(time => {
      this.xemVnService.uploadFile(form).subscribe(
        result => {
        }, error => {
          return alert('fail upload file');
        });
      console.log(this.postId);
      alert('Đăng bài thành công');
    }, 1000);
  }
}

