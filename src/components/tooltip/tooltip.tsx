import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'victor-tooltip',
  styleUrl: './tooltip.css',
  shadow: true
})

export class Tooltip {

  @Prop({reflect: true}) tooltipText: string = 'Dumb text'
  @State() isOpen: boolean

  onClickIcon() {
    this.isOpen = !this.isOpen
  }
  render() {
    return (
      <div class="tooltip">
        <slot/>
        <div class="tooltip__wrapper">
          <div class="tooltip__icon" onClick={this.onClickIcon.bind(this)}>?</div>
          <div class={this.isOpen && "tooltip__text"}>
            {this.isOpen && this.tooltipText}
          </div>
        </div>
      </div>
    )
  }
}
