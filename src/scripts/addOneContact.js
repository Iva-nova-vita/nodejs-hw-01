import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { getAllContacts } from './getAllContacts.js';

export const addOneContact = async () => {
    const contacts = await getAllContacts();
    const newContact = createFakeContact();
    fs.writeFile(PATH_DB, JSON.stringify([...contacts, newContact], null, 2));
};

addOneContact();
