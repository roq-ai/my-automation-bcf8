import { ActivityLogInterface } from 'interfaces/activity-log';
import { CommentInterface } from 'interfaces/comment';
import { UserInterface } from 'interfaces/user';
import { ProjectInterface } from 'interfaces/project';
import { GetQueryInterface } from 'interfaces';

export interface TaskInterface {
  id?: string;
  name: string;
  description?: string;
  user_id: string;
  project_id: string;
  task_status?: string;
  due_date?: any;
  created_at?: any;
  updated_at?: any;
  activity_log?: ActivityLogInterface[];
  comment?: CommentInterface[];
  user?: UserInterface;
  project?: ProjectInterface;
  _count?: {
    activity_log?: number;
    comment?: number;
  };
}

export interface TaskGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  user_id?: string;
  project_id?: string;
  task_status?: string;
}
