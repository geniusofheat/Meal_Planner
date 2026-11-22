const side_dishes_data = [

  // ===========================
  // SIDE DISHES
  // ===========================
  {
    id: 'side_dishes',
    icon:"🍗", name:"Side Dishes",
    desc:"Handheld foods that can be eaten without utensils, perfect for snacks, parties, or quick meals.",
    recipes:[

      {name:"Chicken Wings",servings:"4 servings",ingredients:["2 lbs chicken wings","1 cup hot sauce","½ cup butter","salt","pepper"],prep:"Season wings with salt and pepper and bake or fry until crispy. Melt butter and mix with hot sauce. Toss wings in sauce until fully coated and serve hot."},

      {name:"Chicken Tenders",servings:"4 servings",ingredients:["1 lb chicken tenders","1 cup flour","2 eggs","1 cup breadcrumbs","salt","pepper"],prep:"Season chicken. Dredge in flour, dip in beaten eggs, then coat with breadcrumbs. Fry until golden brown and cooked through."},

      {name:"French Fries",servings:"4 servings",ingredients:["4 potatoes","oil for frying","salt"],prep:"Cut potatoes into strips. Fry in hot oil until golden and crispy. Drain and season with salt."},

      {name:"Mozzarella Sticks",servings:"4 servings",ingredients:["12 mozzarella sticks","1 cup breadcrumbs","2 eggs","oil for frying"],prep:"Dip mozzarella sticks in egg, then breadcrumbs. Freeze briefly, then fry until golden. Serve with marinara sauce."},

      {name:"Sliders",servings:"6 sliders",ingredients:["1 lb ground beef","6 slider buns","cheese slices","salt","pepper"],prep:"Form small patties and cook on skillet or grill. Place on buns with cheese and desired toppings."},

      {name:"Chicken Wrap",servings:"4 wraps",ingredients:["2 cups cooked chicken","4 tortillas","lettuce","cheese","sauce"],prep:"Fill tortillas with chicken and toppings. Roll tightly and serve."},

      {name:"Tacos",servings:"6 tacos",ingredients:["1 lb ground beef","taco shells","lettuce","cheese","salsa"],prep:"Cook beef with seasoning. Fill shells with beef and toppings."},

      {name:"Egg Rolls",servings:"10 rolls",ingredients:["egg roll wrappers","cabbage","carrots","soy sauce","oil"],prep:"Fill wrappers with mixture, roll tightly, and fry until golden."},

      {name:"Spring Rolls",servings:"10 rolls",ingredients:["rice paper wrappers","shrimp or veggies","noodles"],prep:"Soften wrappers, fill with ingredients, and roll. Serve fresh."},

      {name:"Nachos",servings:"4 servings",ingredients:["tortilla chips","cheese","jalapeños","beans","meat optional"],prep:"Layer chips with toppings and bake until cheese melts."},

      {name:"Pizza Slices",servings:"8 slices",ingredients:["pizza dough","sauce","cheese","toppings"],prep:"Prepare pizza, bake, and slice into handheld pieces."},

      {name:"Quesadillas",servings:"4 servings",ingredients:["4 tortillas","2 cups cheese","optional meat"],prep:"Fill tortillas with cheese and cook on skillet until melted. Cut into wedges."},

      {name:"Onion Rings",servings:"4 servings",ingredients:["2 onions","1 cup flour","1 cup breadcrumbs","oil"],prep:"Slice onions, coat in batter and breadcrumbs, then fry until crispy."},

      {name:"Corn Dogs",servings:"6 servings",ingredients:["6 hot dogs","cornmeal batter","oil"],prep:"Dip hot dogs in batter and fry until golden brown."},

      {name:"Chips and Dip",servings:"4 servings",ingredients:["bag of chips","dip of choice"],prep:"Serve chips with dip."}

    ]
  }

];

// ================================================================
//  TOGGLE CATEGORY — shows/hides recipe list under a card
// ================================================================
function toggleFingerFoodsCategory(catId) {
  var ul = document.getElementById(catId);
  if (!ul) return;

  if (ul.style.display === 'block') {
    ul.style.display = 'none';
    return;
  }

  var cat = side_dishes_data.find(function(c) { return c.id === catId; });
  if (!cat) return;

  if (ul.innerHTML === '') {
    cat.recipes.forEach(function(recipe, idx) {
      var li = document.createElement('li');
      li.className = 'browser-item';
      li.innerHTML =
        '<span class="browser-item-name">' + recipe.name + '</span>' +
        '<span class="browser-item-arrow">›</span>';
      li.addEventListener('click', function() {
        open_recipe_modal(recipe, catId);
      });
      ul.appendChild(li);
    });
  }

  ul.style.display = 'block';
}