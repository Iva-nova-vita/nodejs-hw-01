import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
    const data = await fs.readFile(PATH_DB, 'UTF-8');
    const contacts = JSON.parse(data);
    const newContacts =  new Array(number).fill(0).map(createFakeContact);
   fs.writeFile(PATH_DB, JSON.stringify([...contacts,...newContacts], null, 2));
};

console.log(generateContacts(5));
