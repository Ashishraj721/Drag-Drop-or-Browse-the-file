let dragArea = document.querySelector(".drag-area");
let dragText = document.querySelector("header");
let button = document.querySelector("button");
let input = document.querySelector("input");

let file;

button.addEventListener("click", () => {
  input.click();
});

input.addEventListener("change", function () {
  
  file = this.files[0];

  
  dragArea.classList.add("active");

  
  showImage();
});

dragArea.addEventListener("dragover", (event) => {
  
  event.preventDefault();

  
  dragArea.classList.add("active");

  
  dragText.textContent = "Release to Upload File";
});

dragArea.addEventListener("dragleave", (event) => {
  
  dragArea.classList.remove("active");

  
  dragText.textContent = "Drag & Drop to Upload File";
});

dragArea.addEventListener("drop", (event) => {
  
  event.preventDefault();

  
  file = event.dataTransfer.files[0];

  
  showImage();
});

function showImage() {
 
  let fileType = file.type;

  
  let validArry = ["image/jpeg", "image/jpg", "image/png"];

  
  if (validArry.includes(fileType)) {
    
    let fileReader = new FileReader();

    
    fileReader.onload = () => {
      
      let fileUrl = fileReader.result;

      
      let imgTag = `<img src="${fileUrl}" alt="image">`;

      
      dragArea.innerHTML = imgTag;
    };

    
    fileReader.readAsDataURL(file);
  } else {
    alert("Selected file is not Image");

   
    dragArea.classList.remove("active");

    
    dragText.textContent = "Drag & Drop to Upload File";
  }
}