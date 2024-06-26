import { IUser } from './user.model';

export interface IAuth {
  accessToken: string;
  user: IUser;
  roles: string[];
}
