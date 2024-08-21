import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const updateContacts = (list) => {
    fs.writeFile(PATH_DB, JSON.stringify(list, null, 2));
};