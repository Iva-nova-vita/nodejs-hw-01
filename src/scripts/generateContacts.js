import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { getAllContacts } from './getAllContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  const contacts = await getAllContacts();
  const newContacts = new Array(number).fill(0).map(createFakeContact);
  fs.writeFile(PATH_DB, JSON.stringify([...contacts, ...newContacts], null, 2));
};

console.log(generateContacts(5));
