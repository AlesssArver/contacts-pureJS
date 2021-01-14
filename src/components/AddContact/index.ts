import "./index.sass";

import { Input, Button } from "../index";

type Props = {
  addContactName: string,
  addContactSurname: string,
  addContactEmail: string
}

export const AddContact = (props: Props) => {
  const { addContactName, addContactSurname, addContactEmail } = props;

  return `
        <div class="add-contact" id="add-contact">
            ${Input({
              type: "text",
              placeholder: "Name",
              name: "name",
              value: addContactName,
              classes: "add-contact--input add-contact--input__name",
              onChange: 'onChangeAddContactName()'
            })}
            ${Input({
              type: "text",
              placeholder: "Surname",
              name: "surname",
              value: addContactSurname,
              classes: "add-contact--input add-contact--input__surname",
            })}
            ${Input({
              type: "text",
              placeholder: "Email",
              name: "email",
              value: addContactEmail,
              classes: "add-contact--input add-contact--input__email",
            })}
            ${Button({ children: "create", classes: "add-contact--btn" })}
        </div>
    `;
};
