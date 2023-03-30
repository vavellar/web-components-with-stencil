import { Component, h, Method, Prop, State } from '@stencil/core';

@Component({
  tag: 'victor-side-drawer',
  styleUrl: './side-drawer.css',
  shadow: true
})
export class SideDrawer {
  @State() showContactInfo = false
  @Prop({reflect: true}) drawerTitle: string = 'Drawer title'
  @Prop({reflect: true, mutable: true}) opened: boolean

  onCloseDrawer() {
    this.opened = false
  }

  onContentChange(content: 'nav' | 'contact' ) {
    this.showContactInfo = content === 'contact'
  }

  @Method()
  open() {
    this.opened = true
  }
  render() {
    let mainContent = <slot/>
    if (this.showContactInfo) {
      mainContent = (
        <div id="contact-information">
          <h2>Contact information</h2>
          <p>You can reach us via phone or email</p>
          <ul>
            <li>Phone: 23231213</li>
            <li>Email: something@somenthing.com</li>
          </ul>
        </div>
      )
    }

    // let content = null
    // if (this.open) {
    //   content = (
    //     <aside>
    //       <header>
    //         <h1>
    //           { this.title }
    //         </h1>
    //       </header>
    //       <main>
    //         <slot/>
    //       </main>
    //     </aside>
    //   )
    // }

    return (
      <div>
        <div class="backdrop" onClick={this.onCloseDrawer.bind(this)}></div>
        <aside>
          <header>
            <h1>
              {this.drawerTitle}
            </h1>
            <button onClick={this.onCloseDrawer.bind(this)}>X</button>
          </header>
          <section id="tabs">
            <button class={!this.showContactInfo && 'active'}
                    onClick={this.onContentChange.bind(this, 'nav')}>Navigation
            </button>
            <button class={this.showContactInfo && 'active'}
                    onClick={this.onContentChange.bind(this, 'contact')}>Contact
            </button>
          </section>
          <main>
            {mainContent}
          </main>
        </aside>
      </div>
    )
  }
}
