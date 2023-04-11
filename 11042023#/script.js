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

    if (file.type.startsWith('image/')) {
      const img = document.createElement('img');
      img.src = URL.createObjectURL(file);

      dropZone.innerHTML = '';
      dropZone.appendChild(img);
    } else {
      dropZone.innerHTML = '<p>Please drop an image file</p>';
    }
  }