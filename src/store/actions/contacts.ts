import { Contact, Contacts } from "../../api/contacts";

export const contactsAction = {
  getContacts: (contacts: any) =>
    ({
      type: "CONTACTS/GET_CONTACTS",
      contacts,
    } as const),
  getContact: (contact: Contact) => ({ type: 'CONTACTS/GET_CONTACT', contact } as const),
  addContact: (contact: any) => ({ type: "CONTACTS/ADD_CONTACT", contact } as const),
  updateContact: (contact: any) =>
    ({
      type: "CONTACTS/UPDATE_CONTACT",
      contact,
    } as const),
  deleteContact: (id: any) =>
    ({ type: "CONTACTS/DELETE_CONTACT", id } as const),
  updateAddContactName: (name: string) => ({ type: "CONTACTS/UPDATE_ADD_CONTACT_NAME", name } as const),
  updateAddContactSurname: (surname: string) => ({ type: "CONTACTS/UPDATE_ADD_CONTACT_SURNAME", surname } as const),
  updateAddContactEmail: (email: string) => ({ type: "CONTACTS/UPDATE_ADD_CONTACT_EMAIL", email } as const)
};
