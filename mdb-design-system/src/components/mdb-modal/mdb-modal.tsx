import { Component, getAssetPath, h, Prop, State, Watch, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'mdb-modal',
  styleUrl: 'mdb-modal.css',
  shadow: true,
  assetsDirs: ['assets']
})
export class MdbModal {
  @Prop({
    mutable: true,
    reflect: true,
  })
  @Prop() isopen: boolean;
  @Prop() header: string;
  @Prop() appearance: string;
  @Prop() buttons: string;
  @Prop() closeIcon: string = 'x.svg';

  @State() _buttons: Array<any>;

  @Watch('buttons')
  objectDataWatcher(stringButtonData) {
    if (typeof stringButtonData === 'string') {
      this._buttons = JSON.parse(stringButtonData);
    } else {
      this._buttons = stringButtonData;
    }
  }
  
  componentWillLoad() {
    this.objectDataWatcher(this.buttons);
  }

  @Event() private action: EventEmitter;

  private handleCancel = () => {
    this.isopen = false;
  };

  private handleAction = () => {
    this.action.emit();
  };

  render() {
    return (
      <div class={this.isopen ? 'modal-wrapper isopen' : 'modal-wrapper'}>
        <div class="modal-overlay" onClick={this.handleCancel} />
        <div class="modal">
          <div class="header">
            <h6>{this.header}</h6>
            <div class="close" onClick={this.handleCancel}>
              <img src={getAssetPath(`./assets/${this.closeIcon}`)} alt="Close icon" />
            </div>
          </div>
          <div class="body">
            <slot />
          </div>
          <div class="footer">
            {this._buttons.map((button, index) => (
              <mdb-button onClick={index === 0 ? this.handleAction : this.handleCancel} text={button.text} appearance={index === 0 && this.appearance} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
