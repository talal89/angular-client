import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  public config = {
    settings: {
      layout_type: 'rtl',
      sidebar: {
        type: 'compact-wrapper',
        body_type: 'sidebar-icon' 
      },
      sidebar_setting: 'default-sidebar', 
      sidebar_background_setting: ''
    },
    color: {
        layout_version: 'light', 
        color: 'color', 
        primary_color: '#7366ff', 
        secondary_color: '#f73164', 
        mix_background_layout: 'default', 
    },
    router_animation: 'fadeIn'
  }

  constructor() { 
    if(this.config.settings.layout_type == 'rtl') {
      const htmlElement: HTMLElement = document.getElementsByTagName('html')[0];
      const lang = this.config.settings.layout_type == 'rtl' ? 'ar' : 'en';
      htmlElement.setAttribute('dir', this.config.settings.layout_type);
      htmlElement.setAttribute('lang', lang);

      const bodyElement: HTMLElement = document.getElementsByTagName('body')[0];
      bodyElement.style.textAlign = 'right';
    }
    const color = localStorage.getItem('color') || this.config.color.color;
    const layoutVersion = localStorage.getItem('layoutVersion') || this.config.color.layout_version;
    if (color) {
      if (layoutVersion)
      this.config.color.layout_version = layoutVersion;
      this.config.color.mix_background_layout = layoutVersion;
    }
  }
}
