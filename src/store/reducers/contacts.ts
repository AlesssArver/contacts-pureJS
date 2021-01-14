import { Contact, contactsApi as api } from "../../api/contacts";
import { contactsAction as action } from "../actions/contacts";
import { store } from "../index";

export const contactsState = {
  contacts: [] as any,
    contact: {
      id: '',
      name: '',
      surname: '',
      email: ''
    } as Contact,
    addContactName: '',
    addContactSurname: '',
    addContactEmail: ''
};
type State = typeof contactsState;
// type Actions = InferActionsTypes<typeof action>;

export const contactsReducer = (state: State, action: any) => {
  switch (action.type) {
    case "CONTACTS/GET_CONTACTS":
      return {
        ...state,
        contacts: action.contacts,
      };
    case "CONTACTS/GET_CONTACT":
      return {
        ...state,
        contact: action.contact
      }
    case "CONTACTS/ADD_CONTACT":
      return {
        ...state,
        contacts: [action.contact, ...state.contacts],
      };
    case "CONTACTS/UPDATE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.map((value: any) => {
          if (value.id === action.contact.id) {
            const { name, surname, email } = action.contact;
            return {
              ...value,
              name,
              surname,
              email,
            };
          }
        }),
      };
    case "CONTACTS/DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter((value: any) => value.id !== action.id),
      };
    case "CONTACTS/UPDATE_ADD_CONTACT_NAME": 
      return {
        ...state,
        addContactName: action.name
      }
    case "CONTACTS/UPDATE_ADD_CONTACT_SURNAME":
      return {
        ...state,
        addContactSurname: action.surname
      }
    case "CONTACTS/UPDATE_ADD_CONTACT_EMAIL":
      return {
        ...state,
        addContactEmail: action.email
      }
    default:
      return state;
  }
};

export const showContacts = async () => {
  const data = await api.getContacts();
  store.dispatch(action.getContacts(data));
};

export const showContact = async (id: string | string[]) => {
  if (typeof id === 'string') {
    const data = await api.getContact(id)
    store.dispatch(action.getContact(data[0]))
  }
}

export const addContact = async (contact: { name: string, surname: string, email: string}) => {
  await api.addContact(contact)
  store.dispatch(action.addContact(contact))
}

export const removeContact = async (id: string | string[]) => {
  if (typeof id === 'string') {
    await api.deleteContact(id)
    store.dispatch(action.deleteContact(id))
  }
}