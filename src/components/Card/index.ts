import "./index.sass";

type Props = {
  children: any;
  classes?: any;
  shadow?: boolean
};
export const Card = (props: Props) => {
  const { children, classes, shadow } = props;

  const styles = {
    shadow: 'box-shadow: 0 0 5px 1px lightgray'
  }

  return `
        <div class='${classes} card' style='${shadow ? styles.shadow : ''}'>
            ${children || ""}
        </div>
    `;
};
