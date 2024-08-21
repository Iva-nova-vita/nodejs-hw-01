import { getAllContacts } from './getAllContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { updateContacts } from '../utils/updateContacts.js';

const generateContacts = async (number) => {
  const contacts = await getAllContacts();
  const newContacts = new Array(number).fill(0).map(createFakeContact);
  const allContacts = [...contacts, ...newContacts];
  updateContacts(allContacts);
};

console.log(generateContacts(5));
