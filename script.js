const menuData = [

    // ── BEVANDE (A → Z) ────────────────────────────────────────────────────

    {
        category: "Acqua e Lattine",
        category_en: "Water & Canned Drinks",
        icon: "🥤",
        items: [
            { name: "Acqua Naturale", name_en: "Still Water", price: 1.00 },
            { name: "Acqua Frizzante", name_en: "Sparkling Water", price: 1.00 },
            { name: "Coca Cola", name_en: "Coca Cola", price: 2.50 },
            { name: "Coca Cola Zero", name_en: "Coca Cola Zero", price: 2.50 },
            { name: "Fanta", name_en: "Fanta", price: 2.50 },
            { name: "Sprite", name_en: "Sprite", price: 2.50 },
            { name: "Fuze Tea Limone/Pesca", name_en: "Fuze Tea Lemon/Peach", price: 2.50 },
            { name: "Lemon Soda", name_en: "Lemon Soda", price: 2.50 },
            { name: "Red Bull", name_en: "Red Bull", price: 3.00 }
        ]
    },
    {
        category: "Amari e Digestivi",
        category_en: "Amari & Digestifs",
        icon: "🍾",
        items: [
            { name: "Jagermeister", name_en: "Jagermeister", price: 3.00, allergens: ["Solfiti"], allergens_en: ["Sulphites"] },
            { name: "Montenegro", name_en: "Montenegro", price: 3.00, allergens: ["Solfiti"], allergens_en: ["Sulphites"] },
            { name: "Petrus", name_en: "Petrus", price: 3.00, allergens: ["Solfiti"], allergens_en: ["Sulphites"] },
            { name: "Unicum", name_en: "Unicum", price: 3.00, allergens: ["Solfiti"], allergens_en: ["Sulphites"] },
            { name: "Amaro del Capo", name_en: "Amaro del Capo", price: 3.00, allergens: ["Solfiti"], allergens_en: ["Sulphites"] },
            { name: "Fernet Branca", name_en: "Fernet Branca", price: 3.00, allergens: ["Solfiti"], allergens_en: ["Sulphites"] },
            { name: "Pizzicamaro", name_en: "Pizzicamaro", price: 3.00, allergens: ["Solfiti"], allergens_en: ["Sulphites"] },
            { name: "Baileys", name_en: "Baileys", price: 3.00, allergens: ["Latte"], allergens_en: ["Milk"] },
        ]
    },
    {
        category: "Bevande Analcoliche",
        category_en: "Soft Drinks",
        icon: "🧃",
        items: [
            { name: "Succo Pera", name_en: "Pear Juice", price: 2.50 },
            { name: "Succo Pesca", name_en: "Peach Juice", price: 2.50 },
            { name: "Succo Ananas", name_en: "Pineapple Juice", price: 2.50 },
            { name: "Succo Albicocca", name_en: "Apricot Juice", price: 2.50 },
            { name: "Succo Melograna", name_en: "Pomegranate Juice", price: 2.50 },
            { name: "Succo Arancia Rossa", name_en: "Red Orange Juice", price: 2.50 },
            { name: "Succo ACE", name_en: "Ace Juice", price: 2.50 },
            { name: "Succo Pesca-Mango", name_en: "Peach & Mango Juice", price: 2.50 },
            { name: "Cedrata", name_en: "Cedrata (Citron Soda)", price: 2.50 },
            { name: "Gassosa Chiurazzi", name_en: "Chiurazzi Soda", price: 2.00 },
            { name: "Schweppes Tonica/Lemon", name_en: "Schweppes Tonic/Lemon", price: 2.00 },
            { name: "Fever Tree Tonic/Ginger Beer", name_en: "Fever Tree Tonic/Ginger Beer", price: 2.50 },
            { name: "Thomas Henry Tonic/Grapefruit", name_en: "Thomas Henry Tonic/Grapefruit", price: 2.50 },
            { name: "Cocktail San Pellegrino", name_en: "San Pellegrino Cocktail", price: 2.50 },
            { name: "Crodino", name_en: "Crodino", price: 2.50 }
        ]
    },
    {
        category: "Birre",
        category_en: "Beers",
        icon: "🍺",
        items: [
            { name: "Peroni Nastro Azzurro", name_en: "Peroni Nastro Azzurro", price: 3.00, allergens: ["Glutine"], allergens_en: ["Gluten"] },
            { name: "Corona", name_en: "Corona", price: 4.00, allergens: ["Glutine"], allergens_en: ["Gluten"] },
            { name: "Raffo Grezza", name_en: "Raffo Grezza", price: 3.50, allergens: ["Glutine"], allergens_en: ["Gluten"] },
            { name: "Heineken", name_en: "Heineken", price: 3.50, allergens: ["Glutine"], allergens_en: ["Gluten"] },
            { name: "Becks", name_en: "Becks", price: 3.50, allergens: ["Glutine"], allergens_en: ["Gluten"] },
            { name: "Peroni Chill Lemon", name_en: "Peroni Chill Lemon", price: 2.50, allergens: ["Glutine"], allergens_en: ["Gluten"] },
            { name: "Peroni 0.0", name_en: "Peroni 0.0", price: 3.00, allergens: ["Glutine"], allergens_en: ["Gluten"] },
            { name: "Ceres", name_en: "Ceres", price: 4.00, allergens: ["Glutine"], allergens_en: ["Gluten"] },
            { name: "Tennet's", name_en: "Tennet's", price: 4.00, allergens: ["Glutine"], allergens_en: ["Gluten"] },
            { name: "B94 Terra Rossa Artigianale", name_en: "B94 Terra Rossa Craft Beer", price: 4.50, description: "Birra artigianale ambrata.", description_en: "Amber craft beer.", allergens: ["Glutine"], allergens_en: ["Gluten"] },
            { name: "B94 Vista Mare IPA Artigianale", name_en: "B94 Vista Mare Craft IPA", price: 4.50, description: "IPA artigianale luppolata.", description_en: "Hoppy craft IPA.", allergens: ["Glutine"], allergens_en: ["Gluten"] }
        ]
    },
    {
        category: "Bollicine",
        category_en: "Sparkling Wines",
        icon: "🥂",
        items: [
            { name: "Prosecco Palladio (calice)", name_en: "Prosecco Palladio (glass)", price: 4.00, allergens: ["Solfiti"], allergens_en: ["Sulphites"] },
            { name: "Prosecco Palladio (bottiglia)", name_en: "Prosecco Palladio (bottle)", price: 18.00, allergens: ["Solfiti"], allergens_en: ["Sulphites"] },
            { name: "Ferrari Blanc de Blancs (bottiglia)", name_en: "Ferrari Blanc de Blancs (bottle)", price: 45.00, allergens: ["Solfiti"], allergens_en: ["Sulphites"] },
            { name: "Moët & Chandon Imperial", name_en: "Moët & Chandon Imperial", price: 70.00, allergens: ["Solfiti"], allergens_en: ["Sulphites"] },
            { name: "Moët & Chandon Ice Imperial", name_en: "Moët & Chandon Ice Imperial", price: 95.00, allergens: ["Solfiti"], allergens_en: ["Sulphites"] }
        ]
    },
    {
        category: "Caffetteria",
        category_en: "Coffee",
        icon: "☕",
        items: [
            { name: "Caffè", name_en: "Espresso", price: 1.20 },
            { name: "Caffè Decaffeinato", name_en: "Decaf Coffee", price: 1.20 },
            { name: "Caffè Macchiato", name_en: "Macchiato", price: 1.30, allergens: ["Latte"], allergens_en: ["Milk"] },
            { name: "Caffè Corretto", name_en: "Corrected Coffee", price: 1.60, description: "Caffè con un goccio di sambuca.", description_en: "Coffee with a dash of sambuca.", allergens: ["Solfiti"], allergens_en: ["Sulphites"] },
            { name: "Cappuccino", name_en: "Cappuccino", price: 1.80, allergens: ["Latte"], allergens_en: ["Milk"] },
            { name: "Cappuccino Soia", name_en: "Soy Cappuccino", price: 1.80, allergens: ["Soia"], allergens_en: ["Soy"] },
            { name: "Ginseng", name_en: "Ginseng Coffee", price: 1.50 },
            { name: "Caffè in Ghiaccio", name_en: "Iced Coffee", price: 1.40, description: "Caffè e ghiaccio.", description_en: "Coffee and ice." },
            { name: "Caffè Leccese", name_en: "Caffè Leccese", price: 2.00, description: "Caffè, ghiaccio e latte di mandorla.", description_en: "Coffee, ice and almond milk.", allergens: ["Frutta a guscio (mandorla)"], allergens_en: ["Tree nuts (almond)"] },
            { name: "Caffè Shakerato", name_en: "Shaken Iced Coffee", price: 2.00, description: "Caffè shakerato con ghiaccio.", description_en: "Iced coffee shaken with ice." },
            { name: "Caffè Shakerato con latte di mandorla", name_en: "Shaken Iced Coffee with Almond Milk", price: 2.50, description: "Caffè shakerato con ghiaccio e latte di mandorla.", description_en: "Iced coffee shaken with ice and almond milk.", allergens: ["Frutta a guscio (mandorla)"], allergens_en: ["Tree nuts (almond)"] },
            { name: "Caffè Shakerato con Baileys", name_en: "Shaken Iced Coffee with Baileys", price: 3.00, description: "Caffè shakerato con ghiaccio e Baileys.", description_en: "Iced coffee shaken with ice and Baileys.", allergens: ["Latte", "Uova"], allergens_en: ["Milk", "Eggs"] }
        ]
    },
    {
        category: "Cocktails",
        category_en: "Cocktails",
        icon: "🍹",
        items: [
            { name: "Aperol Spritz", name_en: "Aperol Spritz", price: 5.00, description: "Aperol, prosecco, soda.", description_en: "Aperol, prosecco, soda water.", allergens: ["Solfiti"], allergens_en: ["Sulphites"] },
            { name: "Campari Spritz", name_en: "Campari Spritz", price: 6.00, description: "Campari, prosecco, soda.", description_en: "Campari, prosecco, soda water.", allergens: ["Solfiti"], allergens_en: ["Sulphites"] },
            { name: "Campari Gin", name_en: "Campari Gin", price: 7.00, description: "Campari e gin.", description_en: "Campari and gin." },
            { name: "Cocktail Analcolico", name_en: "Mocktail", price: 5.00, description: "Cocktail analcolico a base di frutta.", description_en: "Alcohol-free fruit-based cocktail." },
            { name: "Vodka Tonic/Lemon/Red Bull", name_en: "Vodka Tonic/Lemon/Red Bull", price: 6.00, description: "Vodka con tonica, lemon o Red Bull.", description_en: "Vodka with tonic, lemon or Red Bull." },
            { name: "Absolute Vodka Tonic/Lemon/Red Bull", name_en: "Absolute Vodka Tonic/Lemon/Red Bull", price: 7.00, description: "Vodka Absolute con tonica, lemon o Red Bull.", description_en: "Absolute vodka with tonic, lemon or Red Bull." },
            { name: "Belvedere Vodka Tonic/Lemon/Red Bull", name_en: "Belvedere Vodka Tonic/Lemon/Red Bull", price: 9.00, description: "Vodka Belvedere con tonica, lemon o Red Bull.", description_en: "Belvedere vodka with tonic, lemon or Red Bull." },
            { name: "Gin Tonic/Lemon", name_en: "Gin Tonic/Lemon", price: 6.00, description: "Gin, tonica o lemon soda, ghiaccio.", description_en: "Gin, tonic or lemon soda, ice." },
            { name: "Malfy Pompelmo Tonic/Lemon", name_en: "Malfy Grapefruit Tonic/Lemon", price: 7.00, description: "Malfy gin al pompelmo, tonica o lemon soda, ghiaccio.", description_en: "Malfy grapefruit gin, tonic or lemon soda, ice." },
            { name: "Malfy Tonic/Lemon", name_en: "Malfy Tonic/Lemon", price: 7.00, description: "Malfy gin, tonica o lemon soda, ghiaccio.", description_en: "Malfy gin, tonic or lemon soda, ice." },
            { name: "Hendrix Tonic/Lemon", name_en: "Hendrix Tonic/Lemon", price: 7.00, description: "Hendrix gin, tonica o lemon soda, ghiaccio.", description_en: "Hendrix gin, tonic or lemon soda, ice." },
            { name: "J.Rose Tonic/Lemon", name_en: "J.Rose Tonic/Lemon", price: 8.00, description: "J.Rose gin, tonica o lemon soda, ghiaccio.", description_en: "J.Rose gin, tonic or lemon soda, ice." },
            { name: "Mare Tonic/Lemon", name_en: "Mare Tonic/Lemon", price: 8.00, description: "Gin Mare, tonica o lemon soda, ghiaccio.", description_en: "Mare gin, tonic or lemon soda, ice." },
            { name: "Roku Tonic/Lemon", name_en: "Roku Tonic/Lemon", price: 8.00, description: "Roku gin, tonica o lemon soda, ghiaccio.", description_en: "Roku gin, tonic or lemon soda, ice." },
            { name: "London n°1 Tonic/Lemon", name_en: "London n°1 Tonic/Lemon", price: 9.00, description: "London n°1 gin, tonica o lemon soda, ghiaccio.", description_en: "London n°1 gin, tonic or lemon soda, ice." },
            { name: "Rum e Cola", name_en: "Rum and Coke", price: 6.00, description: "Rum, cola, lime.", description_en: "Rum, cola, lime." },
            { name: "Havana Rum e Cola", name_en: "Havana Rum and Coke", price: 7.00, description: "Havana rum, cola, lime.", description_en: "Havana rum, cola, lime." },
            { name: "Malibù e Cola", name_en: "Malibu and Coke", price: 6.00, description: "Malibù, cola, ghiaccio.", description_en: "Malibu, cola, ice." },
            { name: "Jager Bomb", name_en: "Jager Bomb", price: 6.00, description: "Jagermeister e Red Bull.", description_en: "Jagermeister and Red Bull." },
            { name: "Negroni / Negroni Sbagliato", name_en: "Negroni / Negroni Sbagliato", price: 7.00, description: "Gin o prosecco, vermouth, Campari.", description_en: "Gin or prosecco, vermouth, Campari.", allergens: ["Solfiti"], allergens_en: ["Sulphites"] },
            { name: "Sex on the Beach", name_en: "Sex on the Beach", price: 6.00, description: "Vodka, pesca, ananas, mirtillo.", description_en: "Vodka, peach, pineapple, cranberry." },
            { name: "Japanese", name_en: "Japanese", price: 7.00, description: "Cognac, mandorla, limone.", description_en: "Cognac, almond, lemon.", allergens: ["Frutta a guscio (mandorla)"], allergens_en: ["Tree nuts (almond)"] },
            { name: "Cosmopolitan", name_en: "Cosmopolitan", price: 7.00, description: "Vodka, Cointreau, mirtillo, lime.", description_en: "Vodka, Cointreau, cranberry, lime." },
            { name: "Long Island", name_en: "Long Island", price: 8.00, description: "Vodka, gin, triple sec, tequila, succo di limone e cola.", description_en: "Mix of spirits and cola." },
        ]
    },
    {
        category: "Distillati",
        category_en: "Spirits",
        icon: "🥃",
        items: [
            { name: "Grappa POLI Bianca", name_en: "Grappa POLI Bianca", price: 4.00 },
            { name: "Grappa POLI Barricata", name_en: "Grappa POLI Barricata", price: 4.00 },
            { name: "Tequila ESPOLON Blanco", name_en: "Tequila ESPOLON Blanco", price: 4.00 },
            { name: "Tequila ESPOLON Reposado", name_en: "Tequila ESPOLON Reposado", price: 4.00 },
            { name: "Jack Daniel's", name_en: "Jack Daniel's", price: 4.00, allergens: ["Glutine"], allergens_en: ["Gluten"] },
            { name: "Lagavulin", name_en: "Lagavulin", price: 5.00, allergens: ["Glutine"], allergens_en: ["Gluten"] }
        ]
    },
    {
        category: "Vini",
        category_en: "Wines",
        icon: "🍷",
        items: [
            { name: "Cantele Chardonnay IGP (calice)", name_en: "Cantele Chardonnay IGP (glass)", price: 4.00, allergens: ["Solfiti"], allergens_en: ["Sulphites"] },
            { name: "Cantele Chardonnay IGP (bottiglia)", name_en: "Cantele Chardonnay IGP (bottle)", price: 18.00, allergens: ["Solfiti"], allergens_en: ["Sulphites"] },
            { name: "Cantele Primitivo Rosso IGP (calice)", name_en: "Cantele Primitivo Red IGP (glass)", price: 4.00, allergens: ["Solfiti"], allergens_en: ["Sulphites"] },
            { name: "Cantele Primitivo Rosso IGP (bottiglia)", name_en: "Cantele Primitivo Red IGP (bottle)", price: 20.00, allergens: ["Solfiti"], allergens_en: ["Sulphites"] },
            { name: "Cantele Negramaro Rosato IGP (calice)", name_en: "Cantele Negramaro Rosé IGP (glass)", price: 4.00, allergens: ["Solfiti"], allergens_en: ["Sulphites"] },
            { name: "Cantele Negramaro Rosato IGP (bottiglia)", name_en: "Cantele Negramaro Rosé IGP (bottle)", price: 18.00, allergens: ["Solfiti"], allergens_en: ["Sulphites"] },
            { name: "San Marzano Tramari Rosé (calice)", name_en: "San Marzano Tramari Rosé (glass)", price: 4.50, allergens: ["Solfiti"], allergens_en: ["Sulphites"] },
            { name: "San Marzano Tramari Rosé (bottiglia)", name_en: "San Marzano Tramari Rosé (bottle)", price: 22.00, allergens: ["Solfiti"], allergens_en: ["Sulphites"] },
            { name: "San Marzano Il Pumo Bianco Frizzante (calice)", name_en: "San Marzano Il Pumo Sparkling White (glass)", price: 4.00, allergens: ["Solfiti"], allergens_en: ["Sulphites"] },
            { name: "San Marzano Il Pumo Bianco Frizzante (bottiglia)", name_en: "San Marzano Il Pumo Sparkling White (bottle)", price: 18.00, allergens: ["Solfiti"], allergens_en: ["Sulphites"] }
        ]
    },

    // ── CIBO (A → Z) ───────────────────────────────────────────────────────


    {
        category: "Aperitivi",
        category_en: "Aperitifs",
        icon: "🍽️",
        items: [
            { name: "Aperitivo Terra (x2)", name_en: "Land Aperitif (x2)", price: 10.00, description: "Degustazione di specialità di terra (2 persone).", description_en: "Selection of mixed savoury bites (2 people).", allergens: ["Glutine", "Latte", "Uova"], allergens_en: ["Gluten", "Milk", "Eggs"] },
            { name: "Aperitivo Mare (x2)", name_en: "Seafood Aperitif (x2)", price: 15.00, description: "Degustazione di specialità di mare (2 persone).", description_en: "Selection of seafood bites (2 people).", allergens: ["Glutine", "Latte", "Crostacei", "Pesce"], allergens_en: ["Gluten", "Milk", "Crustaceans", "Fish"] }
        ]
    },
    {
        category: "Cornetteria",
        category_en: "Croissants",
        icon: "🥐",
        items: [
            { name: "Nutella", name_en: "Nutella", price: 2.00, description: "Cornetto farcito con Nutella.", description_en: "Croissant filled with Nutella.", allergens: ["Glutine", "Latte", "Uova", "Frutta a guscio (nocciola)"], allergens_en: ["Gluten", "Milk", "Eggs", "Tree nuts (hazelnut)"] },
            { name: "Nutella Vegana", name_en: "Vegan Nutella", price: 2.00, description: "Cornetto farcito con Nutella vegana.", description_en: "Croissant filled with vegan Nutella.", allergens: ["Glutine", "Frutta a guscio (nocciola)"], allergens_en: ["Gluten", "Tree nuts (hazelnut)"] },
            { name: "Nutella Bianca", name_en: "White Nutella", price: 2.00, description: "Cornetto farcito con crema bianca alla nocciola.", description_en: "Croissant filled with white hazelnut cream.", allergens: ["Glutine", "Latte", "Uova", "Frutta a guscio (nocciola)"], allergens_en: ["Gluten", "Milk", "Eggs", "Tree nuts (hazelnut)"] },
            { name: "Crema", name_en: "Custard Cream", price: 2.00, description: "Cornetto farcito con crema pasticcera.", description_en: "Croissant filled with custard cream.", allergens: ["Glutine", "Latte", "Uova"], allergens_en: ["Gluten", "Milk", "Eggs"] },
            { name: "Pistacchio", name_en: "Pistachio", price: 2.00, description: "Cornetto farcito con crema al pistacchio.", description_en: "Croissant filled with pistachio cream.", allergens: ["Glutine", "Latte", "Uova", "Frutta a guscio (pistacchio)"], allergens_en: ["Gluten", "Milk", "Eggs", "Tree nuts (pistachio)"] },
            { name: "Lotus", name_en: "Lotus", price: 2.00, description: "Cornetto farcito con crema Lotus.", description_en: "Croissant filled with Lotus cream.", allergens: ["Glutine", "Latte", "Uova", "Soia"], allergens_en: ["Gluten", "Milk", "Eggs", "Soy"] },
            { name: "Fondente", name_en: "Dark Chocolate", price: 2.00, description: "Cornetto farcito con crema fondente.", description_en: "Croissant filled with dark chocolate cream.", allergens: ["Glutine", "Latte", "Uova"], allergens_en: ["Gluten", "Milk", "Eggs"] },
            { name: "Oreo", name_en: "Oreo", price: 2.00, description: "Cornetto farcito con crema Oreo.", description_en: "Croissant filled with Oreo cream.", allergens: ["Glutine", "Latte", "Uova", "Soia"], allergens_en: ["Gluten", "Milk", "Eggs", "Soy"] },
            { name: "Raffaello", name_en: "Raffaello", price: 2.00, description: "Cornetto farcito con crema Raffaello.", description_en: "Croissant filled with Raffaello cream.", allergens: ["Glutine", "Latte", "Uova", "Frutta a guscio (cocco, mandorla)"], allergens_en: ["Gluten", "Milk", "Eggs", "Tree nuts (coconut, almond)"] },
            { name: "Marmellata", name_en: "Jam", price: 2.00, description: "Cornetto farcito con marmellata di frutta.", description_en: "Croissant filled with fruit jam.", allergens: ["Glutine", "Uova"], allergens_en: ["Gluten", "Eggs"] },
            { name: "Bigusto", name_en: "Two Flavours", price: 2.50, description: "Cornetto farcito con due gusti a scelta.", description_en: "Croissant filled with two flavours of choice.", allergens: ["Glutine", "Latte", "Uova"], allergens_en: ["Gluten", "Milk", "Eggs"] }
        ]
    },
    {
        category: "Crepes",
        category_en: "Crepes",
        icon: "🥞",
        items: [
            { name: "Nutella", name_en: "Nutella", price: 4.00, description: "Crepe con Nutella.", description_en: "Crepe with Nutella.", allergens: ["Glutine", "Latte", "Uova", "Frutta a guscio (nocciola)"], allergens_en: ["Gluten", "Milk", "Eggs", "Tree nuts (hazelnut)"] },
            { name: "Nutella Vegana", name_en: "Vegan Nutella", price: 4.00, description: "Crepe con Nutella vegana.", description_en: "Crepe with vegan Nutella.", allergens: ["Glutine", "Uova", "Frutta a guscio (nocciola)"], allergens_en: ["Gluten", "Eggs", "Tree nuts (hazelnut)"] },
            { name: "Nutella Bianca", name_en: "White Nutella", price: 4.50, description: "Crepe con crema bianca alla nocciola.", description_en: "Crepe with white hazelnut cream.", allergens: ["Glutine", "Latte", "Uova", "Frutta a guscio (nocciola)"], allergens_en: ["Gluten", "Milk", "Eggs", "Tree nuts (hazelnut)"] },
            { name: "Fondente", name_en: "Dark Chocolate", price: 4.50, description: "Crepe con cioccolato fondente.", description_en: "Crepe with dark chocolate.", allergens: ["Glutine", "Latte", "Uova", "Frutta a guscio"], allergens_en: ["Gluten", "Milk", "Eggs", "Tree nuts"] },
            { name: "Oreo", name_en: "Oreo", price: 4.50, description: "Crepe con crema e biscotto Oreo.", description_en: "Crepe with cream and Oreo cookie.", allergens: ["Glutine", "Latte", "Uova", "Soia", "Frutta a guscio"], allergens_en: ["Gluten", "Milk", "Eggs", "Soy", "Tree nuts"] },
            { name: "Lotus", name_en: "Lotus", price: 4.50, description: "Crepe con crema Lotus.", description_en: "Crepe with Lotus cream.", allergens: ["Glutine", "Latte", "Uova", "Soia", "Frutta a guscio"], allergens_en: ["Gluten", "Milk", "Eggs", "Soy", "Tree nuts"] },
            { name: "Raffaello", name_en: "Raffaello", price: 4.50, description: "Crepe con crema Raffaello.", description_en: "Crepe with Raffaello cream.", allergens: ["Glutine", "Latte", "Uova", "Frutta a guscio (cocco, mandorla)"], allergens_en: ["Gluten", "Milk", "Eggs", "Tree nuts (coconut, almond)"] },
            { name: "Pistacchio", name_en: "Pistachio", price: 4.50, description: "Crepe con crema al pistacchio.", description_en: "Crepe with pistachio cream.", allergens: ["Glutine", "Latte", "Uova", "Frutta a guscio (pistacchio)"], allergens_en: ["Gluten", "Milk", "Eggs", "Tree nuts (pistachio)"] },
            { name: "Bigusto", name_en: "Two Flavours", price: 4.00, description: "Crepe con due gusti a scelta.", description_en: "Crepe with two flavours of choice.", allergens: ["Glutine", "Latte", "Uova", "Frutta a guscio"], allergens_en: ["Gluten", "Milk", "Eggs", "Tree nuts"] }
        ]
    },
    {
        category: "Crepes Proteiche",
        category_en: "Protein Crepes",
        icon: "💪",
        items: [
            { name: "Burro di Arachidi", name_en: "Peanut Butter", price: 6.00, description: "Crepe con burro di arachidi.", description_en: "Crepe with peanut butter.", allergens: ["Glutine", "Latte", "Uova", "Arachidi"], allergens_en: ["Gluten", "Milk", "Eggs", "Peanuts"] },
            { name: "Burro di Mandorle", name_en: "Almond Butter", price: 6.50, description: "Crepe con burro di mandorle.", description_en: "Crepe with almond butter.", allergens: ["Glutine", "Latte", "Uova", "Frutta a guscio (mandorla)"], allergens_en: ["Gluten", "Milk", "Eggs", "Tree nuts (almond)"] },
            { name: "Choco Crispy", name_en: "Choco Crispy", price: 6.50, description: "Cioccolato crispy.", description_en: "Crispy chocolate.", allergens: ["Glutine", "Latte", "Uova", "Frutta a guscio"], allergens_en: ["Gluten", "Milk", "Eggs", "Tree nuts"] },
            { name: "Burro di Anacardi", name_en: "Cashew Butter", price: 7.00, description: "Crepe con burro di anacardi.", description_en: "Crepe with cashew butter.", allergens: ["Glutine", "Latte", "Uova", "Frutta a guscio (anacardi)"], allergens_en: ["Gluten", "Milk", "Eggs", "Tree nuts (cashew)"] }
        ]
    },
    {
        category: "Crepes Salate",
        category_en: "Savoury Crepes",
        icon: "🧀",
        items: [
            { name: "Crudo", name_en: "Cured Ham", price: 6.00, description: "Crepe con prosciutto crudo, formaggio (svizzero o scamorza o formaggio filato o Philadephia), rucola e salse.", description_en: "Crepe with cured ham, cheese (Swiss or scamorza or  Philadelphia), arugula and sauces.", allergens: ["Glutine", "Latte", "Uova", "Frutta a guscio"], allergens_en: ["Gluten", "Milk", "Eggs", "Tree nuts"] },
            { name: "Cotto", name_en: "Cooked Ham", price: 6.00, description: "Crepe con prosciutto cotto, formaggio (svizzero o scamorza o formaggio filato o Philadephia), rucola e salse.", description_en: "Crepe with cooked ham, cheese (Swiss or scamorza or  Philadelphia), arugula and sauces.", allergens: ["Glutine", "Latte", "Uova", "Frutta a guscio"], allergens_en: ["Gluten", "Milk", "Eggs", "Tree nuts"] },
            { name: "Salame", name_en: "Salami", price: 6.00, description: "Crepe con salame, formaggio (svizzero o scamorza o formaggio filato o Philadephia), rucola e salse.", description_en: "Crepe with salami, cheese (Swiss or scamorza or  Philadelphia), arugula and sauces.", allergens: ["Glutine", "Latte", "Uova", "Frutta a guscio"], allergens_en: ["Gluten", "Milk", "Eggs", "Tree nuts"] },
            { name: "Salmone", name_en: "Salmon", price: 7.00, description: "Crepe con salmone e Philadelphia e rucola.", description_en: "Crepe with salmon, cream cheese and Arugola.", allergens: ["Glutine", "Latte", "Uova", "Pesce"], allergens_en: ["Gluten", "Milk", "Eggs", "Fish", "Tree nuts"] }
        ]
    },
    {
        category: "Frise",
        category_en: "Frise (Salento Bread)",
        icon: "🫓",
        items: [
            { name: "Pomodoro", name_en: "Tomato", price: 3.00, description: "Frisa con pomodoro fresco e olio.", description_en: "Frisa with fresh tomato and oil.", allergens: ["Glutine"], allergens_en: ["Gluten"] },
            { name: "Salamura", name_en: "Salamura", price: 7.00, description: "Frisa con peperonata salentina (leggermente piccante).", description_en: "Frisa with Salento peperonata (slightly spicy).", allergens: ["Glutine"], allergens_en: ["Gluten"] },
            { name: "Pezzetti di Cavallo", name_en: "Horse Stew", price: 8.00, description: "Frisa con pezzetti di cavallo. (powered by Macelleria Petracca)", description_en: "Frisa with horse stew. (powered by Macelleria Petracca)", allergens: ["Glutine"], allergens_en: ["Gluten"] },
            { name: "Coppa di Suino", name_en: "Pork Shoulder", price: 8.00, description: "Frisa con coppa di suino, stracciatella, pomodori secchi e melanzane sott'olio. (powered by Macelleria Petracca)", description_en: "Frisa with pork shoulder, stracciatella, sun-dried tomatoes and eggplant in oil. (powered by Macelleria Petracca)", allergens: ["Glutine", "Latte"], allergens_en: ["Gluten", "Milk"] },
            { name: "Alici", name_en: "Anchovies", price: 6.00, description: "Frisa con pomodoro fresco, capperi e alici.", description_en: "Frisa with fresh tomatoes, capers and anchovies.", allergens: ["Glutine", "Pesce"], allergens_en: ["Gluten", "Fish"] },
            { name: "Tartare di Tonno", name_en: "Tuna Tartare", price: 14.00, description: "Frisa con 80 gr di tartare di tonno rosso, gelée al cocomero, cocomero, cipolla agrodolce e zest di limone.", description_en: "Frisa with 80g of red tuna tartare, watermelon gelée, watermelon, sweet-and-sour onions and lemon zest.", allergens: ["Glutine", "Pesce"], allergens_en: ["Gluten", "Fish"] },
            { name: "Tartare di Gambero", name_en: "Prawn Tartare", price: 14.00, description: "Frisa con 80 gr di tartare di gambero viola, stracciatella, zest di lime e pepe rosa.", description_en: "Frisa with 80g of purple prawn tartare, stracciatella, lime zest and pink pepper.", allergens: ["Glutine", "Crostacei", "Latte"], allergens_en: ["Gluten", "Crustaceans", "Milk"] }
        ]
    },
    {
        category: "Rosticceria",
        category_en: "Bakery",
        icon: "🍕",
        items: [
            { name: "Pizzella", name_en: "Mini Pizza", price: 2.50, description: "Pizzella al pomodoro e mozzarella.", description_en: "Mini pizza with tomato and mozzarella.", allergens: ["Glutine", "Latte"], allergens_en: ["Gluten", "Milk"] },
            { name: "Rustico", name_en: "Rustico Pastry", price: 2.50, description: "Sfoglia ripiena di pomodoro, besciamella e mozzarella.", description_en: "Puff pastry filled with tomato, béchamel and mozzarella.", allergens: ["Glutine", "Latte", "Uova"], allergens_en: ["Gluten", "Milk", "Eggs"] },
            { name: "Golosone", name_en: "Golosone Pastry", price: 2.50, description: "Sfoglia ripiena salata.", description_en: "Savoury filled puff pastry.", allergens: ["Glutine", "Latte", "Uova"], allergens_en: ["Gluten", "Milk", "Eggs"] },
            { name: "Arancino Prosciutto", name_en: "Arancino with Ham", price: 2.50, description: "Arancino di riso con prosciutto e formaggio.", description_en: "Rice arancino with ham and cheese.", allergens: ["Glutine", "Latte", "Uova"], allergens_en: ["Gluten", "Milk", "Eggs"] },
            { name: "Arancino Ragù", name_en: "Arancino with Ragù", price: 2.50, description: "Arancino di riso con ragù.", description_en: "Rice arancino with meat ragù.", allergens: ["Glutine", "Latte", "Uova"], allergens_en: ["Gluten", "Milk", "Eggs"] },
            { name: "Calzone Fritto", name_en: "Fried Calzone", price: 2.50, description: "Calzone fritto ripieno.", description_en: "Fried filled calzone.", allergens: ["Glutine", "Latte"], allergens_en: ["Gluten", "Milk"] },
            { name: "Calzone al Forno", name_en: "Baked Calzone", price: 2.50, description: "Calzone al forno ripieno.", description_en: "Baked filled calzone.", allergens: ["Glutine", "Latte"], allergens_en: ["Gluten", "Milk"] },
            { name: "Calzone Ripieno", name_en: "Stuffed Calzone", price: 3.50, description: "Calzone fritto o al forno ripieno.", description_en: "Baked or fried filled calzone.", allergens: ["Glutine", "Latte"], allergens_en: ["Gluten", "Milk"] },
            { name: "Calzone con Pezzetti di Cavallo", name_en: "Horse Stew Calzone", price: 4.50, description: "Calzone fritto o al forno con pezzetti di cavallo.", description_en: "Baked or fried  calzone filled with horse stew.", allergens: ["Glutine", "Latte"], allergens_en: ["Gluten", "Milk"] },
        ]
    }
];

