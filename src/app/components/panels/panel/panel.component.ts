import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbAccordion } from '@ng-bootstrap/ng-bootstrap/accordion/accordion';
import * as $ from 'jquery';
@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  isPanelActive: boolean;
  @ViewChild('myaccordion', {static : true}) accordion: NgbAccordion;

  constructor() { }

  ngOnInit() {
    
  }

  onPanelChange(evt) {
   var selector = `#${evt.panelId}-header`;
   this.accordion.panels.forEach(p => {
     $(`#${p.id}-header`).removeClass('active');
   });
   if (evt.nextState)
    $(selector).addClass('active');
    if(!evt.nextState)
    $(selector).removeClass('active');
  }
}
