import { HostListener, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Menu
export interface Menu {
	path?: string;
	title?: string;
	icon?: string;
	type?: string;
	badgeType?: string;
	badgeValue?: string;
	active?: boolean;
	bookmark?: boolean;
	children?: Menu[];
}

@Injectable({
	providedIn: 'root'
})

export class NavService {

	public screenWidth: any;
	public collapseSidebar: boolean = false;
	public fullScreen: boolean = false;

	constructor() {
		this.onResize();
		if (this.screenWidth < 991) {
			this.collapseSidebar = true;
		}
	}

	// Windows width
	@HostListener('window:resize', ['$event'])
	onResize(event?) {
		this.screenWidth = window.innerWidth;
		if (window.innerWidth < 991) {
			this.collapseSidebar = true;
		}
	}

	MENUITEMS: Menu[] = [
		{
			title: 'Dashboard', icon: 'home', path:'/home/dashboard', type: 'link', badgeType: 'pill gradient-primary-1', badgeValue: '1', active: false
		},
		{
			title: 'Components', icon: 'layers', type: 'sub', badgeType: 'pill gradient-primary-1', badgeValue: '4', active: false, children: [
				{ path: '/home/components/forms', title: 'forms', type: 'link' },
				{ path: '/home/components/tabs', title: 'tabs', type: 'link' },
				{ path: '/home/components/panels', title: 'panels', type: 'link' }
			]
		}
	];
 
	// Array
	items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
}
