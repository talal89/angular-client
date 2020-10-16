import { DOCUMENT } from '@angular/common';
import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { NavService, Menu } from '../../services/nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public categories: string[] = ['Admin', 'Shopify', 'Ecommerce', 'Prestashop'];
  public paymentOptions: string[] = ['Paypal', 'Credit Card', 'Visa', 'Paytm'];

  public open: boolean = false;
  public open_search: boolean = false;
  public open_mobile_nav: boolean = false;
  public searchResult: boolean = false;
  public searchResultEmpty: boolean = false;
  
  public url: any;
  public text: string;
  public elem;

  public menuItems: Menu[];
  public items: Menu[];

  constructor(public navServices: NavService,
    @Inject(DOCUMENT) private document: any) {
  }

  ngOnDestroy() {
  }

  ToggleSearch() {
    this.open = !this.open;
  }
  
  collapseSidebar() {
    this.navServices.collapseSidebar = !this.navServices.collapseSidebar;
  }

  openMobileNav() { 
    this.open_mobile_nav = !this.open_mobile_nav;
  }

  mobileSearchToggle() {
    this.open_search = !this.open_search;
  }
  
  ngOnInit() {
    this.elem = document.documentElement;
    this.navServices.items.subscribe(menuItems => {
      this.items = menuItems
    });
  }
}
