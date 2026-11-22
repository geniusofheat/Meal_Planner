const breads_and_grains_data = [

  // ===========================
  // 🍞 BREADS & GRAINS
  // ===========================
  {
    id: "breads",
    icon:"🍞", name:"Breads & Grains",
    desc:"Freshly baked breads, rolls, and hearty grain-based dishes including rice, quinoa, and whole grains.",
    recipes:[

      {name:"Barley Pilaf",servings:"4 servings",ingredients:["1 cup pearl barley","2 ½ cups vegetable or chicken broth","1 small onion, diced","1 tbsp olive oil","½ tsp salt","¼ tsp black pepper"],prep:"Heat olive oil in a saucepan over medium heat. Sauté onion until translucent. Add barley and stir to coat. Pour in broth, bring to a boil, reduce heat, cover, and simmer 30–35 minutes until barley is tender. Season with salt and pepper before serving."},

      {name:"Basic White Bread",servings:"1 loaf",ingredients:["2 ¼ tsp active dry yeast","1 ½ cups warm water","3 ½ cups all-purpose flour","2 tbsp sugar","1 ½ tsp salt","2 tbsp melted butter"],prep:"Dissolve yeast in warm water with sugar. Let sit 5–10 minutes. In a large bowl, combine flour and salt. Add yeast mixture and butter. Knead 8–10 minutes until smooth. Let rise 1 hour until doubled. Punch down, shape into loaf, place in greased pan, let rise 30 minutes. Bake at 375°F for 30–35 minutes."},

      {name:"Cornbread",servings:"8 pieces",ingredients:["1 cup cornmeal","1 cup all-purpose flour","¼ cup sugar","1 tbsp baking powder","½ tsp salt","1 cup milk","2 eggs","¼ cup melted butter"],prep:"Preheat oven to 400°F. In a bowl, combine cornmeal, flour, sugar, baking powder, and salt. In another bowl, whisk milk, eggs, and butter. Stir wet into dry until just combined. Pour into greased 8-inch pan. Bake 20–25 minutes until golden."},

      {name:"Multigrain Rolls",servings:"12 rolls",ingredients:["2 ¼ tsp active dry yeast","1 cup warm water","2 tbsp honey","1 cup whole wheat flour","1 cup all-purpose flour","½ cup rolled oats","½ cup sunflower seeds","1 tsp salt","2 tbsp olive oil"],prep:"Dissolve yeast in warm water with honey. In a large bowl, combine flours, oats, seeds, and salt. Add yeast mixture and olive oil, knead until smooth. Let rise 1 hour until doubled. Shape into rolls, place on greased baking sheet, let rise 30 minutes. Bake at 375°F for 20–25 minutes."},

      {name:"Oatmeal Bread",servings:"1 loaf",ingredients:["1 ½ cups warm water","2 ¼ tsp active dry yeast","2 tbsp brown sugar","1 cup rolled oats","3 ½ cups all-purpose flour","2 tbsp butter","1 ½ tsp salt"],prep:"Dissolve yeast in warm water with brown sugar. Mix in oats, flour, butter, and salt. Knead 8–10 minutes until elastic. Let rise 1 hour until doubled. Shape into loaf, place in greased pan, let rise 30 minutes. Bake at 375°F for 35–40 minutes."},

      {name:"Quinoa Pilaf",servings:"4 servings",ingredients:["1 cup quinoa, rinsed","2 cups vegetable broth","1 small onion, diced","1 clove garlic, minced","1 tbsp olive oil","½ tsp salt","¼ tsp black pepper"],prep:"Heat olive oil in a saucepan over medium heat. Sauté onion and garlic until fragrant. Add quinoa and stir to coat. Pour in broth, bring to a boil, reduce heat, cover, and simmer 15 minutes until liquid is absorbed. Fluff with a fork and season with salt and pepper."},

      {name:"Sourdough Bread",servings:"1 loaf",ingredients:["1 cup sourdough starter, active","1 ½ cups warm water","3 ½ cups all-purpose flour","1 ½ tsp salt"],prep:"Mix starter and water in a large bowl. Add flour and salt, stir until combined. Knead 8–10 minutes until smooth. Cover and let rise 4–6 hours until doubled. Shape into loaf, place on parchment, let rise 1 hour. Preheat oven to 450°F with Dutch oven inside. Bake covered 30 minutes, then uncovered 10–15 minutes until crusty."},

      {name:"Whole Wheat Sandwich Bread",servings:"1 loaf",ingredients:["2 ¼ tsp active dry yeast","1 ¼ cups warm water","1 tbsp honey","2 cups whole wheat flour","1 cup all-purpose flour","1 ½ tsp salt","2 tbsp olive oil"],prep:"Dissolve yeast and honey in warm water. In a bowl, combine flours and salt. Add yeast mixture and olive oil, knead 8–10 minutes. Let rise 1 hour until doubled. Shape into loaf, place in greased pan, let rise 30 minutes. Bake at 375°F for 30–35 minutes."}

    ]
  }
];
  
// ================================================================
//  TOGGLE CATEGORY — shows/hides recipe list under a card
// ================================================================
function toggleCategory(catId) {
  var ul = document.getElementById(catId);
  if (!ul) return;

  if (ul.style.display === "block") {
    ul.style.display = "none";
    return;
  }

  var cat = breads_and_grains_data.find(function(c) { return c.id === catId; });
  if (!cat) return;

  if (ul.innerHTML === "") {
    cat.recipes.forEach(function(recipe, idx) {
      var li = document.createElement("li");
      li.className = "browser-item";
      li.innerHTML =
        "<span class='browser-item-name'>" + recipe.name + "</span>" +
        "<span class='browser-item-arrow'>›</span>";
      li.addEventListener("click", function() {
        open_recipe_modal(recipe, catId);
      });
      ul.appendChild(li);
    });
  }

  ul.style.display = "block";
}


