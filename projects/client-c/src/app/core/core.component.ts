import { Component } from '@angular/core';

@Component({
  template: `
    <div id="client-c">
      <div>
        <a routerLink="page1">Page 1</a> | <a routerLink="page2">Page 2</a>
      </div>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    #client-c { border: navy dashed 5px; padding: 10px }
  `],
})
export class CoreComponent {
}
