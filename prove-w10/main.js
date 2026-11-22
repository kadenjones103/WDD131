const recipes = [

    {
        name: 'Sweet Potato Waffles',
        author: 'Provo High Culinary Students',
        cookTime: '30 Min',
        prepTime: '30 Min',
        tags: ['Waffles', 'Sweet Potato', 'Side'],
        description: 'Savory waffles made with Sweet potato with a hint of Ginger',
        image: './images/sweet-potato-waffle-md.jpg',
        rating: 4
    },

    {
        name: 'Escalope de Poulet a la Creme',
        author: 'Shane Thompson',
        cookTime: '20 min',
        prepTime: '10 min',
        tags: ['Chicken', 'Entree'],
        description: 'Delicious quick and easy creamy rice dish. The mustard, mushrooms, and lemon all blend together wonderfully.',
        image: './images/escalopes-de-poulet-a-la-creme.webp',
        rating: 4.5
    },

    {
        name: 'Oven Roasted Potato Slices',
        author: 'Shane Thompson',
        cookTime: '30 min',
        prepTime: '10 min',
        tags: ['Potatoes', 'Side'],
        description: 'Easy and delicious oven roasted potatoes that go great with almost anything.',
        image: './images/roasted-potatoes.webp',
        rating: 4
    },

    {
        name: 'Black Beans and Rice',
        author: 'Shane Thompson',
        cookTime: '20 min',
        prepTime: '10 min',
        tags: ['Southwest', 'Entree'],
        description: 'Black beans and tomatoes served over a bed of rice. Top with cheese and scoop up with tortilla chips for maximum enjoyment.',
        image: './images/black-beans-and-rice.jpg',
        rating: 3
    },

    {
        name: 'Chicken Curry',
        author: 'Shane Thompson',
        cookTime: '30 min',
        prepTime: '10 min',
        tags: ['Chicken', 'Entree', 'Indian'],
        description: 'Quick and easy Chicken curry recipe made with easy to find ingredients.',
        image: './images/chicken-curry.webp',
        rating: 5
    },

    {
        name: 'Chocolate Chip Cookies',
        author: 'Shane Thompson',
        cookTime: '11 min',
        prepTime: '15 min',
        tags: ['Dessert'],
        description: 'Delicious soft chocolate chip cookies with coconut.',
        image: './images/chocolate-chip-cookies.jpg',
        rating: 5
    },

    {
        name: 'Gooseberry Cake with Vanilla Cream and Crumble',
        author: 'Ester Kocht',
        cookTime: '45 min',
        prepTime: '30 min',
        tags: ['Dessert', 'German'],
        description: "This gooseberry cake with crumble is easy to follow, a bit tart and not too sweet. Made up of a cake base, filled with fresh gooseberries and vanilla cream and finished off with crumble that's flavored with vanilla.",
        image: './images/german-gooseberry-cake.jpg',
        rating: 5
    },

    {
        name: 'Apple Crisp',
        author: 'AllRecipes',
        cookTime: '45 min',
        prepTime: '30 min',
        tags: ['Dessert'],
        description: "This apple crisp recipe is a simple yet delicious fall dessert that's great served warm with vanilla ice cream.",
        image: './images/apple-crisp.jpg',
        rating: 4
    }

];

const recipeContainer = document.querySelector('#recipes');
const searchInput = document.querySelector('#search-input');
const searchForm = document.querySelector('#search-form');

function createRating(rating) {

    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    let stars = '';

    for (let i = 0; i < fullStars; i++) {
        stars += '<span aria-hidden="true">★</span>';
    }

    if (hasHalfStar) {
        stars += '<span aria-hidden="true">½</span>';
    }

    for (let i = 0; i < emptyStars; i++) {
        stars += '<span aria-hidden="true">☆</span>';
    }

    return `
        <span
            class="rating"
            role="img"
            aria-label="Rating: ${rating} out of 5 stars"
        >
            ${stars}
        </span>
    `;
}

function displayRecipes(recipeList) {

    recipeContainer.innerHTML = '';

    if (recipeList.length === 0) {

        recipeContainer.innerHTML = `
            <p class="no-results">
                Sorry, no recipes found. Try another search!
            </p>
        `;

        return;
    }

    recipeList.forEach(recipe => {

        const recipeCard = document.createElement('article');

        recipeCard.classList.add('recipe');

        recipeCard.innerHTML = `

            <img
                class="recipe-image"
                src="${recipe.image}"
                alt="${recipe.name}"
            >

            <div class="recipe-content">

                <span class="category">
                    ${recipe.tags[0]}
                </span>

                <h2>${recipe.name}</h2>

                ${createRating(recipe.rating)}

                <p class="description">
                    ${recipe.description}
                </p>

            </div>

        `;

        recipeContainer.appendChild(recipeCard);

    });

}

function displayRandomRecipe() {

    const randomIndex = Math.floor(Math.random() * recipes.length);

    const randomRecipe = recipes[randomIndex];

    displayRecipes([randomRecipe]);

}

function searchRecipes(searchTerm) {

    const searchWords = searchTerm
        .toLowerCase()
        .trim()
        .split(/\s+/)
        .filter(word => word !== '');

    if (searchWords.length === 0) {
        displayRandomRecipe();
        return;
    }

    const filteredRecipes = recipes.filter(recipe => {

        const searchableText = `

            ${recipe.name}
            ${recipe.description}
            ${recipe.tags.join(' ')}

        `.toLowerCase();

        return searchWords.every(word =>
            searchableText.includes(word)
        );

    });

    filteredRecipes.sort((a, b) => {

        return a.name.localeCompare(b.name);

    });

    displayRecipes(filteredRecipes);

}

searchForm.addEventListener('submit', function(event) {

    event.preventDefault();

    searchRecipes(searchInput.value);

});

searchInput.addEventListener('input', function() {

    searchRecipes(searchInput.value);

});

displayRandomRecipe();
