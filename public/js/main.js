// public/js/main.js
async function fetchCategories() {
    try {
        const response = await fetch('/categories');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const categories = await response.json();
        
        const categoryList = document.getElementById('categoryList');
        categoryList.innerHTML = '';
        categories.forEach(category => {
            const li = document.createElement('li');
            li.textContent = `${category.name}: ${category.description}`;
            categoryList.appendChild(li);
        });
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

window.onload = fetchCategories;
