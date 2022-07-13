import { User } from 'src/app/_interfaces/user';

export interface PageParams {
  title: string;
  visible: boolean;
  user?: User;
}
