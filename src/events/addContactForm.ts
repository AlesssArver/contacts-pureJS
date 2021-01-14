import { addContact } from "../store/reducers/contacts";
import { store } from "../store";
import { contactsAction } from "../store/actions/contacts";

const state = store.getState()

export const onCreateContact = () => {
    const element = document.querySelector('.add-contact--btn')
    element.addEventListener('click', (e: any) => {
        console.log(state)
        addContact({ 
            name: state.contacts.addContactName,
            surname: state.contacts.addContactSurname,
            email: state.contacts.addContactEmail
        })
        store.dispatch(contactsAction.updateAddContactName(''))
        store.dispatch(contactsAction.updateAddContactSurname(''))
        store.dispatch(contactsAction.updateAddContactEmail(''))
    })
}

export const onChangeAddContactName = () => {
    const element = document.querySelector('.add-contact--input__name')
    element.addEventListener('input', (e: any) => {
        store.dispatch(contactsAction.updateAddContactName(e.target.value))
    })
}

export const onChangeAddContacSurname = () => {
    const element = document.querySelector('.add-contact--input__surname')
    element.addEventListener('input', (e: any) => {
        store.dispatch(contactsAction.updateAddContactSurname(e.target.value))
    })
}

export const onChangeAddContacEmail = () => {
    const element = document.querySelector('.add-contact--input__email')
    element.addEventListener('input', (e: any) => {
        store.dispatch(contactsAction.updateAddContactEmail(e.target.value))
    })
}