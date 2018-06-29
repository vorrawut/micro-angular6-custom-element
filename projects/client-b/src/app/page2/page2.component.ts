import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <h1>Client B - Page 2</h1>
    <div>
      <client-a-widget></client-a-widget>
    </div>
    <div>
      <product-view></product-view>
    </div>

    `
})
export class Page2Component {
}
