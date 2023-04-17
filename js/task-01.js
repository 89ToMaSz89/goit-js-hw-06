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
   else if(firstChild.textContent === "Products"){
    const childProducts = lastChild.children;

    console.log(`\n Category: ${firstChild.textContent} \n Elements: ${childProducts.length}`);
   }
   else{
    const childTechnologies = lastChild.children;

    console.log(`\n Category: ${firstChild.textContent} \n Elements: ${childTechnologies.length}`);
   }
}
