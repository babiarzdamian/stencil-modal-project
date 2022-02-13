import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'mdb-button',
  styleUrl: 'mdb-button.css',
  shadow: true,
})
export class MdbButton {
  @Prop() text: string;
  @Prop() appearance: string;

  render() {
    return (
      <button class={`btn ${this.appearance}`} type="button">
        {this.text}
      </button>
    );
  }

}
