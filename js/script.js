class RangeSlider extends HTMLElement {
    constructor() {
        super();
        this.slider = this.querySelector('.slider');
        this.handleMin = this.querySelector('.handle-min');
        this.handleMax = this.querySelector('.handle-max');
    }
    getSliderCoords () {

    }

}
customElements.define('range-slider', RangeSlider);
