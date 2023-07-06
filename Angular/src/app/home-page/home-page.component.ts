import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, AfterViewInit {
  
constructor() {}
ngOnInit() {
 
}
ngAfterViewInit(): void {
  $(() => {
    const imgPopup = $('.img-popup');
    const imgCont = $('.container__img-holder');
    const popupImage = $('.img-popup img');
    const closeBtn = $('.close-btn');

    imgCont.on('click', function() {
      const img_src = $(this).children('img').attr('src');
      imgPopup.children('img').attr('src', img_src || '');
      imgPopup.addClass('opened');
    });

    $(imgPopup).add(closeBtn).on('click', function() {
      imgPopup.removeClass('opened');
      imgPopup.children('img').attr('src', '');
    });

    popupImage.on('click', function(e) {
      e.stopPropagation();
    });
  });
}
  
 
}
