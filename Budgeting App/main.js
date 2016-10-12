class BudgetItem {
    constructor(name, amount) {
        this.name = name;
        this.amount = amount;
    }

    toElement() {
        const budgetItem = document.createElement('div');
        const budgetText = document.createTextNode(`${this.name}: $${this.amount}`);

        budgetItem.appendChild(budgetText);
        return budgetItem;
    }
}

class Category {
    constructor(categoryName) {
        this.categoryName = categoryName;
        this.budgetItems = [];
    }

    addItem(item) {
        this.budgetItems.push(item);
    }

    toElement() {
        const category = document.createElement('div');
        const categoryTitle = document.createElement('h3');
        const categoryText = document.createTextNode(this.categoryName);
        categoryTitle.appendChild(categoryText);

        const budgetItemList = document.createElement('ul');
        this.budgetItems.forEach(item => budgetItemList.appendChild(item.toElement()));

        const addBudgetItemButton = document.createElement('button');
        addBudgetItemButton.appendChild(document.createTextNode(`Create new item for category: ${this.categoryName}`));
        addBudgetItemButton.addEventListener('click', this.createNewItem);

        category.appendChild(categoryTitle);
        category.appendChild(budgetItemList);
        category.appendChild(addBudgetItemButton);
        
        return category;
    }
}

function createCategory() {
    const categoryList = document.querySelector('#categories');

    const categoryName = prompt('Enter the name of this category.');
    if (!categoryName) return;

    const newCategory = new Category(categoryName);
    const listItem = document.createElement('li');

    listItem.appendChild(newCategory.toElement());
    categoryList.appendChild(listItem);
}

function changeIncome() {
    while (true) {
        const newIncome = prompt('Enter your current income.');
        if (!newIncome) return;
        if (Number(newIncome)) {
            document.querySelector('#cur-income').textContent = "Total Income: $" + Number(newIncome);
            break;
        }
    }
}

document.querySelector('#create-category').addEventListener('click', createCategory);
document.querySelector('#change-income').addEventListener('click', changeIncome);
