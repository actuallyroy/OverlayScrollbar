class OverlayScrollbar {
    constructor(element, options) {
      this.element = element
      if (!this.element) {
        console.error('Element not found');
        return;
      }
      this.element.position = 'relative'
      this.scrollbar = document.createElement('div');
      this.scrollbarThumb = document.createElement('div');
      this.scrollbar.classList.add(options.scrollbarClassName)
      this.scrollbarThumb.classList.add(options.scrollbarThumbClassName)
  
      this.scrollbar.style.position = 'fixed';
      this.scrollbar.style.top = '0';
      this.scrollbar.style.right = '0';
      this.scrollbar.style.width = '10px';
      this.scrollbar.style.height = '100%';
      this.scrollbar.style.zIndex = '99999'
  
      this.scrollbarThumb.style.position = 'absolute';
      this.scrollbarThumb.style.right = '0';
      this.scrollbarThumb.style.width = '10px';
      this.scrollbarThumb.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
      this.scrollbarThumb.style.cursor = 'pointer';
      this.scrollbarThumb.onmouseover = () => {
        this.scrollbarThumb.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
      }
      this.scrollbarThumb.onmouseout = () => {
        this.scrollbarThumb.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
      }
  
      this.scrollbar.appendChild(this.scrollbarThumb);
      this.element.appendChild(this.scrollbar);
  
      this.element.addEventListener('scroll', this.updateScrollbarThumb);

      this.scrollbar.addEventListener("click", this.scrollBarClick.bind(this))
  
      this.scrollbarThumb.addEventListener('mousedown', this.startDrag.bind(this));
  
      // Variables for drag functionality
      this.isDragging = false;
  
      this.updateScrollbarThumbLoc();
      this.updateScrollbarThumbHeight()
      this.scrollListener()
      if(window.outerWidth <= 600) this.scrollbar.style.display = "none"
      window.addEventListener("resize", () => {
        if(window.outerWidth <= 600) this.scrollbar.style.display = "none"
      })
    }

    scrollBarClick(e) {
      let rect = this.scrollbarThumb.getBoundingClientRect()
      this.element.scrollTo({
        top: (e.clientY - rect.height/2) * (this.element.scrollHeight/this.element.clientHeight),
        behavior: "smooth"
      })
    }
  
    startDrag(e) {
      e.preventDefault();
      this.isDragging = true;
      let rect = this.scrollbarThumb.getBoundingClientRect()
      this.temp = e.clientY - rect.top
      document.addEventListener('mousemove', this.drag.bind(this));
      document.addEventListener('mouseup', this.stopDrag.bind(this));
    }
  
    drag(e) {
      if (!this.isDragging) return;
      this.element.scrollTop = (e.clientY - this.temp) * this.element.scrollHeight / this.element.clientHeight
    }
  
    stopDrag() {
      this.isDragging = false;
      document.removeEventListener('mousemove', this.drag);
      document.removeEventListener('mouseup', this.stopDrag);
    }

    scrollListener(){
      this.element.onscroll = (e) => {
        this.updateScrollbarThumbLoc()
      }
    }
  
    updateScrollbarThumbHeight() {
      const heightPercentage = (this.element.clientHeight / this.element.scrollHeight) * 100;
      this.scrollbarThumb.style.height = `${heightPercentage}%`;
    }
    
    updateScrollbarThumbLoc() {
      const scrollPercentage = (this.element.scrollTop / (this.element.scrollHeight)) * 100;
      this.scrollbarThumb.style.top = `${scrollPercentage}%`;
    }
  }
  
  export default OverlayScrollbar
