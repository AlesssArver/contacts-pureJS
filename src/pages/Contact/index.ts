import { Contact as ContactType } from '../../api/contacts'

import './index.sass'

import { Button, Card, ConfirmRemoveModal } from '../../components'

type Props = {
    contact: ContactType
}
export const Contact = (props: Props) => {
    const { contact } = props
    console.log(props)

    return `<div class='contact-page__wrapper'>
        ${Card({ children: `
            <div class='contact-page__header'>
                ${Button({ children: 'remove', classes: 'contact-page__header--button--remove' })}
            </div>
            <div>${contact.name} ${contact.surname}</div>
            <div>${contact.email}</div>
        `, classes: 'contact-page--card'})}
        ${ConfirmRemoveModal()}
    </div>`
}