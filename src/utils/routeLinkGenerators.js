

export const routeLinkGenerators = (items) => {
  const links = items.reduce((acc, item) => {
    if (item.path && item.name) {
      acc.push({
        name: item.name,
        path: item.path,
        icon: item.icon,
      });
    }
    if (item.children) {
      acc.push({
        name: item.name,
        icon: item.icon,
        rootPath: item.rootPath,
        children: item.children
          .filter((child) => child.path && child.name && child.icon)
          .map((child) => ({
            subName: child.name,
            subPath: child.path,
            subIcon: child.icon,
          })),
      });
    }
    return acc;
  }, []);
  return links;
};
