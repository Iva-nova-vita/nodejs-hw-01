import { updateContacts } from '../utils/updateContacts.js';

export const removeAllContacts = async () => {
    updateContacts([]);
};

removeAllContacts();
