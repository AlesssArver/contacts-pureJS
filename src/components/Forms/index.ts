import "./index.sass";

type Props = {
  type: string;
  placeholder: string;
  name: string;
  value?: string;
  classes?: string;
  id?: string;
  onChange?: any
};
export const Input = (props: Props) => {
  const { type, placeholder, name, value, classes, id, onChange } = props;

  return `
    <input
        type="${type}"
        placeholder="${placeholder}"
        name="${name}"
        class="${classes} input"
        value="${value}"
    />
    `;
};
