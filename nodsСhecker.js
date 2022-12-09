 //выводит структуру вложенности тегов body 

(function nodsСhecker(value, step = 0) {
  for (let elem of [...value.children]) { 
    console.group(elem.tagName);
    
   (elem.querySelector('*') !== null) ? nodsСhecker(elem,  step++) : console.groupEnd(); 
  }
  
  console.groupEnd();
})(document.body)

