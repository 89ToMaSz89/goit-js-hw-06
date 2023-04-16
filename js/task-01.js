const item = document.querySelectorAll(".item");
const itemLength = item.length;
console.log(`Number of categories: ${itemLength}`);

for(let i =0; i < itemLength; i++){
    const firstChild = item[i].firstElementChild;
    const lastChild = item[i].lastElementChild;

   if(firstChild.textContent === 'Animals'){
    const childsAnimals = lastChild.children;
    
    console.log(`\n Category: ${firstChild.textContent} \n Elements: ${childsAnimals.length}`);
   }
}
