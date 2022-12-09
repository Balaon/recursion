 //выводит структуру вложенности тегов body в консоль

(function nodsСhecker(value, step = 0) {
  let count = step;
    
  for (let elem of [...value.children]) {
    console.group(elem.tagName);
        
    if (elem.querySelector('*') === null) { console.groupEnd(); continue;}
    
     nodsСhecker(elem,  count++); 
  }
    
  console.groupEnd();
})(document.body)

