import "./index.sass";

type Props = {
  children: string;
  classes?: string;
  id?: string;
};
export const Button = (props: Props) => {
  const { children, classes, id } = props;

  return `
    <button class="${classes} button" id="${id}">
        ${children}
    </button>
    `;
};