// ── Stato lingua ────────────────────────────────────────────────────────────

let currentLang = 'it';

const i18n = {
    it: {
        subtitle: "Scopri le nostre proposte",
        all: "Tutto",
        footer: "I prezzi possono variare. Chiedi al personale per allergeni e intolleranze.",
        langBtn: "EN",
        banner: "Non si effettua servizio al tavolo",
        allergensLabel: "Allergeni"
    },
    en: {
        subtitle: "Discover our menu",
        all: "All",
        footer: "Prices may vary. Ask staff about allergens and intolerances.",
        langBtn: "IT",
        banner: "No table service available",
        allergensLabel: "Allergens"
    }
};

// ── Utilità ─────────────────────────────────────────────────────────────────

function formatPrice(price) {
    return price.toFixed(2).replace('.', ',') + '€';
}

function slugify(text) {
    return text.toLowerCase()
        .replace(/[àáâãäå]/g, 'a')
        .replace(/[èéêë]/g, 'e')
        .replace(/[ìíîï]/g, 'i')
        .replace(/[òóôõö]/g, 'o')
        .replace(/[ùúûü]/g, 'u')
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '');
}

// ── Render ──────────────────────────────────────────────────────────────────

function createCategoryHTML(categoryData) {
    const slug = slugify(categoryData.category);
    const categoryName = currentLang === 'en'
        ? (categoryData.category_en || categoryData.category)
        : categoryData.category;

    const itemsHTML = categoryData.items.map(item => {
        const itemName = currentLang === 'en' ? (item.name_en || item.name) : item.name;
        const itemDesc = currentLang === 'en' ? item.description_en : item.description;
        const itemAllergens = currentLang === 'en' ? item.allergens_en : item.allergens;
        const label = i18n[currentLang].allergensLabel;

        const allergensHTML = (itemAllergens && itemAllergens.length)
            ? `<div class="item-allergens">
 <span class="allergens-label">⚠️ ${label}:</span>
 ${itemAllergens.map(a => `<span class="allergen-tag">${a}</span>`).join('')}
 </div>`
            : '';

        return `
 <div class="menu-item">
 <div class="item-info">
 <div class="item-name">${itemName}</div>
 ${itemDesc ? `<div class="item-description">${itemDesc}</div>` : ''}
 ${allergensHTML}
 </div>
 <div class="item-price">${formatPrice(item.price)}</div>
 </div>`;
    }).join('');

    return `
 <section class="category-section" data-category="${slug}" id="${slug}">
 <div class="category-header">
 <span class="category-icon">${categoryData.icon}</span>
 <h2 class="category-title">${categoryName}</h2>
 </div>
 <div class="items-grid">${itemsHTML}</div>
 </section>`;
}

