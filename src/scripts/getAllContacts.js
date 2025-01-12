import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
  const data = await fs.readFile(PATH_DB, 'UTF-8');
  const contacts = JSON.parse(data);
  return contacts;
};

console.log(await getAllContacts());
