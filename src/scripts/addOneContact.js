import { updateContacts } from '../utils/updateContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { getAllContacts } from './getAllContacts.js';

export const addOneContact = async () => {
    const contacts = await getAllContacts();
    const newContact = createFakeContact();
    const allContacts = [...contacts, newContact];
    updateContacts(allContacts);
};

addOneContact();
