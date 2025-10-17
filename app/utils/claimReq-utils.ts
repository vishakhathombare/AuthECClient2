

export const claimReq = {
  adminOnly: (claims: any) => claims.role === 'Admin',
  adminOrTeacherOnly: (claims: any) =>
    claims.role === 'Admin' || claims.role === 'Teacher',
};
