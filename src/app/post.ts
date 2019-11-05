import {TypePost} from './TypePost';
import {User} from './user';
import {MultiFile} from './MultiFile';

export interface Post {
  id: number;
  title: string;
  typeId: number;
  userId: number;
  type: TypePost;
  user: User;
  files: MultiFile;
}
