interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Administrator'],
  tenantName: 'Team',
  applicationName: 'My automation',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage user data', 'Manage team data', 'Manage project data', 'Manage task data'],
  getQuoteUrl: 'https://app.roq.ai/proposal/5f0b6cf9-27e3-4547-9014-1ad25d1e2e1f',
};
