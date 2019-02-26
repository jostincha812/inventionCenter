import { Component, ViewChild, HostListener } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faWalking } from '@fortawesome/free-solid-svg-icons';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faGooglePlusSquare } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {OwlCarousel} from 'ngx-owl-carousel';
import { } from '@types/googlemaps';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('homepageSlider') homepageSlider: OwlCarousel
  @ViewChild('mainContent') mainContent: OwlCarousel
  @ViewChild('mainContent1') mainContent1: OwlCarousel
  @ViewChild('mainContent2') mainContent2: OwlCarousel
  @ViewChild('mainContent3') mainContent3: OwlCarousel
  @ViewChild('serviceSlider') serviceSlider: OwlCarousel
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  title = 'inventionCenter';
  mySlideImages = [
    {
      image: 'https://www.atlconventioncenter.com/hubfs/_img/ACC18_LPImages%20overlay.png',
      text: 'A Convention Center <span>Connected</span>',
    },
    {
      image: 'https://www.atlconventioncenter.com/hubfs/_img/ACC_Website_Meetings_1300x510overlay.jpg',
      text: 'Comfort and Convenience <span>Meet Here</span>'
    },
    {
      image: 'https://www.atlconventioncenter.com/hubfs/_img/ACC_Website_Events_1300x510overlay.jpg',
      text: '<span>One Location</span> Endless Customization'
    },
    {
      image: 'https://www.atlconventioncenter.com/hubfs/_img/ACC_Website_Tradeshows_1300x510overlay.jpg',
      text: '<span>Discover</span> Your Next Great Event'
    }, 
  ]
  navTexts = [
    'Meetings', 'Events', 'TradeShows'
  ]
  gallery_images1 = [
    {
      large: 'https://www.atlconventioncenter.com/hubfs/_img/001dt.jpg',
      small: 'https://cdn2.hubspot.net/hubfs/3847898/_img/001d.jpg'
    },
    {
      large: 'https://www.atlconventioncenter.com/hubfs/_img/002dt.jpg',
      small: 'https://cdn2.hubspot.net/hubfs/3847898/_img/002d.jpg'
    },
    {
      large: 'https://www.atlconventioncenter.com/hubfs/_img/003dt.jpg',
      small: 'https://cdn2.hubspot.net/hubfs/3847898/_img/003d.jpg'
    },
    {
      large: 'https://www.atlconventioncenter.com/hubfs/_img/004dt.jpg',
      small: 'https://cdn2.hubspot.net/hubfs/3847898/_img/004d.jpg'
    },
    {
      large: 'https://www.atlconventioncenter.com/hubfs/_img/005dt.jpg',
      small: 'https://cdn2.hubspot.net/hubfs/3847898/_img/005d.jpg'
    },
    {
      large: 'https://www.atlconventioncenter.com/hubfs/_img/006dt.jpg',
      small: 'https://cdn2.hubspot.net/hubfs/3847898/_img/006d.jpg'
    },
    {
      large: 'https://www.atlconventioncenter.com/hubfs/_img/007dt.jpg',
      small: 'https://cdn2.hubspot.net/hubfs/3847898/_img/007d.jpg'
    },
    {
      large: 'https://www.atlconventioncenter.com/hubfs/_img/008dt.jpg',
      small: 'https://cdn2.hubspot.net/hubfs/3847898/_img/008d.jpg'
    },
  ]
  gallery_images2 = [
    {
      large: 'https://www.atlconventioncenter.com/hubfs/_img/001mt.jpg',
      small: 'https://cdn2.hubspot.net/hubfs/3847898/_img/001m.jpg'
    },
    {
      large: 'https://www.atlconventioncenter.com/hubfs/_img/002mt.jpg',
      small: 'https://cdn2.hubspot.net/hubfs/3847898/_img/002m.jpg'
    },
    {
      large: 'https://www.atlconventioncenter.com/hubfs/_img/003mt.jpg',
      small: 'https://cdn2.hubspot.net/hubfs/3847898/_img/003m.jpg'
    },
    {
      large: 'https://www.atlconventioncenter.com/hubfs/_img/004mt.jpg',
      small: 'https://cdn2.hubspot.net/hubfs/3847898/_img/004m.jpg'
    },
    {
      large: 'https://www.atlconventioncenter.com/hubfs/_img/005mt.jpg',
      small: 'https://cdn2.hubspot.net/hubfs/3847898/_img/005m.jpg'
    },
    {
      large: 'https://www.atlconventioncenter.com/hubfs/_img/006mt.jpg',
      small: 'https://cdn2.hubspot.net/hubfs/3847898/_img/006m.jpg'
    },
    {
      large: 'https://www.atlconventioncenter.com/hubfs/_img/007mt.jpg',
      small: 'https://cdn2.hubspot.net/hubfs/3847898/_img/007m.jpg'
    },
    {
      large: 'https://www.atlconventioncenter.com/hubfs/_img/008mt.jpg',
      small: 'https://cdn2.hubspot.net/hubfs/3847898/_img/008m.jpg'
    },
  ]
  gallery_images3 = [
    {
      large: 'https://www.atlconventioncenter.com/hubfs/_img/001et.jpg',
      small: 'https://cdn2.hubspot.net/hubfs/3847898/_img/001e.jpg'
    },
    {
      large: 'https://www.atlconventioncenter.com/hubfs/_img/002et.jpg',
      small: 'https://cdn2.hubspot.net/hubfs/3847898/_img/002e.jpg'
    },
    {
      large: 'https://www.atlconventioncenter.com/hubfs/_img/003et.jpg',
      small: 'https://cdn2.hubspot.net/hubfs/3847898/_img/003e.jpg'
    },
    {
      large: 'https://www.atlconventioncenter.com/hubfs/_img/004et.jpg',
      small: 'https://cdn2.hubspot.net/hubfs/3847898/_img/004e.jpg'
    },
    {
      large: 'https://www.atlconventioncenter.com/hubfs/_img/005et.jpg',
      small: 'https://cdn2.hubspot.net/hubfs/3847898/_img/005e.jpg'
    },
    {
      large: 'https://www.atlconventioncenter.com/hubfs/_img/006et.jpg',
      small: 'https://cdn2.hubspot.net/hubfs/3847898/_img/006e.jpg'
    },
    {
      large: 'https://www.atlconventioncenter.com/hubfs/_img/007et.jpg',
      small: 'https://cdn2.hubspot.net/hubfs/3847898/_img/007e.jpg'
    },
    {
      large: 'https://www.atlconventioncenter.com/hubfs/_img/008et.jpg',
      small: 'https://cdn2.hubspot.net/hubfs/3847898/_img/008e.jpg'
    },
  ]
  gallery_images4 = [
    {
      large: 'https://www.atlconventioncenter.com/hubfs/_img/001tt.jpg',
      small: 'https://cdn2.hubspot.net/hubfs/3847898/_img/001t.jpg'
    },
    {
      large: 'https://www.atlconventioncenter.com/hubfs/_img/002tt.jpg',
      small: 'https://cdn2.hubspot.net/hubfs/3847898/_img/002t.jpg'
    },
    {
      large: 'https://www.atlconventioncenter.com/hubfs/_img/003tt.jpg',
      small: 'https://cdn2.hubspot.net/hubfs/3847898/_img/003t.jpg'
    },
    {
      large: 'https://www.atlconventioncenter.com/hubfs/_img/004tt.jpg',
      small: 'https://cdn2.hubspot.net/hubfs/3847898/_img/004t.jpg'
    },
    {
      large: 'https://www.atlconventioncenter.com/hubfs/_img/005tt.jpg',
      small: 'https://cdn2.hubspot.net/hubfs/3847898/_img/005t.jpg'
    },
    {
      large: 'https://www.atlconventioncenter.com/hubfs/_img/006tt.jpg',
      small: 'https://cdn2.hubspot.net/hubfs/3847898/_img/006t.jpg'
    },
    {
      large: 'https://www.atlconventioncenter.com/hubfs/_img/007tt.jpg',
      small: 'https://cdn2.hubspot.net/hubfs/3847898/_img/007t.jpg'
    },
    {
      large: 'https://www.atlconventioncenter.com/hubfs/_img/008tt.jpg',
      small: 'https://cdn2.hubspot.net/hubfs/3847898/_img/008t.jpg'
    },
  ]
  serviceItems = [
    '<div><p class="lead">We make it easy for your event to be successful – we welcome you to <strong>bring any of your current vendor relationships</strong> along with you. If you don’t have a vendor for an area of need, we have an extensive list of suppliers we can recommend.</p><p>We recommend several contractors that have served us for years with unmatched professionalism. If you plan to use a company that is not on our preferred list, please contact the convention staff. All contractors must have appropriate operating licenses and liability insurance for the State of Georgia.</p></div>',
    '<div class="service-wrap"><h4>Non-Exclusive Contractors</h4><div class="service"><h4>Food &amp; Beverage</h4><p>From small coffee breaks to large banquets, we will assist you with your food service requests.</p><p><strong>On-site Food and Beverage Contractor:</strong><br> Classic Fare Catering</p><a href="https://cdn2.hubspot.net/hubfs/3847898/_pdf/ClassicFareCateringMenu.pdf" target="_blank">Full Service Menu PDF</a></div></div>',
    '<div class="service-wrap"><div class="service"><h4>Contractors</h4><p><strong>Service Contractor/Decorator:</strong><br> George Fern Company</p><p><strong>Audio/Visual:</strong><br> OnEvent Services, Inc.</p><p><strong>Security Contractor:</strong><br> AmericasMart Security</p><p><strong>Floral Contractor:</strong><br> TLC / Florist</p></div></div>',
    '<div class="service-wrap"><h4>Inclusive Contractors</h4><div class="service"><h4>Technology Offerings</h4><p>Atlanta Convention Center is fully connected with free attendee Wi-Fi on all floors. Custom wireless networks, dedicated Ethernet, and telephone services are all available to meet your needs. For more information, email <a href="mailto:helpdesk@americasmart.com">helpdesk@americasmart.com</a> or call 404.220.3003. </p><a href="https://cdn2.hubspot.net/hubfs/3847898/_pdf/tech-offerings.pdf" target="_blank">Technology Services Menu PDF</a></div></div>',
    '<div class="service-wrap"><h4 class="mobile-only">&nbsp;</h4><div class="service"><h4>Electrical</h4><p>All electrical work will be done by an in-house electrician and will meet applicable codes and standards. Please submit special requirements to our convention staff in advance.</p><a href="https://cdn2.hubspot.net/hubfs/3847898/_pdf/OUTSIDESHOWELECTRICALFORM.pdf" target="_blank">Order Electrical Services PDF</a></div></div>',
  ]
  serviceLogos = [
    'https://www.atlconventioncenter.com/hubfs/_img/catering-affairs.jpg',
    'https://www.atlconventioncenter.com/hubfs/_img/catering-bae.jpg',
    'https://www.atlconventioncenter.com/hubfs/_img/catering-glorious.jpg',
    'https://www.atlconventioncenter.com/hubfs/_img/catering-legendary.jpg',
    'https://www.atlconventioncenter.com/hubfs/_img/catering-parks.jpg',
    'https://www.atlconventioncenter.com/hubfs/_img/classic.jpg',
    'https://www.atlconventioncenter.com/hubfs/_img/catering-pop.jpg',
    'https://www.atlconventioncenter.com/hubfs/_img/catering-on.jpg',
  ]
  mySlideOptions={items: 1, dots: false, nav: true, onChanged: this.changeEvent.bind(this)};
  mainOptions={items: 2, dots: false, nav: false};
  serviceOptions = {items: 2, dots: false, nav: false}
  faBars = faBars;
  faWalking = faWalking;
  faMobile = faMobile;
  faEnvelope = faEnvelope;
  faFileAlt = faFileAlt;
  faFacebook = faFacebook;
  faTwitterSquare = faTwitterSquare;
  faGooglePlusSquare = faGooglePlusSquare;
  faLinkedin = faLinkedin;
  currentSlide = 0;

  gotoSlide(index){
    this.homepageSlider.to([index + 1, 200])
  }

  changeEvent(event){
    this.currentSlide = event.item.index;
  }

  getImageURL(index){
    return `url('${this.gallery_images1[index].large}')`;
  }

  getImage1URL(index){
    return `url('${this.gallery_images2[index].large}')`;
  }

  getImage2URL(index){
    return `url('${this.gallery_images3[index].large}')`;
  }

  getImage3URL(index){
    return `url('${this.gallery_images4[index].large}')`;
  }

  getServiceLogoURL(index){
    return `url('${this.serviceLogos[index]}')`;
  }

  ngOnInit() {
    var mapProp = {
      center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

    $(document).ready(function(){
      $('.head-wrap header .nav-toggle').click(function(){
        if($('.head-wrap nav').hasClass('expand')){
          $('.head-wrap nav').removeClass('expand');
        }else{
          $('.head-wrap nav').addClass('expand');
        }
      })
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if(window.innerWidth > 600){
      this.mainContent.options.items = 2;
      this.mainContent1.options.items = 2;
      this.mainContent2.options.items = 2;
      this.mainContent3.options.items = 2;
    }else{
      this.mainContent.options.items = 1;
      this.mainContent1.options.items = 1;
      this.mainContent2.options.items = 1;
      this.mainContent3.options.items = 1;
    }
    this.mainContent.reInit();
    this.mainContent1.reInit();
    this.mainContent2.reInit();
    this.mainContent3.reInit();

    if(window.innerWidth > 500){
      this.serviceSlider.options.items = 2;
    }else{
      this.serviceSlider.options.items = 1;
    }
    this.serviceSlider.reInit();
  }
  ngAfterViewInit(){
    if(window.innerWidth > 600){
      this.mainContent.options.items = 2;
      this.mainContent1.options.items = 2;
      this.mainContent2.options.items = 2;
      this.mainContent3.options.items = 2;
    }else{
      this.mainContent.options.items = 1;
      this.mainContent1.options.items = 1;
      this.mainContent2.options.items = 1;
      this.mainContent3.options.items = 1;
    }
    this.mainContent.reInit();
    this.mainContent1.reInit();
    this.mainContent2.reInit();
    this.mainContent3.reInit();

    if(window.innerWidth > 500){
      this.serviceSlider.options.items = 2;
    }else{
      this.serviceSlider.options.items = 1;
    }
    this.serviceSlider.reInit();
    $('#contactform').append($('.hbspt-form'));
  }
}
