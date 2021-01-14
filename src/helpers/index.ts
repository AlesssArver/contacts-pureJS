export class initDOMComponent {
  private _currentElement: any;

  constructor(_currentElement: string) {
    this._currentElement = _currentElement;
  }

  mountComponent(container: any) {
    container.insertAdjacentHTML("afterbegin", this._currentElement);
    return this._currentElement;
  }
}

export const init = {
  createComponent(ctx: () => string) {
    const node = ctx();
    return node;
  },
  render(element: any, container: any) {
    const componentInstance = new initDOMComponent(element);
    return componentInstance.mountComponent(container);
  },
};
