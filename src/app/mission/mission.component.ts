import { Component, OnInit } from "@angular/core";
import { Meta } from "@angular/platform-browser";
import $ from 'jquery'

@Component({
  selector: "app-mission",
  templateUrl: "./mission.component.html",
  styleUrls: ["./mission.component.scss"]
})
export class MissionComponent implements OnInit {
  constructor(private meta: Meta) {}

  ngOnInit() {
    this.meta.removeTag('name="description"');
    this.meta.addTag({
      name: "description",
      content: "Our world class providers solve healthcare workforce shortages"
    });
    $('.starttext').prepend($('.click-to-text-button'));
  }

  scrollToElement($element): void {
    $element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }

  start_text() {
  }
}