function createNavButtons() {
    const navContainer = document.querySelector('.nav-container');
    navContainer.querySelectorAll('.nav-btn:not([data-category="all"])').forEach(btn => btn.remove());
    menuData.forEach(cat => {
        const slug = slugify(cat.category);
        const btn = document.createElement('button');
        btn.className = 'nav-btn';
        btn.dataset.category = slug;
        btn.textContent = currentLang === 'en' ? (cat.category_en || cat.category) : cat.category;
        navContainer.appendChild(btn);
    });
}

function handleCategoryFilter() {
    const navContainer = document.querySelector('.nav-container');
    navContainer.addEventListener('click', (e) => {
        if (!e.target.classList.contains('nav-btn')) return;
        document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        const selectedCategory = e.target.dataset.category;
        document.querySelectorAll('.category-section').forEach(section => {
            const show = selectedCategory === 'all' || section.dataset.category === selectedCategory;
            section.classList.toggle('hidden', !show);
        });
        if (selectedCategory !== 'all') {
            const target = document.getElementById(selectedCategory);
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
}

function updateStaticTexts() {
    const t = i18n[currentLang];
    document.querySelector('.subtitle').textContent = t.subtitle;
    document.querySelector('.info-banner-text').textContent = t.banner;
    document.querySelector('.nav-btn[data-category="all"]').textContent = t.all;
    document.querySelector('.footer p').textContent = t.footer;
    const langBtn = document.querySelector('.lang-toggle');
    if (langBtn) langBtn.textContent = t.langBtn;
}

function handleLangToggle() {
    const langBtn = document.querySelector('.lang-toggle');
    if (!langBtn) return;
    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'it' ? 'en' : 'it';
        renderMenu();
    });
}

function renderMenu() {
    const menuContainer = document.querySelector('.menu-container');
    menuContainer.innerHTML = menuData.map(createCategoryHTML).join('');
    createNavButtons();
    updateStaticTexts();
    document.querySelector('.nav-btn[data-category="all"]').classList.add('active');
}

function initMenu() {
    renderMenu();
    handleCategoryFilter();
    handleLangToggle();
}

document.addEventListener('DOMContentLoaded', initMenu);
