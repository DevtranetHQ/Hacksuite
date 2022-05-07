import kebabCase from "lodash/kebabCase";

export const generateUniqueIdFromName = async (
  name: string,
  checkUnique: (id: string) => Promise<boolean>
) => {
  let id = kebabCase(name);

  let i = 1;
  while (await checkUnique(id)) {
    id = `${id}-${i}`;
    i++;
  }

  return id;
};
