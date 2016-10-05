class Category {
    constructor(categoryName) {
        this.categoryName = categoryName;   
    }

    toElement() {
        const category = document.createElement('div');
        const categoryText = document.createTextNode(this.categoryName);
        category.appendChild(categoryText);
        
        return category;
    }
}

function changeIncome() {
    while (true) {
        const newIncome = Number(prompt('Enter your current income.'));
        if (!Number.isNaN(newIncome)) {
            document.querySelector('#cur-income').textContent = "Total Income: $" + newIncome;
            break;
        }
    }
}

document.querySelector('#change-income').addEventListener('click', changeIncome);

function createCategory() {
    const categoryList = document.querySelector('#categories');

    const newCategory = new Category(prompt('Enter the name of this category.'));
    const listItem = document.createElement('li').appendChild(newCategory.toElement());

    categoryList.appendChild(listItem);
}

document.querySelector('#create-category').addEventListener('click', createCategory);
