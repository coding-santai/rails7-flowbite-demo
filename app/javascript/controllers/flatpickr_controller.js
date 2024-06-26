import { Controller } from "@hotwired/stimulus"
import flatpickr from "flatpickr";

// Connects to data-controller="flatpickr"
export default class extends Controller {
  connect() {
    console.log("ini flatpickr", this.element);
    flatpickr(".start_time", {
      enableTime: true,
      minTime: "16:00",
      maxTime: "22:00"
    });
    flatpickr(".end_time", {
      enableTime: true,
      minTime: "16:00",
      maxTime: "22:00"
    });

  }
}
