import "./index.sass";

import { Card } from '../index'

type Props = {
  id: string;
  name: string;
  surname: string;
  email: string;
};
export const Contact = (props: Props) => {
  const { id, name, surname, email } = props;

  return Card({children: `
      <a href='contacts?id=${id}'>
        <div class="contact__fullname">${name} ${surname}</div>
        <div class='contact__contact'>${email}</div>
      </a>
  `, classes: 'contact--card', id, shadow: true})
};
