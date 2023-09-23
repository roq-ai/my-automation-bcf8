import { UserInterface } from 'interfaces/user';
import { TeamInterface } from 'interfaces/team';
import { ProjectInterface } from 'interfaces/project';
import { TaskInterface } from 'interfaces/task';
import { CommentInterface } from 'interfaces/comment';
import { GetQueryInterface } from 'interfaces';

export interface ActivityLogInterface {
  id?: string;
  activity: string;
  user_id: string;
  team_id: string;
  project_id: string;
  task_id: string;
  comment_id: string;
  activity_type?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  team?: TeamInterface;
  project?: ProjectInterface;
  task?: TaskInterface;
  comment?: CommentInterface;
  _count?: {};
}

export interface ActivityLogGetQueryInterface extends GetQueryInterface {
  id?: string;
  activity?: string;
  user_id?: string;
  team_id?: string;
  project_id?: string;
  task_id?: string;
  comment_id?: string;
  activity_type?: string;
}
