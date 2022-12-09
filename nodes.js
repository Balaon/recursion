 //выводит структуру узлов body 

(function nodes(value, step = 0) {
  for (let elem of [...value.children]) { 
    console.group(elem.tagName);
    
   elem.querySelector('*') ? nodes(elem, step++) : console.groupEnd(); 
  }
  
  console.groupEnd();
})(document.body)

https://github.com/Balaon/recursion/blob/master/nodes.js
