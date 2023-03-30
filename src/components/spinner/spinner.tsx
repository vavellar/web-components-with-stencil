import { Component, h } from '@stencil/core';
@Component({
  tag: 'victor-spinner',
  styleUrl: './spinner.css',
  shadow: true
})
export class Spinner {
  render() {
    return (
      <div class="loading">
        <div></div>
        <div></div>
        <div></div>
      </div>
    )
  }
}
