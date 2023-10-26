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
  ownerRoles: ['Business Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Business Owner', 'HR Manager', 'Payroll Administrator', 'Employee', 'Accountant'],
  tenantName: 'Company',
  applicationName: 'HR Information System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read company information',
    'Read user profiles',
    'Read employee details',
    'View vacation requests',
  ],
  ownerAbilities: [
    'Manage company information',
    'Manage employee records',
    'Manage payroll records',
    'Manage vacation requests',
  ],
  getQuoteUrl: 'https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/ed63bd41-2a4e-418a-bbe4-c3b8e0c15667',
};
