var markdown = document.getElementsByClassName('markdown-body');
var paragraphs = markdown[0].getElementsByTagName('p');
var listItems = markdown[0].getElementsByTagName('li');
var codeBlocks = markdown[0].getElementsByClassName('highlight');

for (var i = 0; i < paragraphs.length; i++) {
  paragraphs[i].addEventListener("click", function() {
    this.classList.toggle("faded");
  });
  if (paragraphs[i].innerHTML.includes("img src")) {
    paragraphs[i].classList.toggle("image-container");
  }
}

for (var i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener("click", function() {
    this.classList.toggle("faded");
  });
}

for (var i = 0; i < codeBlocks.length; i++) {
  codeBlocks[i].addEventListener("click", function() {
    this.classList.toggle("faded");
  });
}
// 
// markdown[0].innerHTML.replace('</h2>', '</h2><div class="collapsible">');
// markdown[0].innerHTML.replace('<h2>', '</div><h2>');
// markdown[0].innerHTML = '<div>' + markdown[0].innerHTML + '</div>';
