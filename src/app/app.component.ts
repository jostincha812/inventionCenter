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
import { Image } from 'angular2_photoswipe';
import {Sort} from '@angular/material';
import * as $ from 'jquery';

export interface Room {
  building: number,
  floor: number,
  desc: string,
  type: string,
  theatre: number,
  classroom2: number,
  classroom3: number,
  banquet: number,
  size: number,
}
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
  filterAttr: string = "Select";
  filterValue: string = '';
  filteredData: Room[] = [];
  sortedData: Room[] = [];
  galleryImage1: Image[];
  galleryImage2: Image[];
  galleryImage3: Image[];
  galleryImage4: Image[];
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
  roomData = [
    {
      building: 1,
      floor: 1,
      desc: 'Full 100 Area',
      type: 'Meeting Room',
      theatre: 0,
      classroom2: 0,
      classroom3: 0,
      banquet: 510,
      size: 9762,
    },
    {
      building: 1,
      floor: 1,
      desc: 'Pre-Function Area A',
      type: 'Meeting Room',
      theatre: 0,
      classroom2: 0,
      classroom3: 0,
      banquet: 160,
      size: 3077
    },
    {
      building: 1,
      floor: 1,
      desc: 'Pre-Function Area B',
      type: 'Meeting Room',
      theatre: 0,
      classroom2: 0,
      classroom3: 0,
      banquet: 100,
      size: 2625
    },
    {
      building: 1,
      floor: 1,
      desc: 'Room 100 E',
      type: 'Meeting Room',
      theatre: 78,
      classroom2: 32,
      classroom3: 48,
      banquet: 60,
      size: 960
    },
    {
      building: 1,
      floor: 1,
      desc: 'Room 100 F',
      type: 'Meeting Room',
      theatre: 78,
      classroom2: 32,
      classroom3: 48,
      banquet: 60,
      size: 1003
    },
    {
      building: 1,
      floor: 1,
      desc: 'Room 100 G',
      type: 'Meeting Room',
      theatre: 95,
      classroom2: 42,
      classroom3: 63,
      banquet: 70,
      size: 1192
    },
    {
      building: 1,
      floor: 1,
      desc: 'Room 100 H',
      type: 'Meeting Room',
      theatre: 78,
      classroom2: 32,
      classroom3: 48,
      banquet: 60,
      size: 905
    },
    {
      building: 1,
      floor: 1,
      desc: 'Room 100 I',
      type: 'Meeting Room',
      theatre: 60,
      classroom2: 22,
      classroom3: 33,
      banquet: 50,
      size: 1221
    },
    {
      building: 1,
      floor: 1,
      desc: 'Room 100 I - K',
      type: 'Meeting Room',
      theatre: 200,
      classroom2: 70,
      classroom3: 105,
      banquet: 150,
      size: 3651
    },
    {
      building: 1,
      floor: 1,
      desc: 'Full 100 Area',
      type: 'Meeting Room',
      theatre: 0,
      classroom2: 0,
      classroom3: 0,
      banquet: 510,
      size: 9762
    },
    {
      building: 1,
      floor: 1,
      desc: 'Room 100 J',
      type: 'Meeting Room',
      theatre: 60,
      classroom2: 16,
      classroom3: 24,
      banquet: 40,
      size: 929
    },
    {
      building: 1,
      floor: 1,
      desc: 'Room 100 K',
      type: 'Meeting Room',
      theatre: 78,
      classroom2: 32,
      classroom3: 48,
      banquet: 60,
      size: 1501
    },
    {
      building: 1,
      floor: 1,
      desc: 'Room 100 L',
      type: 'Meeting Room',
      theatre: 60,
      classroom2: 24,
      classroom3: 36,
      banquet: 60,
      size: 845
    },
    {
      building: 1,
      floor: 1,
      desc: 'Room 100 L - N',
      type: 'Meeting Room',
      theatre: 85,
      classroom2: 36,
      classroom3: 54,
      banquet: 150,
      size: 2450
    },
    {
      building: 1,
      floor: 1,
      desc: 'Room 100 M',
      type: 'Meeting Room',
      theatre: 50,
      classroom2: 18,
      classroom3: 27,
      banquet: 40,
      size: 915
    },
    {
      building: 1,
      floor: 1,
      desc: 'Room 100 N',
      type: 'Meeting Room',
      theatre: 40,
      classroom2: 0,
      classroom3: 0,
      banquet: 40,
      size: 690
    },
    {
      building: 1,
      floor: 2,
      desc: '',
      type: 'Exhibit Hall',
      theatre: 0,
      classroom2: 0,
      classroom3: 0,
      banquet: 0,
      size: 96000
    },
    {
      building: 2,
      floor: 1,
      desc: '',
      type: 'Exhibit Hall',
      theatre: 3040,
      classroom2: 1800,
      classroom3: 2200,
      banquet: 3040,
      size: 55000
    },
    {
      building: 2,
      floor: 2,
      desc: '',
      type: 'Exhibit Hall',
      theatre: 3040,
      classroom2: 1800,
      classroom3: 2200,
      banquet: 3040,
      size: 55000
    },
    {
      building: 2,
      floor: 3,
      desc: '',
      type: 'Exhibit Hall',
      theatre: 3040,
      classroom2: 1800,
      classroom3: 2200,
      banquet: 3040,
      size: 55000
    },
    {
      building: 2,
      floor: 3,
      desc: 'Room 203 A',
      type: 'Meeting Room',
      theatre: 120,
      classroom2: 56,
      classroom3: 84,
      banquet: 60,
      size: 1732
    },
    {
      building: 2,
      floor: 3,
      desc: 'Room 203 ABC',
      type: 'Meeting Room',
      theatre: 375,
      classroom2: 150,
      classroom3: 225,
      banquet: 160,
      size: 4320
    },
    {
      building: 2,
      floor: 3,
      desc: 'Room 203 B',
      type: 'Meeting Room',
      theatre: 140,
      classroom2: 60,
      classroom3: 90,
      banquet: 70,
      size: 1911
    },
    {
      building: 2,
      floor: 3,
      desc: 'Room 203 C',
      type: 'Meeting Room',
      theatre: 75,
      classroom2: 30,
      classroom3: 45,
      banquet: 40,
      size: 677
    },
    {
      building: 2,
      floor: 3,
      desc: 'Room 203 D',
      type: 'Meeting Room',
      theatre: 100,
      classroom2: 50,
      classroom3: 75,
      banquet: 50,
      size: 1634
    },
    {
      building: 2,
      floor: 3,
      desc: 'Room 203 E',
      type: 'Meeting Room',
      theatre: 100,
      classroom2: 50,
      classroom3: 75,
      banquet: 72,
      size: 1254
    },
    {
      building: 2,
      floor: 3,
      desc: 'Room 203 F',
      type: 'Meeting Room',
      theatre: 75,
      classroom2: 34,
      classroom3: 51,
      banquet: 30,
      size: 858
    },
    {
      building: 2,
      floor: 4,
      desc: '',
      type: 'Exhibit Hall',
      theatre: 3040,
      classroom2: 1600,
      classroom3: 2400,
      banquet: 3040,
      size: 55000
    },
    {
      building: 2,
      floor: 4,
      desc: 'Room 204 A',
      type: 'Meeting Room',
      theatre: 182,
      classroom2: 64,
      classroom3: 96,
      banquet: 110,
      size: 1894
    },
    {
      building: 2,
      floor: 4,
      desc: 'Room 204 B',
      type: 'Meeting Room',
      theatre: 260,
      classroom2: 96,
      classroom3: 144,
      banquet: 140,
      size: 2492
    },
    {
      building: 2,
      floor: 4,
      desc: 'Room 204 C',
      type: 'Meeting Room',
      theatre: 182,
      classroom2: 64,
      classroom3: 96,
      banquet: 110,
      size: 1894
    },
    {
      building: 2,
      floor: 4,
      desc: 'Room 204 D',
      type: 'Meeting Room',
      theatre: 260,
      classroom2: 96,
      classroom3: 144,
      banquet: 140,
      size: 2492
    },
    {
      building: 2,
      floor: 4,
      desc: 'Room 204 DEIJ',
      type: 'Meeting Room',
      theatre: 1050,
      classroom2: 460,
      classroom3: 690,
      banquet: 830,
      size: 10400
    },
    {
      building: 2,
      floor: 4,
      desc: 'Room 204 E',
      type: 'Meeting Room',
      theatre: 182,
      classroom2: 64,
      classroom3: 96,
      banquet: 110,
      size: 1894
    },
    {
      building: 2,
      floor: 4,
      desc: 'Room 204 F',
      type: 'Meeting Room',
      theatre: 194,
      classroom2: 68,
      classroom3: 102,
      banquet: 110,
      size: 1973
    },
    {
      building: 2,
      floor: 4,
      desc: 'Room 204 FGH',
      type: 'Meeting Room',
      theatre: 630,
      classroom2: 270,
      classroom3: 400,
      banquet: 480,
      size: 6534
    },
    {
      building: 2,
      floor: 4,
      desc: 'Room 204 G',
      type: 'Meeting Room',
      theatre: 278,
      classroom2: 104,
      classroom3: 156,
      banquet: 140,
      size: 2588
    },
    {
      building: 2,
      floor: 4,
      desc: 'Room 204 H',
      type: 'Meeting Room',
      theatre: 194,
      classroom2: 68,
      classroom3: 102,
      banquet: 110,
      size: 1973
    },
    {
      building: 2,
      floor: 4,
      desc: 'Room 204 I',
      type: 'Meeting Room',
      theatre: 278,
      classroom2: 104,
      classroom3: 156,
      banquet: 140,
      size: 2588
    },
    {
      building: 2,
      floor: 4,
      desc: 'Room 204 J',
      type: 'Meeting Room',
      theatre: 194,
      classroom2: 68,
      classroom3: 102,
      banquet: 110,
      size: 1973
    },
    {
      building: 3,
      floor: 1,
      desc: '',
      type: 'Exhibit Hall',
      theatre: 0,
      classroom2: 0,
      classroom3: 0,
      banquet: 0,
      size: 90000
    },
    {
      building: 3,
      floor: 2,
      desc: '',
      type: 'Atrium',
      theatre: 2000,
      classroom2: 0,
      classroom3: 0,
      banquet: 1200,
      size: 13900
    },
    {
      building: 3,
      floor: 15,
      desc: '',
      type: 'Penthouse Ballroom',
      theatre: 750,
      classroom2: 240,
      classroom3: 360,
      banquet: 450,
      size: 6050.
    },
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

  sortData(sort: Sort) {
    let data = this.filteredData.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'location': return compare(a.building, b.building, isAsc) != 0 ? compare(a.building, b.building, isAsc) : compare(a.floor, b.floor, isAsc) != 0 ? compare(a.floor, b.floor, isAsc) : compare(a.desc, b.desc, isAsc);
        case 'roomtype': return compare(a.type, b.type, isAsc);
        case 'theatre': return compare(a.theatre, b.theatre, isAsc);
        case 'classroom2': return compare(a.classroom2, b.classroom2, isAsc);
        case 'classroom3': return compare(a.classroom3, b.classroom3, isAsc);
        case 'banquet': return compare(a.banquet, b.banquet, isAsc);
        case 'size': return compare(a.size, b.size, isAsc);
        default: return 0;
      }
    });
  }

  gotoSlide(index){
    this.homepageSlider.to([index + 1, 200])
  }

  changeEvent(event){
    this.currentSlide = event.item.index;
  }

  resetFilter(){
    this.filterValue = '';
  }

  filterRooms(value){
    if(this.filterAttr == 'Theatre'){
      this.filteredData = this.roomData.filter(data => data.theatre >= parseInt(value))
    }
    else if(this.filterAttr == 'Classroom2')
      this.filteredData = this.roomData.filter(data => data.classroom2 >= parseInt(value))
    else if(this.filterAttr == 'Classroom3')
      this.filteredData = this.roomData.filter(data => data.classroom3 >= parseInt(value))
    else if(this.filterAttr == 'Banquet')
      this.filteredData = this.roomData.filter(data => data.banquet >= parseInt(value))
    else if(this.filterAttr == 'Sq_Footage')
      this.filteredData = this.roomData.filter(data => data.size >= parseInt(value))
    
    let data = this.filteredData.slice();
    this.sortedData = data;
  }

  filterRoomsByAttr(value){
    if(value == 'Theatre')
      this.filteredData = this.roomData.filter(data => data.theatre >= parseInt(this.filterValue))
    else if(value == 'Classroom2')
      this.filteredData = this.roomData.filter(data => data.classroom2 >= parseInt(this.filterValue))
    else if(value == 'Classroom3')
      this.filteredData = this.roomData.filter(data => data.classroom3 >= parseInt(this.filterValue))
    else if(value == 'Banquet')
      this.filteredData = this.roomData.filter(data => data.banquet >= parseInt(this.filterValue))
    else if(value == 'Sq_Footage')
      this.filteredData = this.roomData.filter(data => data.size >= parseInt(this.filterValue))

    let data = this.filteredData.slice();
    this.sortedData = data;
  }

  showFloorplan(building, floor){
    this.filteredData = this.roomData.filter(data => data.building == building && data.floor == floor)

    let data = this.filteredData.slice();
    this.sortedData = data;
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
    this.galleryImage1 = [];
    this.galleryImage2 = [];
    this.galleryImage3 = [];
    this.galleryImage4 = [];

    for(let i = 0; i < this.gallery_images1.length; i++){
      let image = new Image();
      image.largeUrl = this.gallery_images1[i].small;
      image.height = 3296;
      image.width = 4934;
      image.id = i;
      image.size = `${image.width}x${image.height}`;
      image.thumbUrl = this.gallery_images1[i].large;
      this.galleryImage1.push(image);
    }

    for(let i = 0; i < this.gallery_images2.length; i++){
      let image = new Image();
      image.largeUrl = this.gallery_images2[i].small;
      image.height = 3296;
      image.width = 4934;
      image.id = i;
      image.size = `${image.width}x${image.height}`;
      image.thumbUrl = this.gallery_images2[i].large;
      this.galleryImage2.push(image);
    }

    for(let i = 0; i < this.gallery_images3.length; i++){
      let image = new Image();
      image.largeUrl = this.gallery_images3[i].small;
      image.height = 3296;
      image.width = 4934;
      image.id = i;
      image.size = `${image.width}x${image.height}`;
      image.thumbUrl = this.gallery_images3[i].large;
      this.galleryImage3.push(image);
    }

    for(let i = 0; i < this.gallery_images4.length; i++){
      let image = new Image();
      image.largeUrl = this.gallery_images4[i].small;
      image.height = 3296;
      image.width = 4934;
      image.id = i;
      image.size = `${image.width}x${image.height}`;
      image.thumbUrl = this.gallery_images4[i].large;
      this.galleryImage4.push(image);
    }

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

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : a == b ? 0 : 1) * (isAsc ? 1 : -1);
}
