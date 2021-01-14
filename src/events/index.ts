import queryString from 'query-string';

import { onCreateContact, onChangeAddContactName, onChangeAddContacEmail, onChangeAddContacSurname } from "./addContactForm";
import { onCancelRemoveContact, onConfirmRemoveContact, onRemoveContact } from './contact';

const params = queryString.parse(window.location.search);

if (!params.id) {
    onCreateContact()
    onChangeAddContactName()
    onChangeAddContacSurname()
    onChangeAddContacEmail()
} else {
    onRemoveContact()
    if (document.querySelector('.confirm--remove--modal').style.display === 'flex') {
        console.log('confirm modal')
        onConfirmRemoveContact()
        onCancelRemoveContact()
    }
}