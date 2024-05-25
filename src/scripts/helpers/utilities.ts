// Drag and Drop List class
export default class DragAndDropList {
    private container;

    constructor(containerId) {
      this.container = document.getElementById(containerId);
      this.init();
    }

    init() {
      // Add dragstart event listeners to all list items
      this.container.querySelectorAll('.list-item').forEach(item => {
        item.addEventListener('dragstart', this.handleDragStart.bind(this));
      });

      // Add dragover event listener to the list container
      this.container.addEventListener('dragover', event => {
        event.preventDefault(); // Allow drop
      });

      // Add drop event listener to the list container
      this.container.addEventListener('drop', this.handleDrop.bind(this));
    }

    handleDragStart(event) {
      event.dataTransfer.setData('text/plain', event.target.textContent); // Set data to be transferred
    }

    handleDrop(event) {
      event.preventDefault(); // Prevent default drop behavior
      const data = event.dataTransfer.getData('text/plain'); // Get transferred data
      const target = event.target.closest('.list-item'); // Get closest list item to the drop position
      if (target) {
        target.insertAdjacentHTML('beforebegin', `<li class="list-item">${data}</li>`); // Insert dropped item before target
        this.container.removeChild(event.target); // Remove original item
      }
    }
  }