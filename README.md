# Poor React

## Features
* One-Way Data Flow
* Pure Render
* State is Structure

## Example
```js
class Hello extends PoorReact.Component {
    render() {
        return `<div>Hello {this.properties.text}</div>`;
    }
};

PoorReact.DOM.render(
    new Hello({ text: "World!" }),
    document.getElementById("container")
);
```
