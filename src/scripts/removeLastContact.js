import { getAllContacts } from './getAllContacts.js';
import { updateContacts } from '../utils/updateContacts.js';

export const removeLastContact = async () => {
    const contacts = await getAllContacts();
    contacts.pop();
    updateContacts(contacts);
};

removeLastContact();
