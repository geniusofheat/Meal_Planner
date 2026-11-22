const beverages_data = [
  {
    "id": "smoothies",
    "icon": "🍵",
    "name": "Smoothies",
    "recipes": [
      {
        "name": "Avocado Spinach Smoothie",
        "servings": "2 servings",
        "ingredients": [
          "1 ripe avocado, pitted and peeled",
          "2 cups fresh spinach",
          "1 banana, frozen",
          "1 cup coconut water",
          "Juice of 1 lemon",
          "1 tbsp honey",
          "1-inch fresh ginger",
          "½ cup ice"
        ],
        "prep": "Add coconut water to blender. Add spinach and blend smooth. Add avocado, banana, lemon juice, honey, and ginger. Add ice and blend on high 60 seconds until completely creamy. The avocado makes this smoothie incredibly silky and rich with healthy fats. It will keep you satisfied for hours. Serve immediately — avocado smoothies do not keep well."
      },
      {
        "name": "Berry Blast Smoothie",
        "servings": "2 servings",
        "ingredients": [
          "1 cup frozen blueberries",
          "1 cup frozen raspberries",
          "½ cup frozen strawberries",
          "1 banana",
          "1 cup almond milk",
          "½ cup Greek yogurt",
          "1 tbsp honey",
          "1 tbsp chia seeds"
        ],
        "prep": "Add almond milk and yogurt to blender. Add all frozen berries and banana. Add honey and chia seeds. Blend on high 60–90 seconds until completely smooth. The mixed berries create a deep purple color packed with antioxidants. Taste and adjust sweetness. Pour into glasses. Sprinkle extra chia seeds on top if desired."
      },
      {
        "name": "Blueberry Oat Smoothie",
        "servings": "1 serving",
        "ingredients": [
          "1 cup frozen blueberries",
          "½ cup rolled oats",
          "1 banana",
          "1 cup milk or oat milk",
          "½ cup Greek yogurt",
          "1 tbsp honey",
          "½ tsp cinnamon",
          "4 ice cubes"
        ],
        "prep": "Add milk and yogurt to blender. Add rolled oats and blend 30 seconds to break them down before adding other ingredients. Add frozen blueberries, banana, honey, and cinnamon. Add ice. Blend on high 60 seconds until completely smooth. The oats make this smoothie incredibly filling and give it a slightly thick oatmeal-like quality. Perfect as a breakfast replacement."
      },
      {
        "name": "Carrot Ginger Turmeric Smoothie",
        "servings": "2 servings",
        "ingredients": [
          "2 large carrots, peeled and roughly chopped",
          "1 orange, peeled and segmented",
          "1 banana, frozen",
          "1-inch fresh ginger",
          "1 tsp ground turmeric",
          "1 tbsp honey",
          "1 cup orange juice",
          "½ cup ice",
          "Black pepper pinch — activates turmeric"
        ],
        "prep": "Add orange juice to blender. Add carrots first and blend until smooth. Add orange segments, frozen banana, ginger, turmeric, honey, and a pinch of black pepper — black pepper dramatically increases turmeric absorption. Add ice. Blend on high 90 seconds until very smooth. This golden smoothie is a powerful anti-inflammatory drink. Serve immediately."
      },
      {
        "name": "Chocolate Protein Smoothie",
        "servings": "1 serving",
        "ingredients": [
          "1 scoop chocolate protein powder",
          "1 frozen banana",
          "2 tbsp almond butter",
          "1 tbsp cocoa powder",
          "1 cup oat milk or almond milk",
          "1 tbsp ground flaxseed",
          "1 tbsp honey",
          "4 ice cubes"
        ],
        "prep": "Add oat milk to blender. Add all remaining ingredients. Blend on high 60 seconds until thick and smooth. This smoothie is a complete post-workout meal with protein, healthy fats, and carbohydrates. Adjust thickness with more milk if needed. Serve immediately."
      },
      {
        "name": "Classic Strawberry Banana Smoothie",
        "servings": "2 servings",
        "ingredients": [
          "2 cups frozen strawberries",
          "1 large banana, frozen",
          "1 cup plain yogurt",
          "1 cup orange juice",
          "1 tbsp honey",
          "½ tsp vanilla extract"
        ],
        "prep": "Add orange juice and yogurt to the blender first — liquids on the bottom help the blender run smoothly. Add frozen strawberries and banana. Add honey and vanilla. Blend on high 60 seconds until completely smooth. Add a splash more orange juice if too thick. Taste and adjust sweetness. Pour into glasses and serve immediately."
      },
      {
        "name": "Coconut Mango Smoothie",
        "servings": "2 servings",
        "ingredients": [
          "2 cups frozen mango chunks",
          "1 cup full-fat coconut milk",
          "½ cup coconut yogurt or plain yogurt",
          "Juice of 1 lime",
          "1 tbsp honey",
          "½ tsp vanilla extract",
          "½ cup ice"
        ],
        "prep": "Add coconut milk and yogurt to blender. Add frozen mango, lime juice, honey, and vanilla. Add ice. Blend on high 60 seconds until thick and creamy. The full-fat coconut milk makes this incredibly rich and tropical. Taste and adjust lime or sweetness. Serve in chilled glasses. Top with toasted coconut flakes if desired."
      },
      {
        "name": "Green Detox Smoothie",
        "servings": "2 servings",
        "ingredients": [
          "2 cups fresh baby spinach",
          "1 cup frozen mango chunks",
          "1 banana",
          "1 cup coconut water",
          "Juice of 1 lime",
          "1 tbsp ground flaxseed",
          "1-inch fresh ginger, peeled",
          "½ cup ice"
        ],
        "prep": "Add coconut water to the blender first. Add spinach and blend until completely smooth before adding other ingredients — this prevents green chunks. Add mango, banana, lime juice, flaxseed, ginger, and ice. Blend on high 60 seconds until creamy. The mango and banana completely mask the taste of spinach making this a perfect way to get greens. Serve immediately."
      },
      {
        "name": "Lemon Banana Smoothie",
        "servings": "1 serving",
        "ingredients": [
          "1 large ripe banana, peeled and frozen",
          "Juice of 1 large lemon (about 3 tbsp)",
          "1 tbsp ground flaxseed",
          "1 tbsp honey or maple syrup",
          "½ cup plain Greek yogurt",
          "½ cup unsweetened almond milk or regular milk",
          "¼ tsp turmeric (optional, for anti-inflammatory boost)",
          "Pinch of ground ginger",
          "4–5 ice cubes"
        ],
        "prep": "Place the frozen banana in a blender first. Add lemon juice, ground flaxseed, honey, Greek yogurt, and almond milk. Add turmeric and ginger if using. Add ice cubes. Blend on high speed for 60 seconds until completely smooth and creamy. Taste and adjust sweetness with more honey or tartness with more lemon juice. The frozen banana gives this smoothie a thick creamy texture without any added sugar. The flaxseed adds omega-3s and fiber. Pour into a chilled glass and serve immediately."
      },
      {
        "name": "Mango Pineapple Smoothie",
        "servings": "2 servings",
        "ingredients": [
          "1 cup frozen mango chunks",
          "1 cup frozen pineapple chunks",
          "1 banana",
          "1 cup coconut milk",
          "Juice of 1 lime",
          "1 tbsp honey",
          "½ cup ice"
        ],
        "prep": "Add coconut milk to blender. Add frozen mango, pineapple, and banana. Add lime juice and honey. Blend on high 60 seconds until completely smooth. Add more coconut milk if too thick. Taste and adjust sweetness with honey or tartness with lime. Pour into glasses. Garnish with a pineapple slice if desired. Serve immediately."
      },
      {
        "name": "Peach Ginger Smoothie",
        "servings": "2 servings",
        "ingredients": [
          "2 cups frozen peach slices",
          "1 banana",
          "1 cup vanilla yogurt",
          "½ cup orange juice",
          "1-inch fresh ginger, peeled",
          "1 tbsp honey",
          "½ cup ice"
        ],
        "prep": "Add orange juice and yogurt to blender. Add frozen peaches and banana. Add ginger and honey. Add ice. Blend on high 60 seconds until smooth. The ginger adds a pleasant warmth that pairs beautifully with the sweet peach. Taste and adjust sweetness or ginger intensity. Serve immediately."
      },
      {
        "name": "Peanut Butter Banana Smoothie",
        "servings": "1 serving",
        "ingredients": [
          "1 large frozen banana",
          "2 tbsp natural peanut butter",
          "1 cup milk or oat milk",
          "1 tbsp honey",
          "½ tsp vanilla extract",
          "1 tbsp cocoa powder (optional)",
          "4 ice cubes"
        ],
        "prep": "Add milk to blender. Add frozen banana, peanut butter, honey, and vanilla. Add cocoa powder if making a chocolate version. Add ice. Blend on high 60 seconds until thick and creamy. This smoothie is filling enough to be a meal replacement. If too thick add more milk. If not thick enough add more frozen banana. Serve immediately."
      },
      {
        "name": "Raspberry Lemonade Smoothie",
        "servings": "2 servings",
        "ingredients": [
          "2 cups frozen raspberries",
          "1 banana, frozen",
          "Juice of 2 lemons",
          "2 tbsp honey",
          "1 cup water or coconut water",
          "½ cup vanilla yogurt",
          "½ cup ice"
        ],
        "prep": "Add water or coconut water and yogurt to blender. Add frozen raspberries and banana. Add lemon juice and honey. Add ice. Blend on high 60 seconds until smooth. This has the bright tart flavor of raspberry lemonade in smoothie form. Taste and adjust — add more lemon for tartness or honey for sweetness. Serve in tall glasses."
      },
      {
        "name": "Spinach Apple Smoothie",
        "servings": "2 servings",
        "ingredients": [
          "2 cups fresh spinach",
          "2 green apples, cored and chopped",
          "1 banana, frozen",
          "1 cup apple juice",
          "Juice of ½ lemon",
          "1 tbsp ground flaxseed",
          "1-inch fresh ginger",
          "½ cup ice"
        ],
        "prep": "Add apple juice to blender. Add spinach and blend until completely smooth. Add apple chunks, frozen banana, lemon juice, flaxseed, and ginger. Add ice. Blend on high 60 seconds. The green apple gives this smoothie a bright tart flavor that balances the banana. The flaxseed adds omega-3 fatty acids and fiber. Serve immediately."
      },
      {
        "name": "Watermelon Mint Smoothie",
        "servings": "2 servings",
        "ingredients": [
          "3 cups fresh watermelon, cubed and seeds removed",
          "1 cup frozen strawberries",
          "Juice of 1 lime",
          "10 fresh mint leaves",
          "1 tbsp honey",
          "1 cup ice"
        ],
        "prep": "Add watermelon and lime juice to blender and blend 30 seconds. Add frozen strawberries, mint leaves, honey, and ice. Blend on high 60 seconds until completely smooth. This is an incredibly refreshing summer smoothie. Taste and adjust sweetness or mint intensity. Serve in tall glasses over extra ice. Garnish with a sprig of mint."
      }
    ]
  },
  {
    "id": "cocktails",
    "icon": "🍸",
    "name": "Cocktails",
    "desc": "Classic shaken and stirred cocktails from the bar.",
    "recipes": [
      {
        "id": "ck1",
        "name": "Classic Martini",
        "servings": "1 serving",
        "ingredients": [
          "2½ oz gin or vodka",
          "½ oz dry vermouth",
          "Ice",
          "Lemon twist or green olive to garnish"
        ],
        "prep": "Fill a mixing glass with ice. Add gin or vodka and vermouth. Stir with a bar spoon for 30 seconds until well chilled — do not shake a martini or it will become cloudy. Strain into a chilled martini glass. Garnish with a lemon twist or olive. For a drier martini reduce the vermouth. For a dirty martini add a splash of olive brine."
      },
      {
        "id": "ck2",
        "name": "Old Fashioned",
        "servings": "1 serving",
        "ingredients": [
          "2 oz bourbon or rye whiskey",
          "1 sugar cube or 1 tsp simple syrup",
          "2 dashes Angostura bitters",
          "Large ice cube",
          "Orange peel and cherry to garnish"
        ],
        "prep": "Place sugar cube in a rocks glass and saturate with bitters. Muddle until dissolved. Add a large ice cube. Pour whiskey over. Stir gently 10–15 seconds. Express orange peel over the glass by holding it peel-side down and giving it a firm twist to release the oils. Run peel around the rim and drop in. Add a cherry to garnish."
      },
      {
        "id": "ck3",
        "name": "Negroni",
        "servings": "1 serving",
        "ingredients": [
          "1 oz gin",
          "1 oz sweet vermouth",
          "1 oz Campari",
          "Large ice cube",
          "Orange slice or peel to garnish"
        ],
        "prep": "Fill a rocks glass with a large ice cube. Pour gin, sweet vermouth, and Campari directly into the glass. Stir gently with a bar spoon for 20 seconds. Garnish with an orange slice or expressed orange peel. The Negroni is perfectly balanced — equal parts of each ingredient is essential. Do not adjust the ratios or you lose the balance."
      },
      {
        "id": "ck4",
        "name": "Whiskey Sour",
        "servings": "1 serving",
        "ingredients": [
          "2 oz bourbon",
          "¾ oz fresh lemon juice",
          "¾ oz simple syrup",
          "1 egg white (optional but recommended)",
          "Ice",
          "Cherry and orange slice to garnish"
        ],
        "prep": "If using egg white, add all ingredients to a shaker without ice and dry shake vigorously 15 seconds to emulsify. Then add ice and shake again hard for 15 seconds. If not using egg white, just add all ingredients to a shaker with ice and shake well. Strain into a rocks glass over fresh ice. Garnish with a cherry and orange slice. The egg white creates a silky texture and beautiful foam."
      },
      {
        "id": "ck5",
        "name": "Manhattan",
        "servings": "1 serving",
        "ingredients": [
          "2 oz rye or bourbon whiskey",
          "1 oz sweet vermouth",
          "2 dashes Angostura bitters",
          "Ice",
          "Maraschino cherry to garnish"
        ],
        "prep": "Fill a mixing glass with ice. Add whiskey, sweet vermouth, and bitters. Stir with a bar spoon for 30 seconds until well chilled. Strain into a chilled coupe or martini glass. Garnish with a maraschino cherry. A Manhattan is always stirred never shaken — shaking dilutes it too much and makes it cloudy."
      }
    ]
  },
  {
    "id": "margaritas",
    "icon": "🍹",
    "name": "Margaritas",
    "desc": "Classic and flavored margaritas — shaken, frozen, and on the rocks.",
    "recipes": [
      {
        "id": "mg1",
        "name": "Classic Margarita",
        "servings": "1 serving",
        "ingredients": [
          "2 oz blanco tequila",
          "1 oz Cointreau or triple sec",
          "¾ oz fresh lime juice",
          "Salt for the rim",
          "Ice",
          "Lime wheel to garnish"
        ],
        "prep": "Rub a lime wedge around the rim of a rocks glass. Dip rim in salt and set aside. Fill a cocktail shaker with ice. Add tequila, Cointreau, and fresh lime juice. Shake hard for 15 seconds until very cold. Fill glass with fresh ice. Strain margarita over ice. Garnish with a lime wheel. Always use fresh lime juice — bottled juice makes a noticeably inferior margarita."
      },
      {
        "id": "mg2",
        "name": "Strawberry Margarita",
        "servings": "1 serving",
        "ingredients": [
          "2 oz blanco tequila",
          "1 oz triple sec",
          "¾ oz fresh lime juice",
          "4 fresh strawberries or 1 oz strawberry puree",
          "1 tsp sugar",
          "Ice",
          "Salt rim optional",
          "Strawberry to garnish"
        ],
        "prep": "Muddle fresh strawberries with sugar in a shaker until broken down. Add tequila, triple sec, and lime juice. Fill with ice and shake vigorously 15 seconds. Strain over fresh ice in a salted or unsalted glass. Garnish with a fresh strawberry. For a frozen version blend all ingredients with 1 cup of ice instead of shaking."
      },
      {
        "id": "mg3",
        "name": "Frozen Margarita",
        "servings": "2 servings",
        "ingredients": [
          "3 oz blanco tequila",
          "1½ oz triple sec",
          "1½ oz fresh lime juice",
          "1 tbsp sugar",
          "2 cups ice",
          "Salt for rims",
          "Lime wheels to garnish"
        ],
        "prep": "Salt the rims of two glasses and set aside. Add tequila, triple sec, lime juice, sugar, and ice to a blender. Blend on high until completely smooth. The mixture should be thick enough to mound slightly. Pour into salted glasses. Garnish with lime wheels. If too thin add more ice and blend again. If too thick add a splash of water."
      },
      {
        "id": "mg4",
        "name": "Spicy Jalapeño Margarita",
        "servings": "1 serving",
        "ingredients": [
          "2 oz blanco tequila",
          "1 oz triple sec",
          "¾ oz fresh lime juice",
          "2–3 fresh jalapeño slices",
          "Salt or Tajin for rim",
          "Ice",
          "Jalapeño slice and lime to garnish"
        ],
        "prep": "Muddle jalapeño slices in the bottom of a shaker — 2 slices for mild, 3 for hot. Add tequila, triple sec, and lime juice. Fill with ice and shake hard 15 seconds. Double strain through a fine mesh strainer into a Tajin or salt rimmed glass over fresh ice. Garnish with a jalapeño slice and lime wheel. Double straining removes jalapeño seeds and pulp for a cleaner drink."
      },
      {
        "id": "mg5",
        "name": "Mango Margarita",
        "servings": "1 serving",
        "ingredients": [
          "2 oz blanco tequila",
          "1 oz triple sec",
          "½ oz fresh lime juice",
          "2 oz fresh mango puree or juice",
          "Tajin for rim",
          "Ice",
          "Mango slice and lime to garnish"
        ],
        "prep": "Rim a glass with Tajin by rubbing lime around the edge and dipping in Tajin. Fill shaker with ice. Add tequila, triple sec, lime juice, and mango puree. Shake vigorously 15 seconds. Strain over fresh ice in rimmed glass. Garnish with a mango slice and lime wheel. For best results use fresh ripe mango blended smooth rather than bottled mango juice."
      }
    ]
  },
  {
    "id": "mixed-drinks",
    "icon": "🥂",
    "name": "Mixed Drinks",
    "desc": "Easy and crowd-pleasing mixed drinks and highballs for any occasion.",
    "recipes": [
      {
        "id": "md1",
        "name": "Moscow Mule",
        "servings": "1 serving",
        "ingredients": [
          "2 oz vodka",
          "½ oz fresh lime juice",
          "4 oz ginger beer",
          "Ice",
          "Lime wedge and fresh mint to garnish"
        ],
        "prep": "Fill a copper mug or rocks glass with ice. Pour vodka over ice. Add fresh lime juice. Top with ginger beer — pour gently to preserve the fizz. Give it one gentle stir. Garnish with a lime wedge and a sprig of fresh mint. Use a good quality spicy ginger beer for the best flavor. The copper mug keeps the drink colder longer."
      },
      {
        "id": "md2",
        "name": "Gin and Tonic",
        "servings": "1 serving",
        "ingredients": [
          "2 oz gin",
          "4 oz tonic water",
          "Ice",
          "Lime wedge",
          "Optional: cucumber slice, rosemary sprig"
        ],
        "prep": "Fill a tall glass or wine glass with ice. Pour gin over ice. Top with tonic water — pour slowly down the side of the glass to preserve carbonation. Squeeze a lime wedge over and drop in. Garnish with cucumber or rosemary if desired. The quality of the tonic water matters as much as the gin — use a premium tonic for a noticeably better drink."
      },
      {
        "id": "md3",
        "name": "Dark and Stormy",
        "servings": "1 serving",
        "ingredients": [
          "2 oz dark rum",
          "4 oz ginger beer",
          "½ oz fresh lime juice",
          "Ice",
          "Lime wedge to garnish"
        ],
        "prep": "Fill a tall glass with ice. Pour ginger beer over ice. Squeeze lime juice in. Slowly pour dark rum over the back of a spoon so it floats on top of the ginger beer — this layered presentation is the signature of a Dark and Stormy. Garnish with a lime wedge. Goslings Black Seal rum is the traditional choice. Stir before drinking."
      },
      {
        "id": "md4",
        "name": "Paloma",
        "servings": "1 serving",
        "ingredients": [
          "2 oz blanco tequila",
          "½ oz fresh lime juice",
          "4 oz fresh grapefruit juice or grapefruit soda",
          "Pinch of salt",
          "Tajin or salt for rim",
          "Ice",
          "Grapefruit slice to garnish"
        ],
        "prep": "Rim a tall glass with Tajin or salt. Fill with ice. Pour tequila and lime juice over ice. Add a pinch of salt. Top with fresh grapefruit juice or grapefruit soda. Stir gently. Garnish with a grapefruit slice. The Paloma is Mexico's most popular cocktail — arguably more beloved there than the margarita. Fresh grapefruit juice is far superior to grapefruit soda."
      },
      {
        "id": "md5",
        "name": "Aperol Spritz",
        "servings": "1 serving",
        "ingredients": [
          "3 oz prosecco",
          "2 oz Aperol",
          "1 oz soda water",
          "Ice",
          "Orange slice and green olive to garnish"
        ],
        "prep": "Fill a large wine glass with ice. Pour prosecco first — always add sparkling wine before liqueur to preserve bubbles. Add Aperol. Top with a splash of soda water. Give it one gentle stir. Garnish with a slice of orange and a green olive on a cocktail pick. The ratio 3-2-1 is the classic formula — 3 parts prosecco, 2 parts Aperol, 1 part soda."
      }
    ]
  },
  {
    "id": "coffee",
    "icon": "☕",
    "name": "Coffee",
    "desc": "Brewed, iced and spiked coffee drinks.",
    "recipes": [
      {
        "name": "Bulletproof Coffee",
        "servings": "1 serving",
        "ingredients": [
          "1 cup freshly brewed strong black coffee",
          "1–2 tbsp unsalted grass-fed butter",
          "1–2 tbsp MCT oil or coconut oil",
          "Optional: collagen powder, cinnamon, vanilla"
        ],
        "prep": "Brew strong coffee. Add hot coffee, butter, and MCT oil to a blender. Blend on high 30 seconds until frothy and emulsified. Pour into a mug and serve immediately."
      },
      {
        "name": "Cold Brew Coffee",
        "servings": "4 servings",
        "ingredients": [
          "1 cup (100 g) coarsely ground coffee — medium to dark roast",
          "4 cups (960 ml) cold filtered water",
          "Milk or cream to serve"
        ],
        "prep": "Combine coarsely ground coffee and cold water in a large jar or pitcher. Stir to make sure all grounds are wet. Cover and refrigerate 12–24 hours — 18 hours is the sweet spot. Longer steeping produces a stronger more concentrated brew. Strain through a fine mesh sieve lined with cheesecloth or a coffee filter. Pour slowly — do not press or squeeze the grounds or the coffee will turn bitter. Store strained cold brew in the refrigerator up to 2 weeks. Serve over ice with milk or cream."
      },
      {
        "name": "Dalgona Coffee",
        "servings": "2 servings",
        "ingredients": [
          "2 tbsp instant coffee",
          "2 tbsp sugar",
          "2 tbsp hot water",
          "1½ cups milk per serving",
          "Ice cubes"
        ],
        "prep": "Combine instant coffee, sugar, and hot water in a bowl. Beat vigorously until thick, pale, and fluffy — about 2 minutes with a hand mixer or 8–10 minutes by hand. The mixture should hold stiff peaks. Fill two glasses with ice and milk. Spoon the whipped coffee mixture on top. Stir before drinking."
      },
      {
        "name": "Irish Coffee",
        "servings": "1 serving",
        "ingredients": [
          "1½ oz Irish whiskey",
          "1 cup hot brewed strong black coffee",
          "1 tsp brown sugar",
          "Heavy cream, lightly whipped",
          "Freshly grated nutmeg (optional)"
        ],
        "prep": "Preheat a glass mug. Add brown sugar. Pour hot coffee over sugar and stir. Add Irish whiskey. Hold a spoon upside down and slowly pour whipped cream over the back so it floats on top. Sip coffee through the cream layer."
      },
      {
        "name": "Vietnamese Iced Coffee",
        "servings": "1 serving",
        "ingredients": [
          "2–3 tbsp finely ground Vietnamese coffee",
          "2 tbsp sweetened condensed milk",
          "Hot water",
          "Lots of ice"
        ],
        "prep": "Add condensed milk to the bottom of a glass. Set a Vietnamese phin filter on top. Add coffee to the filter chamber. Pour hot water to bloom 30 seconds then fill the chamber. Allow coffee to drip slowly — 4–5 minutes. Remove filter. Stir condensed milk and coffee together. Pour over a glass full of ice and stir vigorously."
      }
    ]
  },
  {
    "id": "espresso",
    "icon": "☕",
    "name": "Espresso Drinks",
    "desc": "Lattes, cappuccinos and other espresso-based drinks.",
    "recipes": [
      {
        "name": "Affogato",
        "servings": "1 serving",
        "ingredients": [
          "1–2 scoops vanilla gelato or ice cream",
          "1–2 shots freshly brewed hot espresso",
          "Amaretti cookies or chocolate shavings (optional)"
        ],
        "prep": "Place gelato in a small chilled glass. Brew espresso shots. Pour the hot espresso directly over the cold gelato immediately before serving. The contrast of hot and cold, bitter and sweet is extraordinary. Serve immediately with amaretti cookies on the side."
      },
      {
        "name": "Cappuccino",
        "servings": "1 serving",
        "ingredients": [
          "2 shots (60 ml) freshly brewed espresso",
          "4 oz (120 ml) whole milk",
          "Cocoa powder or cinnamon for dusting (optional)"
        ],
        "prep": "Brew two shots of espresso into a prewarmed small cup. Steam milk to 150°F (65°C) creating stiff microfoam. Pour a small amount of liquid milk over the espresso then spoon the stiff foam on top filling the cup. Dust with cocoa powder or cinnamon. A traditional cappuccino is equal parts espresso, steamed milk, and foam."
      },
      {
        "name": "Cinnamon Dolce Latte",
        "servings": "1 serving",
        "ingredients": [
          "2 shots espresso",
          "1 cup milk",
          "Cinnamon Dolce Syrup: ½ cup sugar, ½ cup water, 1 tsp cinnamon, ½ tsp vanilla",
          "Whipped cream",
          "Cinnamon sugar for topping"
        ],
        "prep": "Make cinnamon dolce syrup by simmering sugar, water, and cinnamon until dissolved. Add vanilla. Cool. Add 2 tbsp syrup to a mug. Brew espresso over syrup. Steam milk and pour over. Top with whipped cream and cinnamon sugar."
      },
      {
        "name": "Classic Latte",
        "servings": "1 serving",
        "ingredients": [
          "2 shots (60 ml) freshly brewed espresso",
          "8 oz (240 ml) whole milk",
          "1–2 tsp sugar or simple syrup (optional)"
        ],
        "prep": "Brew two shots of espresso into a prewarmed cup. Steam milk using an espresso machine steam wand until temperature reaches 150°F (65°C) — the milk should be silky with microfoam, not large bubbles. Hold the steam wand just below the surface at the beginning to create foam, then submerge to heat. Tap the pitcher on the counter and swirl to integrate. Pour steamed milk over espresso holding back foam with a spoon then spooning foam on top."
      },
      {
        "name": "Cortado",
        "servings": "1 serving",
        "ingredients": [
          "2 shots espresso",
          "2 oz warm steamed milk",
          "No foam"
        ],
        "prep": "Brew two shots of espresso. Steam a small amount of milk to 140°F with very little foam. Pour equal parts steamed milk directly into the espresso. A cortado is defined by its 1:1 ratio of espresso to milk served in a small 4 oz glass."
      },
      {
        "name": "Espresso Martini",
        "servings": "2 servings",
        "ingredients": [
          "60 ml vodka",
          "30 ml coffee liqueur such as Kahlúa",
          "30 ml freshly brewed espresso, cooled",
          "15 ml simple syrup",
          "Ice",
          "3 coffee beans to garnish"
        ],
        "prep": "Brew espresso and cool slightly. Fill a cocktail shaker with ice. Add vodka, coffee liqueur, espresso, and simple syrup. Shake very vigorously 15–20 seconds. Double strain into chilled martini glasses. Garnish with 3 coffee beans."
      },
      {
        "name": "Flat White",
        "servings": "1 serving",
        "ingredients": [
          "2 shots ristretto espresso",
          "4 oz (120 ml) whole milk"
        ],
        "prep": "Brew ristretto shots — shorter pulls for sweeter more concentrated espresso. Steam milk to 140°F creating very fine velvety microfoam with almost no visible foam. Pour milk from low down in a continuous stream directly into the espresso."
      },
      {
        "name": "Iced Caramel Latte",
        "servings": "1 serving",
        "ingredients": [
          "2 shots (60 ml) espresso, cooled",
          "1 cup (240 ml) milk",
          "2 tbsp caramel sauce",
          "Ice cubes",
          "Whipped cream (optional)"
        ],
        "prep": "Brew espresso and allow to cool slightly. Fill a tall glass with ice. Pour caramel sauce over ice. Pour cooled espresso over caramel. Slowly pour milk over the espresso. Stir gently. Top with whipped cream and an extra drizzle of caramel sauce if desired."
      },
      {
        "name": "Mocha",
        "servings": "1 serving",
        "ingredients": [
          "2 shots (60 ml) espresso",
          "1 cup (240 ml) milk",
          "2 tbsp chocolate syrup or melted dark chocolate",
          "Whipped cream",
          "Cocoa powder for dusting"
        ],
        "prep": "Stir chocolate syrup into the bottom of a prewarmed mug. Brew espresso directly over the chocolate and stir to combine. Steam milk to 150°F with microfoam. Pour steamed milk over the espresso-chocolate mixture. Top with whipped cream and dust with cocoa powder."
      }
    ]
  },
  {
    "id": "tea",
    "icon": "🍵",
    "name": "Tea",
    "desc": "Black, green, matcha and chai teas, hot or iced.",
    "recipes": [
      {
        "name": "Earl Grey Lavender Latte",
        "servings": "1 serving",
        "ingredients": [
          "1 Earl Grey tea bag",
          "½ cup boiling water",
          "½ cup oat milk",
          "1 tsp dried culinary lavender",
          "1 tbsp honey",
          "¼ tsp vanilla"
        ],
        "prep": "Steep Earl Grey and dried lavender in boiling water 4 minutes. Strain into a mug. Warm oat milk with honey and vanilla. Froth until foamy. Pour over tea."
      },
      {
        "name": "Homemade Masala Chai",
        "servings": "2 servings",
        "ingredients": [
          "2 cups water",
          "1 cup whole milk",
          "2 tsp loose leaf black tea or 2 tea bags",
          "4 cardamom pods crushed, 1 cinnamon stick, 4 cloves, ½-inch ginger, 4 peppercorns",
          "2 tbsp sugar"
        ],
        "prep": "Combine water and all spices in a saucepan. Bring to a boil. Simmer 5 minutes. Add tea and simmer 2 more minutes. Add milk and sugar. Bring back to a gentle boil stirring constantly. Simmer 2 minutes. Strain into cups pressing on the solids. Serve immediately."
      },
      {
        "name": "Iced Green Tea Lemonade",
        "servings": "4 servings",
        "ingredients": [
          "4 green tea bags",
          "4 cups hot water at 175°F",
          "Juice of 4 lemons",
          "4 tbsp honey or simple syrup",
          "Ice cubes",
          "Fresh mint and lemon slices to garnish"
        ],
        "prep": "Brew green tea in hot water — not boiling. Steep 2–3 minutes. Remove bags. Add honey and stir. Cool then refrigerate. Add lemon juice and taste. Serve over ice with fresh mint and lemon slices."
      },
      {
        "name": "Jasmine Green Tea",
        "servings": "2 servings",
        "ingredients": [
          "2 tsp loose jasmine green tea leaves",
          "2 cups water at 175°F",
          "Honey to taste (optional)"
        ],
        "prep": "Heat water to 175°F — never boiling. Place tea leaves in an infuser. Pour hot water over. Steep exactly 2 minutes. Remove leaves immediately. Add a touch of honey if desired."
      },
      {
        "name": "Matcha Latte",
        "servings": "1 serving",
        "ingredients": [
          "1–2 tsp ceremonial matcha powder",
          "2 tbsp hot water at 175°F",
          "1 cup oat milk or whole milk",
          "1 tsp honey",
          "Pinch of vanilla"
        ],
        "prep": "Sift matcha into a bowl. Add hot water and whisk vigorously until smooth and frothy. Heat milk with honey and vanilla. Pour hot milk into a mug. Pour matcha mixture over milk and stir gently. Top with a light dusting of matcha powder."
      },
      {
        "name": "Spiced Apple Cider Tea",
        "servings": "4 servings",
        "ingredients": [
          "2 cups apple cider",
          "2 cups brewed black tea",
          "2 cinnamon sticks",
          "4 whole cloves",
          "2 star anise",
          "1 orange, sliced",
          "2 tbsp honey",
          "½ tsp vanilla extract"
        ],
        "prep": "Combine all ingredients in a saucepan. Bring to a gentle simmer. Simmer 15 minutes to infuse all flavors. Add honey and vanilla. Strain into mugs. Serve hot with a cinnamon stick garnish."
      },
      {
        "name": "Iced Matcha Latte",
        "servings": "1 serving",
        "ingredients": [
          "1–2 tsp ceremonial grade matcha powder",
          "2 tbsp hot water at 175°F",
          "1 cup oat milk or milk of choice",
          "1 tsp honey or simple syrup",
          "Ice cubes"
        ],
        "prep": "Sift matcha into a bowl. Add hot water and whisk vigorously in a W motion until smooth. Fill a glass with ice. Pour milk over ice. Pour matcha mixture over milk. Sweeten with honey and stir before drinking."
      }
    ]
  },
  {
    "id": "herbal",
    "icon": "🌿",
    "name": "Herbal Drinks",
    "desc": "Caffeine-free herbal teas and soothing warm drinks.",
    "recipes": [
      {
        "name": "Butterfly Pea Flower Tea",
        "servings": "2 servings",
        "ingredients": [
          "2 tsp dried butterfly pea flowers",
          "2 cups hot water",
          "Juice of ½ lemon",
          "1 tbsp honey",
          "Ice (optional)"
        ],
        "prep": "Steep butterfly pea flowers in hot water 5 minutes until deep vivid blue. Strain. Add honey. Add lemon juice — watch it transform from blue to purple. Serve hot or over ice."
      },
      {
        "name": "Chamomile Honey Latte",
        "servings": "1 serving",
        "ingredients": [
          "2 chamomile tea bags or 2 tbsp loose chamomile",
          "1 cup hot water",
          "½ cup oat milk or whole milk",
          "1 tbsp honey",
          "¼ tsp vanilla extract",
          "Pinch of cinnamon"
        ],
        "prep": "Steep chamomile in hot water 5 minutes. Warm milk with honey and vanilla until steaming. Froth vigorously. Pour chamomile tea into a mug. Pour frothed milk over. Dust with cinnamon."
      },
      {
        "name": "Ginger Lemon Honey Tea",
        "servings": "2 servings",
        "ingredients": [
          "3-inch fresh ginger root, thinly sliced",
          "3 cups water",
          "Juice of 2 lemons",
          "3 tbsp raw honey",
          "Pinch of cayenne (optional)"
        ],
        "prep": "Combine ginger and water in a saucepan. Bring to a boil. Simmer 15 minutes. Strain into mugs. Add lemon juice and honey and stir. Add cayenne for an extra kick. Serve hot or over ice."
      },
      {
        "name": "Golden Milk",
        "servings": "2 servings",
        "ingredients": [
          "2 cups oat milk or coconut milk",
          "1½ tsp ground turmeric",
          "½ tsp ground cinnamon",
          "¼ tsp ground ginger",
          "Pinch of black pepper",
          "1 tbsp honey or maple syrup",
          "½ tsp vanilla extract",
          "Pinch of cardamom (optional)"
        ],
        "prep": "Combine all ingredients in a saucepan over medium heat. Whisk constantly while heating until milk is hot and steaming — do not boil. Pour into mugs through a small strainer. Sprinkle cinnamon on top."
      },
      {
        "name": "Hibiscus Iced Tea",
        "servings": "4 servings",
        "ingredients": [
          "½ cup dried hibiscus flowers",
          "4 cups boiling water",
          "4 tbsp honey or sugar",
          "Juice of 1 lime",
          "Ice and fresh mint to serve"
        ],
        "prep": "Place hibiscus flowers in a heatproof pitcher. Pour boiling water over. Steep 10–15 minutes. Strain. Add honey and lime juice. Cool then refrigerate until cold. Serve over ice with fresh mint."
      },
      {
        "name": "Lemon Verbena Iced Tea",
        "servings": "4 servings",
        "ingredients": [
          "Large handful fresh lemon verbena leaves or 4 tea bags",
          "4 cups boiling water",
          "3 tbsp honey",
          "Juice of 1 lemon",
          "Ice and lemon slices to serve"
        ],
        "prep": "Steep lemon verbena in boiling water 7–10 minutes. Strain. Add honey and lemon juice. Cool completely and refrigerate. Serve over ice with lemon slices."
      },
      {
        "name": "Peppermint Tea",
        "servings": "2 servings",
        "ingredients": [
          "Large handful fresh peppermint leaves or 2 peppermint tea bags",
          "2 cups boiling water",
          "1 tbsp honey (optional)",
          "Lemon slice (optional)"
        ],
        "prep": "Place mint leaves in a teapot or heatproof pitcher. Pour boiling water over. Steep 5–7 minutes. Strain into cups. Add honey and lemon if desired. Serve hot or over ice."
      },
      {
        "name": "Rooibos Vanilla Latte",
        "servings": "1 serving",
        "ingredients": [
          "2 rooibos tea bags",
          "½ cup boiling water",
          "½ cup oat milk",
          "1 tbsp honey",
          "1 tsp vanilla extract",
          "Pinch of cinnamon"
        ],
        "prep": "Steep rooibos in boiling water 5 minutes. Remove bags. Warm oat milk with honey and vanilla and froth. Pour rooibos tea into a mug. Pour frothed milk over. Dust with cinnamon."
      },
      {
        "name": "Turmeric Ginger Tea",
        "servings": "2 servings",
        "ingredients": [
          "2-inch fresh turmeric root grated or 1 tsp ground turmeric",
          "2-inch fresh ginger root grated",
          "3 cups water",
          "Juice of 1 lemon",
          "2 tbsp honey",
          "Pinch of black pepper",
          "Pinch of cinnamon"
        ],
        "prep": "Combine turmeric, ginger, and water in a saucepan. Bring to a boil. Simmer 10 minutes. Strain into mugs. Add lemon juice, honey, black pepper, and cinnamon. Stir well."
      }
    ]
  },
  {
    "id": "juices",
    "icon": "🥤",
    "name": "Juices",
    "desc": "Fresh-pressed fruit and vegetable juices.",
    "recipes": [
      {
        "name": "Beet Juice",
        "servings": "2 servings",
        "ingredients": [
          "2 medium beets, scrubbed",
          "2 carrots",
          "2 apples",
          "1-inch fresh ginger",
          "Juice of 1 lemon"
        ],
        "prep": "Quarter beets. Process beets, carrots, apples, and ginger through a juicer. Add lemon juice and stir. Serve immediately."
      },
      {
        "name": "Carrot Apple Ginger Juice",
        "servings": "2 servings",
        "ingredients": [
          "4 large carrots",
          "2 apples, cored",
          "2-inch fresh ginger",
          "Juice of 1 orange",
          "½ lemon, juiced"
        ],
        "prep": "Process carrots, apples, and ginger through a juicer. Stir in orange and lemon juice. Serve over ice."
      },
      {
        "name": "Celery Juice",
        "servings": "1 serving",
        "ingredients": [
          "1 large bunch celery, about 9–10 stalks",
          "Water for rinsing"
        ],
        "prep": "Wash celery. Process through a juicer. Drink 16 oz on an empty stomach in the morning. Drink immediately."
      },
      {
        "name": "Classic Green Juice",
        "servings": "2 servings",
        "ingredients": [
          "4 cups fresh spinach or kale",
          "3 celery stalks",
          "2 green apples, cored",
          "1 large cucumber",
          "1-inch fresh ginger",
          "Juice of 1 lemon",
          "½ cup fresh parsley"
        ],
        "prep": "Wash all produce. Process through juicer in order: leafy greens, celery, cucumber, apple, ginger, lemon. Drink immediately for maximum nutrients."
      },
      {
        "name": "Cranberry Detox Juice",
        "servings": "2 servings",
        "ingredients": [
          "1 cup pure unsweetened cranberry juice",
          "1 cup water",
          "Juice of 1 lemon",
          "Juice of 1 orange",
          "1 tbsp apple cider vinegar",
          "1 tbsp honey",
          "Pinch of cayenne",
          "Fresh mint"
        ],
        "prep": "Combine all ingredients and stir until honey dissolves. Pour over ice with fresh mint."
      },
      {
        "name": "Fresh Lemonade",
        "servings": "4 servings",
        "ingredients": [
          "1 cup fresh lemon juice — about 8 lemons",
          "1 cup sugar",
          "1 cup water for simple syrup",
          "3 cups cold water",
          "Ice and lemon slices to serve"
        ],
        "prep": "Make simple syrup by heating sugar and water until dissolved. Cool. Combine lemon juice, simple syrup, and cold water. Stir well. Serve over ice."
      },
      {
        "name": "Orange Carrot Turmeric Juice",
        "servings": "2 servings",
        "ingredients": [
          "4 large carrots",
          "4 large oranges, peeled",
          "1-inch fresh turmeric root or 1 tsp ground turmeric",
          "1-inch fresh ginger",
          "Pinch of black pepper"
        ],
        "prep": "Process carrots, oranges, turmeric, and ginger through a juicer. Stir in black pepper. Drink immediately."
      },
      {
        "name": "Pineapple Cucumber Mint Juice",
        "servings": "2 servings",
        "ingredients": [
          "2 cups fresh pineapple chunks",
          "1 large cucumber",
          "1 cup fresh mint leaves",
          "Juice of 1 lime",
          "1-inch fresh ginger",
          "½ cup coconut water"
        ],
        "prep": "Process pineapple, cucumber, mint, and ginger through a juicer. Stir in lime juice and coconut water. Serve over ice immediately."
      },
      {
        "name": "Pineapple Ginger Detox Juice",
        "servings": "2 servings",
        "ingredients": [
          "2 cups fresh pineapple chunks",
          "2-inch fresh ginger root",
          "1 lemon, peeled",
          "1 cup coconut water",
          "Pinch of cayenne"
        ],
        "prep": "Process pineapple, ginger, and lemon through a juicer. Stir in coconut water and cayenne. Serve immediately."
      },
      {
        "name": "V8 Style Vegetable Juice",
        "servings": "4 servings",
        "ingredients": [
          "4 large tomatoes, quartered",
          "3 celery stalks",
          "2 large carrots",
          "1 red bell pepper",
          "1 cucumber",
          "Juice of 1 lemon",
          "1 tsp Worcestershire sauce",
          "½ tsp hot sauce",
          "Salt and black pepper",
          "Fresh parsley and basil"
        ],
        "prep": "Process all vegetables through a juicer. Stir in lemon juice, Worcestershire, hot sauce, salt, pepper, parsley, and basil. Refrigerate 1 hour. Shake well before serving over ice."
      },
      {
        "name": "Watermelon Juice",
        "servings": "2 servings",
        "ingredients": [
          "4 cups fresh seedless watermelon, cubed",
          "Juice of 1 lime",
          "Fresh mint leaves",
          "Pinch of sea salt"
        ],
        "prep": "Blend watermelon until liquid. Strain if desired. Add lime juice and sea salt. Pour over ice with fresh mint. Serve immediately."
      }
    ]
  },
  {
    "id": "wellness_shots",
    "icon": "💪",
    "name": "Wellness Shots",
    "desc": "Small, strong shots and tonics.",
    "recipes": [
      {
        "name": "Apple Cider Vinegar Drink",
        "servings": "1 serving",
        "ingredients": [
          "1 tbsp raw apple cider vinegar with the mother",
          "1 cup warm or cold water",
          "1 tbsp raw honey",
          "Juice of ½ lemon",
          "Pinch of cinnamon",
          "Pinch of cayenne (optional)"
        ],
        "prep": "Combine all ingredients and stir until honey dissolves. Drink through a straw to protect tooth enamel. Best consumed first thing in the morning."
      },
      {
        "name": "Immunity Ginger Shot",
        "servings": "4 shots",
        "ingredients": [
          "4-inch fresh ginger root, peeled",
          "Juice of 2 lemons",
          "1 tsp ground turmeric or 1-inch fresh turmeric",
          "Pinch of black pepper",
          "1 tbsp raw honey",
          "Pinch of cayenne"
        ],
        "prep": "Juice ginger and turmeric. Combine with lemon juice, black pepper, honey, and cayenne. Pour into shot glasses. Store refrigerated up to 3 days."
      },
      {
        "name": "Wheatgrass Shot",
        "servings": "2 shots",
        "ingredients": [
          "1 oz fresh wheatgrass or 1 tbsp wheatgrass powder",
          "¼ cup water (if using powder)",
          "Juice of ½ lemon",
          "Orange slice to chase"
        ],
        "prep": "Process wheatgrass through a slow masticating juicer. Add lemon juice. Pour into shot glasses. Drink in one or two sips followed by an orange slice."
      },
      {
        "name": "Aloe Vera Juice",
        "servings": "1 serving",
        "ingredients": [
          "2 tbsp pure aloe vera gel",
          "1 cup coconut water or water",
          "Juice of ½ lemon",
          "1 tsp honey",
          "Pinch of mint"
        ],
        "prep": "Blend aloe gel with coconut water, lemon juice, honey, and mint. Strain if desired. Drink immediately."
      }
    ]
  },
  {
    "id": "mocktails",
    "icon": "🍹",
    "name": "Mocktails",
    "desc": "Alcohol-free mixed drinks and coolers.",
    "recipes": [
      {
        "name": "Arnold Palmer",
        "servings": "4 servings",
        "ingredients": [
          "2 cups freshly brewed black tea, cooled",
          "2 cups fresh lemonade",
          "Ice cubes",
          "Lemon slices and mint to garnish"
        ],
        "prep": "Fill tall glasses with ice. Pour equal parts iced tea and lemonade over ice. Stir gently. Garnish with lemon and mint."
      },
      {
        "name": "Cucumber Jalapeño Limeade",
        "servings": "4 servings",
        "ingredients": [
          "1 large cucumber, diced",
          "1 jalapeño, sliced (seeds removed)",
          "Juice of 5 limes",
          "¼ cup simple syrup",
          "3 cups sparkling water",
          "Ice cubes",
          "Cucumber slices and jalapeño rings to garnish"
        ],
        "prep": "Blend cucumber and strain. Muddle jalapeño with simple syrup. Add cucumber juice and lime juice. Add sparkling water. Serve over ice garnished with cucumber and jalapeño."
      },
      {
        "name": "Cucumber Mint Cooler",
        "servings": "4 servings",
        "ingredients": [
          "1 large cucumber, peeled and sliced",
          "Large handful fresh mint leaves",
          "Juice of 2 limes",
          "2 tbsp honey",
          "3 cups sparkling water",
          "Ice cubes",
          "Cucumber ribbons and mint to garnish"
        ],
        "prep": "Blend cucumber and mint with ½ cup water. Strain. Combine with lime juice and honey. Fill glasses with ice. Pour cucumber mixture halfway. Top with sparkling water. Garnish."
      },
      {
        "name": "Lavender Lemonade",
        "servings": "4 servings",
        "ingredients": [
          "Lavender Syrup: 1 cup water, 1 cup sugar, 3 tbsp dried culinary lavender",
          "Juice of 5 lemons",
          "3 cups cold water",
          "Ice and lavender sprigs to garnish"
        ],
        "prep": "Simmer lavender syrup 5 minutes. Steep 20 minutes. Strain. Cool. Combine lemon juice, ½ cup syrup, and cold water. Refrigerate until cold. Serve over ice."
      },
      {
        "name": "Passion Fruit Mocktail",
        "servings": "2 servings",
        "ingredients": [
          "4 passion fruits, halved",
          "Juice of 1 lime",
          "1 tbsp honey",
          "1 cup sparkling water",
          "Ice cubes",
          "Fresh mint to garnish"
        ],
        "prep": "Strain passion fruit pulp. Combine with lime juice and honey. Pour over ice. Top with sparkling water. Garnish with mint."
      },
      {
        "name": "Pineapple Coconut Cooler",
        "servings": "2 servings",
        "ingredients": [
          "1 cup pineapple juice",
          "½ cup coconut cream",
          "Juice of 1 lime",
          "1 cup sparkling water",
          "Ice cubes",
          "Pineapple slices and toasted coconut to garnish"
        ],
        "prep": "Shake pineapple juice, coconut cream, and lime with ice. Strain into glasses. Top with sparkling water. Garnish with pineapple and toasted coconut."
      },
      {
        "name": "Rosemary Lemon Spritzer",
        "servings": "4 servings",
        "ingredients": [
          "Rosemary Syrup: 1 cup water, 1 cup sugar, 4 rosemary sprigs",
          "Juice of 3 lemons",
          "3 cups sparkling water",
          "Ice and rosemary sprigs to garnish"
        ],
        "prep": "Simmer rosemary syrup 5 minutes. Steep 30 minutes. Strain and cool. Combine 3 tbsp syrup with lemon juice. Top with sparkling water. Serve over ice with rosemary."
      },
      {
        "name": "Virgin Mojito",
        "servings": "2 servings",
        "ingredients": [
          "Large handful fresh mint leaves",
          "Juice of 2 limes",
          "2 tbsp sugar or simple syrup",
          "1 cup sparkling water or club soda",
          "Ice cubes",
          "Lime slices and mint sprigs to garnish"
        ],
        "prep": "Muddle mint and sugar in the bottom of each glass. Add lime juice and stir. Fill glass with ice. Top with sparkling water. Stir gently. Garnish with lime and mint."
      },
      {
        "name": "Watermelon Agua Fresca",
        "servings": "4 servings",
        "ingredients": [
          "4 cups seedless watermelon cubes",
          "3 cups cold water",
          "Juice of 2 limes",
          "2 tbsp honey or sugar",
          "Fresh mint and lime slices to garnish"
        ],
        "prep": "Blend watermelon with 1 cup water. Strain into a pitcher. Add remaining water, lime juice, and honey. Refrigerate until cold. Serve over ice with mint and lime."
      }
    ]
  },
  {
    "id": "sodas",
    "icon": "🥤",
    "name": "Sodas",
    "desc": "Sparkling drinks, punches and homemade sodas.",
    "recipes": [
      {
        "name": "Homemade Ginger Beer",
        "servings": "4 servings",
        "ingredients": [
          "3-inch fresh ginger root, grated",
          "1 cup sugar",
          "1 cup water for syrup",
          "Juice of 2 lemons",
          "3 cups sparkling water",
          "Ice and lemon slices to serve"
        ],
        "prep": "Simmer ginger, sugar, and water 5 minutes. Steep 20 minutes. Strain. Cool completely. Combine 4 tbsp syrup with lemon juice. Top with sparkling water. Pour over ice."
      },
      {
        "name": "Cherry Limeade",
        "servings": "4 servings",
        "ingredients": [
          "½ cup maraschino cherry juice",
          "Juice of 4 limes",
          "¼ cup simple syrup",
          "3 cups sparkling water",
          "Maraschino cherries and lime slices to garnish",
          "Ice cubes"
        ],
        "prep": "Combine cherry juice, lime juice, and simple syrup. Add sparkling water just before serving. Pour over ice. Garnish with cherries and lime."
      },
      {
        "name": "Shirley Temple",
        "servings": "2 servings",
        "ingredients": [
          "2 cups ginger ale or lemon-lime soda",
          "4 tbsp grenadine syrup",
          "Juice of ½ orange",
          "Maraschino cherries and orange slices to garnish",
          "Ice cubes"
        ],
        "prep": "Fill two tall glasses with ice. Pour soda over ice. Add grenadine — it sinks creating a gradient. Add a splash of orange juice. Do not stir. Garnish with cherries and orange slices."
      },
      {
        "name": "Pomegranate Sparkling Punch",
        "servings": "6 servings",
        "ingredients": [
          "2 cups pure pomegranate juice",
          "1 cup cranberry juice",
          "Juice of 2 limes",
          "2 tbsp honey",
          "2 cups sparkling water",
          "1 cup pomegranate seeds",
          "Ice and mint to serve"
        ],
        "prep": "Combine juices, lime, and honey. Refrigerate. Add sparkling water and pomegranate seeds just before serving. Pour over ice with mint."
      },
      {
        "name": "Sparkling Cranberry Punch",
        "servings": "8 servings",
        "ingredients": [
          "3 cups cranberry juice",
          "1 cup orange juice",
          "Juice of 2 limes",
          "2 tbsp honey",
          "2 cups ginger ale",
          "1 cup sparkling water",
          "Orange and lime slices",
          "Fresh cranberries and mint"
        ],
        "prep": "Combine juices, lime, and honey. Refrigerate. Add ginger ale and sparkling water just before serving. Add fruit and mint. Ladle into ice-filled glasses."
      },
      {
        "name": "Sparkling Strawberry Lemonade",
        "servings": "4 servings",
        "ingredients": [
          "2 cups fresh strawberries, hulled",
          "Juice of 4 lemons",
          "½ cup simple syrup",
          "2 cups sparkling water",
          "Ice and fresh strawberry slices to garnish"
        ],
        "prep": "Blend strawberries and strain. Combine with lemon juice and simple syrup. Add sparkling water just before serving. Pour over ice. Garnish with strawberry slices."
      }
    ]
  },
  {
    "id": "flavored_milks",
    "icon": "🥛",
    "name": "Flavored Milks",
    "desc": "Milk-based drinks with added flavors.",
    "recipes": [
      {
        "name": "Banana Milk",
        "servings": "2 servings",
        "ingredients": [
          "1 large ripe banana",
          "2 cups cold milk or oat milk",
          "1 tbsp honey",
          "½ tsp vanilla extract",
          "Pinch of cinnamon"
        ],
        "prep": "Blend all ingredients 30 seconds until completely smooth. Serve immediately over ice. Best consumed right away as banana oxidizes."
      },
      {
        "name": "Lavender Honey Milk",
        "servings": "2 servings",
        "ingredients": [
          "2 cups whole milk or oat milk",
          "2 tbsp culinary dried lavender",
          "2 tbsp honey",
          "½ tsp vanilla extract",
          "Pinch of sea salt"
        ],
        "prep": "Combine milk and lavender in a saucepan. Heat until steaming. Remove from heat and steep 15 minutes. Strain. Add honey, vanilla, and salt. Reheat gently. Serve in mugs."
      },
      {
        "name": "Pumpkin Spice Latte",
        "servings": "2 servings",
        "ingredients": [
          "2 shots espresso or ½ cup strong coffee",
          "2 cups whole milk",
          "3 tbsp pure pumpkin purée",
          "2 tbsp maple syrup",
          "1 tsp pumpkin pie spice",
          "½ tsp vanilla extract",
          "Whipped cream and cinnamon to top"
        ],
        "prep": "Combine pumpkin, maple syrup, spice, and vanilla in a saucepan. Add milk and whisk over medium heat until steaming. Brew espresso. Pour espresso into mugs. Pour pumpkin milk over through a strainer. Top with whipped cream and cinnamon."
      },
      {
        "name": "Rich Hot Chocolate",
        "servings": "2 servings",
        "ingredients": [
          "2 cups whole milk",
          "3 oz dark chocolate, finely chopped — at least 70% cocoa",
          "2 tbsp cocoa powder",
          "2 tbsp sugar",
          "¼ tsp vanilla extract",
          "Pinch of sea salt",
          "Pinch of cinnamon",
          "Whipped cream or marshmallows to serve"
        ],
        "prep": "Heat milk until steaming. Add chocolate and cocoa powder. Whisk constantly until smooth. Add sugar, vanilla, salt, and cinnamon. Whisk on low heat 2 minutes. Pour into mugs. Top with whipped cream or marshmallows."
      },
      {
        "name": "Strawberry Milk",
        "servings": "2 servings",
        "ingredients": [
          "1 cup fresh strawberries, hulled",
          "2 cups cold whole milk",
          "2 tbsp honey or sugar",
          "½ tsp vanilla extract"
        ],
        "prep": "Blend strawberries with honey until smooth. Strain through a fine mesh sieve. Combine with cold milk and vanilla. Stir well. Serve over ice immediately."
      },
      {
        "name": "Tahini Date Milk",
        "servings": "2 servings",
        "ingredients": [
          "2 tbsp tahini",
          "3 Medjool dates, pitted",
          "2 cups oat milk or almond milk",
          "½ tsp vanilla extract",
          "Pinch of cinnamon",
          "Pinch of sea salt"
        ],
        "prep": "Soak dates in warm water 10 minutes. Drain. Blend all ingredients 60 seconds until smooth. Serve over ice or heat gently."
      },
      {
        "name": "Turmeric Golden Milk",
        "servings": "2 servings",
        "ingredients": [
          "2 cups coconut milk or whole milk",
          "1½ tsp ground turmeric",
          "1 tsp ground cinnamon",
          "½ tsp ground ginger",
          "¼ tsp ground black pepper",
          "1 tbsp honey or maple syrup",
          "½ tsp vanilla extract",
          "1 tsp coconut oil (optional)"
        ],
        "prep": "Whisk all ingredients in a saucepan. Heat over medium heat stirring constantly until hot and steaming. Pour through a strainer into mugs. Sprinkle cinnamon on top."
      }
    ]
  },
  {
    "id": "plant_milks",
    "icon": "🥥",
    "name": "Plant Milks",
    "desc": "Homemade milks from nuts, seeds, oats and coconut.",
    "recipes": [
      {
        "name": "Coconut Milk",
        "servings": "4 servings",
        "ingredients": [
          "2 cups unsweetened shredded coconut",
          "4 cups hot water",
          "Pinch of sea salt",
          "1 tsp vanilla extract (optional)",
          "1 tbsp honey (optional)"
        ],
        "prep": "Pour hot water over coconut in a blender. Let sit 5 minutes. Blend on high 90 seconds. Strain through a nut milk bag squeezing firmly. Add salt, vanilla, and honey. Refrigerate up to 4 days. Shake well before using."
      },
      {
        "name": "Hemp Seed Milk",
        "servings": "4 servings",
        "ingredients": [
          "½ cup raw hemp seeds",
          "4 cups cold filtered water",
          "1 tbsp maple syrup",
          "½ tsp vanilla extract",
          "Pinch of sea salt"
        ],
        "prep": "Blend hemp seeds and cold water 60 seconds. No straining needed. Add maple syrup, vanilla, and salt. Store refrigerated up to 4 days."
      },
      {
        "name": "Homemade Almond Milk",
        "servings": "4 servings",
        "ingredients": [
          "1 cup raw almonds",
          "4 cups filtered water, plus extra for soaking",
          "1 tbsp honey or maple syrup (optional)",
          "½ tsp vanilla extract (optional)",
          "Pinch of sea salt"
        ],
        "prep": "Soak almonds 8–12 hours. Drain and rinse. Blend with 4 cups fresh water 90 seconds until white and creamy. Strain through a nut milk bag squeezing to extract every drop. Add sweetener, vanilla, and salt. Store refrigerated up to 4 days."
      },
      {
        "name": "Homemade Cashew Milk",
        "servings": "4 servings",
        "ingredients": [
          "1 cup raw cashews",
          "4 cups filtered water, plus extra for soaking",
          "1 tbsp honey or maple syrup (optional)",
          "½ tsp vanilla extract",
          "Pinch of sea salt"
        ],
        "prep": "Soak cashews 2–4 hours. Drain and rinse. Blend with 4 cups fresh water 90 seconds until completely smooth. No straining needed. Add sweetener, vanilla, and salt. Refrigerate up to 4 days."
      },
      {
        "name": "Homemade Oat Milk",
        "servings": "4 servings",
        "ingredients": [
          "1 cup rolled oats",
          "4 cups cold filtered water",
          "1 tbsp maple syrup (optional)",
          "½ tsp vanilla extract (optional)",
          "Pinch of sea salt"
        ],
        "prep": "Add oats and cold water to a blender. Blend exactly 30 seconds — no more. Strain immediately through cheesecloth. Do not squeeze. Add maple syrup, vanilla, and salt. Refrigerate up to 5 days."
      },
      {
        "name": "Macadamia Nut Milk",
        "servings": "4 servings",
        "ingredients": [
          "1 cup raw macadamia nuts",
          "4 cups filtered water plus extra for soaking",
          "1 tbsp honey",
          "½ tsp vanilla extract",
          "Pinch of sea salt"
        ],
        "prep": "Soak macadamia nuts 4 hours. Drain and rinse. Blend with 4 cups fresh water 90 seconds until smooth. No straining needed. Add honey, vanilla, and salt. Refrigerate up to 4 days."
      },
      {
        "name": "Chocolate Hazelnut Milk",
        "servings": "2 servings",
        "ingredients": [
          "2 cups hazelnut milk or almond milk",
          "2 tbsp cocoa powder",
          "2 tbsp Nutella or hazelnut butter",
          "1 tbsp honey",
          "½ tsp vanilla extract",
          "Pinch of sea salt"
        ],
        "prep": "Combine all ingredients in a blender. Blend 30 seconds until smooth and creamy. Serve cold over ice or heat gently for a warm version."
      },
      {
        "name": "Mexican Horchata",
        "servings": "6 servings",
        "ingredients": [
          "1 cup long grain white rice",
          "1 cup blanched almonds",
          "4 cups water for soaking",
          "4 cups cold water",
          "1 cup milk",
          "¾ cup sugar",
          "1 tsp vanilla extract",
          "1 tsp ground cinnamon",
          "Ice and cinnamon for serving"
        ],
        "prep": "Soak rice and almonds overnight. Drain. Blend with 2 cups cold water until very smooth. Strain through cheesecloth. Add remaining water, milk, sugar, vanilla, and cinnamon. Blend briefly. Refrigerate until cold. Serve over ice dusted with cinnamon."
      }
    ]
  }
];
