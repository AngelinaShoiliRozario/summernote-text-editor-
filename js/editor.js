let ele = document.createElement('div');
let button1 = document.createElement('button');
button1.innerText = "Bold";
button1.classList.add('btn');
button1.classList.add('btn-primary');
ele.appendChild(button1);
console.log(ele); 

let editables = document.querySelectorAll('.editable');
editables = Array.from(editables);
editables.forEach(element => {
    element.addEventListener('focus', () => {
        let parent = element.parentElement;
        console.log('hi'); 
        console.log(parent); 
        let referenceElement = element;
        let newElement = ele;
        parent.insertBefore(newElement, referenceElement);
    });
});