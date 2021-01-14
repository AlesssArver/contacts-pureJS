import queryString from 'query-string';

import { Route } from "./helpers/router-dom";
import { showContact } from './store/reducers/contacts'
import { Contacts, Contact } from "./pages";

type Props = {
  state: any;
};
const params = queryString.parse(window.location.search);
let contactData: any = {}

showContact(params.id).then(data => contactData = data)
export const App = (props: Props) => {
  const { state } = props;

  return `
        <div class="main__wrapper">
          <div></div>
            ${Route("/", () => Contacts({ contacts: state.contacts.contacts, addContactName: state.contacts.addContactName, addContactSurname: state.contacts.addContactSurname, addContactEmail: state.contacts.addContactEmail}))}
            ${!params.id ? Route("/contacts", () =>
              Contacts({ contacts: state.contacts.contacts, addContactName: state.contacts.addContactName, addContactSurname: state.contacts.addContactSurname, addContactEmail: state.contacts.addContactEmail })
            ) : ""}
            ${params.id && JSON.stringify(state.contacts.contact) !== '{}' &&  Route("/contacts", () => Contact({ contact: state.contacts.contact })) || ""}
        </div>
    `;
};
