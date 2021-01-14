import './index.sass'

import { Button, Modal } from "../index"

export const ConfirmRemoveModal = () => {
    return `
        ${Modal({ children: `
            <div>
                <h2>A you want to remove?</h2>
                <div>
                    ${Button({ children: 'Yes', classes: 'remove--modal--button__confirm' })}
                    ${Button({ children: 'No', classes: 'remove--modal--button__cancel' })}
                </div>
            </div>
        `, classes: 'confirm--remove--modal' })}
    `
}