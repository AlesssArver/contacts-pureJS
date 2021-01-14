import { contactsReducer, contactsState } from "./reducers/contacts";

export const store = {
  _state: {
    contacts: {
      contacts: [] as any,
      contact: {} as any,
      addContactName: '',
      addContactSurname: '',
      addContactEmail:  ''
    }
  },
  getState() {
    return this._state;
  },
  _callSubscriber: () => {
    console.log("State was changed");
  },
  subscribe(observer: any) {
    this._callSubscriber = observer;
  },
  dispatch(action: any) {
    this._state.contacts = contactsReducer(this._state.contacts, action);
    this._callSubscriber(this._state);
  },
};
