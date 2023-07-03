// Get the necessary DOM elements
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const snipButton = document.getElementById('snipButton');

// Set up the canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Variables to store the snip coordinates
let startX, startY, endX, endY;
let isSnipping = false;

// Function to handle mouse events
function handleMouseEvent(event) {
  if (isSnipping) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if (event.type === 'mousedown') {
      startX = x;
      startY = y;
    } else if (event.type === 'mousemove') {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(imageObj, 0, 0);
      context.strokeStyle = 'red';
      context.lineWidth = 2;
      context.strokeRect(startX, startY, x - startX, y - startY);
    } else if (event.type === 'mouseup') {
      endX = x;
      endY = y;
      isSnipping = false;
      // Perform actions with the snipped area
      // Event listener for mouseup event
canvas.addEventListener('mouseup', function(event) {
    endX = event.clientX;
    endY = event.clientY;
    isSnipping = false;
    // Perform actions with the snipped area
    console.log('Snipped coordinates:', startX, startY, endX, endY);
  
    // Capture the snipped area
    const snippedCanvas = document.createElement('canvas');
    const snippedContext = snippedCanvas.getContext('2d');
    const width = Math.abs(endX - startX);
    const height = Math.abs(endY - startY);
    snippedCanvas.width = width;
    snippedCanvas.height = height;
    snippedContext.drawImage(
      imageObj,
      startX,
      startY,
      width,
      height,
      0,
      0,
      width,
      height
    );
  
    // Save the snipped area as an image
    const snippedImage = snippedCanvas.toDataURL();
    
    // Create a download link for the snipped image
    const link = document.createElement('a');
    link.href = snippedImage;
    link.download = 'snipped_image.png';
    link.click();
  });
  

      // Capture the snipped area
      const snippedCanvas = document.createElement('canvas');
      const snippedContext = snippedCanvas.getContext('2d');
      const width = Math.abs(endX - startX);
      const height = Math.abs(endY - startY);
      snippedCanvas.width = width;
      snippedCanvas.height = height;
      snippedContext.drawImage(
        imageObj,
        startX,
        startY,
        width,
        height,
        0,
        0,
        width,
        height
      );

      // Save the snipped area as an image
      const snippedImage = snippedCanvas.toDataURL();
      console.log('Snipped image:', snippedImage);
    }
  }
}

// Event listener for mousedown event
canvas.addEventListener('mousedown', handleMouseEvent);

// Event listener for mousemove event
canvas.addEventListener('mousemove', handleMouseEvent);

// Event listener for mouseup event
canvas.addEventListener('mouseup', handleMouseEvent);

// Event listener for snip button click
snipButton.addEventListener('click', () => {
  isSnipping = true;
});

// Load an image onto the canvas
const imageObj = new Image();
imageObj.onload = function () {
  context.drawImage(imageObj, 0, 0);
};
imageObj.src = 'path_to_your_image.jpg';
