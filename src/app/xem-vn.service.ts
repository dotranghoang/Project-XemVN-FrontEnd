import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TypePost} from './TypePost';
import {User} from './user';
import {Post} from './post';
import {MultiFile} from './MultiFile';

@Injectable({
  providedIn: 'root'
})
export class XemVnService {
  private readonly API_URL = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getTypeList(): Observable<TypePost[]> {
    return this.http.get<TypePost[]>(this.API_URL + '/type');
  }

  getFileList(): Observable<MultiFile[]> {
    return this.http.get<MultiFile[]>(this.API_URL + '/file');
  }

  getPostList(): Observable<Post[]> {
    return this.http.get<Post[]>(this.API_URL + '/post');
  }

  getPost(id: string): Observable<Post> {
    return this.http.get<Post>(this.API_URL + '/post/' + id);
  }

  getUserList(): Observable<User[]> {
    return this.http.get<User[]>(this.API_URL + '/user');
  }
  createType(type: Partial<TypePost>): Observable<TypePost> {
    return this.http.post<TypePost>(this.API_URL + '/type', type);
  }

  createPost(post: Partial<Post>): Observable<Post> {
    return this.http.post<Post>(this.API_URL + '/post', post);
  }

  uploadFile(file: FormData): Observable<MultiFile> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');

    return this.http.post<MultiFile>(this.API_URL + '/file', file , {headers});
  }

  editPost(post: FormData , postId: number ): Observable<Post> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');

    return this.http.put<Post>(this.API_URL + '/post/' + postId, post, { headers });
  }

  createUser(user: Partial<User>): Observable<User> {
    return this.http.post<User>(this.API_URL + '/user', user);
  }

  editType(type: Partial<TypePost>): Observable<TypePost> {
    return this.http.put<TypePost>(this.API_URL + '/type/' + type.id, type);
  }

  deleteType(type: TypePost): Observable<TypePost> {
    return this.http.delete<TypePost>(this.API_URL + '/type/' + type.id);
  }

}
