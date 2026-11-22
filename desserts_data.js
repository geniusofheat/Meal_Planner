const desserts_data = [
  {
    "id": "Confections",
    "icon": "🍦",
    "name": "Confections",
    "desc": "A confection is any sweet food made primarily from sugar or other sweeteners, often combined with flavorings, colorings, or other ingredients. The term covers a broad range of sweets including candy, chocolate, fudge, fondant, nougat, and decorative sugar work like royal icing. In baking and pastry arts, confections are typically made by cooking sugar to specific temperatures to achieve different textures ranging from soft and creamy to hard and brittle..",
    "recipes": [
      {
        "name": "Fondant",
        "servings": "1 serving = 1 pound",
        "ingredients": [
          "1/2 cup soft butter",
          "3 cups of powdered sugar",
          "1 cup of milk",
          "1 packet of gelatine(flavored or unflavored)",
          "1 cup of corn syrup",
          "2 tsp of glycerine"
        ],
        "prep": "Place 1/2 cup of milk and 1 pack of gelatine in a large mixing bowl and stir until dissolved. Reserve the other 1/2 cup of milk. Wait 3 or 4 minutes for the gelatine to hydrate. Pour the hydrated gelatine into a small sauce pan and heat on low until syrupy. Pour back into the mixing bowl. Add the corn syrup, vanilla extract, glycerine, soft butter, and 1/2 cup of milk. Mix well. Add 3 cups of powdered sugar. Mix until a dough ball forms. Add more sugar if too sticky. Add more milk if too dry. Knead until smooth. Cover and refridgerate."
      },
      {
        "name": "Vanilla Fondant",
        "servings": "1 batch",
        "ingredients": [
          "2 cups (240 g) powdered sugar, sifted",
          "2 tbsp (30 g) unsalted butter, softened",
          "2–3 tbsp whole milk",
          "1 tsp pure vanilla extract"
        ],
        "prep": "Beat butter until smooth. Add vanilla. Gradually add powdered sugar alternating with milk until a soft moldable consistency forms. Knead briefly until smooth. Shape as desired."
      },
      {
        "name": "Cherry Fondant",
        "servings": "1 batch",
        "ingredients": [
          "1 can (14 oz) sweetened condensed milk",
          "½ cup (115 g) butter, room temperature",
          "3 cups (360 g) powdered sugar",
          "Red food coloring",
          "½ cup dried cherries, rehydrated and finely chopped"
        ],
        "prep": "Beat butter until smooth. Add condensed milk. Gradually add powdered sugar until a firm pliable dough forms. Add food coloring and cherries. Knead until evenly combined. Roll into balls or press into molds and refrigerate until firm."
      },
      {
        "name": "Candy Bar Nougat",
        "servings": "1 batch",
        "ingredients": [
          "1 cup (200 g) sugar",
          "¼ cup (60 ml) water",
          "¼ cup (80 g) corn syrup",
          "2 large egg whites",
          "1 tbsp sugar for meringue",
          "½ tsp vanilla extract"
        ],
        "prep": "Cook sugar, water, and corn syrup to 260°F. Whip egg whites with 1 tbsp sugar to stiff peaks. Slowly pour hot syrup into whites while whipping. Add vanilla. Whip until thick and slightly cooled. Pour into a lined pan and let set."
      },
      {
        "name": "Chocolate Fudge",
        "servings": "16 squares",
        "ingredients": [
          "3 cups semisweet chocolate chips",
          "1 can sweetened condensed milk",
          "1 tbsp butter",
          "1 tsp vanilla extract"
        ],
        "prep": "Combine chocolate chips, condensed milk, and butter in a saucepan over low heat. Stir until melted and smooth. Remove from heat and add vanilla. Pour mixture into a parchment-lined pan and smooth top. Chill until firm then cut into squares."
      },
      {
        "name": "Fudge Bars",
        "servings": "1 batch",
        "ingredients": [
          "1½ cups (300 g) sugar",
          "1 cup (240 ml) water",
          "½ cup (115 g) butter",
          "400 g (14 oz) powdered milk",
          "50 g (1.8 oz) cocoa powder",
          "1 tsp vanilla extract"
        ],
        "prep": "Boil sugar and water until syrupy. Remove from heat and add butter. Mix powdered milk and cocoa in a large bowl. Pour hot syrup over dry mix. Add vanilla and stir well. Spread into a lined pan and chill until firm. Cut into bars."
      },
      {
        "name": "Peanut Butter Fudge",
        "servings": "1 batch",
        "ingredients": [
          "2 cups (400 g) granulated sugar",
          "½ cup (120 ml) whole milk",
          "1 cup (260 g) creamy peanut butter",
          "1 tsp vanilla extract"
        ],
        "prep": "Combine sugar and milk in a heavy saucepan over medium heat. Bring to a boil stirring constantly. Cook to 235°F (soft ball stage). Remove from heat and immediately stir in peanut butter and vanilla. Stir vigorously until mixture thickens. Pour into a greased 8x8 pan. Cool completely before cutting into squares."
      },
      {
        "name": "Penuche Fudge",
        "servings": "16 squares",
        "ingredients": [
          "2 cups brown sugar",
          "1 cup milk",
          "2 tbsp butter",
          "1 tsp vanilla extract",
          "1 cup chopped pecans"
        ],
        "prep": "Combine brown sugar, milk, and butter in saucepan and cook to soft-ball stage about 236°F. Remove from heat and beat mixture until thick and creamy. Stir in vanilla and pecans. Spread into greased pan and allow to set before cutting."
      },
      {
        "name": "Royal Icing",
        "servings": "1 batch",
        "ingredients": [
          "3 tbsp meringue powder",
          "6 tbsp warm water",
          "4 cups (480 g) powdered sugar, sifted"
        ],
        "prep": "Beat meringue powder and warm water until foamy. Add sifted powdered sugar and beat on high speed for 5–7 minutes until stiff glossy peaks form. For flooding consistency add water a few drops at a time. Keep covered with a damp cloth to prevent drying. Colors can be added with gel food coloring."
      }
    ]
  },
  {
    "id": "cookies",
    "icon": "🍪",
    "name": "Cookies",
    "desc": "Classic cookies for every occasion.",
    "recipes": [
      {
        "name": "Brownie Cookies",
        "servings": "~24 cookies",
        "ingredients": [
          "1 cup (170 g) dark chocolate chips",
          "¼ cup (60 g) unsalted butter",
          "¾ cup (150 g) granulated sugar",
          "2 large eggs",
          "1 tsp vanilla extract",
          "⅔ cup (80 g) all-purpose flour",
          "2 tbsp cocoa powder",
          "½ tsp baking powder",
          "¼ tsp salt"
        ],
        "prep": "Preheat oven to 350°F (175°C). Melt chocolate and butter together. Cool slightly. Whisk sugar, eggs, and vanilla into chocolate mixture. Fold in flour, cocoa, baking powder, and salt. Drop by tablespoon onto lined baking sheets — dough will be soft. Bake 10–12 minutes until crinkly on top. Cool on pan 5 minutes."
      },
      {
        "name": "Chocolate Chip Cookies",
        "servings": "~24 cookies",
        "ingredients": [
          "2¼ cups (280 g) all-purpose flour",
          "1 tsp baking soda",
          "1 tsp salt",
          "1 cup (226 g) unsalted butter, softened",
          "¾ cup (150 g) granulated sugar",
          "¾ cup (165 g) packed brown sugar",
          "2 large eggs",
          "2 tsp vanilla extract",
          "2 cups (340 g) chocolate chips"
        ],
        "prep": "Preheat oven to 375°F (190°C). Whisk flour, baking soda, and salt. Beat butter and both sugars until light and fluffy. Add eggs one at a time then vanilla. Gradually mix in flour. Fold in chocolate chips. Drop rounded tablespoons onto lined baking sheets. Bake 9–11 minutes until edges are golden."
      },
      {
        "name": "Gingerbread Cookies",
        "servings": "~36 cookies",
        "ingredients": [
          "3 cups (360 g) all-purpose flour",
          "1½ tsp baking powder",
          "¾ tsp baking soda",
          "¼ tsp salt",
          "1 tbsp ground ginger",
          "1¾ tsp ground cinnamon",
          "¼ tsp ground cloves",
          "6 tbsp (85 g) unsalted butter, softened",
          "¾ cup (165 g) packed dark brown sugar",
          "1 large egg",
          "½ cup (170 g) molasses",
          "2 tsp vanilla extract"
        ],
        "prep": "Whisk flour, baking powder, baking soda, salt, and spices. Beat butter and brown sugar until fluffy. Add egg, molasses, and vanilla. Fold in flour mixture until combined. Divide dough in half, flatten, wrap, and refrigerate at least 2 hours. Preheat oven to 350°F (175°C). Roll dough to ¼-inch thick and cut into shapes. Bake 8–10 minutes until edges are set. Cool before decorating."
      },
      {
        "name": "Lemon Cookies",
        "servings": "~24 cookies",
        "ingredients": [
          "2¼ cups (280 g) all-purpose flour",
          "1 tsp baking soda",
          "½ tsp salt",
          "1 cup (226 g) unsalted butter, softened",
          "1 cup (200 g) granulated sugar",
          "1 large egg",
          "Zest of 2 lemons",
          "3 tbsp fresh lemon juice",
          "1 tsp vanilla extract",
          "Powdered sugar for rolling"
        ],
        "prep": "Preheat oven to 350°F (175°C). Cream butter and sugar. Beat in egg, lemon zest, lemon juice, and vanilla. Mix in flour, baking soda, and salt. Chill 30 minutes. Roll into balls and coat in powdered sugar. Bake on lined sheets 10–12 minutes until edges are just set and tops are crinkled."
      },
      {
        "name": "Oatmeal Raisin Cookies",
        "servings": "~24 cookies",
        "ingredients": [
          "1¾ cups (210 g) all-purpose flour",
          "1 tsp baking soda",
          "1 tsp cinnamon",
          "½ tsp salt",
          "1 cup (226 g) unsalted butter, softened",
          "¾ cup (150 g) granulated sugar",
          "¾ cup (165 g) packed brown sugar",
          "2 large eggs",
          "1 tsp vanilla extract",
          "3 cups (270 g) old-fashioned rolled oats",
          "1½ cups (225 g) raisins"
        ],
        "prep": "Preheat oven to 350°F (175°C). Whisk flour, baking soda, cinnamon, and salt. Cream butter and both sugars until fluffy. Add eggs and vanilla. Fold in flour mixture. Stir in oats and raisins. Drop rounded tablespoons onto lined sheets. Bake 10–12 minutes until edges are golden and centers look slightly underdone. Cool on pan 5 minutes."
      },
      {
        "name": "Peanut Butter Blossoms",
        "servings": "~36 cookies",
        "ingredients": [
          "1¾ cups (210 g) all-purpose flour",
          "1 tsp baking soda",
          "½ tsp salt",
          "½ cup (115 g) unsalted butter, softened",
          "½ cup (130 g) creamy peanut butter",
          "½ cup (100 g) granulated sugar",
          "½ cup (110 g) packed brown sugar",
          "1 large egg",
          "2 tbsp milk",
          "1 tsp vanilla extract",
          "Granulated sugar for rolling",
          "36 chocolate kiss candies, unwrapped"
        ],
        "prep": "Preheat oven to 375°F (190°C). Whisk flour, baking soda, and salt. Beat butter, peanut butter, and both sugars. Add egg, milk, and vanilla. Mix in flour. Roll into 1-inch balls and roll in granulated sugar. Bake on lined sheets 8–10 minutes until just set. Immediately press a chocolate kiss into the center of each warm cookie."
      },
      {
        "name": "Peanut Butter Cookies",
        "servings": "~24 cookies",
        "ingredients": [
          "1¼ cups (150 g) all-purpose flour",
          "¾ tsp baking soda",
          "½ tsp baking powder",
          "¼ tsp salt",
          "½ cup (115 g) unsalted butter, softened",
          "1 cup (260 g) creamy peanut butter",
          "¾ cup (150 g) granulated sugar",
          "½ cup (110 g) packed brown sugar",
          "1 large egg",
          "1 tsp vanilla extract"
        ],
        "prep": "Preheat oven to 375°F (190°C). Whisk flour, baking soda, baking powder, and salt. Cream butter, peanut butter, and both sugars. Add egg and vanilla. Mix in flour. Roll into balls, place on lined sheets 2 inches apart, flatten with a fork in a crosshatch pattern. Bake 10 minutes until edges are lightly golden."
      },
      {
        "name": "Shortbread Cookies",
        "servings": "~24 cookies",
        "ingredients": [
          "2 cups (240 g) all-purpose flour",
          "¼ cup (30 g) cornstarch",
          "¼ tsp salt",
          "1 cup (226 g) unsalted butter, softened",
          "½ cup (60 g) powdered sugar",
          "1 tsp vanilla extract"
        ],
        "prep": "Preheat oven to 325°F (163°C). Whisk flour, cornstarch, and salt. Beat butter and powdered sugar until very light and fluffy, about 5 minutes. Add vanilla. Fold in flour mixture until just combined. Roll out to ¼-inch thick and cut into shapes, or roll into a log and slice. Bake on lined sheets 14–16 minutes until just barely golden at edges. Cool completely before serving."
      },
      {
        "name": "Snickerdoodles",
        "servings": "~24 cookies",
        "ingredients": [
          "2¾ cups (330 g) all-purpose flour",
          "2 tsp cream of tartar",
          "1 tsp baking soda",
          "½ tsp salt",
          "1 cup (226 g) unsalted butter, softened",
          "1½ cups (300 g) granulated sugar",
          "2 large eggs",
          "1 tsp vanilla extract",
          "Coating: 3 tbsp sugar mixed with 1½ tsp cinnamon"
        ],
        "prep": "Preheat oven to 375°F (190°C). Whisk flour, cream of tartar, baking soda, and salt. Cream butter and sugar until light and fluffy. Add eggs and vanilla. Mix in flour. Roll dough into balls and roll in cinnamon sugar coating. Place 2 inches apart on lined sheets. Bake 10–12 minutes until crinkled and edges are just set. Centers should look slightly underdone."
      },
      {
        "name": "Soft Butter Cookies",
        "servings": "~24 cookies",
        "ingredients": [
          "1 cup (226 g) unsalted butter, softened",
          "¾ cup (150 g) granulated sugar",
          "2 large egg yolks",
          "1 tsp vanilla extract",
          "2¼ cups (280 g) all-purpose flour",
          "¼ tsp salt",
          "1–2 tbsp whole milk if needed"
        ],
        "prep": "Preheat oven to 350°F (175°C). Cream butter and sugar until light and fluffy. Beat in egg yolks and vanilla. Add flour and salt. Add milk if dough is too stiff. Roll into balls or pipe into swirls. Chill 20 minutes. Bake 10–12 minutes until edges are just lightly golden."
      },
      {
        "name": "Sugar Cookies",
        "servings": "~24 cookies",
        "ingredients": [
          "2¼ cups (280 g) all-purpose flour",
          "1 tsp baking powder",
          "¼ tsp salt",
          "1 cup (226 g) unsalted butter, softened",
          "1 cup (200 g) granulated sugar",
          "1 large egg",
          "2 tsp vanilla extract"
        ],
        "prep": "Cream butter and sugar. Beat in egg and vanilla. Mix in flour, baking powder, and salt. Refrigerate 1 hour. Preheat oven to 375°F (190°C). Roll out and cut into shapes. Bake 8–10 minutes until edges are just set. Cool before decorating."
      },
      {
        "name": "White Chocolate Macadamia Nut Cookies",
        "servings": "~24 cookies",
        "ingredients": [
          "2¼ cups (280 g) all-purpose flour",
          "1 tsp baking soda",
          "½ tsp salt",
          "1 cup (226 g) unsalted butter, softened",
          "¾ cup (150 g) granulated sugar",
          "¾ cup (165 g) packed brown sugar",
          "2 large eggs",
          "2 tsp vanilla extract",
          "2 cups (340 g) white chocolate chips",
          "1 cup (130 g) macadamia nuts, roughly chopped"
        ],
        "prep": "Preheat oven to 375°F (190°C). Whisk flour, baking soda, and salt. Cream butter and both sugars. Add eggs one at a time and vanilla. Mix in flour. Fold in white chocolate chips and macadamia nuts. Drop by rounded tablespoons onto lined sheets. Bake 9–11 minutes until golden. Cool on pan 5 minutes."
      }
    ]
  },
  {
    "id": "creams",
    "icon": "🍦",
    "name": "Creams",
    "desc": "Whipped, pastry and custard creams, mousse and ice cream.",
    "recipes": [
      {
        "name": "Banana Creme",
        "servings": "1 batch",
        "ingredients": [
          "2 ripe bananas, mashed",
          "2 tbsp butter, melted",
          "½ cup (120 ml) whole milk",
          "2 tbsp cornstarch",
          "2 egg yolks",
          "¼ cup (50 g) sugar",
          "1 tsp vanilla",
          "1 cup (240 ml) heavy cream, whipped"
        ],
        "prep": "Mash bananas and combine with melted butter. Add milk, cornstarch, egg yolks, sugar, and vanilla. Cook over medium heat stirring constantly until smooth and thick. Refrigerate at least 1 hour. Whisk smooth. Fold in whipped cream."
      },
      {
        "name": "Banana Custard Cream",
        "servings": "1 batch",
        "ingredients": [
          "2 ripe bananas, diced",
          "2 tbsp sugar",
          "1 tbsp butter",
          "1 cup (240 ml) whole milk",
          "2 tbsp cornstarch",
          "2 egg yolks",
          "¼ cup (50 g) sugar",
          "1 tsp vanilla",
          "1 cup (240 ml) heavy cream"
        ],
        "prep": "Cook bananas with sugar and butter until soft. Blend with milk. Return to pot. Whisk in cornstarch, egg yolks, sugar, and vanilla. Cook until thickened. Chill completely. Whip heavy cream to stiff peaks and fold into cold banana custard."
      },
      {
        "name": "Caramel Creme",
        "servings": "1 batch",
        "ingredients": [
          "1 cup (200 g) granulated sugar",
          "¼ cup (60 ml) water",
          "1 cup (240 ml) heavy cream, warm",
          "3 tbsp (45 g) unsalted butter",
          "¼ tsp salt"
        ],
        "prep": "Cook sugar and water over medium-high heat without stirring until deep amber. Remove from heat and carefully pour in warm cream — it will bubble. Stir smooth. Add butter and salt. Stir until combined. Cool before using."
      },
      {
        "name": "Chantilly Cream",
        "servings": "1 batch",
        "ingredients": [
          "2 cups (480 ml) heavy whipping cream, cold",
          "3 tbsp (22 g) powdered sugar",
          "1 tsp vanilla extract",
          "Optional: 200 g mascarpone cheese for stability"
        ],
        "prep": "Beat mascarpone with powdered sugar if using then gradually add cold cream and whip to stiff peaks. Without mascarpone whip cold cream with powdered sugar and vanilla to stiff peaks. Use immediately or refrigerate up to 24 hours."
      },
      {
        "name": "Chiboust Cream",
        "servings": "1 batch",
        "ingredients": [
          "250 ml whole milk",
          "65 g sugar",
          "40 g egg yolks (about 2)",
          "25 g cornstarch",
          "3 gelatin sheets (2 g each)",
          "3 egg whites",
          "10 g sugar for meringue",
          "100 g sugar and 40 ml water for Italian meringue syrup"
        ],
        "prep": "Make pastry cream with milk, sugar, yolks, and cornstarch. Bloom gelatin and add to hot custard. Cool. Make Italian meringue by boiling water and 100g sugar to 244°F and pouring slowly over whipped egg whites. Fold warm meringue into custard in two to three additions."
      },
      {
        "name": "Chocolate Chantilly Cream",
        "servings": "1 batch",
        "ingredients": [
          "2 cups (480 ml) heavy cream",
          "4 oz (115 g) dark chocolate, finely chopped",
          "3 tbsp (22 g) powdered sugar"
        ],
        "prep": "Heat cream until just simmering. Pour over chopped chocolate and stir until melted. Add powdered sugar. Cool then refrigerate overnight. The next day whip to a light fluffy cream that holds soft peaks."
      },
      {
        "name": "Chocolate Mousse",
        "servings": "4 servings",
        "ingredients": [
          "6 oz (170 g) dark chocolate, finely chopped",
          "3 tbsp (45 g) unsalted butter",
          "3 large eggs, separated",
          "3 tbsp (37 g) sugar",
          "1 cup (240 ml) heavy cream",
          "¼ tsp cream of tartar",
          "1 tsp vanilla extract"
        ],
        "prep": "Melt chocolate and butter over a double boiler. Cool slightly. Whisk egg yolks and 2 tbsp sugar into chocolate. Beat egg whites with cream of tartar to soft peaks, add remaining sugar, beat to stiff peaks. Whip cream to soft peaks. Fold egg whites into chocolate then fold in whipped cream. Chill at least 2 hours."
      },
      {
        "name": "Chocolate Pastry Cream",
        "servings": "1 batch",
        "ingredients": [
          "2 cups (480 ml) whole milk",
          "1 tsp vanilla extract",
          "4 egg yolks",
          "¾ cup (150 g) sugar",
          "3 tbsp cornstarch",
          "3 tbsp cocoa powder",
          "½ cup (85 g) dark chocolate chips",
          "2 tbsp unsalted butter"
        ],
        "prep": "Heat milk and vanilla until steaming. Whisk egg yolks, sugar, cornstarch, and cocoa until smooth. Slowly pour hot milk into egg mixture while whisking. Return to pot and cook on medium heat whisking constantly until thick and bubbling. Remove from heat, add chocolate chips and butter. Press plastic wrap on surface and chill."
      },
      {
        "name": "Diplomat Cream",
        "servings": "1 batch",
        "ingredients": [
          "250 ml whole milk",
          "65 g sugar",
          "40 g egg yolks (about 2)",
          "25 g cornstarch",
          "1 tsp vanilla",
          "2 gelatin sheets (2 g each)",
          "200 ml heavy cream, whipped to stiff peaks"
        ],
        "prep": "Make pastry cream with milk, sugar, yolks, cornstarch, and vanilla. Bloom gelatin and add to hot custard. Chill completely. Whisk smooth. Fold in whipped cream in two additions."
      },
      {
        "name": "Egg White Whipped Cream",
        "servings": "1 batch",
        "ingredients": [
          "4 large egg whites",
          "½ cup (100 g) granulated sugar",
          "Pinch of cream of tartar",
          "1 tsp lemon juice",
          "1 tsp vanilla extract"
        ],
        "prep": "Combine egg whites, sugar, cream of tartar, and lemon juice in a heat proof bowl. Set over simmering water and whisk until warm and sugar is dissolved, about 3–4 minutes. Whip on high until glossy stiff peaks form. Add vanilla and whip briefly."
      },
      {
        "name": "Ice Cream",
        "servings": "1 batch",
        "ingredients": [
          "2 cups (480 ml) heavy whipping cream, cold",
          "1 can (14 oz) sweetened condensed milk",
          "2 tsp vanilla extract",
          "Pinch of salt"
        ],
        "prep": "Whip cold heavy cream until stiff peaks form. Gently fold in condensed milk, vanilla, and salt until combined. Pour into a freezer-safe container. Press plastic wrap on surface to prevent ice crystals. Freeze at least 6 hours before serving."
      },
      {
        "name": "Vanilla Cream",
        "servings": "1 batch",
        "ingredients": [
          "½ cup (100 g) sugar",
          "3 tbsp cornstarch",
          "1 tsp vanilla",
          "3 egg yolks",
          "1½ cups (360 ml) whole milk, warmed",
          "2 tbsp unsalted butter"
        ],
        "prep": "Whisk sugar, cornstarch, and egg yolks. Gradually whisk in warm milk. Cook over medium heat stirring constantly until thick and bubbling. One more minute. Remove from heat, add butter and vanilla. Press plastic wrap on surface and chill."
      },
      {
        "name": "Vanilla Pastry Cream",
        "servings": "1 batch",
        "ingredients": [
          "2 cups (480 ml) whole milk",
          "½ cup (100 g) granulated sugar",
          "3 tbsp cornstarch",
          "4 large egg yolks",
          "1 tsp pure vanilla extract",
          "2 tbsp unsalted butter"
        ],
        "prep": "Heat milk to just below boiling. Whisk yolks, sugar, and cornstarch until pale. Slowly pour hot milk into yolk mixture while whisking to temper. Return to saucepan and cook over medium heat whisking vigorously until thick and bubbling. One more minute. Remove from heat, add butter and vanilla. Press plastic wrap directly on surface and refrigerate."
      },
      {
        "name": "Whipped Cream From Milk",
        "servings": "1 batch",
        "ingredients": [
          "2 cups (480 ml) whole milk",
          "2 tbsp powdered sugar",
          "1 tsp vanilla extract",
          "2 tbsp cornstarch"
        ],
        "prep": "Heat milk until cream rises to surface. Skim cream off and set aside. Mix cornstarch with ½ cup cold milk and add to warm remaining milk. Stir until thickened. Add vanilla and powdered sugar to skimmed cream. Combine both, cool in refrigerator. Whip with a hand mixer until stiff peaks form."
      },
      {
        "name": "Sweetened Condensed Milk",
        "servings": "1 batch",
        "ingredients": [
          "2 cups (480 ml) whole milk",
          "⅔ cup (130 g) granulated sugar"
        ],
        "prep": "Combine milk and sugar in a heavy saucepan over medium heat. Stir until sugar fully dissolves. Reduce to a gentle simmer. Cook uncovered, stirring occasionally, until reduced by half and thick and creamy — about 35–45 minutes. Cool and store in a jar."
      }
    ]
  },
  {
    "id": "frostings",
    "icon": "🧁",
    "name": "Frostings",
    "desc": "Frostings, icings, ganache and glazes.",
    "recipes": [
      {
        "name": "Chocolate Ganache",
        "servings": "1 batch",
        "ingredients": [
          "1 cup (170 g) dark or semi-sweet chocolate chips",
          "½ cup (120 ml) heavy cream",
          "1 tbsp unsalted butter"
        ],
        "prep": "Heat cream until just simmering. Pour over chocolate chips and let sit 2 minutes. Add butter and stir from the center outward until perfectly smooth and glossy. For a glaze use immediately. For frosting cool to room temperature and whip until fluffy. For truffles refrigerate until firm."
      },
      {
        "name": "Cream Cheese Frosting",
        "servings": "1 batch",
        "ingredients": [
          "8 oz (225 g) cream cheese, softened",
          "½ cup (115 g) unsalted butter, softened",
          "3–4 cups (360–480 g) powdered sugar, sifted",
          "1 tsp vanilla extract",
          "Pinch of salt"
        ],
        "prep": "Beat cream cheese and butter together until smooth and fluffy, about 3 minutes. Add vanilla and salt. Gradually add powdered sugar one cup at a time beating well after each. Adjust amount to desired sweetness and consistency. Use immediately or refrigerate and re-whip before using."
      },
      {
        "name": "Easy Cake Icing",
        "servings": "1 batch",
        "ingredients": [
          "2 cups (240 g) powdered sugar, sifted",
          "3–4 tbsp whole milk",
          "½ tsp vanilla extract"
        ],
        "prep": "Whisk powdered sugar, vanilla, and milk until smooth and pourable. Adjust with more milk for thinner or more sugar for thicker icing. Drizzle or spread over completely cooled cake."
      },
      {
        "name": "Ermine Buttercream",
        "servings": "1 batch",
        "ingredients": [
          "1 cup (240 ml) whole milk",
          "¼ cup (30 g) all-purpose flour",
          "1 cup (200 g) granulated sugar",
          "1 cup (226 g) unsalted butter, softened"
        ],
        "prep": "Whisk milk, flour, and sugar in a saucepan over medium heat until very thick like pudding. Press plastic wrap on surface and cool completely. Beat softened butter until very light and fluffy, about 5 minutes. Add the cooled milk mixture one spoonful at a time beating well after each until light and stiffened."
      },
      {
        "name": "Mirror Glaze",
        "servings": "1 batch",
        "ingredients": [
          "1 cup (200 g) sugar",
          "½ cup (120 ml) water",
          "½ cup (160 g) glucose syrup or corn syrup",
          "4 gelatin sheets, bloomed",
          "½ cup (85 g) white chocolate chips",
          "Food coloring as desired"
        ],
        "prep": "Boil sugar and water until dissolved. Add glucose. Remove from heat. Add squeezed gelatin and stir until dissolved. Pour over white chocolate and stir until melted. Add food coloring. Cool to 88–95°F before pouring over a frozen dessert."
      }
    ]
  },
  {
    "id": "donuts",
    "icon": "🍩",
    "name": "Donuts",
    "desc": "Fried and baked donuts, filled and glazed.",
    "recipes": [
      {
        "name": "Cherry Custard Cream Filled Doughnuts",
        "servings": "~12 doughnuts",
        "ingredients": [
          "3 cups (360 g) bread flour",
          "¼ cup (50 g) sugar",
          "1 tsp salt",
          "1 packet (7 g) instant yeast",
          "2 large egg yolks",
          "1 tsp vanilla",
          "¾ cup (180 ml) warm whole milk (98°F)",
          "¼ cup (60 g) unsalted butter, softened",
          "Oil for frying",
          "Cherry Custard: 1 cup milk, ½ cup fresh cherry puree, 2 egg yolks, 3 tbsp sugar, 2 tbsp cornstarch, 2 tbsp butter"
        ],
        "prep": "Mix flour, sugar, salt, and yeast. Add warm milk, egg yolks, and vanilla. Knead 5 minutes. Add butter and knead until smooth, about 8 more minutes. Rise until doubled, about 1 hour. Divide into 12 balls. Flatten slightly and let rest 20 minutes. Fry in 350°F oil until golden on each side. For cherry custard: whisk egg yolks, sugar, and cornstarch. Temper with warm cherry milk mixture. Cook until thick. Add butter. Chill. Pipe into cooled doughnuts."
      },
      {
        "name": "Chocolate Frosted Donuts",
        "servings": "~12 donuts",
        "ingredients": [
          "Classic glazed donut dough (see above)",
          "Oil for frying",
          "Chocolate Frosting: 1 cup (170 g) chocolate chips, ¼ cup (60 ml) heavy cream, 1 tbsp butter"
        ],
        "prep": "Make and fry donuts as in the classic glazed donut recipe. For chocolate frosting heat cream until simmering, pour over chocolate chips, add butter, and stir until smooth. Dip tops of cooled donuts in warm frosting and let set on a rack."
      },
      {
        "name": "Cinnamon Sugar Donuts",
        "servings": "~12 donuts",
        "ingredients": [
          "Classic glazed donut dough (see above)",
          "Oil for frying",
          "Coating: ½ cup (100 g) granulated sugar, 1½ tsp ground cinnamon, 3 tbsp melted butter"
        ],
        "prep": "Make and fry donuts as in the classic glazed donut recipe. While still warm, brush with melted butter and roll in cinnamon sugar mixture until fully coated. Best served warm."
      },
      {
        "name": "Classic Glazed Donuts",
        "servings": "~12 donuts",
        "ingredients": [
          "3 cups (360 g) all-purpose flour",
          "¼ cup (50 g) sugar",
          "1 packet (7 g) instant yeast",
          "½ tsp salt",
          "¾ cup (180 ml) warm milk (100°F)",
          "2 large eggs",
          "⅓ cup (75 g) unsalted butter, softened",
          "Oil for frying",
          "Glaze: 2 cups (240 g) powdered sugar, ¼ cup (60 ml) warm milk, 1 tsp vanilla"
        ],
        "prep": "Mix flour, sugar, yeast, and salt. Add warm milk, eggs, and butter and knead until smooth and elastic, about 8 minutes. Rise until doubled, about 1 hour. Roll out to ½-inch and cut donut shapes. Rest 30 minutes. Fry in 350°F oil about 1 minute per side. Dip warm donuts in glaze."
      },
      {
        "name": "Cream-Filled Donuts",
        "servings": "~12 donuts",
        "ingredients": [
          "Classic glazed donut dough (see above)",
          "Oil for frying",
          "Filling: 2 cups vanilla pastry cream (see Creams section)"
        ],
        "prep": "Make and fry donut balls without holes as in classic glazed donut recipe. Cool completely. Using a piping bag with a long round tip, insert into the side of each donut and pipe pastry cream inside until donut feels slightly heavier. Dust with powdered sugar."
      },
      {
        "name": "Korean Twisted Donuts",
        "servings": "~16 donuts",
        "ingredients": [
          "flour",
          "sugar",
          "yeast",
          "salt",
          "butter",
          "milk (warm, ~98°F if activating yeast)",
          "vegetable oil (for dough and frying)",
          "cinnamon powder",
          "granulated sugar"
        ],
        "prep": "Heat some butter and milk in a pot on medium heat until butter melts and the mixture is well combined. Remove from heat and add 2 eggs. mix well and let cool. Add yeast to the wet mixture and let sit 5 minutes to activate yeast. After 5 minutes, add the wet mixture to a large mixing bowl. Combine flour, sugsaltand salt in a bowl and mix together. Add the dry ingredients to the wet. Mix well with a rubber spatula until it forms a soft ball, Add a little vegetable oil and continue kneading until smooth. Transfer to an oiled bowl, cover, and let the dogh rise for 20 minutes. Divide into 16 pieces and roll into balls. Let it rise another 10 minutes. Roll each ball into a 12-inch long, 1 inch thick log. Twist the ends in opposite directions. Hold both ends of the log and brings ends together and pinch. Hold the pinched end with one hand and the other end in the other hand and twist the ends in opposite directions. It should look like a twisted pretzel log. Let pretzel logs rise another 10 minutes flipping on the cutting board to let both sides rise. Heat oil to 350 F until a pinch of dough floats instantly to the surface. Fry pretzel logs in hot oil until golden brown on both sides. Remove from oil and place in a shaker container with a lid with some sugar and cinnamon. Let cool and serve."
      },
      {
        "name": "Mini Cruller Donuts",
        "servings": "~20 crullers",
        "ingredients": [
          "1 cup (240 ml) water",
          "1 tbsp sugar",
          "½ tsp salt",
          "⅓ cup (75 g) unsalted butter",
          "1 cup (120 g) all-purpose flour",
          "3 large eggs",
          "1 tsp vanilla",
          "Oil for frying at 350°F",
          "Glaze: 1½ cups powdered sugar, 3 tbsp milk"
        ],
        "prep": "Make choux dough by boiling water, sugar, salt, and butter, adding flour, stirring until dough forms, cooling 5 minutes, then beating in eggs and vanilla. Pipe into rings onto parchment squares. Fry at 350°F dropping paper and dough together — dough releases. Fry 2–3 minutes per side. Dip in glaze."
      },
      {
        "name": "Vanilla Cream Filled Donuts",
        "servings": "~12 donuts",
        "ingredients": [
          "3 cups (360 g) bread flour",
          "¼ cup (50 g) sugar",
          "1 tsp salt",
          "Zest of 1 lemon",
          "1 packet (7 g) instant yeast",
          "¾ cup (180 ml) warm water (98°F)",
          "2 large eggs",
          "¼ cup (60 g) unsalted butter, softened",
          "Oil for frying",
          "Vanilla Cream: ½ cup sugar, 3 tbsp cornstarch, 1 tsp vanilla, 3 egg yolks, 1½ cups warm milk, 2 tbsp butter"
        ],
        "prep": "Mix flour, sugar, salt, lemon zest, and yeast. Add warm water and eggs. Knead 5 minutes. Add butter and knead until smooth about 8 more minutes. Rise 2 hours then refrigerate overnight. Roll into balls and fry in 350°F oil until golden. For vanilla cream whisk sugar, cornstarch, and egg yolks. Add warm milk and cook until thick. Add butter and vanilla. Chill. Pipe cream into cooled donuts."
      }
    ]
  },
  {
    "id": "pastries",
    "icon": "🥐",
    "name": "Pastries",
    "desc": "Danishes, cream puffs, rolls, eclairs and fried pies.",
    "recipes": [
      {
        "name": "Cream Puffs",
        "servings": "~20 puffs",
        "ingredients": [
          "½ cup (120 ml) water",
          "½ cup (120 ml) whole milk",
          "½ cup (115 g) unsalted butter",
          "1 tsp sugar",
          "½ tsp salt",
          "1 cup (120 g) all-purpose flour",
          "4 large eggs",
          "Filling: 2 cups (480 ml) heavy cream, 2 tbsp powdered sugar, 1 tsp vanilla"
        ],
        "prep": "Preheat oven to 425°F (220°C). Bring water, milk, butter, sugar, and salt to a boil. Add flour all at once and stir vigorously until dough forms. Transfer to bowl and cool 5 minutes. Beat in eggs one at a time. Pipe 1.5-inch mounds onto a lined sheet. Bake 15 minutes, reduce to 375°F and bake 10 more minutes. Cool. Whip cream with sugar and vanilla. Cut tops off and fill."
      },
      {
        "name": "Fried Apple Pie",
        "servings": "~8 pies",
        "ingredients": [
          "Dough: 2 cups (240 g) all-purpose flour, ½ tsp salt, ⅔ cup (150 g) cold butter, 4–5 tbsp ice water",
          "Filling: 3 medium apples peeled and diced, ¾ cup (165 g) brown sugar, ¾ cup (180 ml) water, 1 tsp lemon juice, 2 tbsp butter, 1 tsp cinnamon, ¼ tsp nutmeg, 1 tsp vanilla, 2 tbsp cornstarch mixed with 2 tbsp cold water",
          "Egg wash, Oil for frying",
          "Glaze: 1½ cups powdered sugar, 3 tbsp milk"
        ],
        "prep": "Make dough by cutting cold butter into flour and salt until crumbly. Add ice water and knead just until dough holds. Chill 30 minutes. Cook apples until softened. Make butterscotch sauce with brown sugar, water, butter, lemon juice, and spices. Add apples and cornstarch slurry and cook until thick. Cool. Roll dough, cut into circles, fill, seal with fork. Fry in 350°F oil until golden. Drizzle with glaze."
      },
      {
        "name": "Mini Apple Pies",
        "servings": "~12 mini pies",
        "ingredients": [
          "Rectangular dough sheets or egg roll wrappers",
          "2 apples diced",
          "2 tbsp butter",
          "¼ cup (55 g) brown sugar",
          "1 tsp cinnamon",
          "Cornstarch slurry for sealing",
          "Oil for frying",
          "Glaze: 1 cup powdered sugar, 2 tbsp milk"
        ],
        "prep": "Cook diced apples with butter, brown sugar, and cinnamon until soft. Cool. Place filling on dough sheet, brush edges with cornstarch slurry, fold over and press to seal. Fry in 350°F oil until golden. Dip in glaze, dust with powdered sugar, drizzle with chocolate syrup."
      },
      {
        "name": "Raspberry Danish",
        "servings": "~8 pastries",
        "ingredients": [
          "1 sheet (250 g) puff pastry, thawed",
          "½ cup (160 g) raspberry jam",
          "½ cup (115 g) cream cheese, softened",
          "2 tbsp powdered sugar",
          "1 tsp vanilla",
          "1 egg beaten with 1 tbsp milk"
        ],
        "prep": "Preheat oven to 400°F (200°C). Beat cream cheese with powdered sugar and vanilla. Cut pastry into 8 squares. Place cream cheese in center, top with jam. Fold in corners slightly and brush with egg wash. Bake 15–20 minutes until puffed and deep golden."
      },
      {
        "name": "Churros",
        "servings": "~20 churros",
        "ingredients": [
          "1 cup (240 ml) water",
          "1 tbsp sugar",
          "½ tsp salt",
          "⅓ cup (75 g) unsalted butter",
          "1 cup (120 g) all-purpose flour",
          "3 large eggs",
          "1 tsp vanilla extract",
          "Oil for frying at 350°F",
          "Coating: ½ cup sugar mixed with 1½ tsp cinnamon"
        ],
        "prep": "Bring water, sugar, salt, and butter to a boil. Add flour all at once and stir vigorously until dough pulls from sides. Transfer to bowl and cool 5 minutes. Beat in eggs one at a time until smooth. Add vanilla. Pipe onto parchment strips with a star tip. Submerge paper into 350°F oil — dough releases. Fry 2–3 minutes per side until golden. Roll immediately in cinnamon sugar."
      },
      {
        "name": "Cinnamon Rolls",
        "servings": "~12 rolls",
        "ingredients": [
          "3 cups (360 g) all-purpose flour",
          "1 packet (7 g) instant yeast",
          "1 cup (240 ml) whole milk, warmed to 98°F",
          "¼ cup (50 g) sugar",
          "1 tsp salt",
          "¼ cup (60 g) butter, softened",
          "1 large egg",
          "Filling: ½ cup (115 g) soft butter, ¾ cup (165 g) brown sugar, 2 tbsp cinnamon",
          "Icing: 2 cups (240 g) powdered sugar, 3–4 tbsp milk, 1 tsp vanilla"
        ],
        "prep": "Mix warm milk, yeast, and 1 tsp sugar. Let sit 10 minutes. Add egg and butter. Mix in flour and salt. Knead 8 minutes. Rise 1 hour. Roll out, spread filling, roll into log, cut into 12 pieces. Rise 30 minutes. Bake at 350°F 20–25 minutes. Drizzle with icing."
      },
      {
        "name": "Creme Filled Cake Rolls",
        "servings": "~10 slices",
        "ingredients": [
          "3 large eggs",
          "½ cup (100 g) sugar",
          "2 tbsp cocoa powder",
          "2 tbsp milk",
          "½ cup (60 g) all-purpose flour",
          "1 tsp baking powder",
          "Pinch of salt",
          "1 cup (240 ml) heavy cream, whipped with 2 tbsp powdered sugar and 1 tsp vanilla"
        ],
        "prep": "Preheat oven to 350°F (175°C). Beat eggs and sugar. Mix cocoa with milk and add. Fold in flour, baking powder, and salt. Spread onto a lined baking sheet. Bake 10–12 minutes. Roll warm cake in parchment. Cool completely. Unroll, spread whipped cream, re-roll. Slice into rounds."
      },
      {
        "name": "Chocolate Eclairs",
        "servings": "~12 eclairs",
        "ingredients": [
          "Choux: ½ cup milk, ½ cup water, ½ cup butter, 1 tsp sugar, ½ tsp salt, 1 cup flour, 4 large eggs",
          "Pastry Cream: 2 cups milk, 4 egg yolks, ½ cup sugar, 3 tbsp cornstarch, ¼ tsp salt, 2 tbsp butter, 1 tsp vanilla",
          "Ganache: 1 cup chocolate chips, ½ cup hot heavy cream"
        ],
        "prep": "Preheat oven to 400°F (200°C). Make choux: boil milk, water, butter, sugar, and salt. Add flour and stir until dough forms. Cool 5 minutes. Beat in eggs one at a time. Pipe 4-inch strips onto lined sheet. Bake 20–25 minutes until golden. Cool. Make pastry cream: whisk yolks, sugar, cornstarch, and salt. Temper with hot milk. Cook until thick. Add butter and vanilla. Chill. Poke holes in shells and inject pastry cream. Make ganache by pouring hot cream over chocolate and stirring smooth. Dip tops in ganache. Chill."
      }
    ]
  },
  {
    "id": "quick_breads",
    "icon": "🍞",
    "name": "Quick Breads",
    "desc": "Muffins, scones and sweet loaf breads.",
    "recipes": [
      {
        "name": "Banana Bread",
        "servings": "1 loaf, ~10 slices",
        "ingredients": [
          "3 very ripe bananas, mashed (about 1½ cups)",
          "⅓ cup (75 g) unsalted butter, melted",
          "¾ cup (150 g) granulated sugar",
          "1 large egg, beaten",
          "1 tsp vanilla extract",
          "1 tsp baking soda",
          "Pinch of salt",
          "1½ cups (180 g) all-purpose flour"
        ],
        "prep": "Preheat oven to 350°F (175°C). Mash bananas. Stir in melted butter. Mix in sugar, beaten egg, and vanilla. Add baking soda and salt. Fold in flour until just combined. Pour into a greased 9x5 loaf pan. Bake 55–65 minutes until deep golden and a toothpick comes out clean. Cool in pan 10 minutes."
      },
      {
        "name": "Blueberry Muffins",
        "servings": "~12 muffins",
        "ingredients": [
          "2 cups (240 g) all-purpose flour",
          "¾ cup (150 g) granulated sugar",
          "2½ tsp baking powder",
          "½ tsp salt",
          "2 large eggs",
          "1 cup (240 ml) whole milk",
          "½ cup (115 g) unsalted butter, melted",
          "1 tsp vanilla extract",
          "1½ cups (215 g) fresh or frozen blueberries"
        ],
        "prep": "Preheat oven to 400°F (200°C). Whisk flour, sugar, baking powder, and salt. Whisk eggs, milk, butter, and vanilla. Combine wet and dry until just combined. Fold in blueberries. Fill lined muffin cups ¾ full. Bake 18–22 minutes until golden."
      },
      {
        "name": "Chocolate Chip Scones",
        "servings": "~8 scones",
        "ingredients": [
          "2 cups (240 g) all-purpose flour",
          "⅓ cup (65 g) sugar",
          "1 tbsp baking powder",
          "½ tsp salt",
          "½ cup (115 g) cold unsalted butter, cubed",
          "¾ cup (180 ml) cold heavy cream",
          "1 large egg",
          "1 tsp vanilla extract",
          "¾ cup (130 g) chocolate chips"
        ],
        "prep": "Preheat oven to 400°F (200°C). Whisk flour, sugar, baking powder, and salt. Cut in cold butter until crumbly. Whisk cream, egg, and vanilla and pour into flour mix. Add chocolate chips and stir until just combined. Pat into a 1-inch thick circle and cut into 8 wedges. Bake on a lined sheet 18–22 minutes until golden."
      },
      {
        "name": "Lemon Loaf",
        "servings": "1 loaf, ~10 slices",
        "ingredients": [
          "1½ cups (180 g) all-purpose flour",
          "1 tsp baking powder",
          "¼ tsp salt",
          "½ cup (115 g) unsalted butter, softened",
          "1 cup (200 g) granulated sugar",
          "2 large eggs",
          "½ cup (120 ml) sour cream",
          "Zest of 2 lemons",
          "2 tbsp fresh lemon juice",
          "Glaze: 1 cup powdered sugar, 2–3 tbsp fresh lemon juice"
        ],
        "prep": "Preheat oven to 350°F (175°C). Cream butter and sugar. Add eggs one at a time. Mix in sour cream, lemon zest, and lemon juice. Fold in flour, baking powder, and salt. Bake in a greased loaf pan 50–55 minutes. Pour lemon glaze over top while warm."
      },
      {
        "name": "Pumpkin Bread",
        "servings": "1 loaf, ~10 slices",
        "ingredients": [
          "1¾ cups (210 g) all-purpose flour",
          "1 tsp baking soda",
          "½ tsp salt",
          "1 tsp cinnamon",
          "½ tsp nutmeg",
          "¼ tsp ginger",
          "¼ tsp cloves",
          "½ cup (115 g) unsalted butter, melted",
          "1 cup (220 g) brown sugar",
          "2 large eggs",
          "1 cup (240 g) pumpkin puree",
          "1 tsp vanilla extract"
        ],
        "prep": "Preheat oven to 350°F (175°C). Whisk flour, baking soda, salt, and spices. In a separate bowl whisk butter, brown sugar, eggs, pumpkin, and vanilla. Fold dry into wet until just combined. Bake in a greased 9x5 loaf pan 60–70 minutes until a toothpick comes out clean."
      },
      {
        "name": "Strawberry Muffins",
        "servings": "~12 muffins",
        "ingredients": [
          "2 cups (240 g) all-purpose flour",
          "¾ cup (150 g) granulated sugar",
          "2 tsp baking powder",
          "½ tsp salt",
          "2 large eggs",
          "1 cup (240 ml) whole milk",
          "½ cup (115 g) unsalted butter, melted",
          "1 tsp vanilla extract",
          "1½ cups (215 g) fresh strawberries, chopped"
        ],
        "prep": "Preheat oven to 400°F (200°C). Whisk flour, sugar, baking powder, and salt. Whisk eggs, milk, butter, and vanilla. Combine wet and dry until just combined. Fold in strawberries. Fill lined muffin cups ¾ full. Bake 20–24 minutes until golden."
      }
    ]
  },
  {
    "id": "pies",
    "icon": "🥧",
    "name": "Pies",
    "desc": "Fruit, cream and custard pies.",
    "recipes": [
      {
        "name": "Apple Pie",
        "servings": "1 pie, ~8 slices",
        "ingredients": [
          "Crust: 2½ cups (300 g) all-purpose flour, 1 tsp salt, 1 tbsp sugar, 1 cup (226 g) cold unsalted butter cubed, 6–8 tbsp ice water",
          "Filling: 6–7 medium apples peeled and sliced, ¾ cup (165 g) sugar, 2 tbsp all-purpose flour, 1 tsp cinnamon, ¼ tsp nutmeg, 1 tbsp lemon juice, 2 tbsp butter",
          "Egg wash: 1 egg beaten with 1 tbsp milk"
        ],
        "prep": "Make crust by cutting cold butter into flour, salt, and sugar until crumbly. Add ice water until dough just holds. Divide in half, flatten, wrap, and chill 1 hour. Preheat oven to 425°F (220°C). Toss apple filling ingredients together. Roll out bottom crust and place in pie dish. Fill with apples and dot with butter. Roll out top crust, place over filling, and crimp edges. Cut vents and brush with egg wash. Bake 20 minutes, reduce to 375°F and bake 35–40 more minutes until golden."
      },
      {
        "name": "Banana Cream Pie",
        "servings": "1 pie, ~8 slices",
        "ingredients": [
          "1 prepared graham cracker or cookie crust",
          "3 ripe bananas, sliced",
          "Filling: 2½ cups whole milk, ½ cup sugar, 3 tbsp cornstarch, ¼ tsp salt, 3 egg yolks, 2 tbsp butter, 1 tsp vanilla extract",
          "2 cups (480 ml) heavy cream whipped with 2 tbsp sugar"
        ],
        "prep": "Make filling: whisk sugar, cornstarch, salt, and egg yolks with cold milk in a saucepan. Cook over medium heat stirring constantly until thick and bubbling. One more minute. Add butter and vanilla. Cool with plastic wrap pressed on surface. Layer banana slices in prepared crust. Pour filling over bananas. Refrigerate at least 4 hours. Top with whipped cream before serving."
      },
      {
        "name": "Cherry Pie",
        "servings": "1 pie, ~8 slices",
        "ingredients": [
          "Double pie crust (see Apple Pie recipe)",
          "Filling: 4 cups (600 g) fresh or canned tart cherries pitted, ¾ cup (150 g) sugar, 3 tbsp cornstarch, 1 tbsp lemon juice, ½ tsp almond extract",
          "Egg wash"
        ],
        "prep": "Preheat oven to 425°F (220°C). Make filling by combining cherries, sugar, cornstarch, lemon juice, and almond extract. Line pie dish with bottom crust. Fill with cherry mixture. Cover with top crust or lattice and crimp edges. Brush with egg wash. Bake 20 minutes, reduce to 375°F and bake 35–40 more minutes until juices are bubbling and crust is golden."
      },
      {
        "name": "Easy Lemon Cream Pie",
        "servings": "1 pie, ~8 slices",
        "ingredients": [
          "3 large eggs",
          "1 can (14 oz) sweetened condensed milk",
          "½ cup (120 ml) fresh lemon juice",
          "Zest of 2 lemons",
          "Prepared graham cracker crust",
          "Whipped cream for topping"
        ],
        "prep": "Preheat oven to 325°F (163°C). Whisk eggs, condensed milk, lemon juice, and zest until smooth. Pour into prepared crust. Bake 15–20 minutes until just set. Cool then refrigerate at least 2 hours. Top with whipped cream."
      },
      {
        "name": "Lemon Meringue Pie",
        "servings": "1 pie, ~8 slices",
        "ingredients": [
          "Prepared cookie or graham cracker crust",
          "Filling: 1¼ cups sugar, ¼ cup cornstarch, zest of 2 lemons, 1¼ cups water, ¾ cup fresh lemon juice, 5 egg yolks, 4 tbsp butter, 1 tsp vanilla",
          "Meringue: 5 large egg whites, ¼ tsp cream of tartar, ½ cup granulated sugar"
        ],
        "prep": "Make filling: whisk sugar, cornstarch, lemon zest, water, and lemon juice in a pot and cook until thick. Temper into egg yolks. Return to pot and cook 2 more minutes. Add butter and vanilla. Pour into baked crust. Make meringue: beat egg whites with cream of tartar then gradually add sugar to stiff glossy peaks. Spread over hot filling touching edges. Bake at 350°F until peaks are golden."
      },
      {
        "name": "Lime Pie",
        "servings": "1 pie, ~8 slices",
        "ingredients": [
          "Crust: 1½ cups (150 g) graham cracker crumbs, 2 tbsp sugar, 6 tbsp (85 g) butter melted",
          "Filling: 1 can (14 oz) sweetened condensed milk, 3 large egg yolks, ½ cup (120 ml) fresh lime juice, zest of 2 limes",
          "Whipped cream for topping"
        ],
        "prep": "Press crumb mixture into pie dish. Bake at 350°F for 8 minutes. Cool. Beat condensed milk, egg yolks, lime juice, and zest. Pour over crust and bake 15 minutes. Chill at least 3 hours. Serve with whipped cream."
      },
      {
        "name": "Pecan Pie",
        "servings": "1 pie, ~8 slices",
        "ingredients": [
          "1 unbaked 9-inch pie crust",
          "3 large eggs",
          "1 cup (320 g) light corn syrup",
          "1 cup (220 g) packed brown sugar",
          "2 tbsp unsalted butter, melted",
          "1 tsp vanilla extract",
          "¼ tsp salt",
          "2 cups (225 g) pecan halves"
        ],
        "prep": "Preheat oven to 350°F (175°C). Whisk eggs, corn syrup, brown sugar, melted butter, vanilla, and salt until well combined. Stir in pecans. Pour into unbaked pie crust. Bake 50–60 minutes until center is just set — it will jiggle slightly. Cool completely before slicing."
      },
      {
        "name": "Pumpkin Pie",
        "servings": "1 pie, ~8 slices",
        "ingredients": [
          "1 unbaked 9-inch pie crust",
          "1 can (15 oz) pumpkin puree",
          "¾ cup (165 g) brown sugar",
          "1 tsp cinnamon",
          "½ tsp ginger",
          "¼ tsp cloves",
          "¼ tsp nutmeg",
          "½ tsp salt",
          "3 large eggs",
          "1¼ cups (300 ml) evaporated milk"
        ],
        "prep": "Preheat oven to 425°F (220°C). Whisk pumpkin, brown sugar, spices, and salt. Beat in eggs. Gradually stir in evaporated milk. Pour into unbaked crust. Bake 15 minutes at 425°F, reduce to 350°F and bake 40–50 more minutes until a knife inserted near the center comes out clean. Cool completely before serving."
      },
      {
        "name": "Sweet Potato Pie",
        "servings": "1 pie, ~8 slices",
        "ingredients": [
          "1 unbaked 9-inch pie crust",
          "2 cups (480 g) cooked and mashed sweet potato",
          "¾ cup (165 g) brown sugar",
          "2 large eggs",
          "½ cup (120 ml) evaporated milk",
          "¼ cup (60 g) unsalted butter, softened",
          "1 tsp vanilla extract",
          "1 tsp cinnamon",
          "½ tsp nutmeg",
          "¼ tsp ginger",
          "¼ tsp salt"
        ],
        "prep": "Preheat oven to 350°F (175°C). Beat sweet potato and butter together until smooth. Beat in sugar, eggs, evaporated milk, vanilla, and spices until well combined. Pour into unbaked pie crust. Bake 55–60 minutes until a knife inserted in center comes out clean. Cool before serving."
      }
    ]
  },
  {
    "id": "tarts",
    "icon": "🥧",
    "name": "Tarts",
    "desc": "Fruit and cream tarts.",
    "recipes": [
      {
        "name": "Lemon Tart",
        "servings": "1 tart, ~8 slices",
        "ingredients": [
          "1 cup (240 ml) cold whole milk",
          "½ cup (100 g) granulated sugar",
          "3 tbsp cornstarch",
          "½ cup (120 ml) fresh lemon juice",
          "2 tbsp unsalted butter",
          "Prepared tart crust, baked"
        ],
        "prep": "Whisk cold milk, sugar, and cornstarch in a saucepan until smooth. Cook over medium heat whisking constantly until it reaches a full rolling boil. Boil 45–60 seconds. Remove from heat and immediately whisk in lemon juice. Add butter and stir until smooth and glossy. Pour into baked tart shell. Cool then refrigerate until fully set."
      },
      {
        "name": "Milk Tart",
        "servings": "1 tart, ~8 slices",
        "ingredients": [
          "1 can (14 oz) sweetened condensed milk",
          "1 cup (240 ml) whole milk",
          "3 tbsp cornstarch",
          "1 tsp vanilla extract",
          "Pinch of cinnamon for topping",
          "Prepared tart shell"
        ],
        "prep": "Whisk condensed milk, milk, and cornstarch in a saucepan over medium heat stirring constantly until thickened and smooth. Add vanilla. Pour into prepared tart shell, dust with cinnamon, and refrigerate at least 2 hours until set."
      },
      {
        "name": "No Bake Lemon Tart",
        "servings": "1 tart, ~8 slices",
        "ingredients": [
          "1 cup (240 ml) whole milk",
          "½ cup (100 g) sugar",
          "1 can (14 oz) sweetened condensed milk",
          "3 tbsp cornstarch",
          "2 tbsp fresh lemon juice",
          "2 tbsp unsalted butter",
          "1 tsp vanilla extract",
          "Prepared tart shell"
        ],
        "prep": "Combine milk, sugar, condensed milk, and cornstarch in a saucepan. Cook over medium heat stirring constantly until thickened. Remove from heat. Stir in lemon juice, butter, and vanilla. Pour into tart shell and refrigerate until fully set."
      },
      {
        "name": "Strawberry Tart",
        "servings": "1 tart, ~8 slices",
        "ingredients": [
          "1 baked tart shell",
          "Filling: 2 cups vanilla pastry cream (see Creams section)",
          "2 cups (300 g) fresh strawberries, hulled and sliced",
          "2 tbsp apricot jam mixed with 1 tbsp warm water for glaze"
        ],
        "prep": "Fill cooled baked tart shell with a smooth layer of vanilla pastry cream. Arrange sliced strawberries on top in a decorative pattern. Brush with warmed apricot glaze to give a beautiful sheen and prevent drying. Refrigerate until serving."
      }
    ]
  },
  {
    "id": "crusts",
    "icon": "🥧",
    "name": "Crusts",
    "desc": "Pie and tart crusts.",
    "recipes": [
      {
        "name": "Classic Pie Crust",
        "servings": "1 9-inch pie",
        "ingredients": [
          "2 ½ cups all-purpose flour",
          "1 tsp salt",
          "1 cup unsalted butter, cold and cubed",
          "6–8 tbsp ice water"
        ],
        "prep": "Combine flour and salt. Cut in butter until mixture resembles coarse crumbs. Gradually add ice water until dough forms. Divide in half, shape into disks, wrap, and chill 30 minutes. Roll out and fit into pie pan."
      },
      {
        "name": "Classic Tart Crust",
        "servings": "1 9-inch tart",
        "ingredients": [
          "1 ¼ cups all-purpose flour",
          "½ cup unsalted butter, cold and cubed",
          "¼ cup powdered sugar",
          "1 large egg yolk",
          "Pinch of salt"
        ],
        "prep": "Mix flour, sugar, and salt. Cut in butter until coarse crumbs form. Add egg yolk and knead briefly until dough forms. Wrap and chill 30 minutes. Roll out and fit into tart pan."
      },
      {
        "name": "Cookie Crust For Pie",
        "servings": "1 crust",
        "ingredients": [
          "½ cup (115 g) unsalted butter, softened",
          "½ cup (60 g) powdered sugar",
          "1 large egg yolk, raw",
          "1 large egg yolk, hard boiled and pushed through a sieve",
          "1 tsp vanilla extract",
          "1 cup (120 g) cake flour",
          "¼ tsp salt"
        ],
        "prep": "Beat butter and powdered sugar until creamy. Add both egg yolks and vanilla and mix well. Add flour and salt and mix until dough comes together. Flatten into a disk and refrigerate at least 30 minutes before rolling and pressing into tart molds or a pie dish."
      },
      {
        "name": "Shortbread Crust",
        "servings": "1 9-inch tart",
        "ingredients": [
          "1 cup all-purpose flour",
          "½ cup unsalted butter, softened",
          "¼ cup powdered sugar",
          "Pinch of salt"
        ],
        "prep": "Cream butter and sugar until smooth. Mix in flour and salt until dough forms. Press into tart pan evenly. Chill 15 minutes, then bake at 350°F for 15–18 minutes until lightly golden."
      }
    ]
  },
  {
    "id": "puddings",
    "icon": "🍮",
    "name": "Puddings",
    "desc": "Creamy, baked and layered puddings.",
    "recipes": [
      {
        "name": "Banana Pudding",
        "servings": "6 servings",
        "ingredients": [
          "1 packet (3.4 oz) instant vanilla pudding mix",
          "2 cups (480 ml) cold whole milk",
          "1 can (14 oz) sweetened condensed milk",
          "2 ripe bananas, sliced",
          "2 cups (480 ml) heavy cream whipped with 2 tbsp powdered sugar",
          "Vanilla wafer cookies"
        ],
        "prep": "Whisk pudding mix and cold milk for 2 minutes until thickened. Fold in condensed milk. Layer vanilla wafers, banana slices, and pudding in a dish. Top with whipped cream and more wafers. Chill at least 2 hours before serving."
      },
      {
        "name": "Banana Pudding (Layered)",
        "servings": "8 servings",
        "ingredients": [
          "1 cup (200 g) granulated sugar",
          "½ cup (60 g) all-purpose flour",
          "¼ tsp salt",
          "4 large egg yolks",
          "2½ cups (600 ml) whole milk",
          "2 tsp vanilla extract",
          "1 cup (240 ml) heavy cream, whipped to stiff peaks",
          "Vanilla wafers",
          "3–4 ripe bananas, sliced"
        ],
        "prep": "Whisk sugar, flour, salt, egg yolks, and milk in a heavy saucepan. Cook over medium heat stirring constantly until thick and bubbling. One more minute. Add vanilla. Cool slightly. Fold in whipped cream for a lighter texture. Layer vanilla wafers, banana slices, and pudding in a trifle dish. Chill at least 4 hours."
      },
      {
        "name": "Bread Pudding",
        "servings": "8 servings",
        "ingredients": [
          "6 cups (about 300 g) cubed day-old bread such as brioche or French bread",
          "3 large eggs",
          "2 cups (480 ml) whole milk",
          "1 cup (240 ml) heavy cream",
          "¾ cup (165 g) granulated sugar",
          "2 tsp vanilla extract",
          "1 tsp cinnamon",
          "¼ tsp nutmeg",
          "¼ cup (60 g) butter, melted",
          "½ cup (75 g) raisins or chocolate chips (optional)"
        ],
        "prep": "Preheat oven to 350°F (175°C). Arrange bread cubes in a greased 9x13 baking dish. Whisk eggs, milk, cream, sugar, vanilla, cinnamon, and nutmeg together. Pour over bread. Drizzle with melted butter. Add raisins if using. Let soak 20 minutes. Bake 40–45 minutes until golden on top and a knife inserted in center comes out clean."
      },
      {
        "name": "Butterscotch Pudding",
        "servings": "4 servings",
        "ingredients": [
          "1 cup (220 g) packed dark brown sugar",
          "3 tbsp cornstarch",
          "¼ tsp salt",
          "2½ cups (600 ml) whole milk",
          "3 large egg yolks",
          "3 tbsp unsalted butter",
          "2 tsp vanilla extract"
        ],
        "prep": "Whisk brown sugar, cornstarch, salt, and cold milk until smooth. Cook over medium heat, stirring constantly, until thickened and bubbling. Whisk a small amount of hot mixture into egg yolks to temper. Return to pot and cook 2 more minutes. Remove from heat. Add butter and vanilla and stir until butter melts. Pour into serving dishes and press plastic wrap directly on surface. Refrigerate until set, about 2 hours."
      },
      {
        "name": "Chocolate Pudding",
        "servings": "4 servings",
        "ingredients": [
          "½ cup (100 g) granulated sugar",
          "3 tbsp (20 g) cocoa powder",
          "3 tbsp cornstarch",
          "¼ tsp salt",
          "2½ cups (600 ml) whole milk",
          "1 tbsp unsalted butter",
          "1 tsp vanilla extract"
        ],
        "prep": "Whisk sugar, cocoa, cornstarch, salt, and cold milk in a saucepan until smooth. Cook over medium heat whisking constantly until thick and bubbling. Boil gently 1 minute. Add butter and vanilla. Pour into dishes and press plastic wrap on surface. Chill at least 2 hours."
      },
      {
        "name": "Rice Pudding",
        "servings": "4 servings",
        "ingredients": [
          "1 cup (185 g) short-grain white rice",
          "4 cups (960 ml) whole milk",
          "⅓ cup (65 g) granulated sugar",
          "1 tsp vanilla extract",
          "¼ tsp cinnamon",
          "Pinch of salt",
          "Zest of ½ lemon (optional)"
        ],
        "prep": "Combine rice, milk, sugar, salt, and lemon zest in a heavy saucepan over medium heat. Bring to a gentle boil, stirring frequently. Reduce heat to low and cook, stirring often to prevent sticking, until rice is tender and mixture is creamy and thickened — about 25–30 minutes. Remove from heat and stir in vanilla and cinnamon. Serve warm or pour into dishes and refrigerate. Sprinkle with additional cinnamon before serving."
      },
      {
        "name": "Tiramisu",
        "servings": "8 servings",
        "ingredients": [
          "6 large egg yolks",
          "¾ cup (150 g) granulated sugar",
          "1 lb (450 g) mascarpone cheese, room temperature",
          "1½ cups (360 ml) heavy cream",
          "1½ cups (360 ml) strong brewed espresso or coffee, cooled",
          "3 tbsp rum or coffee liqueur (optional)",
          "24–36 ladyfinger biscuits",
          "Cocoa powder for dusting"
        ],
        "prep": "Beat egg yolks and sugar in a double boiler over simmering water until pale and thick, about 5 minutes. Remove from heat and beat until cooled. Fold in mascarpone until smooth. Whip heavy cream to stiff peaks and fold into mascarpone mixture. Mix coffee and rum together. Quickly dip each ladyfinger in coffee mixture and arrange in a single layer in a 9x13 dish. Spread half the mascarpone cream over. Repeat layers. Dust generously with cocoa powder. Refrigerate at least 4 hours or overnight."
      },
      {
        "name": "Vanilla Pudding",
        "servings": "4 servings",
        "ingredients": [
          "½ cup (100 g) granulated sugar",
          "3 tbsp cornstarch",
          "¼ tsp salt",
          "2½ cups (600 ml) whole milk",
          "1 tbsp unsalted butter",
          "2 tsp vanilla extract"
        ],
        "prep": "Whisk sugar, cornstarch, and salt with cold milk in a saucepan until smooth. Cook over medium heat stirring constantly until mixture comes to a boil and thickens. Continue cooking for 1–2 minutes while stirring until smooth and creamy. Remove from heat and add butter and vanilla. Pour into dishes and press plastic wrap on surface. Chill until set."
      }
    ]
  },
  {
    "id": "custards",
    "icon": "🍮",
    "name": "Custards",
    "desc": "Baked and chilled custards.",
    "recipes": [
      {
        "name": "Crème Brûlée",
        "servings": "4 servings",
        "ingredients": [
          "2 cups (480 ml) heavy cream",
          "5 large egg yolks",
          "½ cup (100 g) granulated sugar",
          "1 tsp vanilla extract",
          "4 tsp granulated sugar for topping"
        ],
        "prep": "Preheat oven to 325°F (163°C). Heat cream until just simmering. Whisk egg yolks and sugar until pale. Slowly pour warm cream into yolks while whisking to temper. Add vanilla. Strain through a fine sieve. Pour into 4 ramekins. Place in a water bath and bake 35–40 minutes until just set with a slight wobble. Refrigerate at least 2 hours. Just before serving sprinkle 1 tsp sugar over each and caramelize with a kitchen torch or under the broiler."
      },
      {
        "name": "Custard Pudding",
        "servings": "4 servings",
        "ingredients": [
          "2 cups (480 ml) whole milk",
          "3 large eggs",
          "⅓ cup (65 g) granulated sugar",
          "1 tsp vanilla extract",
          "Pinch of salt",
          "Optional caramel sauce for base"
        ],
        "prep": "Preheat oven to 325°F (163°C). Warm milk to just below boiling. Whisk eggs, sugar, vanilla, and salt. Slowly pour warm milk into eggs while whisking to temper. Strain through a fine sieve. Pour into ramekins. Bake in a water bath 30–35 minutes until just set with a slight wobble. Cool and refrigerate before serving."
      },
      {
        "name": "Flan",
        "servings": "6 servings",
        "ingredients": [
          "Caramel: ¾ cup (150 g) granulated sugar, ¼ cup (60 ml) water",
          "Custard: 1 can (14 oz) sweetened condensed milk, 1 can (12 oz) evaporated milk, 3 large eggs, 1 tsp vanilla extract"
        ],
        "prep": "Preheat oven to 350°F (175°C). Make caramel by cooking sugar and water without stirring until deep amber. Pour into a round baking dish and swirl to coat the bottom. Make custard by blending condensed milk, evaporated milk, eggs, and vanilla until smooth. Pour over caramel. Place in a water bath and bake 50–60 minutes until just set. Cool completely then refrigerate at least 4 hours. To serve loosen edges with a knife and invert onto a serving plate."
      },
      {
        "name": "Panna Cotta",
        "servings": "4 servings",
        "ingredients": [
          "2 cups (480 ml) heavy cream",
          "¼ cup (50 g) granulated sugar",
          "1 tsp vanilla extract",
          "1½ tsp unflavored powdered gelatin",
          "2 tbsp cold water",
          "Fresh berries or fruit coulis for serving"
        ],
        "prep": "Bloom gelatin in cold water 5 minutes. Warm cream and sugar in a saucepan over medium heat, stirring until sugar dissolves and cream is steaming. Remove from heat and stir in bloomed gelatin until fully dissolved. Add vanilla. Pour into 4 lightly greased ramekins or glasses. Refrigerate at least 4 hours or overnight until fully set. To unmold dip briefly in warm water and invert onto a plate. Serve with berries."
      }
    ]
  }
];
