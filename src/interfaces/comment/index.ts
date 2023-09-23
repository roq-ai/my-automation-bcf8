import { ActivityLogInterface } from 'interfaces/activity-log';
import { UserInterface } from 'interfaces/user';
import { TaskInterface } from 'interfaces/task';
import { GetQueryInterface } from 'interfaces';

export interface CommentInterface {
  id?: string;
  content: string;
  user_id: string;
  task_id: string;
  comment_status?: string;
  likes?: number;
  created_at?: any;
  updated_at?: any;
  activity_log?: ActivityLogInterface[];
  user?: UserInterface;
  task?: TaskInterface;
  _count?: {
    activity_log?: number;
  };
}

export interface CommentGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  user_id?: string;
  task_id?: string;
  comment_status?: string;
}
