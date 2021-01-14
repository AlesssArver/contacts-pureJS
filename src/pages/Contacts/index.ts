import { showContacts } from "../../store/reducers/contacts";
import { Contact as ContactType } from "../../api/contacts";

import "./index.sass";

import { Card, Input, AddContact, Contact } from "../../components";

showContacts();

type Props = {
  contacts: ContactType[];
  addContactName: string,
  addContactSurname: string,
  addContactEmail: string
};
export const Contacts = (props: Props) => {
  const { contacts, addContactName, addContactSurname, addContactEmail } = props;
  let searchInput = "";

  console.log(props)
  // const onChangeSearch = () => {
  //   const doc = document.getElementById("search");
  // };

  const contactsHTML = contacts.map(({ id, name, surname, email }) => {
    return Contact({ id, name, surname, email });
  });

  return `
        <div class='contacts__wrapper'>
        ${Card({
          children: `
            <form class="search">
                ${Input({
                  type: "text",
                  placeholder: "Search",
                  name: "search",
                  value: searchInput,
                  classes: "search--input",
                  id: "search",
                })}
            </form>
            <div class="contacts">${contactsHTML}</div>
            ${AddContact({ addContactName, addContactSurname, addContactEmail })}
        `,
          classes: "contacts--card",
        })}
        </div >
    `;
};
