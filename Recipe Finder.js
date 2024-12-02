let recipes = [
    {
      name: 'Pasta',
      ingredients: ['tomato', 'cheese', 'basil'],
      instructions: 'Boil pasta, add sauce and cheese, garnish with basil.',
    },
    {
      name: 'Salad',
      ingredients: ['lettuce', 'tomato', 'cucumber', 'olive oil'],
      instructions: 'Chop ingredients and toss with olive oil.',
    },
    {
      name: 'Pizza',
      ingredients: ['cheese', 'tomato', 'dough'],
      instructions: 'Roll dough, add sauce and cheese, bake in oven.',
    },
  ];
  
  // Function to add a recipe
  function addRecipe(name, ingredients, instructions) {
    recipes.push({
      name: name,
      ingredients: ingredients,
      instructions: instructions,
    });
    console.log(`Recipe "${name}" added successfully!`);
  }
  
  // Function to search for recipes by ingredient
  function searchRecipe(ingredient) {
    const foundRecipes = recipes.filter(recipe =>
      recipe.ingredients.some(i => i.toLowerCase() === ingredient.toLowerCase())
    );
    
    if (foundRecipes.length > 0) {
      console.log(`Recipes with ingredient "${ingredient}":`);
      foundRecipes.forEach(recipe => {
        console.log(`- ${recipe.name}: Ingredients: ${recipe.ingredients.join(', ')}`);
      });
    } else {
      console.log(`No recipes found with the ingredient "${ingredient}".`);
    }
  }
  
  // Function to list recipes in alphabetical order
  function listRecipes() {
    if (recipes.length === 0) {
      console.log('No recipes available.');
    } else {
      const sortedRecipes = recipes.sort((a, b) => a.name.localeCompare(b.name));
      console.log('Recipes in Alphabetical Order:');
      sortedRecipes.forEach(recipe => {
        console.log(`- ${recipe.name}: Ingredients: ${recipe.ingredients.join(', ')}`);
      });
    }
  }
  
  // Adding new recipes
  addRecipe('Soup', ['water', 'carrot', 'onion'], 'Boil water, add chopped vegetables, cook for 30 minutes.');
  addRecipe('Sandwich', ['bread', 'cheese', 'tomato'], 'Place cheese and tomato between slices of bread.');
  addRecipe('Chicken Rolls', ['bread', 'cheese', 'tomato','chicken',], 'Place cheese and tomato and chicken in the roll bread.');
  
  // Searching for recipes by ingredient
  searchRecipe('cheese');
  searchRecipe('carrot');
  searchRecipe('Butter');
  searchRecipe('olive oil');
  // Listing recipes alphabetically
  listRecipes();
  