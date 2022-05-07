import kebabCase from "lodash/kebabCase";

export const generateUniqueIdFromName = async <T extends string = string>(
  name: string,
  checkExisting: (id: string) => Promise<boolean>
) => {
  let id = kebabCase(name);

  let i = 1;
  while (await checkExisting(id)) {
    id = `${id}-${i}`;
    i++;
  }

  return id as T;
};
