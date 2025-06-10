export const hasAccess = (roles: string[] | undefined, userRole: string) => {
  if (!roles) return true;
  return roles.includes(userRole);
};