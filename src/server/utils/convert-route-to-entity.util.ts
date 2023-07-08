const mapping: Record<string, string> = {
  retailers: 'retailer',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
