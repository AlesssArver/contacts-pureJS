import './index.sass'

import { Card } from '../index'

type Props = {
    children: string
    classes?: string
}
export const Modal = (props: Props) => {
    const { children, classes = "" } = props

    return `
        <div class="${classes} modal__wrapper">
            ${Card({ children })}
        </div>
    `
}