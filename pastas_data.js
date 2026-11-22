const pastas_data = [
  {
    "id": "pastaDishes",
    "icon": "🍝",
    "name": "Pasta Dishes",
    "recipes": [
      {
        "name": "Cacio e Pepe",
        "servings": "4 servings",
        "ingredients": [
          "400 g (14 oz) spaghetti or tonnarelli",
          "200 g (7 oz) Pecorino Romano, finely grated",
          "50 g (1.8 oz) Parmesan, finely grated",
          "2 tsp freshly cracked black pepper",
          "Salt for pasta water"
        ],
        "prep": "Bring a large pot of lightly salted water to a boil. Cook pasta until just under al dente — about 2 minutes less than package directions. Toast cracked black pepper in a large dry skillet over medium heat 1 minute. Reserve 1 cup pasta water. Add ¾ cup pasta water to the skillet. Add drained pasta and toss. Remove from heat. Mix cheeses with remaining pasta water into a paste. Add to pasta, tossing vigorously until creamy and silky. Serve immediately."
      },
      {
        "name": "Pasta Carbonara",
        "servings": "4 servings",
        "ingredients": [
          "400 g (14 oz) spaghetti or rigatoni",
          "150 g (5 oz) guanciale or pancetta, diced",
          "4 large egg yolks plus 1 whole egg",
          "100 g (3.5 oz) Pecorino Romano, finely grated",
          "50 g (1.8 oz) Parmesan, finely grated",
          "Freshly cracked black pepper",
          "Salt for pasta water"
        ],
        "prep": "Cook pasta in salted water until al dente. While pasta cooks render guanciale in a large skillet over medium heat until crispy. Remove from heat. Whisk egg yolks, whole egg, and cheeses together with a generous amount of black pepper. Reserve 1 cup pasta water. Drain pasta and add to skillet off the heat. Add egg mixture and toss quickly while adding pasta water a splash at a time until sauce is creamy and coats the pasta. Serve immediately."
      },
      {
        "name": "Spaghetti Bolognese",
        "servings": "6 servings",
        "ingredients": [
          "400 g (14 oz) spaghetti or tagliatelle",
          "300 g (10.5 oz) ground beef",
          "150 g (5.3 oz) pancetta, diced",
          "1 medium onion, finely chopped",
          "2 celery stalks, finely chopped",
          "2 medium carrots, finely chopped",
          "3 garlic cloves, minced",
          "1 cup (240 ml) dry red wine",
          "1 cup (240 ml) whole milk",
          "1 can (28 oz) crushed tomatoes",
          "2 tbsp tomato paste",
          "2 tbsp olive oil",
          "Salt and pepper",
          "Fresh basil",
          "Parmesan for serving"
        ],
        "prep": "Heat olive oil in a large heavy pot over medium heat. Add pancetta and cook until fat renders. Add onion, celery, and carrot and cook until softened, about 8 minutes. Add garlic and cook 1 minute. Add ground beef and cook until browned. Add wine and cook until evaporated. Add milk and cook until absorbed. Add crushed tomatoes and tomato paste. Season with salt and pepper. Simmer on low heat uncovered at least 2 hours stirring occasionally. Cook pasta according to package. Toss with sauce and serve with Parmesan."
      },
      {
        "name": "Spaghetti Aglio e Olio",
        "servings": "4 servings",
        "ingredients": [
          "400 g (14 oz) spaghetti",
          "6 garlic cloves, thinly sliced",
          "½ cup (120 ml) good quality extra virgin olive oil",
          "½ tsp red pepper flakes",
          "¼ cup fresh flat-leaf parsley, chopped",
          "Salt for pasta water",
          "Parmesan for serving (optional)"
        ],
        "prep": "Cook spaghetti in heavily salted water until al dente. Reserve 1 cup pasta water. While pasta cooks heat olive oil in a large skillet over medium-low heat. Add sliced garlic and red pepper flakes. Cook gently, stirring frequently, until garlic is golden — about 3–4 minutes. Do not burn. Drain pasta and add directly to skillet with ½ cup pasta water. Toss vigorously over medium heat until pasta is coated and sauce is emulsified. Add more pasta water if needed. Toss in parsley and serve."
      },
      {
        "name": "Spaghetti and Meatballs",
        "servings": "6 servings",
        "ingredients": [
          "400 g (14 oz) spaghetti",
          "Meatballs: 500 g (1 lb) ground beef, ½ cup breadcrumbs, ¼ cup milk, 1 egg, 3 garlic cloves minced, ¼ cup Parmesan, 1 tsp dried oregano, salt and pepper",
          "Sauce: 2 cans (28 oz each) crushed tomatoes, 4 garlic cloves minced, 2 tbsp olive oil, 1 tsp sugar, fresh basil, salt and pepper"
        ],
        "prep": "Combine all meatball ingredients and mix well. Roll into golf ball sized balls. Brown meatballs in olive oil in a large skillet over medium-high heat on all sides. Remove and set aside. In the same pot make sauce by cooking garlic in olive oil 1 minute. Add crushed tomatoes, sugar, basil, salt and pepper. Simmer 20 minutes. Add meatballs back into sauce and simmer 20 more minutes. Cook spaghetti according to package. Serve meatballs and sauce over spaghetti."
      },
      {
        "name": "Pasta Puttanesca",
        "servings": "4 servings",
        "ingredients": [
          "400 g (14 oz) spaghetti or linguine",
          "4 tbsp olive oil",
          "4 garlic cloves, minced",
          "1 tsp red pepper flakes",
          "2 cans (14 oz each) crushed tomatoes",
          "½ cup (80 g) Kalamata olives, pitted and halved",
          "3 tbsp capers, rinsed",
          "4 anchovy fillets, minced",
          "Fresh parsley",
          "Salt and pepper"
        ],
        "prep": "Cook pasta in salted water until al dente. Heat olive oil in a large skillet over medium heat. Add anchovies and cook until dissolved. Add garlic and red pepper flakes and cook 1 minute. Add crushed tomatoes and simmer 10 minutes. Add olives and capers. Season with salt and pepper. Drain pasta and toss with sauce. Garnish with fresh parsley."
      },
      {
        "name": "Pasta Amatriciana",
        "servings": "4 servings",
        "ingredients": [
          "400 g (14 oz) bucatini or rigatoni",
          "200 g (7 oz) guanciale or pancetta, diced",
          "1 can (28 oz) crushed San Marzano tomatoes",
          "1 small onion, finely diced",
          "½ cup (120 ml) dry white wine",
          "100 g (3.5 oz) Pecorino Romano, grated",
          "½ tsp red pepper flakes",
          "Salt and black pepper",
          "2 tbsp olive oil"
        ],
        "prep": "Cook guanciale in olive oil in a large skillet over medium heat until crispy. Add onion and cook until softened. Add red pepper flakes and wine and cook until evaporated. Add crushed tomatoes. Simmer 20 minutes. Season with salt and pepper. Cook pasta until al dente. Reserve ½ cup pasta water. Drain and toss with sauce adding pasta water as needed. Top with grated Pecorino."
      },
      {
        "name": "Pasta alla Norma",
        "servings": "4 servings",
        "ingredients": [
          "400 g (14 oz) rigatoni or penne",
          "2 medium eggplants, cubed",
          "1 can (28 oz) crushed tomatoes",
          "4 garlic cloves, minced",
          "4 tbsp olive oil",
          "Fresh basil leaves",
          "100 g (3.5 oz) ricotta salata or firm ricotta, grated",
          "Salt and pepper",
          "Oil for frying eggplant"
        ],
        "prep": "Salt eggplant cubes and let sit 30 minutes. Pat dry. Fry in oil until golden and soft. Drain on paper towels. In a separate pan heat 4 tbsp olive oil and cook garlic 1 minute. Add crushed tomatoes, basil, salt and pepper. Simmer 15 minutes. Add fried eggplant. Cook pasta until al dente. Toss with sauce. Top with grated ricotta salata and fresh basil."
      },
      {
        "name": "Fettuccine Alfredo",
        "servings": "4 servings",
        "ingredients": [
          "400 g (14 oz) fettuccine",
          "1 cup (226 g) unsalted butter",
          "1½ cups (360 ml) heavy cream",
          "2 cups (200 g) Parmesan, finely grated",
          "Salt and white pepper",
          "Fresh parsley for garnish"
        ],
        "prep": "Cook fettuccine in salted water until al dente. While pasta cooks melt butter in a large skillet over medium-low heat. Add heavy cream and simmer gently 5 minutes until slightly thickened. Remove from heat and stir in Parmesan until smooth. Season with salt and white pepper. Drain pasta reserving ½ cup pasta water. Add pasta to sauce and toss, adding pasta water as needed to achieve a silky consistency. Serve immediately."
      },
      {
        "name": "Pasta Primavera",
        "servings": "4 servings",
        "ingredients": [
          "400 g (14 oz) penne or fusilli",
          "2 cups mixed vegetables — zucchini, bell peppers, broccoli, cherry tomatoes, asparagus",
          "4 garlic cloves, minced",
          "½ cup (120 ml) heavy cream",
          "½ cup (50 g) Parmesan, grated",
          "3 tbsp olive oil",
          "Fresh basil",
          "Salt and pepper",
          "Red pepper flakes"
        ],
        "prep": "Cook pasta until al dente. Heat olive oil in a large skillet. Sauté all vegetables over medium-high heat until tender-crisp about 5–7 minutes. Add garlic and cook 1 minute. Add heavy cream and bring to a gentle simmer. Toss in drained pasta and Parmesan. Add pasta water as needed for consistency. Season with salt, pepper, and red pepper flakes. Top with fresh basil."
      },
      {
        "name": "Shrimp Scampi Pasta",
        "servings": "4 servings",
        "ingredients": [
          "400 g (14 oz) linguine",
          "500 g (1 lb) large shrimp, peeled and deveined",
          "6 garlic cloves, minced",
          "½ cup (120 ml) dry white wine",
          "4 tbsp unsalted butter",
          "3 tbsp olive oil",
          "Juice and zest of 1 lemon",
          "¼ cup fresh parsley, chopped",
          "Red pepper flakes",
          "Salt and pepper"
        ],
        "prep": "Cook linguine until al dente. Heat olive oil and 2 tbsp butter in a large skillet over medium-high heat. Season shrimp with salt, pepper, and red pepper flakes. Add shrimp and cook 1–2 minutes per side until pink. Remove shrimp. Add garlic to same pan and cook 30 seconds. Add white wine and cook until reduced by half. Add remaining butter, lemon juice, and zest. Return shrimp. Toss with drained pasta and parsley."
      },
      {
        "name": "Chicken Alfredo",
        "servings": "4 servings",
        "ingredients": [
          "400 g (14 oz) fettuccine",
          "2 boneless skinless chicken breasts, sliced thin",
          "1 cup (226 g) unsalted butter",
          "1½ cups (360 ml) heavy cream",
          "2 cups (200 g) Parmesan, grated",
          "4 garlic cloves, minced",
          "Salt, pepper, and Italian seasoning",
          "Olive oil"
        ],
        "prep": "Season chicken with salt, pepper, and Italian seasoning. Cook in olive oil in a skillet over medium-high heat until cooked through. Slice and set aside. Cook fettuccine until al dente. In same skillet melt butter over medium-low heat. Add garlic and cook 1 minute. Add heavy cream and simmer 5 minutes. Stir in Parmesan until smooth. Toss with drained pasta. Top with sliced chicken and fresh parsley."
      },
      {
        "name": "Pasta e Fagioli",
        "servings": "6 servings",
        "ingredients": [
          "200 g (7 oz) small pasta such as ditalini or elbow",
          "1 can (14 oz) cannellini beans, drained",
          "1 can (14 oz) crushed tomatoes",
          "1 medium onion, diced",
          "4 garlic cloves, minced",
          "2 celery stalks, diced",
          "2 carrots, diced",
          "4 cups (960 ml) chicken or vegetable broth",
          "3 tbsp olive oil",
          "Fresh rosemary",
          "Salt, pepper, red pepper flakes",
          "Parmesan rind (optional)"
        ],
        "prep": "Heat olive oil in a large pot. Cook onion, celery, and carrot until softened, about 8 minutes. Add garlic and rosemary and cook 1 minute. Add crushed tomatoes and cook 5 minutes. Add broth and beans. Add Parmesan rind if using. Simmer 15 minutes. Add pasta directly to pot and cook until al dente. Season with salt, pepper, and red pepper flakes. Remove rosemary sprig and Parmesan rind. Drizzle with olive oil and serve."
      },
      {
        "name": "Spaghetti alle Vongole",
        "servings": "4 servings",
        "ingredients": [
          "400 g (14 oz) spaghetti",
          "1 kg (2.2 lbs) fresh clams, scrubbed",
          "6 garlic cloves, minced",
          "1 cup (240 ml) dry white wine",
          "4 tbsp olive oil",
          "¼ tsp red pepper flakes",
          "¼ cup fresh flat-leaf parsley, chopped",
          "Salt and black pepper"
        ],
        "prep": "Soak clams in cold salted water 30 minutes to purge grit. Cook spaghetti until al dente. Heat olive oil in a large deep skillet over medium heat. Add garlic and red pepper flakes and cook 1 minute. Add wine and bring to a boil. Add clams, cover, and cook until all clams open — about 5–7 minutes. Discard any that do not open. Drain pasta reserving ½ cup pasta water. Add pasta to clam pan and toss vigorously. Add pasta water if needed. Toss in parsley."
      },
      {
        "name": "Orecchiette with Broccoli Rabe",
        "servings": "4 servings",
        "ingredients": [
          "400 g (14 oz) orecchiette",
          "1 bunch broccoli rabe, tough stems trimmed and chopped",
          "4 garlic cloves, thinly sliced",
          "4 tbsp olive oil",
          "½ tsp red pepper flakes",
          "100 g (3.5 oz) Italian sausage, crumbled and cooked (optional)",
          "Pecorino Romano for serving",
          "Salt"
        ],
        "prep": "Blanch broccoli rabe in salted boiling water 2 minutes. Remove and reserve the water. Add pasta to the same water and cook until al dente. Heat olive oil in a large skillet over medium heat. Add garlic and red pepper flakes and cook until golden. Add broccoli rabe and toss. Add cooked sausage if using. Drain pasta and add to skillet with a splash of pasta water. Toss everything together over medium heat. Serve with grated Pecorino."
      },
      {
        "name": "Vodka Pasta",
        "servings": "4 servings",
        "ingredients": [
          "400 g (14 oz) penne rigate",
          "4 tbsp butter",
          "4 garlic cloves, minced",
          "½ tsp red pepper flakes",
          "¼ cup (60 ml) vodka",
          "1 can (28 oz) crushed tomatoes",
          "1 cup (240 ml) heavy cream",
          "½ cup (50 g) Parmesan, grated",
          "Fresh basil",
          "Salt and pepper"
        ],
        "prep": "Melt butter in a large skillet over medium heat. Add garlic and red pepper flakes and cook 1 minute. Add vodka and cook until mostly evaporated, about 2 minutes. Add crushed tomatoes and simmer 15 minutes. Stir in heavy cream and simmer 5 more minutes. Season with salt and pepper. Cook penne until al dente. Toss with sauce. Finish with Parmesan and fresh basil."
      }
    ]
  },
  {
    "id": "bakedPasta",
    "icon": "🫕",
    "name": "Baked Pasta",
    "recipes": [
      {
        "name": "Classic Lasagna",
        "servings": "8 servings",
        "ingredients": [
          "12 lasagna noodles, cooked",
          "Meat Sauce: 500 g (1 lb) ground beef, 500 g (1 lb) Italian sausage, 1 onion diced, 4 garlic cloves, 2 cans (28 oz) crushed tomatoes, 2 tbsp tomato paste, 1 tsp dried basil, 1 tsp oregano, salt and pepper",
          "Béchamel: 4 tbsp butter, ¼ cup flour, 2 cups milk, salt and nutmeg",
          "Ricotta Layer: 900 g (32 oz) ricotta, 2 eggs, ½ cup Parmesan, salt and pepper",
          "400 g (14 oz) shredded mozzarella"
        ],
        "prep": "Make meat sauce by browning meats with onion and garlic. Add tomatoes, paste, and herbs. Simmer 30 minutes. Make béchamel by melting butter, whisking in flour, then gradually adding milk, stirring until thick. Mix ricotta with eggs, Parmesan, salt, and pepper. Preheat oven to 375°F (190°C). Layer meat sauce, noodles, ricotta mixture, béchamel, and mozzarella. Repeat layers ending with mozzarella on top. Cover with foil and bake 45 minutes. Uncover and bake 15 more minutes until bubbly and golden."
      },
      {
        "name": "Baked Ziti",
        "servings": "8 servings",
        "ingredients": [
          "500 g (1 lb) ziti or penne",
          "500 g (1 lb) ground beef or Italian sausage",
          "1 onion, diced",
          "4 garlic cloves, minced",
          "1 can (28 oz) crushed tomatoes",
          "1 can (14 oz) tomato sauce",
          "450 g (16 oz) ricotta",
          "2 cups shredded mozzarella",
          "½ cup Parmesan",
          "2 tbsp olive oil",
          "Salt, pepper, Italian seasoning"
        ],
        "prep": "Preheat oven to 375°F (190°C). Cook pasta until very al dente. Brown meat with onion and garlic. Add crushed tomatoes and sauce. Season and simmer 15 minutes. Mix ricotta with half the mozzarella and all the Parmesan. In a large baking dish layer half the pasta, half the meat sauce, all the ricotta mixture, remaining pasta, remaining sauce. Top with remaining mozzarella. Bake covered 30 minutes. Uncover and bake 15 more minutes until bubbly."
      },
      {
        "name": "Mac and Cheese",
        "servings": "8 servings",
        "ingredients": [
          "500 g (1 lb) elbow macaroni",
          "4 tbsp unsalted butter",
          "¼ cup (30 g) all-purpose flour",
          "3 cups (720 ml) whole milk",
          "1 cup (240 ml) heavy cream",
          "3 cups shredded sharp cheddar",
          "1 cup shredded Gruyère",
          "1 tsp dry mustard",
          "½ tsp paprika",
          "Salt and white pepper",
          "1 cup breadcrumbs mixed with 2 tbsp melted butter for topping"
        ],
        "prep": "Preheat oven to 375°F (190°C). Cook macaroni until very al dente. Make sauce: melt butter over medium heat, whisk in flour and cook 1 minute. Gradually whisk in milk and cream until smooth. Cook until thickened. Remove from heat and stir in cheeses, mustard, paprika, salt, and pepper until smooth. Combine sauce with pasta. Pour into a greased baking dish. Top with buttered breadcrumbs. Bake 25–30 minutes until golden and bubbly."
      },
      {
        "name": "Stuffed Shells",
        "servings": "6 servings",
        "ingredients": [
          "24 jumbo pasta shells, cooked",
          "Filling: 900 g (32 oz) ricotta, 2 cups shredded mozzarella, ½ cup Parmesan, 2 eggs, 2 tbsp fresh basil, salt and pepper",
          "3 cups marinara sauce",
          "1 cup shredded mozzarella for topping"
        ],
        "prep": "Preheat oven to 375°F (190°C). Mix ricotta filling ingredients together. Spread 1 cup marinara on the bottom of a 9x13 baking dish. Fill each cooked shell with ricotta mixture using a spoon or piping bag. Place filled shells in dish. Pour remaining marinara over shells. Top with shredded mozzarella. Cover with foil and bake 30 minutes. Uncover and bake 10 more minutes until cheese is golden and bubbling."
      },
      {
        "name": "Baked Mostaccioli",
        "servings": "8 servings",
        "ingredients": [
          "500 g (1 lb) mostaccioli or penne",
          "500 g (1 lb) ground beef and sweet Italian sausage mixed",
          "1 onion, diced",
          "4 garlic cloves, minced",
          "1 can (28 oz) crushed tomatoes",
          "1 can (14 oz) tomato sauce",
          "450 g (16 oz) ricotta",
          "3 cups shredded mozzarella",
          "½ cup Parmesan",
          "Salt, pepper, Italian seasoning"
        ],
        "prep": "Preheat oven to 375°F (190°C). Cook pasta until al dente. Brown meats with onion and garlic. Add tomatoes, sauce, and seasoning. Simmer 15 minutes. Mix ricotta with 1 cup mozzarella. In a 9x13 pan layer pasta, meat sauce, ricotta mixture. Repeat. Top with remaining mozzarella and Parmesan. Bake covered 30 minutes. Uncover 15 more minutes until golden and bubbly."
      },
      {
        "name": "Cannelloni",
        "servings": "6 servings",
        "ingredients": [
          "18 cannelloni tubes or lasagna sheets rolled",
          "Filling: 500 g (1 lb) ground beef, 250 g (9 oz) ricotta, 1 egg, ½ cup Parmesan, 2 garlic cloves, spinach, salt and pepper",
          "Béchamel: 4 tbsp butter, ¼ cup flour, 2 cups milk, salt and nutmeg",
          "2 cups marinara sauce",
          "Mozzarella for topping"
        ],
        "prep": "Preheat oven to 375°F (190°C). Cook and season meat filling with garlic and spinach. Mix with ricotta, egg, and Parmesan. Make béchamel. Fill cannelloni tubes with meat mixture. Spread marinara on the bottom of a baking dish. Place filled cannelloni on top. Pour béchamel over everything. Top with mozzarella. Bake covered 30 minutes. Uncover 15 more minutes until golden."
      },
      {
        "name": "Manicotti",
        "servings": "6 servings",
        "ingredients": [
          "12 manicotti tubes, cooked",
          "Filling: 900 g (32 oz) ricotta, 2 cups mozzarella, 2 eggs, ½ cup Parmesan, fresh basil, salt and pepper",
          "3 cups marinara sauce",
          "Extra mozzarella for topping"
        ],
        "prep": "Preheat oven to 375°F (190°C). Mix filling ingredients together. Fill manicotti tubes using a piping bag. Spread 1 cup marinara on the bottom of a 9x13 baking dish. Arrange filled manicotti in dish. Pour remaining marinara over top. Sprinkle with extra mozzarella. Cover with foil and bake 35 minutes. Uncover and bake 10 more minutes."
      },
      {
        "name": "Pasta al Forno",
        "servings": "8 servings",
        "ingredients": [
          "500 g (1 lb) rigatoni",
          "500 g (1 lb) ground pork and beef mixed",
          "1 onion, diced",
          "4 garlic cloves",
          "1 can (28 oz) crushed tomatoes",
          "2 hard boiled eggs, sliced",
          "200 g (7 oz) salami, diced",
          "2 cups mozzarella",
          "½ cup Parmesan",
          "Olive oil, salt, pepper"
        ],
        "prep": "Preheat oven to 375°F (190°C). Cook pasta until very al dente. Brown meat with onion and garlic. Add tomatoes, salt, and pepper. Simmer 20 minutes. Toss pasta with sauce. Layer in a greased baking dish with salami, hard boiled eggs, and mozzarella. Top with remaining mozzarella and Parmesan. Bake 30–35 minutes until golden and bubbling."
      },
      {
        "name": "Spinach and Ricotta Baked Pasta",
        "servings": "6 servings",
        "ingredients": [
          "400 g (14 oz) penne or ziti",
          "450 g (16 oz) ricotta",
          "300 g (10.5 oz) frozen spinach, thawed and squeezed dry",
          "2 cups shredded mozzarella",
          "½ cup Parmesan",
          "2 eggs",
          "3 cups marinara sauce",
          "2 garlic cloves, minced",
          "Salt, pepper, and nutmeg"
        ],
        "prep": "Preheat oven to 375°F (190°C). Cook pasta until al dente. Mix ricotta, spinach, eggs, half the mozzarella, Parmesan, garlic, salt, pepper, and nutmeg. Toss pasta with ricotta mixture and half the marinara. Pour into a greased baking dish. Top with remaining marinara and mozzarella. Bake covered 25 minutes. Uncover 15 more minutes until golden."
      },
      {
        "name": "Four Cheese Baked Pasta",
        "servings": "6 servings",
        "ingredients": [
          "500 g (1 lb) penne or rigatoni",
          "2 cups shredded mozzarella",
          "1 cup ricotta",
          "1 cup Gruyère, grated",
          "½ cup Parmesan, grated",
          "2 cups béchamel sauce",
          "Salt, pepper, and nutmeg",
          "Breadcrumbs for topping"
        ],
        "prep": "Preheat oven to 375°F (190°C). Cook pasta until al dente. Combine all four cheeses with béchamel sauce. Season with salt, pepper, and nutmeg. Toss with pasta. Pour into a greased baking dish. Top with breadcrumbs. Bake 25–30 minutes until golden and bubbling."
      },
      {
        "name": "Baked Rigatoni with Sausage",
        "servings": "6 servings",
        "ingredients": [
          "500 g (1 lb) rigatoni",
          "500 g (1 lb) Italian sausage, casings removed",
          "1 onion, diced",
          "4 garlic cloves, minced",
          "1 can (28 oz) crushed tomatoes",
          "2 cups mozzarella, shredded",
          "½ cup Parmesan",
          "Fresh basil",
          "Olive oil, salt, pepper"
        ],
        "prep": "Preheat oven to 375°F (190°C). Cook pasta until al dente. Brown sausage with onion and garlic. Add crushed tomatoes, basil, salt and pepper. Simmer 15 minutes. Toss pasta with sauce. Pour into a greased baking dish. Top with mozzarella and Parmesan. Bake 25–30 minutes until golden and bubbling."
      },
      {
        "name": "Greek Pastitsio",
        "servings": "8 servings",
        "ingredients": [
          "500 g (1 lb) tubular pasta such as penne or bucatini",
          "500 g (1 lb) ground beef or lamb",
          "1 onion, diced",
          "4 garlic cloves",
          "1 can (28 oz) crushed tomatoes",
          "1 tsp cinnamon",
          "½ tsp allspice",
          "Béchamel: 4 tbsp butter, ¼ cup flour, 2 cups milk, 2 eggs, ½ cup Parmesan, salt and nutmeg"
        ],
        "prep": "Preheat oven to 375°F (190°C). Brown meat with onion and garlic. Add crushed tomatoes, cinnamon, allspice, salt and pepper. Simmer 20 minutes. Cook pasta and toss with half the meat sauce. Layer pasta in a greased baking dish. Top with remaining meat sauce. Make béchamel with eggs and Parmesan and pour over top. Bake 45 minutes until golden."
      },
      {
        "name": "Tuna Noodle Casserole",
        "servings": "6 servings",
        "ingredients": [
          "400 g (14 oz) egg noodles",
          "2 cans (5 oz each) tuna, drained",
          "1 can (10 oz) cream of mushroom soup",
          "1 cup (240 ml) milk",
          "1 cup frozen peas",
          "1½ cups shredded cheddar",
          "½ cup sour cream",
          "Salt and pepper",
          "1 cup crushed crackers or breadcrumbs mixed with 2 tbsp butter"
        ],
        "prep": "Preheat oven to 375°F (190°C). Cook noodles until al dente. Mix cream of mushroom soup, milk, sour cream, tuna, peas, and 1 cup cheddar. Season with salt and pepper. Toss with noodles. Pour into a greased baking dish. Top with remaining cheddar and buttered cracker crumbs. Bake 25–30 minutes until golden and bubbly."
      },
      {
        "name": "Pastitsio with Lamb",
        "servings": "8 servings",
        "ingredients": [
          "500 g (1 lb) ziti",
          "500 g (1 lb) ground lamb",
          "1 onion, diced",
          "4 garlic cloves",
          "1 can (28 oz) crushed tomatoes",
          "1 tsp cinnamon",
          "½ tsp cumin",
          "Béchamel: 4 tbsp butter, ¼ cup flour, 2 cups milk, 2 eggs beaten, ½ cup Kefalotyri or Parmesan, salt and nutmeg"
        ],
        "prep": "Preheat oven to 375°F (190°C). Brown lamb with onion and garlic. Add tomatoes, cinnamon, and cumin. Simmer 20 minutes. Cook pasta and layer in a greased baking dish. Pour meat sauce over pasta. Make béchamel, stir in eggs and cheese, and pour over top. Bake 40–45 minutes until golden."
      },
      {
        "name": "Lasagna Rolls",
        "servings": "6 servings",
        "ingredients": [
          "12 lasagna noodles, cooked",
          "Filling: 450 g (16 oz) ricotta, 2 cups mozzarella, 2 eggs, ½ cup Parmesan, 2 tbsp fresh basil, salt and pepper",
          "3 cups marinara sauce",
          "Extra mozzarella for topping"
        ],
        "prep": "Preheat oven to 375°F (190°C). Mix filling ingredients. Spread filling on each cooked lasagna noodle and roll up tightly. Pour 1 cup marinara in a baking dish. Place rolls seam side down. Pour remaining marinara over top. Cover with mozzarella. Bake covered 25 minutes. Uncover and bake 10 more minutes until golden."
      }
    ]
  },
  {
    "id": "filledPasta",
    "icon": "🥟",
    "name": "Filled Pasta",
    "recipes": [
      {
        "name": "Cheese Ravioli",
        "servings": "4 servings",
        "ingredients": [
          "Dough: 2 cups (240 g) all-purpose flour, 3 large eggs, 1 tbsp olive oil, pinch of salt",
          "Filling: 450 g (16 oz) ricotta, 1 cup mozzarella shredded, ½ cup Parmesan, 1 egg, salt and pepper and fresh basil",
          "Sauce: 2 cups marinara or brown butter with sage"
        ],
        "prep": "Make pasta dough by mounding flour and forming a well. Add eggs, oil, and salt. Mix until dough forms. Knead 10 minutes until smooth and elastic. Rest 30 minutes wrapped. Roll out thin using a pasta machine or rolling pin. Place small mounds of filling 2 inches apart on one sheet. Brush between filling with water. Place second sheet on top and press firmly around filling. Cut into squares with a pastry wheel. Cook in salted boiling water 3–4 minutes until they float and are tender."
      },
      {
        "name": "Butternut Squash Ravioli",
        "servings": "4 servings",
        "ingredients": [
          "Pasta dough (see Cheese Ravioli recipe)",
          "Filling: 2 cups roasted butternut squash, mashed, 2 tbsp Parmesan, 1 tbsp ricotta, pinch nutmeg, salt and pepper",
          "Sauce: ½ cup (115 g) butter, 8 fresh sage leaves, ¼ cup Parmesan, black pepper"
        ],
        "prep": "Make pasta dough and rest. Roast squash at 400°F until tender, scoop out and mash with Parmesan, ricotta, nutmeg, salt and pepper. Roll and fill pasta dough as in cheese ravioli recipe. Cook ravioli in salted boiling water 3–4 minutes. Make brown butter sauce by cooking butter with sage leaves until butter turns golden and nutty. Toss ravioli with brown butter and sage. Top with Parmesan and black pepper."
      },
      {
        "name": "Spinach and Ricotta Ravioli",
        "servings": "4 servings",
        "ingredients": [
          "Pasta dough (see Cheese Ravioli recipe)",
          "Filling: 450 g (16 oz) ricotta, 300 g (10.5 oz) frozen spinach thawed and squeezed dry, 1 egg, ½ cup Parmesan, pinch nutmeg, salt and pepper",
          "2 cups marinara or brown butter sauce"
        ],
        "prep": "Make pasta dough and rest 30 minutes. Mix spinach filling ingredients together. Roll dough thin and fill as in cheese ravioli recipe. Cook in salted boiling water 3–4 minutes until tender. Serve with marinara or brown butter."
      },
      {
        "name": "Potato Gnocchi",
        "servings": "4 servings",
        "ingredients": [
          "1 kg (2.2 lbs) russet potatoes",
          "1¼ cups (150 g) all-purpose flour",
          "1 large egg",
          "1 tsp salt",
          "Sauce of choice — marinara, pesto, or brown butter"
        ],
        "prep": "Boil potatoes in their skins until fully tender. Peel while hot and rice or mash until completely smooth — no lumps. Spread on a work surface and let steam dry 5 minutes. Make a well and add egg, flour, and salt. Gently fold together until just combined — do not overwork or gnocchi will be tough. Roll into ropes and cut into 1-inch pieces. Press each with a fork if desired. Cook in salted boiling water until they float plus 30 more seconds. Serve with sauce of choice."
      },
      {
        "name": "Ricotta Gnocchi",
        "servings": "4 servings",
        "ingredients": [
          "450 g (16 oz) whole milk ricotta, drained",
          "1 large egg",
          "1 cup (120 g) all-purpose flour",
          "½ cup Parmesan, grated",
          "½ tsp salt",
          "Pinch of nutmeg",
          "Brown butter and sage or marinara to serve"
        ],
        "prep": "Mix ricotta, egg, Parmesan, salt, and nutmeg until combined. Add flour and gently fold until soft dough forms. On a floured surface roll into ropes and cut into 1-inch pieces. Flour lightly and set aside. Cook in salted boiling water until they float plus 30 seconds. Serve immediately with brown butter and sage or marinara sauce."
      },
      {
        "name": "Tortellini in Broth",
        "servings": "4 servings",
        "ingredients": [
          "Dough: 2 cups flour, 3 eggs, 1 tbsp olive oil, pinch salt",
          "Filling: 200 g (7 oz) ground pork, 50 g (1.8 oz) prosciutto finely chopped, 50 g (1.8 oz) Parmesan grated, 1 egg, pinch nutmeg, salt and pepper",
          "6 cups (1.4 L) good quality chicken or beef broth",
          "Extra Parmesan for serving"
        ],
        "prep": "Make pasta dough and rest 30 minutes. Cook pork until browned. Combine with prosciutto, Parmesan, egg, nutmeg, salt, and pepper. Roll dough thin and cut into small circles about 2 inches diameter. Place a small mound of filling in the center of each. Fold into a half moon, pressing edges. Wrap around your finger and press ends together. Cook in simmering broth 3–4 minutes. Serve in hot broth with Parmesan."
      },
      {
        "name": "Homemade Egg Pasta Dough",
        "servings": "4 servings",
        "ingredients": [
          "2 cups (240 g) all-purpose flour or 00 pasta flour",
          "3 large eggs",
          "1 tbsp extra virgin olive oil",
          "Pinch of salt"
        ],
        "prep": "Mound flour on a clean work surface and create a well in the center. Crack eggs into the well. Add olive oil and salt. Using a fork, gently beat the eggs while gradually incorporating flour from the inner wall of the well. Once dough is shaggy, use your hands and knead vigorously 10 minutes until smooth, soft, and elastic. Wrap in plastic wrap and rest at room temperature 30 minutes before rolling."
      },
      {
        "name": "Pumpkin Gnocchi",
        "servings": "4 servings",
        "ingredients": [
          "500 g (1 lb) pumpkin or butternut squash, roasted and mashed",
          "1 cup (120 g) all-purpose flour",
          "1 egg",
          "½ cup Parmesan, grated",
          "Pinch nutmeg and cinnamon",
          "Salt and pepper",
          "Sage brown butter to serve"
        ],
        "prep": "Roast squash at 400°F until tender. Scoop and mash until smooth. Cool completely. Mix with egg, Parmesan, nutmeg, cinnamon, salt and pepper. Add flour gradually until soft dough forms. Roll into ropes and cut into pieces. Cook in salted boiling water until they float. Serve with sage brown butter."
      },
      {
        "name": "Cheese Tortelloni",
        "servings": "4 servings",
        "ingredients": [
          "Pasta dough (see egg pasta dough recipe)",
          "Filling: 450 g (16 oz) ricotta, 1 cup Parmesan, 1 egg, fresh basil, salt, pepper, and nutmeg",
          "2 cups marinara or cream sauce"
        ],
        "prep": "Make pasta dough and rest. Mix filling ingredients. Roll dough thin and cut into 3-inch squares. Place filling in center. Fold diagonally into a triangle and press edges. Wrap corners around finger and press together forming a ring shape. Cook in salted boiling water 4–5 minutes. Serve with marinara or cream sauce."
      },
      {
        "name": "Spinach Gnocchi",
        "servings": "4 servings",
        "ingredients": [
          "1 kg (2.2 lbs) russet potatoes, boiled and riced",
          "200 g (7 oz) frozen spinach, thawed, squeezed very dry, and finely chopped",
          "1¼ cups (150 g) flour",
          "1 large egg",
          "½ cup Parmesan",
          "Salt, pepper, and nutmeg"
        ],
        "prep": "Mix riced potatoes, spinach, egg, Parmesan, salt, pepper, and nutmeg. Add flour and gently combine until dough forms. Roll into ropes and cut into pieces. Cook in salted boiling water until they float plus 30 seconds. Toss with butter and Parmesan or marinara sauce."
      },
      {
        "name": "Lobster Ravioli",
        "servings": "4 servings",
        "ingredients": [
          "Pasta dough (see egg pasta recipe)",
          "Filling: 200 g (7 oz) cooked lobster meat chopped, 200 g (7 oz) ricotta, 2 tbsp Parmesan, 1 tbsp fresh chives, salt and pepper",
          "Sauce: 1 cup heavy cream, 2 tbsp butter, 2 shallots minced, ½ cup white wine, fresh tarragon, salt and pepper"
        ],
        "prep": "Make pasta dough and rest. Mix lobster filling. Roll and fill ravioli as in cheese ravioli recipe. Make sauce by cooking shallots in butter. Add wine and reduce. Add cream and simmer until thickened. Add tarragon, salt, and pepper. Cook ravioli in salted boiling water 3–4 minutes. Serve with cream sauce."
      },
      {
        "name": "Meat Ravioli",
        "servings": "4 servings",
        "ingredients": [
          "Pasta dough (see egg pasta recipe)",
          "Filling: 300 g (10.5 oz) ground beef, 100 g (3.5 oz) ricotta, ½ cup Parmesan, 1 egg, 2 garlic cloves, fresh parsley, salt and pepper",
          "2 cups Bolognese or marinara sauce"
        ],
        "prep": "Brown ground beef with garlic. Cool completely. Mix with ricotta, Parmesan, egg, parsley, salt and pepper. Make pasta dough and rest. Roll and fill ravioli. Cook in salted boiling water 4–5 minutes. Serve with Bolognese or marinara."
      },
      {
        "name": "Pan Fried Gnocchi",
        "servings": "4 servings",
        "ingredients": [
          "1 batch potato gnocchi (see recipe above)",
          "3 tbsp unsalted butter",
          "2 tbsp olive oil",
          "4 garlic cloves, minced",
          "Fresh sage leaves",
          "Salt and pepper",
          "Parmesan for serving"
        ],
        "prep": "Make gnocchi as in the potato gnocchi recipe. Cook in boiling salted water until they float. Drain. Heat butter and olive oil in a large skillet over medium-high heat until butter foams. Add gnocchi in a single layer. Cook undisturbed 2–3 minutes until golden and crispy on one side. Flip and cook 2 more minutes. Add garlic and sage and cook 1 minute. Season with salt and pepper. Serve with Parmesan."
      },
      {
        "name": "Four Cheese Ravioli",
        "servings": "4 servings",
        "ingredients": [
          "Pasta dough (see egg pasta recipe)",
          "Filling: 225 g (8 oz) ricotta, ½ cup mozzarella shredded, ¼ cup Gruyère grated, ¼ cup Parmesan grated, 1 egg, fresh basil, salt and pepper",
          "Brown butter and sage to serve"
        ],
        "prep": "Make pasta dough and rest. Mix all four cheeses with egg, basil, salt and pepper. Roll and fill ravioli. Cook in salted boiling water 3–4 minutes. Brown butter with sage in a skillet until nutty and golden. Toss ravioli with brown butter and sage. Top with extra Parmesan."
      },
      {
        "name": "Pierogi",
        "servings": "~24 pierogis",
        "ingredients": [
          "Dough: 2 cups flour, ½ cup sour cream, 1 egg, ½ tsp salt",
          "Filling: 2 cups mashed potatoes, 1 cup shredded cheddar, 1 onion caramelized, salt and pepper",
          "Topping: Butter, caramelized onions, and sour cream"
        ],
        "prep": "Make dough by mixing flour, sour cream, egg, and salt until soft dough forms. Rest 30 minutes. Mix potato filling. Roll dough thin and cut into 3-inch circles. Fill each with potato mixture, fold over, and press edges firmly. Cook in salted boiling water 3–4 minutes until they float. Pan fry in butter until golden on both sides. Serve with caramelized onions and sour cream."
      }
    ]
  },
  {
    "id": "asianNoodles",
    "icon": "🍜",
    "name": "Asian Noodles",
    "recipes": [
      {
        "name": "Pad Thai",
        "servings": "4 servings",
        "ingredients": [
          "400 g (14 oz) flat rice noodles",
          "300 g (10.5 oz) large shrimp or chicken, sliced",
          "3 large eggs",
          "3 garlic cloves, minced",
          "3 green onions, sliced",
          "1 cup (150 g) bean sprouts",
          "¼ cup (35 g) roasted peanuts, crushed",
          "Sauce: 3 tbsp fish sauce, 2 tbsp tamarind paste, 2 tbsp sugar, 1 tbsp oyster sauce",
          "2 tbsp vegetable oil",
          "Lime wedges and cilantro to serve"
        ],
        "prep": "Soak rice noodles in warm water 30 minutes until pliable. Drain. Mix all sauce ingredients together. Heat oil in a wok over high heat. Cook shrimp or chicken until cooked through. Push to the side. Add eggs and scramble. Add garlic and noodles and toss. Pour sauce over and stir fry until noodles absorb sauce. Add bean sprouts and green onions. Toss briefly. Serve topped with crushed peanuts, lime wedges, and cilantro."
      },
      {
        "name": "Lo Mein",
        "servings": "4 servings",
        "ingredients": [
          "400 g (14 oz) lo mein or egg noodles",
          "300 g (10.5 oz) chicken, beef, or shrimp",
          "2 cups mixed vegetables — cabbage, carrots, bell peppers, mushrooms",
          "3 garlic cloves, minced",
          "1 tbsp fresh ginger, grated",
          "Sauce: 3 tbsp soy sauce, 2 tbsp oyster sauce, 1 tbsp sesame oil, 1 tsp sugar, ½ tsp white pepper",
          "2 tbsp vegetable oil"
        ],
        "prep": "Cook noodles according to package. Drain and toss with 1 tsp sesame oil to prevent sticking. Mix sauce ingredients. Heat oil in a wok over high heat. Cook protein until cooked through. Add garlic and ginger and cook 30 seconds. Add vegetables and stir fry 3 minutes. Add noodles and sauce. Toss everything together over high heat 2 minutes until noodles are heated through and sauce coats everything."
      },
      {
        "name": "Ramen",
        "servings": "4 servings",
        "ingredients": [
          "4 portions ramen noodles",
          "Broth: 6 cups chicken broth, 4 tbsp soy sauce, 2 tbsp miso paste, 1 tbsp sesame oil, 2 garlic cloves, 1 tbsp fresh ginger",
          "Toppings: 4 soft boiled eggs halved, chashu pork or chicken, nori sheets, corn, bamboo shoots, green onions, bean sprouts, sesame seeds"
        ],
        "prep": "Make broth by combining chicken broth, soy sauce, miso, sesame oil, garlic, and ginger in a pot. Simmer 20 minutes. Strain. Cook ramen noodles according to package. Divide noodles into bowls. Pour hot broth over noodles. Top with soft boiled eggs, meat, nori, corn, bamboo shoots, green onions, and bean sprouts. Drizzle with sesame oil."
      },
      {
        "name": "Udon Noodle Soup",
        "servings": "4 servings",
        "ingredients": [
          "400 g (14 oz) fresh or dried udon noodles",
          "6 cups dashi or chicken broth",
          "3 tbsp soy sauce",
          "2 tbsp mirin",
          "1 tbsp sugar",
          "Toppings: tempura, green onions, fish cake, soft boiled egg, nori"
        ],
        "prep": "Bring broth to a boil. Add soy sauce, mirin, and sugar. Simmer 5 minutes. Cook udon noodles according to package. Divide noodles into bowls. Pour broth over noodles. Add toppings of choice. Serve hot."
      },
      {
        "name": "Cold Soba Noodles",
        "servings": "4 servings",
        "ingredients": [
          "400 g (14 oz) soba noodles",
          "Dipping sauce: 1 cup dashi, 4 tbsp soy sauce, 2 tbsp mirin, 1 tbsp sugar",
          "Toppings: green onions, wasabi, grated daikon, sesame seeds, nori strips"
        ],
        "prep": "Cook soba noodles according to package. Drain and rinse under cold running water until completely cold. Drain well. Make dipping sauce by combining dashi, soy sauce, mirin, and sugar. Heat briefly until sugar dissolves. Cool. Serve cold soba noodles on a bamboo mat or plate with small bowls of dipping sauce and condiments on the side."
      },
      {
        "name": "Beef Chow Mein",
        "servings": "4 servings",
        "ingredients": [
          "400 g (14 oz) chow mein noodles",
          "300 g (10.5 oz) beef sirloin, thinly sliced",
          "2 cups cabbage, shredded",
          "2 carrots, julienned",
          "3 garlic cloves, minced",
          "2 green onions, sliced",
          "Sauce: 3 tbsp soy sauce, 2 tbsp oyster sauce, 1 tbsp sesame oil, 1 tsp cornstarch, ½ tsp sugar",
          "2 tbsp vegetable oil"
        ],
        "prep": "Cook noodles and drain. Marinate beef with 1 tbsp soy sauce and cornstarch 15 minutes. Mix remaining sauce ingredients. Heat oil in a wok over very high heat. Cook beef quickly until browned. Remove. Add garlic and vegetables and stir fry 3 minutes. Add noodles and sauce. Return beef. Toss everything over high heat until heated through and sauce is absorbed."
      },
      {
        "name": "Japchae Korean Glass Noodles",
        "servings": "4 servings",
        "ingredients": [
          "200 g (7 oz) sweet potato glass noodles (dangmyeon)",
          "200 g (7 oz) beef or mushrooms, thinly sliced",
          "2 cups spinach, blanched",
          "1 cup carrots, julienned",
          "1 cup bell pepper, julienned",
          "3 garlic cloves, minced",
          "Sauce: 4 tbsp soy sauce, 2 tbsp sesame oil, 1 tbsp sugar",
          "Sesame seeds to garnish"
        ],
        "prep": "Soak noodles in hot water 30 minutes. Drain and cut into 6-inch lengths. Mix sauce ingredients. Cook beef with garlic and half the sauce. Cook each vegetable separately in a little sesame oil. Cook noodles in boiling water 5 minutes. Drain. Toss noodles with remaining sauce. Combine everything together and toss gently. Garnish with sesame seeds."
      },
      {
        "name": "Sesame Noodles",
        "servings": "4 servings",
        "ingredients": [
          "400 g (14 oz) thin Chinese wheat noodles or spaghetti",
          "Sauce: 4 tbsp tahini or sesame paste, 3 tbsp soy sauce, 2 tbsp rice vinegar, 1 tbsp sesame oil, 1 tbsp honey, 2 garlic cloves minced, 1 tbsp fresh ginger, 2–3 tbsp hot water to thin",
          "Toppings: cucumber julienned, green onions, sesame seeds, red pepper flakes"
        ],
        "prep": "Cook noodles according to package. Drain and rinse under cold water. Drain well. Whisk all sauce ingredients together, adding hot water to reach a pourable consistency. Toss noodles with sauce until well coated. Top with cucumber, green onions, sesame seeds, and red pepper flakes. Serve at room temperature or chilled."
      },
      {
        "name": "Pad See Ew",
        "servings": "4 servings",
        "ingredients": [
          "400 g (14 oz) wide flat rice noodles",
          "300 g (10.5 oz) chicken or beef, sliced",
          "3 large eggs",
          "2 cups Chinese broccoli or broccoli, cut up",
          "3 garlic cloves, minced",
          "Sauce: 3 tbsp oyster sauce, 2 tbsp soy sauce, 1 tbsp dark soy sauce, 1 tsp sugar",
          "2 tbsp vegetable oil"
        ],
        "prep": "Soak noodles in warm water 30 minutes. Drain. Mix sauce. Heat oil in a wok over very high heat. Cook protein until cooked through. Push to the side. Add eggs and cook until mostly set then scramble together with protein. Add garlic and broccoli and cook 2 minutes. Add noodles and sauce. Toss everything over high heat until noodles absorb sauce and have a slight char."
      },
      {
        "name": "Shrimp Fried Rice Noodles",
        "servings": "4 servings",
        "ingredients": [
          "400 g (14 oz) rice vermicelli noodles",
          "300 g (10.5 oz) large shrimp, peeled",
          "3 eggs, beaten",
          "2 cups bean sprouts",
          "3 green onions, sliced",
          "3 garlic cloves, minced",
          "Sauce: 3 tbsp soy sauce, 1 tbsp fish sauce, 1 tsp sesame oil, 1 tsp sugar",
          "2 tbsp vegetable oil"
        ],
        "prep": "Soak vermicelli noodles in hot water 10 minutes. Drain. Mix sauce. Heat oil in a wok over high heat. Cook shrimp until pink. Remove. Add eggs and scramble. Add garlic and cook 30 seconds. Add noodles and sauce and stir fry 2 minutes. Return shrimp. Add bean sprouts and green onions. Toss briefly over high heat."
      },
      {
        "name": "Dan Dan Noodles",
        "servings": "4 servings",
        "ingredients": [
          "400 g (14 oz) thin Chinese wheat noodles",
          "300 g (10.5 oz) ground pork",
          "3 garlic cloves, minced",
          "1 tbsp Sichuan peppercorns, toasted and ground",
          "Sauce: 4 tbsp tahini, 3 tbsp soy sauce, 2 tbsp chili oil, 1 tbsp rice vinegar, 1 tbsp sesame oil, 1 tsp sugar, 2 garlic cloves",
          "Toppings: green onions, crushed peanuts, chili oil"
        ],
        "prep": "Cook noodles and drain. Brown pork with garlic and Sichuan pepper. Whisk sauce ingredients together with a splash of pasta water until creamy. Divide sauce into bowls. Top with noodles. Add pork and garnish with green onions, peanuts, and chili oil. Toss before eating."
      },
      {
        "name": "Yaki Udon",
        "servings": "4 servings",
        "ingredients": [
          "400 g (14 oz) fresh or dried udon noodles",
          "300 g (10.5 oz) pork belly or chicken, thinly sliced",
          "2 cups cabbage, shredded",
          "1 cup carrots, julienned",
          "3 green onions, sliced",
          "Sauce: 3 tbsp soy sauce, 2 tbsp oyster sauce, 1 tbsp mirin, 1 tsp sesame oil, 1 tsp sugar",
          "2 tbsp vegetable oil",
          "Bonito flakes and pickled ginger to serve"
        ],
        "prep": "Cook udon noodles and drain. Mix sauce ingredients. Heat oil in a wok over high heat. Cook pork until golden. Add cabbage and carrots and stir fry 3 minutes. Add noodles and sauce. Toss over high heat 2 minutes until everything is coated. Add green onions. Serve topped with bonito flakes and pickled ginger."
      },
      {
        "name": "Cold Ramen Salad",
        "servings": "4 servings",
        "ingredients": [
          "4 portions ramen noodles, cooked and chilled",
          "2 cups cucumber, julienned",
          "2 cups shredded rotisserie chicken",
          "1 cup shredded carrots",
          "3 green onions, sliced",
          "Dressing: 4 tbsp soy sauce, 2 tbsp rice vinegar, 1 tbsp sesame oil, 1 tbsp honey, 1 tbsp ginger, 2 garlic cloves",
          "Sesame seeds and crushed peanuts"
        ],
        "prep": "Cook ramen noodles and rinse under cold water until completely cold. Drain well. Whisk dressing ingredients. Toss cold noodles with dressing. Top with cucumber, chicken, carrots, and green onions. Garnish with sesame seeds and crushed peanuts. Serve chilled."
      }
    ]
  },
  {
    "id": "pastaSauces",
    "icon": "🫙",
    "name": "Pasta Sauces",
    "recipes": [
      {
        "name": "Classic Marinara",
        "servings": "4 cups",
        "ingredients": [
          "2 cans (28 oz each) San Marzano crushed tomatoes",
          "6 garlic cloves, minced",
          "¼ cup (60 ml) extra virgin olive oil",
          "1 tsp dried oregano",
          "½ tsp red pepper flakes",
          "1 tsp sugar",
          "Fresh basil leaves",
          "Salt and black pepper"
        ],
        "prep": "Heat olive oil in a large saucepan over medium heat. Add garlic and red pepper flakes and cook until golden — about 2 minutes. Add crushed tomatoes, oregano, sugar, salt and pepper. Bring to a simmer. Cook uncovered over medium-low heat 25–30 minutes stirring occasionally until sauce thickens and deepens in color. Remove from heat and stir in fresh basil. Adjust seasoning."
      },
      {
        "name": "Bolognese Sauce",
        "servings": "6 servings",
        "ingredients": [
          "300 g (10.5 oz) ground beef",
          "150 g (5.3 oz) ground pork",
          "150 g (5.3 oz) pancetta, finely diced",
          "1 onion, finely diced",
          "2 carrots, finely diced",
          "2 celery stalks, finely diced",
          "4 garlic cloves, minced",
          "1 cup (240 ml) dry red wine",
          "1 cup (240 ml) whole milk",
          "2 cans (28 oz) crushed tomatoes",
          "2 tbsp tomato paste",
          "3 tbsp olive oil",
          "Salt, pepper, and fresh bay leaf"
        ],
        "prep": "Heat olive oil over medium heat. Cook pancetta until fat renders. Add onion, carrot, and celery and cook 10 minutes until very soft. Add garlic and cook 1 minute. Add ground meats and cook until browned breaking up lumps. Add wine and cook until evaporated. Add milk and cook until absorbed. Add tomatoes, paste, and bay leaf. Simmer on very low heat uncovered 2–3 hours stirring occasionally."
      },
      {
        "name": "Classic Pesto",
        "servings": "1 cup",
        "ingredients": [
          "2 cups fresh basil leaves, packed",
          "½ cup (50 g) Parmesan, grated",
          "⅓ cup (80 ml) extra virgin olive oil",
          "⅓ cup (45 g) pine nuts or walnuts, toasted",
          "3 garlic cloves",
          "½ tsp salt",
          "¼ tsp black pepper",
          "Juice of ½ lemon"
        ],
        "prep": "Toast pine nuts in a dry pan until lightly golden — watch carefully. Add basil, garlic, and pine nuts to a food processor. Pulse until roughly chopped. With processor running slowly pour in olive oil until well combined. Transfer to a bowl and stir in Parmesan, lemon juice, salt and pepper. Adjust consistency with more olive oil if needed."
      },
      {
        "name": "Alfredo Sauce",
        "servings": "4 servings",
        "ingredients": [
          "1 cup (226 g) unsalted butter",
          "1½ cups (360 ml) heavy cream",
          "2 cups (200 g) Parmesan, finely grated",
          "3 garlic cloves, minced",
          "Salt and white pepper",
          "Fresh parsley"
        ],
        "prep": "Melt butter in a saucepan over medium-low heat. Add garlic and cook 1 minute — do not brown. Add heavy cream and simmer gently 5 minutes until slightly thickened. Remove from heat and stir in Parmesan until fully melted and smooth. Season with salt and white pepper. Use immediately tossed with pasta."
      },
      {
        "name": "Arrabbiata Sauce",
        "servings": "4 cups",
        "ingredients": [
          "2 cans (28 oz) crushed tomatoes",
          "6 garlic cloves, minced",
          "1–2 tsp red pepper flakes (adjust to heat preference)",
          "¼ cup (60 ml) extra virgin olive oil",
          "Fresh flat-leaf parsley",
          "Salt and black pepper"
        ],
        "prep": "Heat olive oil in a saucepan over medium heat. Add garlic and red pepper flakes and cook 2 minutes until golden. Add crushed tomatoes, salt, and pepper. Simmer 20–25 minutes until thickened. Stir in fresh parsley. Taste and adjust heat with more red pepper flakes if desired."
      },
      {
        "name": "Vodka Sauce",
        "servings": "4 cups",
        "ingredients": [
          "1 can (28 oz) crushed tomatoes",
          "4 tbsp unsalted butter",
          "4 garlic cloves, minced",
          "½ tsp red pepper flakes",
          "¼ cup (60 ml) vodka",
          "1 cup (240 ml) heavy cream",
          "½ cup Parmesan",
          "Fresh basil",
          "Salt and pepper"
        ],
        "prep": "Melt butter in a saucepan over medium heat. Add garlic and red pepper flakes and cook 1 minute. Add vodka and cook until mostly evaporated, about 2 minutes. Add crushed tomatoes and simmer 15 minutes. Stir in cream and simmer 5 more minutes. Stir in Parmesan. Season with salt and pepper. Add fresh basil."
      },
      {
        "name": "Sun-Dried Tomato Pesto",
        "servings": "1 cup",
        "ingredients": [
          "1 cup (170 g) sun-dried tomatoes in oil, drained",
          "½ cup Parmesan, grated",
          "¼ cup (35 g) pine nuts or almonds, toasted",
          "3 garlic cloves",
          "¼ cup (60 ml) extra virgin olive oil",
          "Fresh basil",
          "Salt, pepper, and red pepper flakes"
        ],
        "prep": "Add sun-dried tomatoes, garlic, pine nuts, and basil to a food processor. Pulse until finely chopped. With motor running add olive oil until smooth paste forms. Transfer to bowl and stir in Parmesan. Season with salt, pepper, and red pepper flakes."
      },
      {
        "name": "Walnut Sauce",
        "servings": "4 servings",
        "ingredients": [
          "1½ cups (150 g) walnuts, toasted",
          "½ cup (120 ml) heavy cream or whole milk",
          "2 garlic cloves",
          "¼ cup Parmesan, grated",
          "2 tbsp olive oil",
          "Salt, pepper, and nutmeg"
        ],
        "prep": "Soak walnuts in warm water 30 minutes if desired for milder flavor. Drain. Blend walnuts, garlic, cream, olive oil, and Parmesan in a food processor until smooth. Season with salt, pepper, and nutmeg. Thin with pasta water as needed when tossing with pasta."
      },
      {
        "name": "Crab Sauce",
        "servings": "4 servings",
        "ingredients": [
          "300 g (10.5 oz) fresh or canned crab meat",
          "4 garlic cloves, minced",
          "1 cup (240 ml) dry white wine",
          "½ cup (120 ml) heavy cream",
          "4 tbsp butter",
          "2 tbsp olive oil",
          "Fresh parsley and chives",
          "Red pepper flakes",
          "Salt and pepper"
        ],
        "prep": "Heat olive oil and butter in a skillet over medium heat. Add garlic and red pepper flakes and cook 1 minute. Add white wine and reduce by half. Add cream and simmer 5 minutes. Add crab meat and heat through gently. Season with salt, pepper, and fresh herbs."
      },
      {
        "name": "Lemon Butter Sauce",
        "servings": "4 servings",
        "ingredients": [
          "½ cup (115 g) unsalted butter",
          "4 garlic cloves, minced",
          "Juice and zest of 2 lemons",
          "½ cup pasta water",
          "¼ cup Parmesan, grated",
          "Fresh parsley",
          "Salt and pepper"
        ],
        "prep": "Melt butter in a skillet over medium heat. Add garlic and cook 1 minute. Add lemon juice and zest. Add pasta water and simmer 2 minutes. Remove from heat and stir in Parmesan. Season with salt and pepper. Toss with hot cooked pasta."
      },
      {
        "name": "Roasted Red Pepper Sauce",
        "servings": "4 cups",
        "ingredients": [
          "4 large red bell peppers, roasted and peeled",
          "4 garlic cloves",
          "½ cup heavy cream",
          "2 tbsp olive oil",
          "½ tsp smoked paprika",
          "Fresh basil",
          "Salt and pepper"
        ],
        "prep": "Roast peppers directly over flame or under broiler until charred on all sides. Place in a covered bowl 15 minutes. Peel, seed, and roughly chop. Blend roasted peppers, garlic, cream, olive oil, paprika, salt and pepper until smooth. Heat in a saucepan over medium heat 5 minutes. Stir in fresh basil. Adjust seasoning."
      },
      {
        "name": "Mushroom Ragu",
        "servings": "4 servings",
        "ingredients": [
          "500 g (1 lb) mixed mushrooms — cremini, shiitake, porcini",
          "1 onion, finely diced",
          "4 garlic cloves, minced",
          "½ cup (120 ml) dry red wine",
          "1 cup (240 ml) vegetable or chicken broth",
          "1 can (14 oz) crushed tomatoes",
          "3 tbsp olive oil",
          "Fresh thyme and rosemary",
          "Salt and pepper",
          "Parmesan for serving"
        ],
        "prep": "Heat olive oil over medium-high heat. Add mushrooms in a single layer and cook without stirring until golden, about 5 minutes. Add onion and garlic and cook until softened. Add wine and cook until evaporated. Add broth, tomatoes, thyme, and rosemary. Simmer 20 minutes until sauce thickens. Season with salt and pepper. Serve over pasta with Parmesan."
      },
      {
        "name": "Carbonara Sauce",
        "servings": "4 servings",
        "ingredients": [
          "150 g (5.3 oz) guanciale or pancetta, diced",
          "4 large egg yolks plus 1 whole egg",
          "100 g (3.5 oz) Pecorino Romano, finely grated",
          "50 g (1.8 oz) Parmesan, finely grated",
          "Freshly cracked black pepper",
          "½ cup reserved pasta water"
        ],
        "prep": "Cook guanciale in a large skillet until crispy. Remove from heat. Whisk egg yolks, whole egg, both cheeses, and plenty of black pepper together. Whisk in ¼ cup of pasta water to temper. When pasta is cooked drain reserving more pasta water. Add hot pasta to skillet with guanciale. Remove from heat. Add egg mixture and toss quickly while adding remaining pasta water until sauce is creamy and silky."
      },
      {
        "name": "Bechamel Sauce",
        "servings": "2 cups",
        "ingredients": [
          "4 tbsp (60 g) unsalted butter",
          "¼ cup (30 g) all-purpose flour",
          "2 cups (480 ml) whole milk, warmed",
          "Salt, white pepper, and freshly grated nutmeg"
        ],
        "prep": "Melt butter in a medium saucepan over medium heat. Whisk in flour and cook stirring constantly 1–2 minutes until mixture is smooth and slightly golden — this cooks out the raw flour taste. Gradually whisk in warm milk a little at a time until smooth. Continue cooking over medium heat, stirring constantly, until sauce thickens and coats the back of a spoon — about 5–7 minutes. Season with salt, white pepper, and nutmeg."
      },
      {
        "name": "Pink Sauce",
        "servings": "4 cups",
        "ingredients": [
          "1 can (28 oz) crushed tomatoes",
          "1 cup (240 ml) heavy cream",
          "4 garlic cloves, minced",
          "½ small onion, finely diced",
          "2 tbsp olive oil",
          "1 tbsp butter",
          "Salt, pepper, and red pepper flakes",
          "Fresh basil",
          "½ cup Parmesan, grated"
        ],
        "prep": "Heat olive oil and butter in a saucepan over medium heat. Cook onion until softened. Add garlic and cook 1 minute. Add crushed tomatoes and simmer 15 minutes. Stir in heavy cream and simmer 5 minutes until sauce turns a beautiful pink color. Season with salt, pepper, and red pepper flakes. Stir in Parmesan. Garnish with fresh basil."
      }
    ]
  }
];
