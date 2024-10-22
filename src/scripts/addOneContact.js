import {createFakeContact} from "../utils/createFakeContact.js";
import {readSongs} from "../utils/readContacts.js";
import {writeContacts} from "../utils/writeContacts.js";

export const addOneContact = async () => {
    const contacts = await readSongs();
    const newContact = createFakeContact();
    await writeContacts([...contacts, newContact]);
};

addOneContact();
