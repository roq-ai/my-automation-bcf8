const mapping: Record<string, string> = {
  'activity-logs': 'activity_log',
  comments: 'comment',
  projects: 'project',
  tasks: 'task',
  teams: 'team',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
