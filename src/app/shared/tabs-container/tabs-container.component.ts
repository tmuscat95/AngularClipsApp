import {
  Component,
  OnInit,
  ContentChildren,
  AfterContentInit,
  QueryList,
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css'],
})
export class TabsContainerComponent implements OnInit, AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent> =
    new QueryList<TabComponent>(); //Gets a handle to all children rendered by ng-content of this component type.

  constructor() {}

  selectTab(tab: TabComponent) {
    this.tabs?.forEach((tab) => (tab.active = false));
    tab.active = true;

    return false;
    /**
    Prevents default behaviour.
    this function is called when clicking on an anchor tag; which by default will append a # to the
    url. By returning false, we can prevent this behaviour.
    */
  }

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    const activeTabs = this.tabs?.filter((tab) => tab.active);

    if (!activeTabs || activeTabs.length === 0) {
      this.selectTab(this.tabs!.first);
    }
  }
}
