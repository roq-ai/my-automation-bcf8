import { ActivityLogInterface } from 'interfaces/activity-log';
import { TaskInterface } from 'interfaces/task';
import { UserInterface } from 'interfaces/user';
import { TeamInterface } from 'interfaces/team';
import { GetQueryInterface } from 'interfaces';

export interface ProjectInterface {
  id?: string;
  name: string;
  description?: string;
  user_id: string;
  team_id: string;
  project_status?: string;
  deadline?: any;
  created_at?: any;
  updated_at?: any;
  activity_log?: ActivityLogInterface[];
  task?: TaskInterface[];
  user?: UserInterface;
  team?: TeamInterface;
  _count?: {
    activity_log?: number;
    task?: number;
  };
}

export interface ProjectGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  user_id?: string;
  team_id?: string;
  project_status?: string;
}
