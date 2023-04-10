"use stirct";

const dropZone = document.getElementById('drop-zone');
dropZone.addEventListener('dragover', handleDragOver);
dropZone.addEventListener('dragleave', handleDragLeave);
dropZone.addEventListener('drop', handleFileSelect);

function handleDragOver(event) {
  event.preventDefault();
  dropZone.classList.add('dragover');
}

function handleDragLeave(event) {
  event.preventDefault();
  dropZone.classList.remove('dragover');
}
function handleFileSelect(event) {
    event.preventDefault();
    dropZone.classList.remove('dragover');

    const files = event.dataTransfer.files;
    const file = files[0];

    // Check if the dropped file is an image
    if (file.type.startsWith('image/')) {
      // Create an <img> element and set its source to the dropped file
      const img = document.createElement('img');
      img.src = URL.createObjectURL(file);

      // Replace the text in the <div> with the <img> element
      dropZone.innerHTML = '';
      dropZone.appendChild(img);
    } else {
      // Display an error message if the dropped file is not an image
      dropZone.innerHTML = '<p>Please drop an image file</p>';
    }
  }