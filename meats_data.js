const meats_data = [
  {
    "id": "asian_stirfry",
    "icon": "🥢",
    "name": "Asian Stir-Fry",
    "desc": "Quick and flavorful Asian-style stir-fry recipes with vegetables, proteins, and savory sauces.",
    "recipes": [
      {
        "name": "Beef and Broccoli",
        "servings": "4 servings",
        "ingredients": [
          "500 g (1 lb) beef sirloin, thinly sliced",
          "3 cups broccoli florets",
          "4 garlic cloves, minced",
          "1 tbsp fresh ginger, grated",
          "Sauce: 4 tbsp soy sauce, 2 tbsp oyster sauce, 1 tbsp sesame oil, 1 tbsp cornstarch, 1 tbsp brown sugar, ½ cup beef broth",
          "2 tbsp vegetable oil"
        ],
        "prep": "Marinate beef with 1 tbsp soy sauce and 1 tsp cornstarch for 15 minutes. Mix remaining sauce ingredients. Blanch broccoli 2 minutes. Heat oil in a wok over high heat. Cook beef in batches until browned. Remove. Stir-fry garlic and ginger 30 seconds. Add broccoli, return beef, pour sauce, toss until thickened. Serve with rice."
      },
      {
        "name": "Chicken Teriyaki Stir-Fry",
        "servings": "4 servings",
        "ingredients": [
          "500 g (1 lb) chicken breast, sliced",
          "1 red bell pepper, sliced",
          "1 cup snap peas",
          "2 tbsp soy sauce",
          "2 tbsp mirin",
          "1 tbsp sugar",
          "1 tbsp vegetable oil"
        ],
        "prep": "Mix soy sauce, mirin, and sugar for sauce. Heat oil in wok, cook chicken until golden. Add vegetables and stir-fry 2–3 minutes. Pour sauce, cook until slightly thickened. Serve hot with rice."
      },
      {
        "name": "Shrimp and Snow Pea Stir-Fry",
        "servings": "4 servings",
        "ingredients": [
          "400 g (14 oz) shrimp, peeled and deveined",
          "2 cups snow peas",
          "2 garlic cloves, minced",
          "2 tbsp soy sauce",
          "1 tsp sesame oil",
          "1 tbsp vegetable oil"
        ],
        "prep": "Heat oil in wok. Stir-fry garlic 30 seconds. Add shrimp, cook until pink. Add snow peas and soy sauce, stir-fry 2 minutes. Drizzle sesame oil and serve immediately."
      },
      {
        "name": "Tofu and Vegetable Stir-Fry",
        "servings": "4 servings",
        "ingredients": [
          "400 g firm tofu, cubed",
          "1 cup broccoli florets",
          "1 red bell pepper, sliced",
          "1 carrot, sliced",
          "2 tbsp soy sauce",
          "1 tbsp hoisin sauce",
          "1 tbsp vegetable oil"
        ],
        "prep": "Heat oil in wok, cook tofu until golden. Remove. Stir-fry vegetables 3–4 minutes. Return tofu, add soy sauce and hoisin sauce. Toss to combine and serve."
      },
      {
        "name": "Pork and Bok Choy Stir-Fry",
        "servings": "4 servings",
        "ingredients": [
          "500 g pork tenderloin, thinly sliced",
          "2 cups bok choy, chopped",
          "2 garlic cloves, minced",
          "2 tbsp soy sauce",
          "1 tsp ginger, grated",
          "1 tbsp vegetable oil"
        ],
        "prep": "Heat oil in wok. Stir-fry garlic and ginger 30 seconds. Add pork, cook until browned. Add bok choy and soy sauce, cook 2–3 minutes until tender-crisp. Serve hot."
      },
      {
        "name": "Beef and Snow Pea Stir-Fry",
        "servings": "4 servings",
        "ingredients": [
          "400 g beef flank steak, thinly sliced",
          "2 cups snow peas",
          "2 garlic cloves, minced",
          "2 tbsp soy sauce",
          "1 tbsp oyster sauce",
          "1 tsp cornstarch",
          "1 tbsp vegetable oil"
        ],
        "prep": "Toss beef with cornstarch. Heat oil in wok, stir-fry beef until browned. Add garlic, cook 30 seconds. Add snow peas and sauces, stir-fry 2–3 minutes. Serve immediately."
      },
      {
        "name": "Cashew Chicken Stir-Fry",
        "servings": "4 servings",
        "ingredients": [
          "500 g chicken breast, cubed",
          "1 cup cashews, toasted",
          "1 red bell pepper, sliced",
          "2 tbsp soy sauce",
          "1 tbsp hoisin sauce",
          "1 tbsp vegetable oil"
        ],
        "prep": "Heat oil, stir-fry chicken until cooked. Add bell pepper and cook 2 minutes. Stir in soy sauce, hoisin sauce, and cashews. Toss until coated and serve."
      },
      {
        "name": "Ginger Beef Stir-Fry",
        "servings": "4 servings",
        "ingredients": [
          "400 g beef sirloin, thinly sliced",
          "1 red bell pepper, sliced",
          "2 garlic cloves, minced",
          "1 tbsp fresh ginger, grated",
          "3 tbsp soy sauce",
          "1 tbsp rice vinegar",
          "1 tbsp vegetable oil"
        ],
        "prep": "Heat oil in wok. Stir-fry garlic and ginger 30 seconds. Add beef, cook until browned. Add bell pepper, soy sauce, and rice vinegar. Stir-fry 2–3 minutes and serve hot."
      },
      {
        "name": "Vegetable Stir-Fry",
        "servings": "4 servings",
        "ingredients": [
          "1 cup broccoli florets",
          "1 cup snow peas",
          "1 red bell pepper, sliced",
          "1 carrot, sliced",
          "2 tbsp soy sauce",
          "1 tbsp sesame oil",
          "1 tbsp vegetable oil"
        ],
        "prep": "Heat oil in wok. Stir-fry vegetables 3–4 minutes until tender-crisp. Add soy sauce and sesame oil, toss, and serve immediately."
      },
      {
        "name": "Spicy Szechuan Stir-Fry",
        "servings": "4 servings",
        "ingredients": [
          "400 g chicken breast, sliced",
          "1 red bell pepper, sliced",
          "1 green bell pepper, sliced",
          "2 tbsp soy sauce",
          "1 tbsp chili garlic sauce",
          "1 tsp sesame oil",
          "1 tbsp vegetable oil"
        ],
        "prep": "Heat oil in wok. Stir-fry chicken until cooked. Add bell peppers and cook 2–3 minutes. Stir in soy sauce, chili garlic sauce, and sesame oil. Toss until coated and serve hot."
      }
    ]
  },
  {
    "id": "beef",
    "icon": "🥩",
    "name": "Beef",
    "desc": "Classic beef dishes from steaks and roasts to stews, stir fries, and slow-cooked comfort food.",
    "recipes": [
      {
        "name": "Beef Chili",
        "servings": "6 servings",
        "ingredients": [
          "700 g (1.5 lbs) ground beef",
          "2 cans (14 oz each) kidney beans, drained",
          "1 can (28 oz) crushed tomatoes",
          "1 onion, diced",
          "4 garlic cloves, minced",
          "1 red bell pepper, diced",
          "2 tbsp chili powder",
          "1 tsp cumin",
          "1 tsp smoked paprika",
          "½ tsp cayenne",
          "Salt and pepper",
          "2 tbsp olive oil",
          "Toppings: sour cream, cheese, green onions"
        ],
        "prep": "Heat olive oil in a large pot over medium heat. Brown ground beef and drain excess fat. Add onion, pepper, and garlic and cook until softened. Add all spices and cook 1 minute. Add crushed tomatoes and beans. Bring to a boil. Reduce heat and simmer uncovered 30–40 minutes until thick. Season with salt and pepper. Serve with toppings."
      },
      {
        "name": "Beef Kebabs",
        "servings": "4 servings",
        "ingredients": [
          "600 g (1.3 lbs) ground beef",
          "1 onion, grated",
          "4 garlic cloves, minced",
          "¼ cup fresh parsley, chopped",
          "1 tsp cumin",
          "1 tsp coriander",
          "½ tsp cinnamon",
          "½ tsp cayenne",
          "Salt and pepper",
          "Flatbread, tzatziki, and salad to serve"
        ],
        "prep": "Combine ground beef with grated onion, garlic, parsley, and all spices. Mix well. Refrigerate 30 minutes. Shape around flat metal skewers into long sausage shapes, pressing firmly. Grill over high heat or cook in a grill pan, turning occasionally, until cooked through and charred in spots — about 10–12 minutes. Serve with flatbread, tzatziki, and fresh salad."
      },
      {
        "name": "Beef Rendang",
        "servings": "6 servings",
        "ingredients": [
          "1 kg (2 lbs) beef chuck, cubed",
          "Paste: 6 shallots, 4 garlic cloves, 3 red chilies, 2-inch galangal, 2-inch ginger, 2 lemongrass stalks",
          "2 cans (14 oz each) coconut milk",
          "4 kaffir lime leaves",
          "1 cinnamon stick",
          "3 star anise",
          "2 tbsp oil",
          "Salt and sugar to taste",
          "Toasted desiccated coconut"
        ],
        "prep": "Blend paste ingredients until smooth. Heat oil in a large wok or pot. Cook paste over medium heat until fragrant and oil separates, about 10 minutes. Add beef and stir to coat. Add coconut milk, lime leaves, cinnamon, and star anise. Simmer uncovered over medium-low heat stirring occasionally 2–3 hours until liquid is almost completely absorbed and beef is dark and dry-fried. Add toasted coconut in the last 30 minutes."
      },
      {
        "name": "Beef Short Ribs",
        "servings": "4 servings",
        "ingredients": [
          "1.5 kg (3 lbs) bone-in beef short ribs",
          "1 onion, diced",
          "3 carrots, diced",
          "4 garlic cloves",
          "2 cups (480 ml) red wine",
          "2 cups (480 ml) beef broth",
          "2 tbsp tomato paste",
          "Fresh thyme and bay leaf",
          "2 tbsp olive oil",
          "Salt and pepper"
        ],
        "prep": "Preheat oven to 325°F (165°C). Season short ribs generously with salt and pepper. Sear in olive oil in a Dutch oven over high heat on all sides until deeply browned. Remove. Cook vegetables until softened. Add garlic and tomato paste. Add wine and reduce by half. Add broth and herbs. Return ribs bone side up. Cover and braise 3–3.5 hours until meat is falling off the bone. Strain sauce and reduce if desired."
      },
      {
        "name": "Beef Stew",
        "servings": "6 servings",
        "ingredients": [
          "1 kg (2 lbs) beef chuck, cut into 2-inch cubes",
          "3 potatoes, cubed",
          "3 carrots, sliced",
          "2 celery stalks, sliced",
          "1 onion, diced",
          "4 garlic cloves, minced",
          "2 cups (480 ml) beef broth",
          "1 cup (240 ml) red wine",
          "2 tbsp tomato paste",
          "2 tbsp flour",
          "2 tbsp olive oil",
          "Fresh thyme and bay leaf",
          "Salt and pepper"
        ],
        "prep": "Season beef with salt and pepper and dust with flour. Brown in olive oil in a large pot over high heat in batches. Remove beef. Cook onion, carrots, and celery until softened. Add garlic and tomato paste and cook 1 minute. Add wine and reduce. Add broth, herbs, and beef. Bring to a boil. Reduce heat, cover, and simmer 1.5 hours. Add potatoes and cook 30 more minutes until everything is tender."
      },
      {
        "name": "Beef Stroganoff",
        "servings": "4 servings",
        "ingredients": [
          "600 g (1.3 lbs) beef sirloin or tenderloin, thinly sliced",
          "300 g (10.5 oz) cremini mushrooms, sliced",
          "1 onion, thinly sliced",
          "3 garlic cloves, minced",
          "1 cup (240 ml) beef broth",
          "1 cup (240 ml) sour cream",
          "2 tbsp Dijon mustard",
          "2 tbsp butter",
          "1 tbsp Worcestershire sauce",
          "Fresh parsley",
          "Salt and pepper",
          "Egg noodles or rice to serve"
        ],
        "prep": "Season beef strips with salt and pepper. Heat butter in a large skillet over high heat. Cook beef quickly in batches until browned — do not overcook. Remove. Cook mushrooms and onions until golden. Add garlic and cook 1 minute. Add broth and Worcestershire and reduce by half. Lower heat and stir in sour cream and mustard. Return beef and heat through gently. Do not boil after adding sour cream. Serve over egg noodles."
      },
      {
        "name": "Beef Tacos",
        "servings": "4 servings",
        "ingredients": [
          "600 g (1.3 lbs) ground beef",
          "1 onion, diced",
          "4 garlic cloves, minced",
          "1 can (14 oz) diced tomatoes",
          "2 tsp cumin",
          "1 tsp chili powder",
          "1 tsp smoked paprika",
          "½ tsp oregano",
          "Salt and pepper",
          "8 corn or flour tortillas",
          "Toppings: shredded cheese, sour cream, salsa, avocado, cilantro, lime"
        ],
        "prep": "Brown ground beef in a large skillet over medium-high heat, breaking up lumps. Drain excess fat. Add onion and cook until softened. Add garlic and all spices and cook 1 minute. Add diced tomatoes and simmer 10 minutes until most liquid evaporates. Season with salt and pepper. Warm tortillas. Fill with beef mixture and desired toppings."
      },
      {
        "name": "Beef Wellington",
        "servings": "6 servings",
        "ingredients": [
          "1 kg (2 lbs) beef tenderloin, trimmed",
          "500 g (1 lb) cremini mushrooms, finely chopped (duxelles)",
          "6 slices prosciutto",
          "2 tbsp Dijon mustard",
          "1 sheet puff pastry",
          "1 egg, beaten",
          "2 tbsp butter",
          "Salt and pepper"
        ],
        "prep": "Season tenderloin and sear in butter over very high heat on all sides. Cool completely. Brush with Dijon mustard. Make duxelles by cooking mushrooms in butter until all moisture evaporates — about 15 minutes. Cool. Lay prosciutto on plastic wrap, spread duxelles, place beef at edge and roll tightly. Refrigerate 30 minutes. Wrap in puff pastry, seal edges with egg wash. Brush with egg wash. Bake at 425°F 25–30 minutes until pastry is golden and beef reaches 125°F for medium rare. Rest 10 minutes."
      },
      {
        "name": "Classic Beef Meatloaf",
        "servings": "6 servings",
        "ingredients": [
          "700 g (1.5 lbs) ground beef",
          "½ cup breadcrumbs",
          "½ cup milk",
          "2 eggs",
          "1 onion, finely diced",
          "3 garlic cloves, minced",
          "2 tbsp Worcestershire sauce",
          "1 tsp dried thyme",
          "Salt and pepper",
          "Glaze: ½ cup ketchup, 2 tbsp brown sugar, 1 tbsp Dijon mustard"
        ],
        "prep": "Preheat oven to 375°F (190°C). Soak breadcrumbs in milk 5 minutes. Combine ground beef, breadcrumbs, eggs, onion, garlic, Worcestershire, thyme, salt and pepper. Mix gently until just combined — do not overmix. Form into a loaf shape in a baking dish or loaf pan. Mix glaze ingredients and spread over top. Bake 55–65 minutes until internal temperature reaches 160°F. Rest 10 minutes before slicing."
      },
      {
        "name": "Classic Pot Roast",
        "servings": "6 servings",
        "ingredients": [
          "1.5 kg (3 lbs) beef chuck roast",
          "3 carrots, cut into chunks",
          "3 celery stalks, cut into chunks",
          "1 onion, quartered",
          "4 garlic cloves, minced",
          "2 cups (480 ml) beef broth",
          "1 cup (240 ml) red wine",
          "2 tbsp tomato paste",
          "2 tbsp olive oil",
          "Fresh thyme and rosemary",
          "Salt and pepper"
        ],
        "prep": "Preheat oven to 325°F (165°C). Pat beef dry and season generously with salt and pepper. Heat olive oil in a large Dutch oven over high heat. Sear beef on all sides until deeply browned, about 3–4 minutes per side. Remove beef. Add onion, carrots, and celery and cook 3 minutes. Add garlic and tomato paste and cook 1 minute. Add wine and scrape up any browned bits. Add broth and herbs. Return beef. Cover tightly and braise in oven 3–3.5 hours until fork tender. Rest 15 minutes before slicing."
      },
      {
        "name": "Korean Beef Bulgogi",
        "servings": "4 servings",
        "ingredients": [
          "600 g (1.3 lbs) beef ribeye or sirloin, very thinly sliced",
          "Marinade: 4 tbsp soy sauce, 2 tbsp sesame oil, 2 tbsp sugar, 1 Asian pear or ½ cup pear juice, 4 garlic cloves minced, 1 tbsp fresh ginger, 2 green onions sliced, 1 tsp black pepper",
          "Sesame seeds and green onions to garnish"
        ],
        "prep": "If possible freeze beef 30 minutes for easier thin slicing. Slice paper thin against the grain. Mix all marinade ingredients together. Combine beef with marinade and mix well. Marinate at least 30 minutes, ideally 2 hours. Cook beef in a very hot skillet or grill pan in batches, not crowding the pan. Cook each batch 1–2 minutes per side until caramelized. Garnish with sesame seeds and green onions. Serve with steamed rice."
      },
      {
        "name": "Pan Seared Ribeye Steak",
        "servings": "2 servings",
        "ingredients": [
          "2 ribeye steaks, 1.5 inches thick",
          "4 tbsp unsalted butter",
          "4 garlic cloves, smashed",
          "Fresh thyme and rosemary sprigs",
          "2 tbsp vegetable oil",
          "Flaky sea salt and black pepper"
        ],
        "prep": "Remove steaks from fridge 45 minutes before cooking. Pat completely dry. Season generously with salt and pepper on all sides. Heat oil in a heavy cast iron skillet over very high heat until just smoking. Add steaks and cook without moving 3–4 minutes until deeply browned. Flip and cook 2–3 minutes. Add butter, garlic, and herbs. Tilt pan and baste steaks continuously with foamy butter for 2 minutes. Remove and rest on a rack 8–10 minutes before slicing."
      },
      {
        "name": "Philly Cheesesteak",
        "servings": "4 servings",
        "ingredients": [
          "600 g (1.3 lbs) ribeye steak, very thinly sliced",
          "2 onions, thinly sliced",
          "2 green bell peppers, thinly sliced",
          "200 g (7 oz) provolone or Cheez Whiz",
          "4 hoagie rolls",
          "2 tbsp butter",
          "Salt and pepper"
        ],
        "prep": "Freeze steak 30 minutes for easier slicing. Slice paper thin. Cook onions and peppers in butter over medium heat until very soft and slightly caramelized — about 15 minutes. Season. Push to the side or remove. Increase heat to high. Cook beef quickly, seasoning with salt and pepper, breaking into small pieces. Combine with onions and peppers. Top with cheese slices and cover pan briefly until melted. Serve on hoagie rolls."
      }
    ]
  },
  {
    "id": "chicken",
    "icon": "🍗",
    "name": "Chicken",
    "desc": "Roasted, fried, grilled, braised, and baked chicken dishes from around the world.",
    "recipes": [
      {
        "name": "Crispy Chicken Nuggets",
        "servings": "4 servings",
        "ingredients": [
          "1 lb chicken breast, cut into bite-sized pieces",
          "1 cup all-purpose flour",
          "1 tsp garlic powder",
          "1 tsp onion powder",
          "1 tsp paprika",
          "salt and pepper",
          "2 eggs, beaten",
          "1 cup breadcrumbs (panko for extra crunch)",
          "1 tsp dried oregano (optional)",
          "vegetable oil for frying"
        ],
        "prep": "Pat chicken dry. Set up three bowls: (1) flour mixed with garlic powder, onion powder, paprika, salt, and pepper, (2) beaten eggs, (3) breadcrumbs with oregano. Dredge chicken in flour, dip in egg, then coat in breadcrumbs. Heat oil to about 350°F. Fry nuggets in batches 4–5 minutes per side until golden brown and internal temperature reaches 165°F. Remove to paper towels and serve hot."
      },
      {
        "name": "BBQ Chicken",
        "servings": "4 servings",
        "ingredients": [
          "1 whole chicken, cut into pieces",
          "BBQ sauce: 1 cup ketchup, ¼ cup brown sugar, 2 tbsp apple cider vinegar, 1 tbsp Worcestershire, 1 tsp smoked paprika, 1 tsp garlic powder, salt and pepper",
          "Dry rub: 1 tbsp smoked paprika, 1 tsp garlic powder, 1 tsp onion powder, 1 tsp brown sugar, salt and pepper"
        ],
        "prep": "Apply dry rub to chicken. Grill over indirect medium heat 35–40 minutes turning occasionally until mostly cooked through. Brush generously with BBQ sauce. Move to direct heat. Grill 5 minutes per side, brushing more sauce and turning, until caramelized and internal temperature reaches 165°F. Rest 5 minutes."
      },
      {
        "name": "Butter Chicken",
        "servings": "4 servings",
        "ingredients": [
          "700 g (1.5 lbs) boneless chicken thighs, cubed",
          "Marinade: 1 cup yogurt, 2 tbsp lemon juice, 2 tsp cumin, 1 tsp turmeric, 1 tsp garam masala, 1 tsp chili powder, 4 garlic cloves, 1 tbsp ginger",
          "Sauce: 2 tbsp butter, 1 onion diced, 4 garlic cloves, 1 tbsp ginger, 1 can (28 oz) crushed tomatoes, 1 cup heavy cream, 2 tsp garam masala, 1 tsp cumin, 1 tsp paprika, salt and sugar"
        ],
        "prep": "Marinate chicken at least 2 hours. Grill or broil chicken until charred and cooked through. Make sauce by cooking onion in butter until golden. Add garlic, ginger, and spices. Add tomatoes and simmer 20 minutes. Blend until smooth. Return to pan. Add cream and simmer 10 minutes. Add cooked chicken and simmer 5 more minutes. Garnish with cream and cilantro. Serve with naan or rice."
      },
      {
        "name": "Chicken Cacciatore",
        "servings": "4 servings",
        "ingredients": [
          "1 whole chicken, cut into pieces",
          "1 onion, diced",
          "1 red bell pepper, diced",
          "4 garlic cloves, minced",
          "1 cup (240 ml) dry white wine",
          "1 can (28 oz) crushed tomatoes",
          "200 g (7 oz) cremini mushrooms, sliced",
          "2 tbsp olive oil",
          "Fresh rosemary and thyme",
          "Salt and pepper",
          "Capers and olives (optional)"
        ],
        "prep": "Season chicken and brown in olive oil on all sides. Remove. Cook onion, pepper, and mushrooms until softened. Add garlic and cook 1 minute. Add wine and reduce by half. Add crushed tomatoes and herbs. Return chicken. Simmer covered 40–45 minutes until chicken is very tender. Stir in capers and olives if using. Season with salt and pepper."
      },
      {
        "name": "Chicken Cordon Bleu",
        "servings": "4 servings",
        "ingredients": [
          "4 boneless skinless chicken breasts",
          "4 slices ham",
          "4 slices Swiss cheese",
          "1 cup breadcrumbs",
          "½ cup flour",
          "2 eggs, beaten",
          "2 tbsp butter, melted",
          "Salt, pepper, and paprika",
          "Dijon cream sauce to serve"
        ],
        "prep": "Pound chicken breasts thin. Season with salt and pepper. Place a slice of ham and Swiss cheese on each breast. Roll up tightly and secure with toothpicks. Dredge in flour, dip in egg, coat in breadcrumbs mixed with paprika. Drizzle with melted butter. Bake at 375°F for 30–35 minutes until golden and cooked through. Make a simple cream sauce with butter, garlic, cream, and Dijon mustard. Serve over chicken."
      },
      {
        "name": "Chicken Marsala",
        "servings": "4 servings",
        "ingredients": [
          "4 boneless skinless chicken breasts, pounded thin",
          "300 g (10.5 oz) cremini mushrooms, sliced",
          "½ cup flour",
          "¾ cup (180 ml) Marsala wine",
          "½ cup (120 ml) chicken broth",
          "4 tbsp butter",
          "2 tbsp olive oil",
          "3 garlic cloves, minced",
          "Fresh parsley",
          "Salt and pepper"
        ],
        "prep": "Season chicken with salt and pepper and dredge in flour. Heat olive oil and 2 tbsp butter in a large skillet over medium-high heat. Cook chicken 3–4 minutes per side until golden. Remove. Add mushrooms and cook until golden. Add garlic and cook 30 seconds. Add Marsala and cook until reduced by half. Add broth and simmer 3 minutes. Stir in remaining butter. Return chicken and heat through. Garnish with parsley."
      },
      {
        "name": "Chicken Parmesan",
        "servings": "4 servings",
        "ingredients": [
          "4 boneless skinless chicken breasts",
          "1 cup breadcrumbs",
          "½ cup Parmesan, grated",
          "2 eggs, beaten",
          "½ cup flour",
          "2 cups marinara sauce",
          "2 cups shredded mozzarella",
          "Salt, pepper, and Italian seasoning",
          "Olive oil for frying"
        ],
        "prep": "Pound chicken breasts to even thickness. Season with salt, pepper, and Italian seasoning. Dredge in flour, dip in egg, then coat in breadcrumbs mixed with Parmesan. Pan fry in olive oil over medium-high heat until golden on both sides, about 3–4 minutes per side. Transfer to a baking dish. Top each piece with marinara and mozzarella. Bake at 400°F for 15–20 minutes until cheese is melted and bubbly."
      },
      {
        "name": "Chicken Piccata",
        "servings": "4 servings",
        "ingredients": [
          "4 boneless skinless chicken breasts, pounded thin",
          "½ cup flour",
          "4 tbsp butter",
          "3 tbsp olive oil",
          "4 garlic cloves, minced",
          "½ cup (120 ml) dry white wine",
          "½ cup (120 ml) chicken broth",
          "Juice of 2 lemons",
          "3 tbsp capers, rinsed",
          "Fresh parsley",
          "Salt and pepper"
        ],
        "prep": "Season chicken with salt and pepper. Dredge in flour. Heat olive oil and 2 tbsp butter in a large skillet over medium-high heat. Cook chicken 3–4 minutes per side until golden. Remove. Add garlic and cook 30 seconds. Add wine and cook until reduced by half. Add broth and lemon juice and simmer 3 minutes. Stir in capers and remaining butter until sauce is silky. Return chicken to pan and heat through. Garnish with parsley."
      },
      {
        "name": "Chicken Shawarma",
        "servings": "4 servings",
        "ingredients": [
          "700 g (1.5 lbs) boneless chicken thighs",
          "Marinade: 4 tbsp olive oil, juice of 1 lemon, 4 garlic cloves, 2 tsp cumin, 1 tsp turmeric, 1 tsp coriander, 1 tsp paprika, ½ tsp cinnamon, ½ tsp cayenne, salt and pepper",
          "Pita bread, hummus, tzatziki, pickles, and salad to serve"
        ],
        "prep": "Mix marinade ingredients. Coat chicken thoroughly. Marinate at least 2 hours or overnight. Grill or cook in a cast iron skillet over high heat 4–5 minutes per side until charred and cooked through. Rest 5 minutes and slice thinly. Serve in warmed pita with hummus, tzatziki, pickles, and fresh vegetables."
      },
      {
        "name": "Chicken Souvlaki",
        "servings": "4 servings",
        "ingredients": [
          "700 g (1.5 lbs) boneless chicken breast, cubed",
          "Marinade: 4 tbsp olive oil, juice of 1 lemon, 4 garlic cloves, 1 tsp oregano, 1 tsp cumin, salt and pepper",
          "Pita, tzatziki, red onion, tomatoes, and cucumber to serve"
        ],
        "prep": "Mix marinade and coat chicken thoroughly. Marinate at least 1 hour. Thread onto skewers. Grill over high heat turning occasionally until chicken is cooked through and nicely charred — about 10–12 minutes. Serve in warm pita with tzatziki, sliced red onion, tomatoes, and cucumber."
      },
      {
        "name": "Chicken Tikka Masala",
        "servings": "4 servings",
        "ingredients": [
          "700 g (1.5 lbs) boneless chicken breast, cubed",
          "Marinade: 1 cup yogurt, 2 tsp garam masala, 1 tsp cumin, 1 tsp turmeric, 4 garlic cloves, 1 tbsp ginger",
          "Sauce: 2 tbsp butter, 1 onion, 4 garlic cloves, 1 tbsp ginger, 1 can crushed tomatoes, 1 cup heavy cream, 2 tsp garam masala, 1 tsp cumin, 1 tsp coriander, paprika, salt"
        ],
        "prep": "Marinate chicken 2 hours. Grill or broil until lightly charred. Make sauce: cook onion in butter until golden. Add garlic, ginger, and spices. Add tomatoes and simmer 15 minutes. Blend until smooth. Add cream and simmer 10 minutes. Add chicken and simmer 5 minutes. Serve with basmati rice and naan."
      },
      {
        "name": "Coq au Vin",
        "servings": "4 servings",
        "ingredients": [
          "1 whole chicken, cut into pieces",
          "200 g (7 oz) bacon lardons",
          "300 g (10.5 oz) cremini mushrooms",
          "1 cup pearl onions",
          "2 cups (480 ml) red wine",
          "1 cup (240 ml) chicken broth",
          "2 tbsp tomato paste",
          "4 garlic cloves",
          "Bouquet garni",
          "3 tbsp butter",
          "Salt and pepper"
        ],
        "prep": "Brown bacon in a Dutch oven. Remove. Brown chicken pieces in bacon fat on all sides. Remove. Cook pearl onions and mushrooms until golden. Add garlic and tomato paste. Add wine, broth, and bouquet garni. Return chicken and bacon. Braise covered at 325°F for 1.5 hours until chicken is very tender. Remove chicken. Strain and reduce sauce. Return chicken and mushrooms to sauce. Serve with crusty bread or mashed potatoes."
      },
      {
        "name": "Honey Garlic Chicken",
        "servings": "4 servings",
        "ingredients": [
          "8 bone-in skin-on chicken thighs",
          "Sauce: 4 tbsp honey, 3 tbsp soy sauce, 4 garlic cloves minced, 1 tbsp apple cider vinegar, 1 tsp sesame oil, red pepper flakes",
          "2 tbsp olive oil",
          "Salt and pepper",
          "Sesame seeds and green onions to garnish"
        ],
        "prep": "Preheat oven to 400°F (200°C). Season chicken with salt and pepper. Heat olive oil in an oven-safe skillet over medium-high heat. Sear chicken skin side down 4–5 minutes until golden and crispy. Flip. Mix sauce ingredients and pour over chicken. Transfer to oven and bake 25–30 minutes until cooked through, basting with sauce halfway through. Garnish with sesame seeds and green onions."
      },
      {
        "name": "Lemon Herb Roasted Chicken Thighs",
        "servings": "4 servings",
        "ingredients": [
          "8 bone-in skin-on chicken thighs",
          "Juice and zest of 2 lemons",
          "4 garlic cloves, minced",
          "3 tbsp olive oil",
          "2 tsp dried oregano",
          "1 tsp dried thyme",
          "1 tsp paprika",
          "Salt and black pepper",
          "Fresh parsley to garnish"
        ],
        "prep": "Preheat oven to 425°F (220°C). Mix lemon juice, zest, garlic, olive oil, and all herbs and spices together. Score chicken thighs and coat thoroughly in marinade. Marinate 30 minutes if time allows. Place skin side up in a baking dish. Roast 35–40 minutes until skin is deeply golden and crispy and juices run clear. Baste with pan juices halfway through. Garnish with fresh parsley."
      },
      {
        "name": "Roast Chicken",
        "servings": "4 servings",
        "ingredients": [
          "1 whole chicken, about 1.8 kg (4 lbs)",
          "4 tbsp unsalted butter, softened",
          "4 garlic cloves, minced",
          "1 lemon, halved",
          "Fresh thyme and rosemary",
          "Salt and black pepper",
          "1 onion, quartered",
          "Olive oil"
        ],
        "prep": "Preheat oven to 425°F (220°C). Pat chicken dry inside and out. Mix butter with garlic, thyme, rosemary, salt and pepper. Carefully separate skin from breast and rub butter mixture directly under the skin. Season the entire outside generously with salt and pepper. Stuff cavity with lemon halves, onion, and remaining herbs. Tie legs together. Place on a rack in a roasting pan. Roast 60–75 minutes until juices run clear and internal temperature reaches 165°F. Rest 15 minutes before carving."
      },
      {
        "name": "Southern Fried Chicken",
        "servings": "4 servings",
        "ingredients": [
          "1 whole chicken, cut into pieces",
          "2 cups buttermilk",
          "2 cups flour",
          "1 tbsp garlic powder",
          "1 tbsp onion powder",
          "1 tsp paprika",
          "1 tsp cayenne",
          "1 tsp dried thyme",
          "Salt and black pepper",
          "Oil for frying"
        ],
        "prep": "Soak chicken in buttermilk with salt and pepper for at least 4 hours or overnight. Mix flour with all spices, salt, and pepper. Remove chicken from buttermilk and dredge in seasoned flour, pressing to adhere. Let sit on a rack 15 minutes. Heat oil to 325°F in a large heavy pot. Fry chicken in batches — dark meat 13–15 minutes, white meat 10–12 minutes, turning once, until golden brown and cooked through. Drain on a rack."
      }
    ]
  },
  {
    "id": "lamb",
    "icon": "🍖",
    "name": "Lamb",
    "desc": "Roasted leg of lamb, lamb chops, slow-cooked shanks, kebabs, and lamb dishes from around the world.",
    "recipes": [
      {
        "name": "Braised Lamb Shanks",
        "servings": "4 servings",
        "ingredients": [
          "4 lamb shanks",
          "1 onion, diced",
          "2 carrots, diced",
          "4 garlic cloves",
          "2 cups (480 ml) red wine",
          "2 cups (480 ml) beef broth",
          "1 can (14 oz) crushed tomatoes",
          "2 tbsp tomato paste",
          "Fresh rosemary and thyme",
          "2 tbsp olive oil",
          "Salt and pepper"
        ],
        "prep": "Preheat oven to 325°F (165°C). Season shanks and brown on all sides in olive oil in a Dutch oven. Remove. Cook vegetables until softened. Add garlic and tomato paste and cook 1 minute. Add wine and reduce. Add broth, tomatoes, and herbs. Return shanks. Cover and braise 2.5–3 hours until meat is falling off the bone. Remove shanks. Strain and reduce sauce. Return shanks to sauce."
      },
      {
        "name": "Greek Lamb Gyros",
        "servings": "4 servings",
        "ingredients": [
          "600 g (1.3 lbs) ground or sliced lamb",
          "Marinade: 3 tbsp olive oil, 4 garlic cloves, 1 tsp cumin, 1 tsp coriander, 1 tsp paprika, 1 tsp oregano, salt and pepper",
          "Pita, tzatziki, tomatoes, onion, and fries to serve"
        ],
        "prep": "Mix marinade. Coat lamb thoroughly. For ground lamb shape into flat oblong patties. For sliced lamb, marinate 2 hours. Cook in a hot pan or on a grill until cooked through and slightly charred. For authentic texture, stack and slice thinly. Serve in warm pita with tzatziki, diced tomatoes, red onion, and fries."
      },
      {
        "name": "Lamb Biriyani",
        "servings": "6 servings",
        "ingredients": [
          "700 g (1.5 lbs) lamb shoulder, cubed",
          "2 cups basmati rice, soaked",
          "1 onion, thinly sliced and fried crispy",
          "1 cup yogurt",
          "4 garlic cloves",
          "1 tbsp ginger",
          "Spices: 2 tsp biryani masala, 1 tsp cumin, 1 tsp coriander, ½ tsp turmeric, cardamom, cinnamon, cloves",
          "Saffron in warm milk",
          "Fresh mint and cilantro",
          "Fried onions and ghee to finish"
        ],
        "prep": "Marinate lamb in yogurt, garlic, ginger, and spices 2 hours. Cook marinated lamb until tender 45 minutes. Cook rice until 70% done. Layer lamb and rice in a heavy pot with saffron milk, mint, cilantro, and fried onions between layers. Seal pot with dough or tight foil. Cook on very low heat 30 minutes. Rest 10 minutes before opening. Gently mix layers and serve."
      },
      {
        "name": "Lamb Chops",
        "servings": "4 servings",
        "ingredients": [
          "8 lamb loin or rib chops",
          "4 garlic cloves, minced",
          "3 tbsp olive oil",
          "Juice of 1 lemon",
          "1 tsp dried rosemary",
          "1 tsp dried thyme",
          "Salt and black pepper",
          "Mint sauce or tzatziki to serve"
        ],
        "prep": "Mix olive oil, garlic, lemon juice, rosemary, and thyme. Coat lamb chops and marinate at least 1 hour. Remove from fridge 30 minutes before cooking. Heat a grill pan or skillet over very high heat. Season chops with salt and pepper. Sear 3–4 minutes per side for medium rare or 4–5 minutes for medium. Rest 5 minutes. Serve with mint sauce or tzatziki."
      },
      {
        "name": "Lamb Curry",
        "servings": "4 servings",
        "ingredients": [
          "700 g (1.5 lbs) lamb shoulder, cubed",
          "1 onion, diced",
          "4 garlic cloves",
          "1 tbsp ginger",
          "1 can (14 oz) crushed tomatoes",
          "½ cup coconut milk",
          "2 tsp curry powder",
          "1 tsp garam masala",
          "1 tsp turmeric",
          "1 tsp cumin",
          "2 tbsp oil",
          "Salt",
          "Fresh cilantro to serve"
        ],
        "prep": "Heat oil in a large pot. Cook onion until golden. Add garlic and ginger and cook 2 minutes. Add all spices and cook 1 minute. Add lamb and brown on all sides. Add crushed tomatoes. Cover and simmer 45 minutes. Add coconut milk and simmer 15 more minutes until lamb is tender and sauce is rich. Adjust seasoning. Garnish with cilantro. Serve with basmati rice or naan."
      },
      {
        "name": "Lamb Kebabs",
        "servings": "4 servings",
        "ingredients": [
          "600 g (1.3 lbs) ground lamb",
          "1 onion, grated",
          "4 garlic cloves, minced",
          "¼ cup fresh parsley",
          "1 tsp cumin",
          "1 tsp coriander",
          "½ tsp cinnamon",
          "½ tsp cayenne",
          "Salt and pepper",
          "Flatbread and tzatziki to serve"
        ],
        "prep": "Combine all ingredients and mix well. Refrigerate 30 minutes. Shape onto flat metal skewers into long sausage shapes, pressing firmly. Grill over high heat or in a grill pan, turning every 2–3 minutes until cooked through and slightly charred — about 10–12 minutes. Serve in warm flatbread with tzatziki and fresh salad."
      },
      {
        "name": "Lamb Kofta",
        "servings": "4 servings",
        "ingredients": [
          "600 g (1.3 lbs) ground lamb",
          "½ onion, grated",
          "3 garlic cloves, minced",
          "¼ cup fresh mint, chopped",
          "¼ cup fresh parsley, chopped",
          "1 tsp cumin",
          "1 tsp coriander",
          "½ tsp cinnamon",
          "½ tsp cayenne",
          "Salt and pepper",
          "Tzatziki and pita to serve"
        ],
        "prep": "Combine all ingredients and mix well. Shape into oval patties or balls. Cook on a hot grill or in a skillet over medium-high heat 3–4 minutes per side until cooked through and nicely browned. Serve with warm pita, tzatziki, fresh tomatoes, and cucumber."
      },
      {
        "name": "Lamb Rogan Josh",
        "servings": "4 servings",
        "ingredients": [
          "700 g (1.5 lbs) lamb shoulder, cubed",
          "1 onion, finely diced",
          "4 garlic cloves, minced",
          "1 tbsp fresh ginger",
          "1 can (14 oz) crushed tomatoes",
          "½ cup yogurt",
          "2 tsp Kashmiri chili powder",
          "2 tsp coriander",
          "1 tsp cumin",
          "1 tsp garam masala",
          "½ tsp cardamom",
          "3 tbsp oil",
          "Salt"
        ],
        "prep": "Heat oil in a heavy pot. Cook onion until deeply golden — about 15 minutes. Add garlic and ginger and cook 2 minutes. Add all spices and cook 1 minute. Add lamb and brown on all sides. Add yogurt a spoon at a time, stirring between each addition. Add crushed tomatoes. Cover and simmer 1–1.5 hours until lamb is very tender. Adjust seasoning. Serve with basmati rice and naan."
      },
      {
        "name": "Lamb Souvlaki",
        "servings": "4 servings",
        "ingredients": [
          "600 g (1.3 lbs) lamb leg or shoulder, cubed",
          "Marinade: 4 tbsp olive oil, juice of 1 lemon, 3 garlic cloves, 1 tsp oregano, 1 tsp cumin, salt and pepper",
          "Pita, tzatziki, onion, and tomatoes to serve"
        ],
        "prep": "Mix marinade and coat lamb. Marinate at least 2 hours. Thread onto skewers. Grill over high heat turning occasionally 10–12 minutes until cooked through with nice char. Serve in warm pita with tzatziki, sliced onion, and tomatoes."
      },
      {
        "name": "Lamb Stew",
        "servings": "6 servings",
        "ingredients": [
          "1 kg (2 lbs) lamb shoulder, cubed",
          "3 potatoes, cubed",
          "2 carrots, sliced",
          "1 onion, diced",
          "4 garlic cloves",
          "2 cups (480 ml) chicken broth",
          "1 cup (240 ml) white wine",
          "2 tbsp tomato paste",
          "Fresh rosemary and thyme",
          "2 tbsp olive oil",
          "Salt and pepper"
        ],
        "prep": "Brown lamb in olive oil in a large pot in batches. Remove. Cook onion, carrots, and garlic until softened. Add tomato paste and wine and reduce. Add broth and herbs. Return lamb. Simmer covered 1 hour. Add potatoes and cook 30 more minutes until everything is very tender. Adjust seasoning."
      },
      {
        "name": "Lamb Tagine",
        "servings": "4 servings",
        "ingredients": [
          "700 g (1.5 lbs) lamb shoulder, cubed",
          "1 onion, diced",
          "4 garlic cloves",
          "1 can (14 oz) diced tomatoes",
          "1 cup (240 ml) chicken broth",
          "½ cup dried apricots",
          "¼ cup green olives",
          "2 tsp ras el hanout",
          "1 tsp cumin",
          "1 tsp cinnamon",
          "1 tsp ginger",
          "2 tbsp olive oil",
          "Salt and pepper",
          "Cilantro and toasted almonds to garnish",
          "Couscous to serve"
        ],
        "prep": "Heat olive oil in a tagine or Dutch oven. Brown lamb on all sides. Remove. Cook onion until golden. Add garlic and spices and cook 1 minute. Return lamb. Add tomatoes, broth, apricots, and olives. Cover and simmer over low heat 1.5–2 hours until lamb is very tender. Adjust seasoning. Garnish with cilantro and toasted almonds. Serve with couscous."
      },
      {
        "name": "Moussaka",
        "servings": "6 servings",
        "ingredients": [
          "700 g (1.5 lbs) ground lamb",
          "2 large eggplants, sliced",
          "1 onion, diced",
          "4 garlic cloves",
          "1 can (14 oz) crushed tomatoes",
          "½ cup red wine",
          "1 tsp cinnamon",
          "½ tsp allspice",
          "Béchamel: 4 tbsp butter, ¼ cup flour, 2 cups milk, 2 eggs, ½ cup Parmesan, nutmeg",
          "Olive oil, salt, pepper"
        ],
        "prep": "Salt eggplant slices and rest 30 minutes. Pat dry and grill or fry until golden. Make meat sauce: brown lamb with onion and garlic. Add wine, tomatoes, cinnamon, and allspice. Simmer 20 minutes. Make béchamel. Preheat oven to 375°F. Layer in a baking dish: eggplant, meat sauce, eggplant, then pour béchamel over top. Bake 45 minutes until golden. Rest 15 minutes before slicing."
      },
      {
        "name": "Rack of Lamb",
        "servings": "4 servings",
        "ingredients": [
          "2 racks of lamb, frenched",
          "4 garlic cloves, minced",
          "2 tbsp Dijon mustard",
          "½ cup breadcrumbs",
          "2 tbsp fresh rosemary, chopped",
          "2 tbsp fresh parsley, chopped",
          "3 tbsp olive oil",
          "Salt and black pepper"
        ],
        "prep": "Preheat oven to 425°F (220°C). Season racks generously with salt and pepper. Sear fat side down in olive oil in an oven-safe skillet over high heat until golden — about 3 minutes. Flip and sear 1 minute more. Mix mustard with garlic. Brush over the fat cap. Mix breadcrumbs with rosemary, parsley, and olive oil. Press herb crust firmly onto mustard. Roast 20–25 minutes for medium rare. Rest 10 minutes. Slice between bones."
      },
      {
        "name": "Roasted Leg of Lamb",
        "servings": "6 servings",
        "ingredients": [
          "2 kg (4.5 lbs) bone-in leg of lamb",
          "6 garlic cloves, sliced",
          "3 tbsp olive oil",
          "Juice of 1 lemon",
          "2 tsp dried oregano",
          "1 tsp dried rosemary",
          "1 tsp dried thyme",
          "Salt and black pepper",
          "1 cup (240 ml) white wine",
          "1 cup (240 ml) chicken broth"
        ],
        "prep": "Preheat oven to 425°F (220°C). Make deep incisions all over lamb and push garlic slices in. Mix olive oil, lemon juice, and herbs and rub all over lamb. Season generously with salt and pepper. Place in a roasting pan. Roast at high heat 20 minutes to brown. Reduce to 350°F. Add wine and broth to pan. Roast 1–1.5 hours for medium, basting occasionally. Internal temperature should reach 135°F for medium. Rest 20 minutes before carving."
      },
      {
        "name": "Slow Roasted Lamb Shoulder",
        "servings": "6 servings",
        "ingredients": [
          "2 kg (4.5 lbs) bone-in lamb shoulder",
          "6 garlic cloves",
          "2 tbsp olive oil",
          "1 cup (240 ml) white wine",
          "1 cup (240 ml) chicken broth",
          "1 tbsp dried oregano",
          "1 tsp cumin",
          "Juice of 1 lemon",
          "Salt and pepper"
        ],
        "prep": "Preheat oven to 475°F (245°C). Make deep incisions and push garlic in. Rub all over with olive oil, oregano, cumin, lemon juice, salt and pepper. Sear in oven at high heat 20 minutes until browned. Reduce to 325°F. Add wine and broth to pan. Cover tightly with foil. Roast 4–5 hours until meat falls away from the bone. Shred with forks. Serve with pan juices."
      }
    ]
  },
  {
    "id": "minced meat",
    "icon": "🫀",
    "name": "Minced Meat Dishes",
    "desc": "Burgers, meatballs, meat sauces, stuffed dishes, and recipes using ground beef, pork, turkey, or lamb.",
    "recipes": [
      {
        "name": "Arancini",
        "servings": "~16 balls",
        "ingredients": [
          "3 cups leftover risotto or freshly made and cooled",
          "200 g (7 oz) ground beef",
          "½ cup peas",
          "1 cup mozzarella, cubed small",
          "1 cup breadcrumbs",
          "2 eggs, beaten",
          "½ cup flour",
          "Salt and pepper",
          "Oil for deep frying"
        ],
        "prep": "Cook ground beef with peas and season. Cool. With wet hands take a handful of risotto and flatten. Place a cube of mozzarella and a spoonful of meat filling in the center. Close the risotto around the filling forming a ball. Roll in flour, dip in egg, coat in breadcrumbs. Deep fry at 350°F for 4–5 minutes until golden all over. Drain on paper towels. Serve with marinara sauce."
      },
      {
        "name": "Banh Mi Meatball Sub",
        "servings": "4 servings",
        "ingredients": [
          "400 g (14 oz) ground pork",
          "2 garlic cloves",
          "1 tbsp fish sauce",
          "1 tsp sugar",
          "Baguettes",
          "Quick pickled daikon and carrots: julienned, soaked in rice vinegar, sugar, salt 30 minutes",
          "Jalapeño, cilantro, cucumber, and sriracha mayo"
        ],
        "prep": "Mix pork with garlic, fish sauce, and sugar. Form into small meatballs. Pan fry until cooked through and browned. Slice baguettes and spread with sriracha mayo. Fill with meatballs. Top generously with pickled daikon and carrots, sliced jalapeño, fresh cilantro, and cucumber slices."
      },
      {
        "name": "Classic Cheeseburger",
        "servings": "4 servings",
        "ingredients": [
          "700 g (1.5 lbs) ground beef — 80/20 blend",
          "4 slices American or cheddar cheese",
          "4 brioche buns, toasted",
          "Salt and black pepper",
          "Toppings: lettuce, tomato, onion, pickles, mustard, ketchup, mayo"
        ],
        "prep": "Divide beef into 4 equal portions. Shape gently into patties slightly wider than the bun — they will shrink. Make a small indent in the center. Season both sides generously with salt and pepper just before cooking. Heat a cast iron skillet or grill over very high heat. Cook patties without pressing 3–4 minutes until crust forms. Flip once. Add cheese. Cook 2–3 more minutes for medium. Rest 2 minutes. Build burgers and serve immediately."
      },
      {
        "name": "Cottage Pie",
        "servings": "6 servings",
        "ingredients": [
          "700 g (1.5 lbs) ground beef",
          "1 onion, diced",
          "2 carrots, diced",
          "2 celery stalks, diced",
          "3 garlic cloves",
          "1 cup (240 ml) beef broth",
          "1 tbsp Worcestershire sauce",
          "2 tbsp tomato paste",
          "1 cup frozen peas",
          "Mashed potato topping: 1 kg potatoes, 4 tbsp butter, ½ cup cream, salt and pepper"
        ],
        "prep": "Brown beef and drain. Cook vegetables until soft. Add garlic and tomato paste. Add broth and Worcestershire. Simmer 20 minutes. Add peas. Pour into a baking dish. Make mashed potatoes and spread over top. Rough up surface with a fork. Bake at 375°F 25–30 minutes until top is golden."
      },
      {
        "name": "Dolmades Stuffed Grape Leaves",
        "servings": "~30 pieces",
        "ingredients": [
          "30 preserved grape leaves, rinsed",
          "Filling: 300 g (10.5 oz) ground lamb or beef, 1 cup rice, 1 onion grated, ¼ cup fresh mint, ¼ cup fresh dill, juice of 1 lemon, salt and pepper",
          "2 cups (480 ml) chicken broth",
          "Olive oil",
          "Plain yogurt and lemon to serve"
        ],
        "prep": "Mix filling ingredients together. Place a teaspoon of filling at the stem end of each grape leaf. Fold sides in and roll up tightly. Line a heavy pot with any torn leaves. Arrange rolls seam side down. Add broth and olive oil. Place a plate on top to keep them submerged. Simmer covered over low heat 45–50 minutes until rice is cooked. Serve warm or at room temperature with yogurt and lemon."
      },
      {
        "name": "Empanadas",
        "servings": "12 empanadas",
        "ingredients": [
          "Dough: 2 cups flour, 6 tbsp butter, 1 egg, ¼ cup cold water, 1 tsp salt",
          "Filling: 300 g (10.5 oz) ground beef, 1 onion diced, 3 garlic cloves, 2 tsp cumin, 1 tsp paprika, ½ cup green olives, 2 hard boiled eggs chopped, salt and pepper",
          "1 egg for egg wash"
        ],
        "prep": "Make dough and refrigerate 30 minutes. Brown beef with onion and garlic. Add spices, olives, and hard boiled eggs. Cool. Roll dough thin and cut into circles. Fill each circle with a spoonful of filling. Fold over and crimp edges firmly with a fork. Brush with egg wash. Bake at 400°F 20–25 minutes until golden. Can also be deep fried."
      },
      {
        "name": "Gyoza Dumplings",
        "servings": "~30 dumplings",
        "ingredients": [
          "300 g (10.5 oz) ground pork",
          "2 cups napa cabbage, finely chopped and squeezed dry",
          "3 green onions, minced",
          "3 garlic cloves, minced",
          "1 tbsp fresh ginger",
          "2 tbsp soy sauce",
          "1 tbsp sesame oil",
          "30 gyoza wrappers",
          "Oil for frying",
          "Dipping sauce: soy sauce, rice vinegar, chili oil"
        ],
        "prep": "Mix all filling ingredients together. Place a teaspoon of filling on each wrapper. Fold and pleat to seal. Heat a thin layer of oil in a flat skillet over medium-high heat. Add gyoza flat side down. Cook until bottoms are golden — about 3 minutes. Add ¼ cup water, cover immediately, and steam 5 minutes. Uncover and cook until water evaporates and bottoms are crispy again. Serve with dipping sauce."
      },
      {
        "name": "Homemade Meatballs",
        "servings": "4 servings",
        "ingredients": [
          "500 g (1 lb) ground beef",
          "150 g (5 oz) ground pork",
          "½ cup breadcrumbs soaked in ¼ cup milk",
          "1 egg",
          "3 garlic cloves, minced",
          "¼ cup Parmesan, grated",
          "2 tbsp fresh parsley",
          "Salt and pepper",
          "Olive oil for browning"
        ],
        "prep": "Mix all ingredients gently until just combined — do not overwork or meatballs will be tough. Roll into golf ball sized balls with wet hands. Brown in olive oil in a skillet over medium-high heat on all sides. Do not crowd. Finish in marinara sauce simmering 15–20 minutes until cooked through. Alternatively bake at 400°F for 18–20 minutes."
      },
      {
        "name": "Kofta Curry",
        "servings": "4 servings",
        "ingredients": [
          "Kofta: 500 g (1 lb) ground lamb or beef, 1 onion grated, 3 garlic cloves, 1 tsp cumin, 1 tsp coriander, salt and pepper",
          "Curry sauce: 1 onion diced, 4 garlic cloves, 1 tbsp ginger, 1 can crushed tomatoes, 1 cup yogurt, 2 tsp garam masala, 1 tsp cumin, 1 tsp coriander, 1 tsp turmeric, 2 tbsp oil"
        ],
        "prep": "Mix kofta ingredients and shape into small ovals or balls. Brown in oil and remove. Make curry sauce by cooking onion golden, adding garlic, ginger, and spices. Add tomatoes and simmer 15 minutes. Blend until smooth. Return to pan. Stir in yogurt. Add kofta and simmer 15 minutes. Serve with basmati rice and naan."
      },
      {
        "name": "Meatball Soup",
        "servings": "6 servings",
        "ingredients": [
          "Meatballs: 400 g (14 oz) ground beef, ¼ cup breadcrumbs, 1 egg, 2 garlic cloves, 2 tbsp Parmesan, salt and pepper",
          "6 cups (1.4 L) chicken broth",
          "2 carrots, sliced",
          "2 celery stalks, sliced",
          "1 onion, diced",
          "3 garlic cloves",
          "1 cup small pasta or orzo",
          "2 cups spinach",
          "Salt and pepper"
        ],
        "prep": "Mix meatball ingredients and roll into small balls. Bring broth to a simmer. Add onion, carrots, celery, and garlic and cook 10 minutes. Drop meatballs directly into simmering broth. Cook 10 minutes. Add pasta and cook until tender. Stir in spinach and cook until wilted. Season with salt and pepper. Serve with crusty bread."
      },
      {
        "name": "Picadillo",
        "servings": "4 servings",
        "ingredients": [
          "500 g (1 lb) ground beef",
          "1 onion, diced",
          "4 garlic cloves, minced",
          "1 can (14 oz) diced tomatoes",
          "½ cup green olives, sliced",
          "¼ cup raisins",
          "2 tbsp capers",
          "1 tsp cumin",
          "½ tsp cinnamon",
          "1 bay leaf",
          "2 tbsp olive oil",
          "Salt and pepper",
          "Rice and fried plantains to serve"
        ],
        "prep": "Brown beef in olive oil. Add onion and garlic and cook until softened. Add cumin, cinnamon, and bay leaf. Add tomatoes and simmer 10 minutes. Add olives, raisins, and capers. Simmer 10 more minutes until thick and fragrant. Season with salt and pepper. Remove bay leaf. Serve over white rice with fried sweet plantains."
      },
      {
        "name": "Shepherd's Pie",
        "servings": "6 servings",
        "ingredients": [
          "700 g (1.5 lbs) ground lamb",
          "1 onion, diced",
          "2 carrots, diced",
          "2 celery stalks, diced",
          "3 garlic cloves",
          "1 cup (240 ml) beef broth",
          "1 tbsp Worcestershire sauce",
          "2 tbsp tomato paste",
          "1 cup frozen peas",
          "1 tsp rosemary and thyme",
          "Mashed potato topping"
        ],
        "prep": "Brown lamb with onion, carrots, and celery. Add garlic, tomato paste, broth, Worcestershire, rosemary, and thyme. Simmer 20 minutes until thick. Add peas. Pour into a baking dish. Top with creamy mashed potatoes. Rough up with a fork. Bake at 375°F 25–30 minutes until golden on top."
      },
      {
        "name": "Stuffed Bell Peppers",
        "servings": "4 servings",
        "ingredients": [
          "4 large bell peppers",
          "500 g (1 lb) ground beef",
          "1 cup cooked rice",
          "1 onion, diced",
          "3 garlic cloves, minced",
          "1 can (14 oz) diced tomatoes",
          "1 cup shredded mozzarella",
          "1 tsp Italian seasoning",
          "Salt and pepper",
          "Olive oil"
        ],
        "prep": "Preheat oven to 375°F (190°C). Cut tops off peppers and remove seeds. Brown beef with onion and garlic. Add tomatoes, rice, Italian seasoning, salt, and pepper. Fill peppers with meat mixture. Place in a baking dish with ¼ cup water. Cover and bake 30 minutes. Uncover, top with mozzarella, and bake 15 more minutes."
      },
      {
        "name": "Swedish Meatballs",
        "servings": "4 servings",
        "ingredients": [
          "500 g (1 lb) ground beef and pork mixed",
          "½ cup breadcrumbs soaked in ¼ cup milk",
          "1 egg",
          "1 small onion, grated",
          "¼ tsp allspice",
          "¼ tsp nutmeg",
          "Salt and pepper",
          "Gravy: 3 tbsp butter, 3 tbsp flour, 2 cups beef broth, ½ cup sour cream",
          "Lingonberry jam and egg noodles to serve"
        ],
        "prep": "Mix meats with soaked breadcrumbs, egg, onion, allspice, nutmeg, salt and pepper. Roll into small balls about 1 inch. Brown in butter in batches. Remove. Make gravy in same pan — melt butter, whisk in flour, add broth gradually until smooth and thick. Stir in sour cream. Return meatballs. Simmer 10 minutes. Serve over egg noodles with lingonberry jam."
      }
    ]
  },
  {
    "id": "pork",
    "icon": "🥓",
    "name": "Pork",
    "desc": "Pork chops, ribs, pulled pork, roasts, tenderloin, bacon dishes, and global pork recipes.",
    "recipes": [
      {
        "name": "Braised Pork Belly Bao",
        "servings": "6 servings",
        "ingredients": [
          "500 g (1 lb) pork belly, cut into thick slices",
          "Braising liquid: 4 tbsp soy sauce, 2 tbsp dark soy sauce, 3 tbsp sugar, ½ cup Shaoxing wine, 2 cups water, star anise, cinnamon",
          "12 steamed bao buns",
          "Pickled cucumber, hoisin sauce, and green onions"
        ],
        "prep": "Blanch pork belly 5 minutes. Drain. Brown in a pan on all sides. Add all braising liquid ingredients. Braise covered over low heat 1.5–2 hours until pork is very tender and sauce has thickened to a glaze. Cool and slice. Reheat in braising liquid. Steam bao buns. Fill each bun with a slice of pork belly, pickled cucumber, hoisin sauce, and green onions."
      },
      {
        "name": "Carnitas",
        "servings": "6 servings",
        "ingredients": [
          "1.5 kg (3 lbs) pork shoulder, cut into large chunks",
          "1 onion, quartered",
          "4 garlic cloves",
          "Juice of 2 oranges",
          "Juice of 2 limes",
          "1 tsp cumin",
          "1 tsp oregano",
          "1 tsp chili powder",
          "Salt and pepper",
          "Tortillas, salsa, and toppings to serve"
        ],
        "prep": "Combine all ingredients in a large pot or Dutch oven. Add enough water to barely cover. Bring to a boil then reduce heat and simmer uncovered 2 hours until liquid mostly evaporates and pork is very tender. Increase heat and let pork fry in remaining fat, turning occasionally until caramelized and crispy on the outside. Shred and serve in warm tortillas with salsa, cilantro, and lime."
      },
      {
        "name": "Char Siu BBQ Pork",
        "servings": "4 servings",
        "ingredients": [
          "700 g (1.5 lbs) pork shoulder or loin, sliced into strips",
          "Marinade: 3 tbsp hoisin sauce, 3 tbsp soy sauce, 2 tbsp honey, 2 tbsp Shaoxing wine, 1 tsp five spice powder, 3 garlic cloves, red food coloring (optional)"
        ],
        "prep": "Mix all marinade ingredients. Coat pork strips thoroughly. Marinate at least 4 hours or overnight. Preheat oven to 425°F. Place pork on a rack over a foil-lined baking tray. Roast 25 minutes. Flip, brush with reserved marinade, and roast 15 more minutes. Brush with honey and broil 3–5 minutes until caramelized and slightly charred at the edges. Slice and serve over rice or in steamed buns."
      },
      {
        "name": "Italian Sausage and Peppers",
        "servings": "4 servings",
        "ingredients": [
          "600 g (1.3 lbs) Italian sausages, sweet or hot",
          "3 bell peppers, sliced — red, yellow, green",
          "2 onions, sliced",
          "4 garlic cloves, minced",
          "1 can (14 oz) diced tomatoes",
          "½ cup (120 ml) dry white wine",
          "2 tbsp olive oil",
          "Fresh basil",
          "Salt and pepper",
          "Hoagie rolls or pasta to serve"
        ],
        "prep": "Brown sausages in olive oil over medium-high heat on all sides. Remove and slice into pieces. Cook peppers and onions in the same pan until softened and slightly caramelized. Add garlic and cook 1 minute. Add wine and cook 2 minutes. Add diced tomatoes and sausage. Simmer 15 minutes until sauce thickens. Add fresh basil. Serve on hoagie rolls or over pasta."
      },
      {
        "name": "Pork Belly",
        "servings": "4 servings",
        "ingredients": [
          "1 kg (2 lbs) pork belly, skin on",
          "1 tbsp salt",
          "1 tsp baking powder",
          "Glaze: 3 tbsp soy sauce, 2 tbsp honey, 1 tbsp hoisin, 2 garlic cloves",
          "Star anise and five spice for braising"
        ],
        "prep": "Score pork skin deeply. Mix salt and baking powder and rub into skin. Refrigerate uncovered overnight. Braise pork belly skin side down in broth with star anise and five spice at 325°F for 2 hours. Remove and cool completely. Brush flesh side with glaze. Roast at 425°F for 20 minutes skin side up. Switch to broil for 5–10 minutes until skin blisters and crackles. Rest 10 minutes and slice."
      },
      {
        "name": "Pork Chops with Apple",
        "servings": "4 servings",
        "ingredients": [
          "4 thick-cut bone-in pork chops",
          "2 apples, cored and sliced",
          "1 onion, sliced",
          "3 garlic cloves, minced",
          "½ cup (120 ml) apple cider",
          "½ cup (120 ml) chicken broth",
          "2 tbsp butter",
          "1 tbsp fresh thyme",
          "Salt and pepper"
        ],
        "prep": "Season pork chops with salt and pepper. Sear in butter in a large oven-safe skillet over high heat 3 minutes per side until golden. Remove. Cook apples and onions in the same pan until softened. Add garlic and thyme. Add cider and broth. Return chops to pan. Transfer to 375°F oven and cook 12–15 minutes until internal temperature reaches 145°F. Rest 5 minutes. Serve with apple onion mixture and pan juices."
      },
      {
        "name": "Pork Gyoza",
        "servings": "~30 dumplings",
        "ingredients": [
          "300 g (10.5 oz) ground pork",
          "2 cups napa cabbage, finely chopped and salted",
          "3 green onions, minced",
          "3 garlic cloves, minced",
          "1 tbsp fresh ginger, grated",
          "2 tbsp soy sauce",
          "1 tbsp sesame oil",
          "1 tsp sugar",
          "30 gyoza wrappers",
          "Dipping sauce: soy sauce, rice vinegar, chili oil"
        ],
        "prep": "Salt cabbage and let sit 10 minutes. Squeeze out all water. Mix with pork, green onions, garlic, ginger, soy sauce, sesame oil, and sugar. Place a teaspoon of filling on each wrapper. Fold and pleat edges to seal. Heat oil in a flat skillet. Add gyoza flat side down. Cook until golden — about 3 minutes. Add ¼ cup water, cover immediately, and steam 5 minutes. Uncover and cook until water evaporates. Serve with dipping sauce."
      },
      {
        "name": "Pork Loin Roast",
        "servings": "6 servings",
        "ingredients": [
          "1.5 kg (3 lbs) center-cut pork loin roast",
          "4 garlic cloves, sliced",
          "2 tbsp Dijon mustard",
          "2 tbsp olive oil",
          "1 tsp dried rosemary",
          "1 tsp dried thyme",
          "1 tsp sage",
          "Salt and black pepper",
          "1 cup (240 ml) white wine for roasting pan"
        ],
        "prep": "Preheat oven to 375°F (190°C). Make small incisions all over pork and insert garlic slices. Mix mustard, olive oil, and herbs. Coat pork all over. Season generously with salt and pepper. Place on a rack in a roasting pan. Pour wine into pan. Roast 60–70 minutes until internal temperature reaches 145°F. Baste occasionally. Rest 15 minutes before slicing. Use pan drippings to make a simple pan sauce."
      },
      {
        "name": "Pork Ribs",
        "servings": "4 servings",
        "ingredients": [
          "2 racks baby back ribs",
          "Dry Rub: 2 tbsp brown sugar, 1 tbsp smoked paprika, 1 tsp garlic powder, 1 tsp onion powder, 1 tsp cumin, salt and pepper",
          "1 cup BBQ sauce",
          "¼ cup apple cider vinegar"
        ],
        "prep": "Remove membrane from back of ribs. Apply dry rub generously on all sides. Wrap tightly in foil. Bake at 275°F for 2.5–3 hours until tender. Carefully unwrap. Mix BBQ sauce with vinegar. Brush ribs with sauce. Grill or broil 5–10 minutes per side until caramelized and sticky. Apply more sauce and cook another 5 minutes. Rest 5 minutes before cutting between bones."
      },
      {
        "name": "Pork Schnitzel",
        "servings": "4 servings",
        "ingredients": [
          "4 pork loin cutlets, pounded very thin",
          "1 cup breadcrumbs",
          "½ cup flour",
          "2 eggs, beaten",
          "Salt, pepper, and paprika",
          "4 tbsp butter and 2 tbsp oil for frying",
          "Lemon wedges and parsley to serve"
        ],
        "prep": "Pound cutlets very thin. Season flour with salt, pepper, and paprika. Dredge cutlets in seasoned flour, dip in egg, coat in breadcrumbs. Heat butter and oil in a large skillet over medium-high heat. Fry schnitzels 2–3 minutes per side until golden. Do not press down — allow them to float in the fat for crispier results. Drain on paper towels. Serve immediately with lemon wedges and fresh parsley."
      },
      {
        "name": "Pork Tenderloin",
        "servings": "4 servings",
        "ingredients": [
          "2 pork tenderloins, about 500 g (1 lb) each",
          "3 garlic cloves, minced",
          "2 tbsp Dijon mustard",
          "2 tbsp olive oil",
          "1 tsp dried thyme",
          "1 tsp dried rosemary",
          "Salt and black pepper",
          "Pan sauce: ½ cup white wine, ½ cup chicken broth, 2 tbsp butter"
        ],
        "prep": "Preheat oven to 425°F (220°C). Pat pork dry. Mix garlic, mustard, olive oil, thyme, rosemary, salt and pepper. Coat pork all over. Heat an oven-safe skillet over high heat. Sear tenderloins on all sides until browned — about 2 minutes per side. Transfer to oven and roast 15–18 minutes until internal temperature reaches 145°F. Rest 5 minutes. Make pan sauce with wine and broth. Slice and serve with sauce."
      },
      {
        "name": "Pork Vindaloo",
        "servings": "4 servings",
        "ingredients": [
          "700 g (1.5 lbs) pork shoulder, cubed",
          "Paste: 6 dried red chilies soaked, 1 tbsp cumin, 1 tsp turmeric, 1 tsp mustard seeds, 5 garlic cloves, 1-inch ginger, ¼ cup white wine vinegar",
          "1 onion, finely diced",
          "2 tbsp oil",
          "Salt and sugar to taste"
        ],
        "prep": "Blend paste ingredients until smooth. Marinate pork in paste at least 2 hours. Heat oil in a heavy pot. Cook onion until dark golden. Add marinated pork and stir fry 5 minutes. Add a splash of water. Cover and cook over medium-low heat 45–60 minutes until pork is very tender and oil has separated. Season with salt and a pinch of sugar to balance. Serve with basmati rice."
      },
      {
        "name": "Pulled Pork",
        "servings": "8 servings",
        "ingredients": [
          "2 kg (4.5 lbs) pork shoulder or butt",
          "Dry Rub: 2 tbsp brown sugar, 1 tbsp smoked paprika, 1 tbsp garlic powder, 1 tbsp onion powder, 1 tsp cumin, 1 tsp cayenne, 1 tbsp salt, 1 tsp black pepper",
          "1 cup (240 ml) apple cider vinegar",
          "1 cup (240 ml) chicken broth",
          "BBQ sauce to serve",
          "Brioche buns"
        ],
        "prep": "Mix dry rub and coat pork all over. Refrigerate overnight if possible. Preheat oven to 300°F (150°C). Place pork fat side up in a roasting pan. Add vinegar and broth to the bottom. Cover tightly with foil. Roast 6–7 hours until meat shreds easily with a fork and internal temperature reaches 205°F. Rest 30 minutes. Shred with two forks removing any fat. Toss with BBQ sauce. Serve on brioche buns with coleslaw."
      },
      {
        "name": "Slow Cooker Pork Shoulder",
        "servings": "6 servings",
        "ingredients": [
          "1.5 kg (3 lbs) pork shoulder",
          "1 onion, sliced",
          "4 garlic cloves",
          "1 cup (240 ml) chicken broth",
          "½ cup (120 ml) apple cider vinegar",
          "2 tbsp brown sugar",
          "1 tbsp smoked paprika",
          "1 tsp cumin",
          "1 tsp chili powder",
          "Salt and pepper"
        ],
        "prep": "Mix spices and coat pork all over. Sear in oil on all sides in a skillet until browned. Place onions at the bottom of a slow cooker. Set pork on top. Mix broth, vinegar, and brown sugar and pour around pork. Cook on low 8–10 hours or high 5–6 hours until falling apart. Shred with forks. Serve over rice or in sandwiches."
      },
      {
        "name": "Tonkatsu",
        "servings": "4 servings",
        "ingredients": [
          "4 pork loin cutlets, about 1.5 cm thick",
          "1 cup panko breadcrumbs",
          "½ cup flour",
          "2 eggs, beaten",
          "Salt and pepper",
          "Oil for frying",
          "Tonkatsu sauce, shredded cabbage, and steamed rice to serve"
        ],
        "prep": "Pound pork cutlets to even thickness. Score edges to prevent curling. Season with salt and pepper. Dredge in flour, dip in egg, coat in panko pressing firmly. Shallow fry in 1 cm of oil at 340°F about 3–4 minutes per side until deep golden and cooked through. Drain on a rack. Slice into strips. Serve over shredded cabbage with tonkatsu sauce and steamed rice."
      }
    ]
  },
  {
    "id": "seafood",
    "icon": "🦞",
    "name": "Seafood",
    "desc": "Shrimp, salmon, scallops, lobster, crab, clams, mussels, and classic seafood dishes.",
    "recipes": [
      {
        "name": "Breaded Fried Shrimp",
        "servings": "4 servings",
        "ingredients": [
          "1 lb large shrimp, peeled and deveined (tails optional)",
          "1 cup all-purpose flour",
          "1 tsp garlic powder",
          "1 tsp paprika",
          "salt and pepper",
          "2 eggs, beaten",
          "1 cup breadcrumbs (panko for extra crunch)",
          "½ tsp cayenne pepper (optional)",
          "vegetable oil for frying",
          "lemon wedges for serving"
        ],
        "prep": "Pat shrimp dry. Set up three bowls: (1) flour mixed with garlic powder, paprika, salt, and pepper, (2) beaten eggs, (3) breadcrumbs with cayenne if using. Dredge shrimp in flour, dip in egg, then coat in breadcrumbs. Heat oil to 350°F. Fry shrimp in batches 2–3 minutes until golden brown and cooked through. Remove to paper towels, season lightly with salt, and serve with lemon wedges."
      },
      {
        "name": "Baked Stuffed Shrimp",
        "servings": "4 servings",
        "ingredients": [
          "16 jumbo shrimp, peeled and deveined, butterflied",
          "Stuffing: 1 cup breadcrumbs, 100 g (3.5 oz) crab meat, 4 tbsp butter melted, 2 garlic cloves, 2 tbsp parsley, juice of ½ lemon, salt and pepper",
          "Lemon wedges to serve"
        ],
        "prep": "Preheat oven to 400°F (200°C). Mix stuffing ingredients together. Butterfly shrimp by cutting along the back and opening flat. Press a spoonful of stuffing onto each shrimp. Place on a greased baking sheet. Bake 12–15 minutes until shrimp are pink and stuffing is golden. Serve with lemon wedges."
      },
      {
        "name": "Boiled Lobster",
        "servings": "2 servings",
        "ingredients": [
          "2 live lobsters, about 700 g (1.5 lbs) each",
          "Salted water for boiling",
          "Clarified butter with garlic and lemon for serving",
          "Lemon wedges and parsley"
        ],
        "prep": "Bring a very large pot of heavily salted water to a rolling boil. Submerge lobsters headfirst. Cover and boil 12–14 minutes until shells are bright red and tails are fully curled. Remove and let rest 3 minutes. Crack claws and split tails with kitchen shears. Serve with warm clarified butter mixed with garlic and fresh parsley. Garnish with lemon wedges."
      },
      {
        "name": "Cioppino",
        "servings": "6 servings",
        "ingredients": [
          "500 g (1 lb) large shrimp, peeled",
          "500 g (1 lb) clams, scrubbed",
          "500 g (1 lb) mussels, scrubbed",
          "300 g (10.5 oz) white fish, cubed",
          "200 g (7 oz) crab legs",
          "1 onion, diced",
          "4 garlic cloves",
          "1 can (28 oz) crushed tomatoes",
          "1 cup (240 ml) dry white wine",
          "2 cups (480 ml) fish broth",
          "2 tbsp olive oil",
          "Fresh parsley and basil",
          "Red pepper flakes, salt and pepper"
        ],
        "prep": "Heat olive oil in a large pot. Cook onion until soft. Add garlic and red pepper flakes and cook 1 minute. Add wine and cook 2 minutes. Add tomatoes and broth. Simmer 15 minutes. Add fish and crab and cook 3 minutes. Add clams and mussels and cook covered until they open — about 5 minutes. Add shrimp and cook 2 more minutes. Discard any unopened shellfish. Season and garnish with parsley. Serve with crusty bread."
      },
      {
        "name": "Crab Cakes",
        "servings": "4 servings",
        "ingredients": [
          "450 g (1 lb) fresh lump crab meat",
          "⅓ cup mayonnaise",
          "1 egg",
          "1 tbsp Dijon mustard",
          "1 tbsp Worcestershire sauce",
          "1 tsp Old Bay seasoning",
          "½ cup breadcrumbs",
          "2 green onions, finely sliced",
          "Fresh parsley",
          "Salt and pepper",
          "Remoulade sauce to serve"
        ],
        "prep": "Gently mix crab meat with mayonnaise, egg, mustard, Worcestershire, Old Bay, breadcrumbs, green onions, and parsley. Season with salt and pepper. Be careful not to break up the crab too much. Form into patties. Refrigerate 30 minutes. Pan fry in butter and oil over medium heat 3–4 minutes per side until deeply golden. Drain on paper towels. Serve with remoulade sauce and lemon."
      },
      {
        "name": "Fish Tacos",
        "servings": "4 servings",
        "ingredients": [
          "600 g (1.3 lbs) white fish — cod, tilapia, or mahi mahi",
          "1 tsp cumin",
          "1 tsp chili powder",
          "½ tsp garlic powder",
          "Salt and pepper",
          "2 tbsp olive oil",
          "8 corn tortillas",
          "Toppings: shredded cabbage, pico de gallo, lime crema, avocado, cilantro, lime"
        ],
        "prep": "Season fish with cumin, chili powder, garlic powder, salt, and pepper. Heat olive oil in a skillet over medium-high heat. Cook fish 3–4 minutes per side until flaky and cooked through. Break into chunks. Warm tortillas. Fill with fish, shredded cabbage, pico de gallo, avocado, and lime crema. Garnish with cilantro and lime."
      },
      {
        "name": "Garlic Butter Shrimp",
        "servings": "4 servings",
        "ingredients": [
          "500 g (1 lb) large shrimp, peeled and deveined",
          "6 garlic cloves, minced",
          "4 tbsp unsalted butter",
          "2 tbsp olive oil",
          "Juice of 1 lemon",
          "¼ cup fresh parsley, chopped",
          "Red pepper flakes",
          "Salt and pepper"
        ],
        "prep": "Pat shrimp dry. Season with salt, pepper, and red pepper flakes. Heat olive oil and 2 tbsp butter in a large skillet over medium-high heat. Add shrimp in a single layer. Cook 1–2 minutes until pink on the bottom. Flip. Add garlic and remaining butter. Cook 1 more minute until shrimp are opaque and curled. Add lemon juice and parsley. Toss to coat. Serve immediately over rice or pasta."
      },
      {
        "name": "Grilled Salmon with Mango Salsa",
        "servings": "4 servings",
        "ingredients": [
          "4 salmon fillets",
          "2 tbsp olive oil",
          "1 tsp cumin",
          "1 tsp chili powder",
          "Salt and pepper",
          "Mango salsa: 1 mango diced, ½ red onion diced, 1 jalapeño, juice of 1 lime, cilantro, salt"
        ],
        "prep": "Mix all mango salsa ingredients and refrigerate 30 minutes. Brush salmon with olive oil and season with cumin, chili powder, salt, and pepper. Grill over high heat 3–4 minutes per side until cooked through with nice grill marks. Do not move until it releases naturally. Top with mango salsa and serve."
      },
      {
        "name": "Mussels Mariniere",
        "servings": "4 servings",
        "ingredients": [
          "1.5 kg (3 lbs) fresh mussels, scrubbed and debearded",
          "4 shallots, finely diced",
          "4 garlic cloves, minced",
          "1 cup (240 ml) dry white wine",
          "4 tbsp unsalted butter",
          "Fresh flat-leaf parsley",
          "Salt and black pepper",
          "Crusty bread to serve"
        ],
        "prep": "Discard any mussels that are open and do not close when tapped. Melt butter in a large pot over medium heat. Cook shallots until soft. Add garlic and cook 1 minute. Add wine and bring to a boil. Add mussels. Cover tightly and cook over high heat 3–5 minutes shaking pot occasionally until all mussels open. Discard any that remain closed. Add parsley. Season with salt and pepper. Serve immediately in deep bowls with crusty bread."
      },
      {
        "name": "Pan Seared Halibut",
        "servings": "4 servings",
        "ingredients": [
          "4 halibut fillets",
          "4 tbsp butter",
          "3 garlic cloves, minced",
          "Fresh thyme",
          "Juice of 1 lemon",
          "2 tbsp olive oil",
          "Salt and white pepper",
          "Capers and cherry tomatoes for garnish"
        ],
        "prep": "Pat halibut completely dry. Season generously with salt and white pepper. Heat olive oil in a heavy skillet over medium-high heat. Add halibut and cook without moving 4 minutes until a golden crust forms. Flip gently. Add butter, garlic, and thyme. Baste continuously for 2 minutes. Fish should be opaque and flake easily. Add lemon juice. Garnish with capers and burst cherry tomatoes."
      },
      {
        "name": "Pan Seared Salmon",
        "servings": "4 servings",
        "ingredients": [
          "4 salmon fillets, skin on",
          "3 tbsp butter",
          "4 garlic cloves, minced",
          "Fresh dill or thyme",
          "Juice of 1 lemon",
          "Salt and black pepper",
          "2 tbsp olive oil"
        ],
        "prep": "Pat salmon completely dry. Score skin lightly. Season generously with salt and pepper. Heat olive oil in a skillet over medium-high heat until shimmering. Place salmon skin side down and press gently with a spatula for 30 seconds. Cook without moving 4–5 minutes until skin is deeply crispy and fish is cooked two-thirds up the sides. Flip. Add butter and garlic. Baste for 1 minute. Remove and squeeze lemon over top. Rest 2 minutes."
      },
      {
        "name": "Seared Scallops",
        "servings": "4 servings",
        "ingredients": [
          "500 g (1 lb) large dry scallops",
          "4 tbsp unsalted butter",
          "2 tbsp olive oil",
          "4 garlic cloves, minced",
          "Juice of 1 lemon",
          "Fresh thyme",
          "Salt and white pepper",
          "Cauliflower puree or pea puree to serve"
        ],
        "prep": "Pat scallops completely dry with paper towels. Remove the side muscle. Season generously with salt and white pepper. Heat olive oil in a heavy skillet over very high heat until almost smoking. Add scallops in a single layer — do not crowd. Cook without moving 1.5–2 minutes until a deep golden crust forms. Flip. Add butter, garlic, and thyme. Baste for 1 minute. Scallops should be slightly translucent in the center. Serve immediately with lemon."
      },
      {
        "name": "Shrimp and Grits",
        "servings": "4 servings",
        "ingredients": [
          "500 g (1 lb) large shrimp, peeled",
          "4 strips bacon, diced",
          "1 cup stone-ground grits",
          "3 cups (720 ml) water or broth",
          "1 cup (240 ml) milk",
          "2 tbsp butter",
          "1 cup shredded cheddar",
          "3 garlic cloves, minced",
          "1 cup sliced mushrooms",
          "Juice of ½ lemon",
          "Green onions and hot sauce to serve"
        ],
        "prep": "Make grits: bring liquid to a boil, whisk in grits, cook stirring frequently 20–25 minutes until thick. Stir in butter and cheddar. Season. Cook bacon until crispy. Remove. Cook mushrooms in bacon fat. Add garlic and shrimp. Cook 2–3 minutes until shrimp are pink. Add lemon juice. Serve shrimp mixture over cheesy grits. Top with bacon and green onions."
      },
      {
        "name": "Shrimp Tacos",
        "servings": "4 servings",
        "ingredients": [
          "500 g (1 lb) large shrimp, peeled",
          "2 tsp chili powder",
          "1 tsp cumin",
          "1 tsp garlic powder",
          "½ tsp smoked paprika",
          "Salt and pepper",
          "2 tbsp olive oil",
          "8 corn tortillas",
          "Toppings: shredded cabbage, mango salsa, avocado, lime crema, cilantro"
        ],
        "prep": "Season shrimp with all spices, salt, and pepper. Heat olive oil in a skillet over high heat. Cook shrimp 1–2 minutes per side until pink and slightly charred. Make lime crema by mixing sour cream, lime juice, and salt. Warm tortillas. Fill with shrimp, shredded cabbage, mango salsa, avocado, and lime crema. Garnish with cilantro and lime wedges."
      }
    ]
  },
  {
    "id": "turkey",
    "icon": "🦃",
    "name": "Turkey",
    "desc": "Whole roasted turkey, turkey breast, turkey burgers, ground turkey dishes, and holiday classics.",
    "recipes": [
      {
        "name": "Ground Turkey Tacos",
        "servings": "4 servings",
        "ingredients": [
          "500 g (1 lb) ground turkey",
          "1 onion, diced",
          "3 garlic cloves, minced",
          "2 tsp cumin",
          "1 tsp chili powder",
          "1 tsp smoked paprika",
          "½ tsp oregano",
          "1 can (14 oz) diced tomatoes",
          "Salt and pepper",
          "8 taco shells or tortillas",
          "Toppings: cheese, sour cream, salsa, lettuce, avocado"
        ],
        "prep": "Brown turkey in a skillet. Add onion and garlic and cook until softened. Add all spices and cook 1 minute. Add tomatoes and simmer 10 minutes. Season with salt and pepper. Serve in taco shells with desired toppings."
      },
      {
        "name": "Roast Turkey",
        "servings": "10 servings",
        "ingredients": [
          "1 whole turkey, about 5.5 kg (12 lbs)",
          "½ cup (115 g) unsalted butter, softened",
          "4 garlic cloves, minced",
          "1 tbsp fresh thyme",
          "1 tbsp fresh rosemary",
          "1 tbsp fresh sage",
          "1 onion, quartered",
          "1 lemon, quartered",
          "4 cups (960 ml) turkey or chicken broth",
          "Salt and black pepper"
        ],
        "prep": "The night before, rub turkey all over with salt and refrigerate uncovered. Preheat oven to 425°F (220°C). Mix butter with garlic and fresh herbs. Loosen skin and rub butter under skin over breast and thighs. Rub outside with remaining butter. Season with pepper. Stuff cavity with onion and lemon. Place on a rack in a large roasting pan. Pour 2 cups broth into pan. Roast at high heat 30 minutes. Reduce to 325°F. Roast about 2.5–3 hours total, basting every 30 minutes and adding broth as needed. Internal temperature should reach 165°F at the thigh. Rest 30 minutes before carving."
      },
      {
        "name": "Turkey Breast Roast",
        "servings": "6 servings",
        "ingredients": [
          "1.5 kg (3 lbs) boneless turkey breast",
          "4 tbsp butter, softened",
          "4 garlic cloves, minced",
          "1 tsp dried sage",
          "1 tsp dried thyme",
          "1 tsp dried rosemary",
          "Salt and black pepper",
          "1 cup (240 ml) chicken broth"
        ],
        "prep": "Preheat oven to 375°F (190°C). Mix butter with garlic and herbs. Loosen skin and rub butter under skin and all over outside. Season generously with salt and pepper. Place on a rack in a roasting pan with broth below. Roast 60–80 minutes basting every 20 minutes until internal temperature reaches 165°F. Rest 15 minutes before slicing."
      },
      {
        "name": "Turkey Burgers",
        "servings": "4 servings",
        "ingredients": [
          "500 g (1 lb) ground turkey",
          "¼ cup breadcrumbs",
          "1 egg",
          "2 garlic cloves, minced",
          "1 tbsp Worcestershire sauce",
          "1 tsp onion powder",
          "Salt and pepper",
          "Burger buns and toppings"
        ],
        "prep": "Mix all ingredients gently — do not overwork. Shape into 4 patties. Make a small indent in the center of each to prevent puffing. Season outside with salt and pepper. Grill or cook in a skillet over medium heat 5–6 minutes per side until cooked through to 165°F. Do not press down. Rest 3 minutes. Serve on buns with desired toppings."
      },
      {
        "name": "Turkey Kebabs",
        "servings": "4 servings",
        "ingredients": [
          "600 g (1.3 lbs) turkey breast, cubed",
          "Marinade: 3 tbsp olive oil, juice of 1 lemon, 3 garlic cloves, 1 tsp cumin, 1 tsp paprika, ½ tsp oregano, salt and pepper",
          "Bell peppers and onion, cubed for skewers",
          "Tzatziki to serve"
        ],
        "prep": "Mix marinade and coat turkey. Marinate 1 hour. Thread turkey, peppers, and onion alternately onto skewers. Grill over medium-high heat turning occasionally until turkey is cooked through and vegetables are slightly charred — about 12–15 minutes. Serve with tzatziki and pita or rice."
      },
      {
        "name": "Turkey Lettuce Wraps",
        "servings": "4 servings",
        "ingredients": [
          "500 g (1 lb) ground turkey",
          "1 onion, finely diced",
          "3 garlic cloves, minced",
          "1 tbsp fresh ginger",
          "1 can (8 oz) water chestnuts, drained and chopped",
          "3 tbsp soy sauce",
          "1 tbsp hoisin sauce",
          "1 tbsp sesame oil",
          "1 tsp rice vinegar",
          "Butter lettuce leaves",
          "Green onions and sesame seeds to garnish"
        ],
        "prep": "Cook turkey in a skillet over medium-high heat until browned. Add onion, garlic, and ginger and cook 3 minutes. Add water chestnuts. Mix soy sauce, hoisin, sesame oil, and vinegar and pour over. Cook 2 minutes. Serve in crisp butter lettuce cups topped with green onions and sesame seeds."
      },
      {
        "name": "Turkey Meatballs",
        "servings": "4 servings",
        "ingredients": [
          "500 g (1 lb) ground turkey",
          "½ cup breadcrumbs",
          "¼ cup milk",
          "1 egg",
          "3 garlic cloves, minced",
          "¼ cup Parmesan, grated",
          "2 tbsp fresh parsley",
          "1 tsp Italian seasoning",
          "Salt and pepper",
          "2 cups marinara sauce"
        ],
        "prep": "Soak breadcrumbs in milk 5 minutes. Combine turkey, breadcrumbs, egg, garlic, Parmesan, parsley, Italian seasoning, salt and pepper. Mix gently. Roll into golf ball sized balls. Bake on a greased baking sheet at 400°F for 18–20 minutes or pan fry in olive oil until golden on all sides. Simmer in marinara sauce 10 minutes. Serve over pasta or as a sub."
      },
      {
        "name": "Turkey Meatloaf",
        "servings": "6 servings",
        "ingredients": [
          "700 g (1.5 lbs) ground turkey",
          "½ cup breadcrumbs",
          "½ cup milk",
          "2 eggs",
          "1 onion, finely diced",
          "3 garlic cloves, minced",
          "2 tbsp Worcestershire sauce",
          "1 tsp dried thyme",
          "Salt and pepper",
          "Glaze: ½ cup ketchup, 2 tbsp brown sugar, 1 tbsp Dijon"
        ],
        "prep": "Preheat oven to 375°F (190°C). Soak breadcrumbs in milk. Mix turkey with all ingredients gently. Form into a loaf in a baking dish. Mix glaze and spread over top. Bake 55–60 minutes until internal temperature reaches 165°F. Rest 10 minutes before slicing."
      },
      {
        "name": "Turkey Piccata",
        "servings": "4 servings",
        "ingredients": [
          "4 turkey breast cutlets, pounded thin",
          "½ cup flour",
          "4 tbsp butter",
          "2 tbsp olive oil",
          "4 garlic cloves, minced",
          "½ cup (120 ml) dry white wine",
          "½ cup (120 ml) chicken broth",
          "Juice of 2 lemons",
          "3 tbsp capers, rinsed",
          "Fresh parsley",
          "Salt and pepper"
        ],
        "prep": "Season turkey with salt and pepper. Dredge in flour. Heat olive oil and 2 tbsp butter in a skillet over medium-high heat. Cook turkey 3 minutes per side until golden. Remove. Add garlic and cook 30 seconds. Add wine and reduce by half. Add broth and lemon juice and simmer 3 minutes. Stir in capers and remaining butter. Return turkey and heat through. Garnish with parsley."
      },
      {
        "name": "Turkey Pot Pie",
        "servings": "6 servings",
        "ingredients": [
          "3 cups cooked turkey, shredded",
          "1 cup frozen peas",
          "1 cup carrots, diced and cooked",
          "1 cup celery, diced and cooked",
          "1 onion, diced",
          "4 tbsp butter",
          "¼ cup flour",
          "2 cups (480 ml) chicken broth",
          "1 cup (240 ml) heavy cream",
          "Salt, pepper, and thyme",
          "2 sheets pie crust or puff pastry"
        ],
        "prep": "Preheat oven to 400°F (200°C). Melt butter and cook onion until soft. Whisk in flour and cook 1 minute. Gradually add broth and cream. Stir until thickened. Add turkey, peas, carrots, celery, thyme, salt, and pepper. Line a pie dish with one crust. Fill with turkey mixture. Top with second crust, seal edges, and cut slits. Brush with egg wash. Bake 35–40 minutes until golden."
      },
      {
        "name": "Turkey Soup",
        "servings": "6 servings",
        "ingredients": [
          "3 cups cooked turkey, shredded",
          "8 cups (1.9 L) turkey or chicken broth",
          "3 carrots, sliced",
          "3 celery stalks, sliced",
          "1 onion, diced",
          "3 garlic cloves, minced",
          "2 cups egg noodles",
          "Fresh thyme and bay leaf",
          "2 tbsp olive oil",
          "Salt and pepper",
          "Fresh parsley"
        ],
        "prep": "Heat olive oil in a large pot. Cook onion, carrots, and celery until softened. Add garlic and cook 1 minute. Add broth, thyme, and bay leaf. Bring to a boil. Add noodles and cook until tender. Add shredded turkey and heat through. Season with salt and pepper. Remove bay leaf and garnish with fresh parsley."
      },
      {
        "name": "Turkey Stir Fry",
        "servings": "4 servings",
        "ingredients": [
          "500 g (1 lb) turkey breast, thinly sliced",
          "2 cups broccoli florets",
          "1 red bell pepper, sliced",
          "2 carrots, julienned",
          "3 garlic cloves, minced",
          "1 tbsp fresh ginger",
          "Sauce: 3 tbsp soy sauce, 1 tbsp oyster sauce, 1 tbsp sesame oil, 1 tsp cornstarch, 1 tsp sugar",
          "2 tbsp vegetable oil"
        ],
        "prep": "Mix sauce ingredients. Heat oil in a wok over very high heat. Cook turkey quickly in batches until cooked through. Remove. Add vegetables and stir fry 3–4 minutes until tender-crisp. Add garlic and ginger and cook 30 seconds. Return turkey. Pour sauce over and toss until thickened and glossy. Serve over steamed rice."
      },
      {
        "name": "Turkey Stuffed Peppers",
        "servings": "4 servings",
        "ingredients": [
          "4 large bell peppers, tops cut off and seeded",
          "500 g (1 lb) ground turkey",
          "1 cup cooked rice",
          "1 can (14 oz) diced tomatoes",
          "1 onion, diced",
          "3 garlic cloves, minced",
          "1 tsp Italian seasoning",
          "1 cup shredded mozzarella",
          "Salt and pepper",
          "Olive oil"
        ],
        "prep": "Preheat oven to 375°F (190°C). Cook turkey with onion and garlic. Add tomatoes, cooked rice, and Italian seasoning. Season with salt and pepper. Fill peppers with turkey mixture. Place in a baking dish with ¼ cup water in the bottom. Cover with foil and bake 30 minutes. Uncover, top with mozzarella, and bake 15 more minutes until cheese is melted and peppers are tender."
      },
      {
        "name": "Turkey Stuffed with Cornbread Dressing",
        "servings": "8 servings",
        "ingredients": [
          "1 whole turkey, about 4.5 kg (10 lbs)",
          "Cornbread dressing: 4 cups cornbread crumbled, 1 onion diced, 3 celery stalks diced, 2 eggs, 2 cups chicken broth, 1 tsp sage, salt and pepper",
          "4 tbsp butter, softened",
          "Salt and pepper"
        ],
        "prep": "Make dressing by combining cornbread, cooked onion and celery, eggs, broth, sage, salt, and pepper — mixture should be moist but not wet. Preheat oven to 325°F. Rub turkey inside and out with butter, salt, and pepper. Loosely stuff with dressing. Tie legs. Roast 3–3.5 hours until internal temperature in thigh reaches 165°F and stuffing reaches 165°F. Rest 20 minutes. Carve and serve with remaining dressing baked separately."
      }
    ]
  },
  {
    "id": "bbq",
    "icon": "🔥",
    "name": "BBQ",
    "desc": "Slow-smoked ribs, brisket and pulled pork.",
    "recipes": [
      {
        "name": "Pulled Pork Sandwiches",
        "servings": "8 servings",
        "ingredients": [
          "2 kg (4.5 lbs) pork shoulder",
          "Dry rub: 2 tbsp brown sugar, 1 tbsp smoked paprika, 1 tbsp garlic powder, 1 tbsp onion powder, 1 tsp cayenne, 1 tbsp salt, 1 tsp pepper",
          "Apple cider vinegar mop sauce",
          "BBQ sauce",
          "Brioche buns and coleslaw"
        ],
        "prep": "Apply dry rub and refrigerate overnight. Smoke at 225–250°F with hickory wood for 8–10 hours. Mop with apple cider vinegar mixture every hour. Wrap in foil at 165°F. Continue until 205°F. Rest 1 hour. Shred with two forks discarding fat. Toss with BBQ sauce. Serve on brioche buns piled with coleslaw."
      },
      {
        "name": "Smoked Brisket",
        "servings": "10 servings",
        "ingredients": [
          "3 kg (6.5 lbs) whole beef brisket, flat and point",
          "Dry rub: 3 tbsp coarse salt, 2 tbsp coarse black pepper, 1 tsp garlic powder",
          "Wood chunks: oak or hickory",
          "Target smoker temperature: 225–250°F"
        ],
        "prep": "Trim excess fat to ¼ inch. Apply dry rub generously on all sides. Refrigerate uncovered overnight. Bring to room temperature 1 hour before smoking. Smoke fat side up at 225–250°F with oak or hickory wood for 8–12 hours. Spritz with water or apple cider vinegar every 2 hours after the first 3 hours. Wrap in butcher paper at 165°F internal temperature. Continue cooking until 200–205°F. Rest wrapped 1–2 hours in a cooler before slicing against the grain."
      },
      {
        "name": "Smoked Ribs",
        "servings": "4 servings",
        "ingredients": [
          "2 racks spare ribs or baby back ribs",
          "Dry rub: 3 tbsp brown sugar, 2 tbsp smoked paprika, 1 tbsp garlic powder, 1 tbsp onion powder, 1 tsp cumin, 1 tsp cayenne, 2 tsp salt, 1 tsp black pepper",
          "Apple juice for spritzing",
          "BBQ sauce for finishing"
        ],
        "prep": "Remove membrane from back of ribs. Apply dry rub generously on all sides. Smoke at 225°F with hickory or apple wood for 3 hours. Spritz with apple juice every 45 minutes. Wrap tightly in foil with a splash of apple juice. Continue smoking 2 more hours. Unwrap. Brush with BBQ sauce and smoke unwrapped 1 final hour. Rest 15 minutes. Slice between bones."
      },
      {
        "name": "Texas Style Beef Ribs",
        "servings": "4 servings",
        "ingredients": [
          "2 racks beef plate ribs, 3 bones each",
          "Dry rub: 3 tbsp coarse salt, 2 tbsp coarse black pepper, 1 tsp garlic powder",
          "Oak wood for smoking"
        ],
        "prep": "Trim excess fat. Apply dry rub aggressively on all sides. Refrigerate uncovered overnight. Smoke at 275°F with oak wood for 8–10 hours until dark bark forms and internal temperature reaches 200–210°F. The meat should jiggle when shaken. Rest wrapped in butcher paper for at least 1 hour before eating. No BBQ sauce needed — the bark and juices are the sauce."
      },
      {
        "name": "Santa Maria Tri Tip",
        "servings": "6 servings",
        "ingredients": [
          "1.5 kg (3 lbs) tri-tip roast",
          "Dry rub: 2 tbsp coarse salt, 1 tbsp black pepper, 1 tsp garlic powder, 1 tsp paprika",
          "Salsa fresca and garlic bread to serve"
        ],
        "prep": "Apply dry rub on all sides. Let sit at room temperature 1 hour. Grill over high direct heat 4–5 minutes per side until deeply seared. Move to indirect heat and cook until internal temperature reaches 130–135°F for medium rare — about 20–30 more minutes. Rest 10 minutes. Slice thinly against the grain. Tri-tip has two grain directions — find where they meet in the middle and slice accordingly. Serve with salsa fresca and garlic bread."
      }
    ]
  },
  {
    "id": "grilled",
    "icon": "🥩",
    "name": "Grilled Meats",
    "desc": "Steaks, chops, skewers and whole fish from the grill.",
    "recipes": [
      {
        "name": "Carne Asada",
        "servings": "6 servings",
        "ingredients": [
          "1 kg (2 lbs) skirt steak or flap meat",
          "Marinade: juice of 3 limes and 2 oranges, 4 garlic cloves, ½ cup cilantro, 2 tbsp olive oil, 1 tsp cumin, 1 tsp chili powder, salt and pepper",
          "Corn tortillas, salsa, guacamole, and cilantro to serve"
        ],
        "prep": "Mix marinade. Marinate steak at least 2 hours, ideally overnight. Remove from fridge 30 minutes before grilling. Grill over very high heat 3–4 minutes per side until charred on the outside but still medium rare inside. Rest 5 minutes. Slice very thinly against the grain. Serve on warm corn tortillas with salsa, guacamole, diced onion, and cilantro."
      },
      {
        "name": "Grilled Lamb Chops",
        "servings": "4 servings",
        "ingredients": [
          "8 lamb loin chops",
          "3 tbsp olive oil",
          "4 garlic cloves, minced",
          "Juice and zest of 1 lemon",
          "1 tsp dried rosemary",
          "1 tsp dried thyme",
          "Salt and black pepper",
          "Mint chimichurri to serve"
        ],
        "prep": "Mix olive oil, garlic, lemon juice, zest, rosemary, and thyme. Coat lamb chops. Marinate at least 1 hour. Remove from fridge 30 minutes before grilling. Season with salt and pepper. Grill over very high heat 3 minutes per side for medium rare. Rest 5 minutes. Serve with fresh mint chimichurri."
      },
      {
        "name": "Grilled Octopus",
        "servings": "4 servings",
        "ingredients": [
          "1 whole octopus, about 1 kg (2 lbs)",
          "1 lemon, quartered",
          "3 garlic cloves",
          "Fresh thyme and bay leaf",
          "Olive oil, salt, and pepper",
          "Lemon, capers, and fresh parsley for finishing"
        ],
        "prep": "Simmer octopus in water with lemon, garlic, thyme, and bay leaf until tender — about 45 minutes to 1 hour. Cool in cooking liquid. Remove octopus and pat completely dry. Brush with olive oil and season with salt and pepper. Grill over very high heat 3–4 minutes per side until charred and slightly crispy. Slice tentacles. Drizzle with good olive oil, lemon juice, capers, and fresh parsley."
      },
      {
        "name": "Grilled Pork Belly Skewers",
        "servings": "4 servings",
        "ingredients": [
          "700 g (1.5 lbs) pork belly, cut into cubes",
          "Marinade: 3 tbsp soy sauce, 2 tbsp honey, 1 tbsp mirin, 1 tbsp sesame oil, 3 garlic cloves, 1 tsp ginger, ½ tsp five spice",
          "Sesame seeds and green onions to garnish"
        ],
        "prep": "Mix marinade and coat pork belly cubes thoroughly. Marinate at least 2 hours. Thread onto skewers. Grill over medium heat turning frequently about 15–20 minutes until cooked through and caramelized on all sides, brushing with reserved marinade during cooking. The fat should render slightly and edges should be sticky and charred. Garnish with sesame seeds and sliced green onions."
      },
      {
        "name": "Grilled Swordfish Steaks",
        "servings": "4 servings",
        "ingredients": [
          "4 swordfish steaks, 1 inch thick",
          "3 tbsp olive oil",
          "Juice of 1 lemon",
          "3 garlic cloves, minced",
          "1 tsp dried oregano",
          "Salt and black pepper",
          "Salsa verde or chimichurri to serve"
        ],
        "prep": "Mix olive oil, lemon juice, garlic, and oregano. Coat swordfish and marinate 30 minutes — no longer or acid will start to cook the fish. Remove from marinade. Season with salt and pepper. Grill over high heat 4 minutes per side until firm and cooked through with nice grill marks. Swordfish should be cooked through but still moist — do not overcook. Serve with salsa verde."
      },
      {
        "name": "Grilled T-Bone Steak",
        "servings": "2 servings",
        "ingredients": [
          "2 T-bone steaks, 1.5 inches thick",
          "2 tbsp olive oil",
          "Coarse salt and freshly cracked black pepper",
          "4 tbsp unsalted butter",
          "4 garlic cloves, smashed",
          "Fresh rosemary"
        ],
        "prep": "Bring steaks to room temperature 45 minutes before cooking. Pat dry. Rub with olive oil and season very generously with coarse salt and cracked pepper on all sides. Grill over very high direct heat 3–4 minutes per side until deep grill marks form. Move to indirect heat if needed to finish. Internal temperature should be 130°F for medium rare. Rest 8–10 minutes. Top with compound butter made from softened butter, garlic, and rosemary."
      },
      {
        "name": "Grilled Whole Fish",
        "servings": "4 servings",
        "ingredients": [
          "2 whole sea bass or branzino, cleaned",
          "3 tbsp olive oil",
          "2 lemons, sliced",
          "Fresh herbs — thyme, rosemary, and parsley",
          "4 garlic cloves, sliced",
          "Salt and black pepper"
        ],
        "prep": "Score fish on both sides 3–4 times. Season inside and out with salt and pepper. Stuff cavity with lemon slices, fresh herbs, and garlic. Drizzle with olive oil. Oil grill grates thoroughly. Grill over medium-high heat without moving 5–6 minutes until skin releases naturally and is charred and crispy. Flip carefully. Grill 4–5 more minutes until cooked through. Serve with extra lemon."
      },
      {
        "name": "Jerk Chicken",
        "servings": "4 servings",
        "ingredients": [
          "1 whole chicken, cut into pieces",
          "Jerk marinade: 4 scotch bonnet peppers, 6 green onions, 4 garlic cloves, 1 tbsp allspice, 1 tsp cinnamon, ½ tsp nutmeg, 3 tbsp soy sauce, 2 tbsp brown sugar, juice of 1 lime, 3 tbsp olive oil, salt and pepper"
        ],
        "prep": "Blend all marinade ingredients until smooth. Score chicken pieces deeply. Coat thoroughly with marinade. Marinate overnight. Grill over indirect medium heat 35–40 minutes turning occasionally. Move to direct heat for last 5–10 minutes to char slightly and caramelize. Internal temperature should reach 165°F. Rest 5 minutes. Serve with rice and peas and fried plantains."
      },
      {
        "name": "Mixed Grill Platter",
        "servings": "4 servings",
        "ingredients": [
          "2 lamb chops",
          "2 merguez sausages",
          "2 chicken skewers",
          "2 kofta skewers",
          "Garlic flatbread",
          "Grilled tomatoes and peppers",
          "Tzatziki, hummus, and hot sauce to serve"
        ],
        "prep": "Marinate and season each protein appropriately. Grill items in order of cooking time — chicken first, lamb chops, sausages, and kofta last. Grill tomatoes and peppers alongside. Warm flatbread on the grill. Arrange everything on a large platter. Serve family style with tzatziki, hummus, and hot sauce."
      }
    ]
  },
  {
    "id": "duck",
    "icon": "🦆",
    "name": "Duck",
    "desc": "Roasted, braised, confit and fried duck.",
    "recipes": [
      {
        "name": "Braised Duck Legs",
        "servings": "4 servings",
        "ingredients": [
          "4 duck legs",
          "1 onion, diced",
          "2 carrots, diced",
          "4 garlic cloves",
          "1 cup (240 ml) red wine",
          "1 cup (240 ml) chicken broth",
          "1 can (14 oz) diced tomatoes",
          "Fresh thyme and bay leaf",
          "2 tbsp olive oil",
          "Salt and pepper"
        ],
        "prep": "Preheat oven to 325°F (165°C). Score duck skin. Season and sear skin side down in a Dutch oven over medium heat until fat renders and skin is golden — about 10 minutes. Flip and sear 2 minutes. Remove. Cook vegetables in rendered fat until softened. Add garlic and wine and reduce. Add broth, tomatoes, and herbs. Return duck legs skin side up. Braise uncovered 1.5–2 hours until very tender."
      },
      {
        "name": "Duck à l'Orange",
        "servings": "4 servings",
        "ingredients": [
          "1 whole duck, about 2 kg",
          "Orange sauce: juice of 4 oranges, zest of 1 orange, 2 tbsp Grand Marnier, 1 cup chicken broth, 2 tbsp butter, 1 tbsp honey, salt and pepper",
          "Salt and black pepper for seasoning"
        ],
        "prep": "Score duck skin. Season inside and out with salt and pepper. Roast at 425°F 30 minutes. Drain fat. Reduce to 350°F and roast 60 more minutes until cooked through. Make sauce: cook orange juice with zest and Grand Marnier until reduced by half. Add broth and reduce again. Whisk in cold butter and honey. Season. Carve duck and serve with orange sauce."
      },
      {
        "name": "Duck Breast with Orange Sauce",
        "servings": "4 servings",
        "ingredients": [
          "4 duck breasts",
          "Sauce: juice of 3 oranges, zest of 1 orange, 2 tbsp honey, 1 tbsp soy sauce, 1 cup (240 ml) chicken broth, 2 tbsp butter, 1 shallot minced",
          "Salt and black pepper"
        ],
        "prep": "Score duck skin in a crosshatch pattern without cutting into flesh. Season generously with salt and pepper. Place skin side down in a cold skillet. Turn heat to medium. Cook 12–15 minutes until most fat is rendered and skin is deeply golden and crispy. Flip and cook 3–5 minutes more for medium rare. Rest 5 minutes. Make sauce by cooking shallot in same pan. Add orange juice and zest, honey, and soy sauce. Reduce by half. Add broth and reduce again. Finish with butter."
      },
      {
        "name": "Duck Confit",
        "servings": "4 servings",
        "ingredients": [
          "4 duck legs",
          "1 kg (2 lbs) duck fat or enough to submerge",
          "1 tbsp coarse salt",
          "1 tsp black pepper",
          "4 garlic cloves",
          "Fresh thyme and bay leaf",
          "½ tsp juniper berries"
        ],
        "prep": "Rub duck legs with salt, pepper, garlic, and thyme. Refrigerate uncovered 24 hours. Rinse and pat dry. Preheat oven to 225°F (107°C). Place duck in a deep baking dish and cover completely with melted duck fat. Add herbs and juniper berries. Cover tightly and cook 6–8 hours until meat is very tender and nearly falling off the bone. Cool in fat and store up to 2 weeks. To serve, sear skin side down in a dry hot skillet until deeply golden and crispy."
      },
      {
        "name": "Duck Fried Rice",
        "servings": "4 servings",
        "ingredients": [
          "2 cups day-old cooked rice",
          "2 cups shredded duck confit or roast duck",
          "3 large eggs",
          "1 cup frozen peas",
          "3 green onions, sliced",
          "3 garlic cloves, minced",
          "3 tbsp soy sauce",
          "1 tbsp oyster sauce",
          "1 tsp sesame oil",
          "2 tbsp vegetable oil"
        ],
        "prep": "Heat oil in a wok over very high heat. Add eggs and scramble. Add garlic and cook 30 seconds. Add cold rice and stir fry 3 minutes. Add duck, peas, soy sauce, oyster sauce, and sesame oil. Toss everything together until heated through. Add green onions. Drizzle with sesame oil. Serve immediately."
      },
      {
        "name": "Duck Ragu",
        "servings": "4 servings",
        "ingredients": [
          "4 duck legs",
          "1 onion, finely diced",
          "2 carrots, finely diced",
          "2 celery stalks, finely diced",
          "4 garlic cloves",
          "1 cup (240 ml) red wine",
          "1 can (28 oz) crushed tomatoes",
          "2 tbsp tomato paste",
          "Fresh thyme and rosemary",
          "Salt and pepper",
          "Pappardelle to serve",
          "Parmesan for serving"
        ],
        "prep": "Season duck legs and sear in a Dutch oven over high heat until browned on all sides. Remove. Cook vegetables until softened. Add garlic and tomato paste and cook 1 minute. Add wine and reduce. Add tomatoes and herbs. Return duck. Braise covered at 325°F for 2–2.5 hours until meat falls off the bone. Shred duck meat and discard bones. Reduce sauce if needed. Toss with pappardelle and Parmesan."
      },
      {
        "name": "Duck Tacos",
        "servings": "4 servings",
        "ingredients": [
          "Duck confit from 4 legs, shredded and crisped",
          "8 corn tortillas",
          "Toppings: pickled red onion, mango salsa, avocado, cilantro, lime crema, jalapeño"
        ],
        "prep": "Shred duck confit meat. Crisp in a hot dry skillet until golden and slightly caramelized. Warm tortillas on a dry skillet. Fill with crispy duck meat. Top with pickled red onion, mango salsa, sliced avocado, fresh cilantro, and lime crema. Serve with lime wedges."
      },
      {
        "name": "Peking Duck",
        "servings": "4 servings",
        "ingredients": [
          "1 whole duck, about 2 kg (4.5 lbs)",
          "2 tbsp maltose or honey",
          "1 tbsp soy sauce",
          "1 tsp five spice powder",
          "Chinese pancakes, hoisin sauce, cucumber, and green onions to serve"
        ],
        "prep": "Blanch duck with boiling water poured over skin to tighten it. Pat completely dry. Mix maltose, soy sauce, and five spice. Brush all over duck. Air dry on a rack in the refrigerator uncovered 24–48 hours. Preheat oven to 375°F. Roast on a rack 60–75 minutes until skin is deep brown and extremely crispy. Slice off skin and meat thinly. Serve with pancakes, hoisin sauce, cucumber strips, and green onions."
      },
      {
        "name": "Roasted Duck",
        "servings": "4 servings",
        "ingredients": [
          "1 whole duck, about 2 kg (4.5 lbs)",
          "4 garlic cloves",
          "1 orange, quartered",
          "Fresh thyme and rosemary",
          "2 tbsp Chinese five spice",
          "Salt and black pepper",
          "1 cup (240 ml) orange juice",
          "2 tbsp honey"
        ],
        "prep": "Preheat oven to 425°F (220°C). Score duck skin all over in a crosshatch pattern without cutting into flesh. Rub all over with five spice, salt, and pepper inside and out. Stuff cavity with garlic, orange, and herbs. Place on a rack in a roasting pan. Roast at high heat 30 minutes. Drain fat. Reduce to 350°F. Mix orange juice and honey and brush over duck. Roast another 60–75 minutes basting every 20 minutes until skin is deep mahogany and crispy. Rest 15 minutes before carving."
      },
      {
        "name": "Smoked Duck Salad",
        "servings": "4 servings",
        "ingredients": [
          "2 smoked duck breasts, thinly sliced",
          "4 cups mixed salad greens",
          "1 cup sliced fresh figs or pears",
          "¼ cup candied walnuts",
          "½ cup blue cheese or gorgonzola, crumbled",
          "Dressing: 3 tbsp walnut oil, 2 tbsp red wine vinegar, 1 tsp Dijon mustard, 1 tsp honey, salt and pepper"
        ],
        "prep": "Slice smoked duck breast thinly. Arrange salad greens on plates. Top with sliced duck, figs or pears, candied walnuts, and blue cheese. Whisk dressing ingredients together and drizzle over salad. Serve immediately."
      },
      {
        "name": "Wild Duck with Cherry Sauce",
        "servings": "4 servings",
        "ingredients": [
          "2 wild duck breasts",
          "Cherry sauce: 1 cup fresh or frozen cherries, ½ cup red wine, 2 tbsp balsamic vinegar, 1 shallot minced, 1 tbsp butter, 1 tsp sugar, salt and pepper",
          "Salt and black pepper",
          "2 tbsp oil"
        ],
        "prep": "Score duck skin. Season with salt and pepper. Cook skin side down in a cold pan over medium heat 10–12 minutes until fat renders and skin is very crispy. Flip and cook 3 minutes for medium rare. Rest 5 minutes. Make cherry sauce by cooking shallot in butter. Add wine and balsamic and reduce. Add cherries and sugar. Simmer 10 minutes until slightly thickened. Season. Slice duck and serve with cherry sauce."
      }
    ]
  },
  {
    "id": "game_birds",
    "icon": "🪶",
    "name": "Game Birds",
    "desc": "Quail, pheasant and guinea fowl.",
    "recipes": [
      {
        "name": "Grilled Quail",
        "servings": "4 servings",
        "ingredients": [
          "8 quails, spatchcocked",
          "Marinade: 4 tbsp olive oil, 3 garlic cloves, juice of 1 lemon, 1 tsp thyme, 1 tsp rosemary, salt and pepper",
          "Salad greens and pan juices to serve"
        ],
        "prep": "Mix marinade and coat quails thoroughly. Marinate at least 1 hour. Grill over medium-high heat 4–5 minutes per side until cooked through — juices should run clear. Quail cooks quickly so watch carefully. Rest 5 minutes. Serve on a bed of salad greens drizzled with pan juices and lemon."
      },
      {
        "name": "Guinea Fowl with Mushrooms",
        "servings": "4 servings",
        "ingredients": [
          "1 guinea fowl, cut into pieces",
          "400 g (14 oz) mixed mushrooms, sliced",
          "1 onion, diced",
          "4 garlic cloves",
          "½ cup (120 ml) dry white wine",
          "1 cup (240 ml) chicken broth",
          "½ cup (120 ml) heavy cream",
          "Fresh thyme",
          "3 tbsp butter",
          "Salt and pepper"
        ],
        "prep": "Season guinea fowl and brown in butter on all sides. Remove. Cook mushrooms and onion in same pan until golden. Add garlic and thyme. Add wine and reduce by half. Add broth. Return guinea fowl. Cover and simmer 40–45 minutes until cooked through. Remove bird. Add cream to sauce and reduce until slightly thickened. Return bird to sauce. Serve with mashed potatoes or buttered noodles."
      },
      {
        "name": "Pan Roasted Quail with Grapes",
        "servings": "4 servings",
        "ingredients": [
          "8 quails",
          "2 cups red grapes",
          "4 shallots, halved",
          "4 garlic cloves",
          "½ cup (120 ml) Marsala wine",
          "1 cup (240 ml) chicken broth",
          "3 tbsp butter",
          "Fresh thyme",
          "Salt and pepper"
        ],
        "prep": "Preheat oven to 425°F (220°C). Season quails inside and out with salt and pepper. Sear in butter in an oven-safe skillet on all sides until golden. Remove. Add shallots, garlic, and grapes and cook 2 minutes. Add Marsala and cook 1 minute. Add broth and thyme. Return quails. Roast in oven 12–15 minutes until cooked through. Remove birds. Reduce sauce until slightly thickened. Serve quails with grapes and sauce."
      },
      {
        "name": "Roasted Pheasant",
        "servings": "4 servings",
        "ingredients": [
          "1 whole pheasant, about 1.2 kg (2.5 lbs)",
          "6 strips bacon",
          "4 tbsp butter, softened",
          "4 garlic cloves, minced",
          "Fresh thyme",
          "Salt and black pepper",
          "1 cup (240 ml) chicken broth",
          "½ cup (120 ml) dry white wine"
        ],
        "prep": "Preheat oven to 375°F (190°C). Mix butter with garlic, thyme, salt and pepper. Rub under skin and all over outside. Cover breast with bacon strips secured with toothpicks to prevent drying. Place on a rack. Pour broth and wine into pan. Roast 50–60 minutes basting frequently until internal temperature reaches 165°F. Remove bacon for last 10 minutes to brown breast. Rest 10 minutes. Carve and serve with pan juices."
      }
    ]
  },
  {
    "id": "sausages",
    "icon": "🌭",
    "name": "Sausages",
    "desc": "Brats, chorizo, kielbasa and sausage dishes.",
    "recipes": [
      {
        "name": "Beer Braised Brats",
        "servings": "4 servings",
        "ingredients": [
          "6 bratwurst sausages",
          "2 onions, sliced",
          "3 garlic cloves, sliced",
          "2 bottles (24 oz) beer — lager or pilsner",
          "2 tbsp butter",
          "Hoagie rolls and mustard to serve"
        ],
        "prep": "Melt butter in a large skillet. Cook onions and garlic over medium heat until golden and caramelized — about 15 minutes. Add bratwurst and pour beer over. Bring to a simmer. Cook uncovered 20 minutes until brats are cooked through. Remove brats and grill or sear in a hot pan 2–3 minutes per side until browned and slightly charred. Serve on hoagie rolls with caramelized onions and mustard."
      },
      {
        "name": "Chorizo and Eggs",
        "servings": "4 servings",
        "ingredients": [
          "200 g (7 oz) fresh Mexican chorizo, casings removed",
          "8 large eggs",
          "1 onion, diced",
          "1 jalapeño, diced",
          "2 garlic cloves, minced",
          "2 tomatoes, diced",
          "Salt and pepper",
          "Warm tortillas and salsa to serve"
        ],
        "prep": "Cook chorizo in a skillet over medium heat breaking it up until browned and fat is rendered. Drain excess fat if desired. Add onion, jalapeño, and garlic and cook until softened. Add tomatoes and cook 2 minutes. Whisk eggs and pour over chorizo mixture. Scramble gently over medium-low heat until eggs are just set. Season with salt and pepper. Serve with warm tortillas and fresh salsa."
      },
      {
        "name": "Chorizo Paella",
        "servings": "6 servings",
        "ingredients": [
          "2 cups (400 g) short grain rice",
          "300 g (10.5 oz) Spanish chorizo, sliced",
          "300 g (10.5 oz) chicken thighs",
          "4 cups (960 ml) chicken broth, warm",
          "½ tsp saffron in broth",
          "1 onion, diced",
          "4 garlic cloves",
          "1 red bell pepper, diced",
          "1 can (14 oz) diced tomatoes",
          "1 tsp smoked paprika",
          "4 tbsp olive oil",
          "Fresh parsley and lemon"
        ],
        "prep": "Heat olive oil in a large paella pan. Brown chicken and chorizo. Remove. Cook onion, pepper, and garlic. Add tomatoes and paprika. Add rice and stir to coat. Add warm saffron broth. Return chicken and chorizo. Cook uncovered without stirring 18–20 minutes until rice is cooked and has formed a crust on the bottom. Rest 5 minutes. Garnish with parsley and lemon."
      },
      {
        "name": "Hot Dog Bar",
        "servings": "6 servings",
        "ingredients": [
          "12 quality hot dogs or frankfurters",
          "12 hot dog buns, toasted",
          "Condiments: mustard, ketchup, relish, sauerkraut, diced onion, jalapeños, cheddar sauce, chili, coleslaw"
        ],
        "prep": "Grill hot dogs over medium-high heat turning frequently until nicely charred and skin blisters slightly — about 5–6 minutes. Alternatively boil in water or steam. Toast buns on the grill or in a skillet with a little butter. Set up a condiment bar and let everyone build their own. Classic combinations: Chicago style with mustard, relish, onion, and tomato; New York style with sauerkraut and spicy mustard; chili cheese dog."
      },
      {
        "name": "Kielbasa and Sauerkraut",
        "servings": "4 servings",
        "ingredients": [
          "600 g (1.3 lbs) kielbasa, sliced",
          "500 g (1 lb) sauerkraut, drained",
          "1 onion, sliced",
          "3 garlic cloves, minced",
          "1 cup (240 ml) beer or chicken broth",
          "1 tbsp brown sugar",
          "1 tsp caraway seeds",
          "2 tbsp butter",
          "Salt and pepper",
          "Mashed potatoes or crusty bread to serve"
        ],
        "prep": "Melt butter in a large skillet over medium heat. Cook onion until caramelized — about 15 minutes. Add garlic and caraway seeds and cook 1 minute. Add sauerkraut, beer, and brown sugar. Stir well. Add sliced kielbasa. Cover and simmer 20 minutes, stirring occasionally. Uncover and cook until liquid mostly evaporates. Season with salt and pepper. Serve with mashed potatoes."
      },
      {
        "name": "Sausage and Lentil Stew",
        "servings": "4 servings",
        "ingredients": [
          "400 g (14 oz) smoked sausage or kielbasa, sliced",
          "1 cup (190 g) green or brown lentils",
          "1 onion, diced",
          "2 carrots, diced",
          "3 celery stalks, diced",
          "4 garlic cloves, minced",
          "4 cups (960 ml) chicken broth",
          "1 can (14 oz) crushed tomatoes",
          "1 tsp cumin",
          "½ tsp smoked paprika",
          "2 tbsp olive oil",
          "Salt and pepper",
          "Fresh parsley"
        ],
        "prep": "Heat olive oil in a large pot. Cook sausage slices until browned. Remove. Cook onion, carrots, and celery until softened. Add garlic, cumin, and paprika and cook 1 minute. Add lentils, broth, and tomatoes. Simmer 25–30 minutes until lentils are tender. Return sausage. Season with salt and pepper. Garnish with fresh parsley."
      },
      {
        "name": "Sausage Rolls",
        "servings": "12 rolls",
        "ingredients": [
          "500 g (1 lb) pork sausage meat",
          "1 onion, grated",
          "3 garlic cloves, minced",
          "1 tbsp Dijon mustard",
          "1 egg yolk in meat mixture",
          "Fresh thyme",
          "Salt and pepper",
          "2 sheets puff pastry",
          "1 egg, beaten for glaze",
          "Sesame seeds"
        ],
        "prep": "Preheat oven to 400°F (200°C). Mix sausage meat with onion, garlic, mustard, egg yolk, thyme, salt, and pepper. Cut pastry sheets in half lengthwise. Place a log of sausage meat along one edge of each strip. Roll up tightly. Press to seal with egg wash. Cut into portions. Brush with egg wash and sprinkle with sesame seeds. Bake 20–25 minutes until golden and cooked through."
      },
      {
        "name": "Sausage Stuffed Mushrooms",
        "servings": "6 servings",
        "ingredients": [
          "24 large cremini mushrooms, stems removed and chopped",
          "300 g (10.5 oz) Italian sausage, casings removed",
          "1 onion, finely diced",
          "4 garlic cloves, minced",
          "½ cup Parmesan, grated",
          "100 g (3.5 oz) cream cheese",
          "Fresh parsley",
          "Salt and pepper",
          "Olive oil"
        ],
        "prep": "Preheat oven to 375°F (190°C). Cook sausage in a skillet breaking it up. Add onion, garlic, and chopped mushroom stems and cook until softened. Cool slightly. Mix with cream cheese, Parmesan, and parsley. Season. Brush mushroom caps with olive oil inside and out. Fill generously with sausage mixture. Bake 20–25 minutes until mushrooms are tender and tops are golden. Serve hot."
      },
      {
        "name": "Toad in the Hole",
        "servings": "4 servings",
        "ingredients": [
          "8 pork sausages",
          "Yorkshire pudding batter: 1 cup (120 g) flour, 3 eggs, 1 cup (240 ml) milk, pinch of salt",
          "3 tbsp vegetable oil or dripping",
          "Onion gravy to serve"
        ],
        "prep": "Preheat oven to 425°F (220°C). Make batter by whisking flour, eggs, milk, and salt until smooth. Rest 30 minutes. Pour oil into a large roasting pan and heat in oven until smoking hot. Add sausages and cook 10 minutes until browned. Quickly pour batter over and around sausages. Return to oven immediately without opening for 25–30 minutes until batter is puffed and deeply golden. Do not open the oven while it bakes. Serve with onion gravy."
      }
    ]
  },
  {
    "id": "cured_meats",
    "icon": "🥓",
    "name": "Cured Meats",
    "desc": "Prosciutto, salami, guanciale and other cured meats.",
    "recipes": [
      {
        "name": "Carbonara with Guanciale",
        "servings": "4 servings",
        "ingredients": [
          "400 g (14 oz) rigatoni or spaghetti",
          "200 g (7 oz) guanciale, diced",
          "4 large egg yolks plus 1 whole egg",
          "100 g (3.5 oz) Pecorino Romano, finely grated",
          "50 g (1.8 oz) Parmesan, finely grated",
          "Freshly cracked black pepper",
          "Salt for pasta water"
        ],
        "prep": "Cook pasta until al dente. While pasta cooks render guanciale in a skillet over medium heat until crispy and fat is fully rendered. Remove from heat. Whisk egg yolks, whole egg, and both cheeses with generous black pepper. Reserve 1 cup pasta water. Drain pasta. Add to skillet with guanciale off the heat. Add egg mixture and toss vigorously while adding pasta water a splash at a time until sauce is creamy and silky. Serve immediately."
      },
      {
        "name": "Mortadella Sandwich",
        "servings": "2 servings",
        "ingredients": [
          "200 g (7 oz) mortadella, thinly sliced",
          "1 ciabatta or focaccia loaf, split",
          "100 g (3.5 oz) fresh mozzarella, sliced",
          "Handful of arugula",
          "4 tbsp olive tapenade or pesto",
          "Olive oil and black pepper"
        ],
        "prep": "Split the bread and drizzle the inside generously with olive oil. Spread olive tapenade or pesto on one half. Layer mozzarella slices on the bottom half. Fold mortadella slices and layer generously over mozzarella. Top with a handful of fresh arugula. Crack black pepper over everything. Close the sandwich and press gently. Slice and serve. Toasting the bread lightly first is optional but excellent."
      },
      {
        "name": "Nduja Pasta",
        "servings": "4 servings",
        "ingredients": [
          "400 g (14 oz) rigatoni or penne",
          "100 g (3.5 oz) nduja sausage",
          "1 can (28 oz) crushed tomatoes",
          "4 garlic cloves, minced",
          "½ cup (120 ml) dry white wine",
          "½ cup Parmesan, grated",
          "2 tbsp olive oil",
          "Fresh basil",
          "Salt and pepper"
        ],
        "prep": "Heat olive oil in a large skillet over medium heat. Add nduja and cook, breaking it up, until fat renders and it turns deep red — about 3 minutes. Add garlic and cook 1 minute. Add wine and cook 1 minute. Add crushed tomatoes. Simmer 15 minutes. Cook pasta until al dente. Toss with sauce adding pasta water as needed. Finish with Parmesan and fresh basil."
      },
      {
        "name": "Prosciutto Wrapped Chicken",
        "servings": "4 servings",
        "ingredients": [
          "4 boneless skinless chicken breasts",
          "8 slices prosciutto",
          "4 fresh sage leaves per breast",
          "2 tbsp olive oil",
          "2 tbsp butter",
          "½ cup (120 ml) dry white wine",
          "½ cup (120 ml) chicken broth",
          "Salt and pepper"
        ],
        "prep": "Season chicken with salt and pepper. Place 2 sage leaves on each breast. Wrap tightly with 2 slices of prosciutto. Heat olive oil and butter in a large oven-safe skillet over medium-high heat. Sear wrapped chicken 3 minutes per side until prosciutto is golden. Transfer to 400°F oven and cook 15–18 minutes until cooked through. Remove chicken. Deglaze pan with wine and broth. Reduce to make a pan sauce. Serve chicken with pan sauce."
      },
      {
        "name": "Prosciutto Wrapped Melon",
        "servings": "4 servings",
        "ingredients": [
          "1 cantaloupe melon, peeled and sliced into wedges",
          "12 thin slices prosciutto di Parma",
          "Fresh basil leaves",
          "Black pepper",
          "Extra virgin olive oil (optional)",
          "Balsamic glaze (optional)"
        ],
        "prep": "Wrap each melon wedge with a slice of prosciutto, folding it neatly around the melon. Arrange on a platter. Tuck fresh basil leaves between pieces. Crack black pepper generously over the top. Drizzle with a little extra virgin olive oil and balsamic glaze if desired. Serve immediately as an appetizer — the contrast of sweet melon and salty prosciutto is the entire dish."
      },
      {
        "name": "Salami Pizza",
        "servings": "2 servings",
        "ingredients": [
          "1 pizza dough, stretched",
          "½ cup pizza sauce",
          "150 g (5 oz) fresh mozzarella, sliced",
          "80 g (3 oz) salami, thinly sliced",
          "½ tsp red pepper flakes",
          "Fresh basil",
          "Extra virgin olive oil",
          "Salt and pepper"
        ],
        "prep": "Preheat oven to 500°F (260°C) with a pizza stone or heavy baking sheet inside for at least 30 minutes. Stretch dough thin. Spread sauce leaving a border. Layer mozzarella. Add salami slices. Season with red pepper flakes, salt, and pepper. Slide onto hot stone or baking sheet. Bake 8–12 minutes until crust is deeply golden and cheese is bubbly with brown spots. Top with fresh basil and a drizzle of olive oil."
      }
    ]
  }
];
