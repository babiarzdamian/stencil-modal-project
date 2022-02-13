import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'mdb-button',
  styleUrl: 'mdb-button.css',
  shadow: true,
})
export class MdbButton {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
