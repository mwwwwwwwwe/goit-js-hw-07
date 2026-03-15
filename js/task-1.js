const categories = document.querySelector('#categories');
const allItems = document.querySelectorAll('#categories .categories-list__item');

console.log('Number of categories: ' + allItems.length);

for(const item of allItems){
    const title = item.querySelector('.categories-list__title');
    console.log('Category: ' + title.textContent);
    
    const elements = item.querySelectorAll('.categories-list__subitem');
    console.log('Elements: ' + elements.length);
}