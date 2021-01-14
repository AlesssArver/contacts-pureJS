import { ResponseAPI, instance } from "./index";

export type Contact = {
  id: string;
  name: string;
  surname: string;
  email: string;
};
export type Contacts = {
  contacts: Contact[] | null;
};

export const contactsApi = {
  getContacts: () => {
    return instance.get("contacts").then((res) => res.data);
  },
  getContact: (id: string) => {
    return instance.get(`contacts?id=${id}`).then((res) => res.data);
  },
  addContact: (contact: { name: string, surname: string, email: string}) => {
    instance.post("contacts", { ...contact }).then((res) => res.data);
  },
  changeContact: (id: string, text: string) =>
    instance
      .put<ResponseAPI<Contact>>(`contacts/${id}`, { id, text })
      .then((res) => res.data),
  deleteContact: (id: string) =>
    instance.delete(`contacts/${id}`).then((res) => res.data),
};
