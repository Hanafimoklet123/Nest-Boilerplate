import * as fs from 'fs';
import * as path from 'path';

export const templateLoader = async (filename, replacer) => {
  const content = await fs.promises.readFile(
    path.join(process.env.EMAIL, filename),
    'utf8',
  );

  const keys = Object.keys(replacer);
  return keys.reduce((template, key) => {
    return template.replace(new RegExp(`\\$\\{${key}\\}`, 'g'), replacer[key]);
  }, content);
};
