import { ActivityLogInterface } from 'interfaces/activity-log';
import { ProjectInterface } from 'interfaces/project';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface TeamInterface {
  id?: string;
  description?: string;
  team_size?: number;
  team_status?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  activity_log?: ActivityLogInterface[];
  project?: ProjectInterface[];
  user?: UserInterface;
  _count?: {
    activity_log?: number;
    project?: number;
  };
}

export interface TeamGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  team_status?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
