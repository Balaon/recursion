let body = document.body;
function nodsСhecker(value, path = '') {
    let cont = 0;
    let structure = [...value.children];
    for (let elem of structure) {
        if (elem.querySelector('*') === null) {
            console.log(`${path} -> ${elem.tagName}`);
        } else {
            cont++;
            nodsСhecker(elem, `-> ${'---- '.repeat(cont)}->${elem.tagName}`);
        }
    }
}
nodsСhecker(body);
