import queryString from 'query-string';

import { addContact, removeContact } from "../store/reducers/contacts";
import { store } from "../store";
import { contactsAction } from "../store/actions/contacts";

const params = queryString.parse(window.location.search);
const state = store.getState()

const confirmModalElement = document.querySelector('.confirm--remove--modal')


export const onRemoveContact = () => {
    const removeButtonElement = document.querySelector('.contact-page__header--button--remove')
    console.log(removeButtonElement)
    removeButtonElement.addEventListener('click', (e: any) => {
        console.log('click')
        confirmModalElement.style.display = 'flex'
    })
}

export const onConfirmRemoveContact = () => {
    const element = document.querySelector('.remove--modal--button__confirm')
    element.addEventListener('click', () => {
        console.log('remove')
        removeContact(params.id)
        confirmModalElement.style.display = 'none'
        window.location.href = '/'
    })
}

export const onCancelRemoveContact = () => {
    const element = document.querySelector('.remove--modal--button__cancel')
    element.addEventListener('click', () => {
        console.log('cancel')
        confirmModalElement.style.display = 'none'
    })
}