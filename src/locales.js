export const messages = {
    en: {
      cart: "My Cart",
      total: "Total",
      checkout: "Checkout",
      selectLanguage: "Select Language",
      menu: "Menu",
      back: "Back",
      confirm: "Confirm",
      emptyCart: "Your cart is empty.",
      extras: "Extras",
      addToCart: "Add to Cart",
      chooseOption: "Please choose an option",
      info: "Here you can add additional information for your guests, such as taxes, service charges, restaurant hours, contacts, delivery conditions, general information about your QR menu, and so on.",
      main: "Main Menu",
      bar: "Bar",
      breakfast: "BREAKFAST (8:00 - 10:00)",
      hot: "Hot Dishes",
      salad: "Salads",
      dessert: "Desserts",
      cocktail: "Cocktails",
      wine: "Wine",
      beer: "Beer",
      non: "Non-Alcoholic",
      look: "View Order",
      goback: "Return to Menu",
      
      // 🛑 Ensure each menu item exists in English
      menuItems: {
        breakfast: {
      "1": { "name": "Egg Toast", "descr": "Fried eggs, tomato, toast, green onion", "check": { "1": { "name": "Black Bread", "price": "2 000" }, "2": { "name": "White Bread", "price": "2 000" } }, "toggle": { "1": { "name": "Greens", "price": "3 000" }, "2": { "name": "Avocado", "price": "7 000" }, "3": { "name": "Onion", "price": "2 000" }, "4": { "name": "Vegetables", "price": "5 000" }, "5": { "name": "Carrot", "price": "2 000" } } },
      "2": { "name": "Egg Sandwich", "descr": "Bread, egg, cream cheese" },
      "3": { "name": "Pancakes", "descr": "Berries, butter, syrup" },
      "4": { "name": "Oatmeal", "descr": "Oat flakes, nuts, raisins" },
      "5": { "name": "Waffles", "descr": "Cream, strawberries, blueberries, sprinkles" },
      "6": { "name": "Avocado Toast", "descr": "Fried eggs, avocado, whole grain bread" }
    },
    hot: {
      "7": { "name": "Chicken Breast with Vegetables", "descr": "Chicken breast, broccoli, carrot, rice" },
      "8": { "name": "Salmon with Lemon", "descr": "Salmon fillet, lemon, asparagus, potato" },
      "9": { "name": "Pasta with Shrimps", "descr": "Spaghetti, shrimps, garlic sauce" },
      "10": { "name": "Beef Stroganoff", "descr": "Beef, mushrooms, onion, creamy sauce" },
      "11": { "name": "Steak with Potatoes", "descr": "Beef steak, mashed potatoes, grilled vegetables", "check": { "1": { "name": "Medium Rare", "price": "0" }, "2": { "name": "Well Done", "price": "0" } }, "toggle": { "1": { "name": "Mushroom Sauce", "price": "8 000" }, "2": { "name": "Pepper Sauce", "price": "6 000" }, "3": { "name": "Extra Meat", "price": "20 000" } } },
      "12": { "name": "Ratatouille", "descr": "Eggplant, zucchini, tomatoes, Provencal herbs" }
    },
    salad: {
      "13": { "name": "Greek Salad", "descr": "Tomatoes, cucumbers, olives, feta, oregano" },
      // "14": { "name": "Caesar", "descr": "Romaine, chicken, parmesan, Caesar sauce" },
      "14": { "name": "Caesar", "descr": "Romaine, chicken, parmesan, Caesar sauce", "check": { "1": { "name": "Bread", "price": "2 000" }, "2": { "name": "No Bread", "price": "0" } }, "toggle": { "1": { "name": "Greens", "price": "3 000" }, "2": { "name": "Avocado", "price": "7 000" }, "3": { "name": "Onion", "price": "2 000" }, "4": { "name": "Vegetables", "price": "5 000" }, "5": { "name": "Carrot", "price": "2 000" } } },
      "15": { "name": "Nicoise", "descr": "Tuna, eggs, potatoes, green beans" },
      "16": { "name": "Avocado Salad", "descr": "Avocado, spinach, pine nuts, lemon sauce" },
      "17": { "name": "Quinoa Salad", "descr": "Quinoa, avocado, cherry tomatoes, spinach, nuts" },
      "18": { "name": "Olivier", "descr": "Potatoes, carrots, eggs, sausage, mayonnaise" }
    },
    dessert: {
      "19": { "name": "Tiramisu", "descr": "Savoiardi, coffee, mascarpone, cocoa" },
      "20": { "name": "Profiteroles", "descr": "Choux pastry, pastry cream, chocolate" },
      "21": { "name": "Ice Cream", "descr": "Vanilla ice cream, chocolate sauce, nuts" },
      "22": { "name": "Cheesecake", "descr": "Mascarpone cheese, strawberries, cookie base", "check": { "1": { "name": "With Strawberries", "price": "5 000" }, "2": { "name": "With Chocolate", "price": "4 000" } }, "toggle": { "1": { "name": "Nuts", "price": "4 000" }, "2": { "name": "Caramel Sauce", "price": "3 000" }, "3": { "name": "Chocolate Shavings", "price": "5 000" } } },
      "23": { "name": "Apple Pie", "descr": "Shortcrust pastry, apples, cinnamon, vanilla" },
      "24": { "name": "Crème Brûlée", "descr": "Custard, caramelized sugar" }
    },
    cocktail: {
      "25": { "name": "Margarita", "descr": "Tequila, triple sec, fresh lime juice" },
      "26": { "name": "Mojito", "descr": "White rum, mint, sugar, lime, soda water" },
      "27": { "name": "Cuba Libre", "descr": "Dark rum, cola, lime" },
      "28": { "name": "Pina Colada", "descr": "White rum, coconut milk, pineapple juice" },
      "29": { "name": "Negroni", "descr": "Gin, Campari, red vermouth" },
      "30": { "name": "Daiquiri", "descr": "White rum, sugar syrup, fresh lime juice" }
    },
    wine: {
      "31": { "name": "Chardonnay", "descr": "" },
      "32": { "name": "Cabernet Sauvignon", "descr": "" },
      "33": { "name": "Merlot", "descr": "" },
      "34": { "name": "Sauvignon Blanc", "descr": "" },
      "35": { "name": "Pinot Noir", "descr": "" },
      "36": { "name": "Rosé", "descr": "" }
    },
    beer: {
      "37": { "name": "Lager", "descr": "" },
      "38": { "name": "Pilsner", "descr": "" },
      "39": { "name": "IPA", "descr": "" }
    },
    non: {
      "43": { "name": "Orange Juice", "descr": "" },
      "44": { "name": "Apple Juice", "descr": "" },
      "45": { "name": "Mineral Water", "descr": "" },
      "46": { "name": "Sparkling Water", "descr": "" },
      "47": { "name": "Still Water", "descr": "" },
      "48": { "name": "Coffee", "descr": "" }
    }
      }
    },
    
    ru: {
      cart: "Мой заказ",
      total: "Всего",
      checkout: "Оформить заказ",
      selectLanguage: "Выберите язык",
      menu: "Меню",
      back: "Назад",
      confirm: "Подтвердить",
      emptyCart: "Ваш заказ пуст.",
      extras: "Дополнения",
      addToCart: "Добавить в корзину",
      chooseOption: "Пожалуйста, выберите вариант",
      info: "Здесь вы можете добавить дополнительную информацию для ваших гостей, такую как налоги, цену обслуживания, часы работы ресторана, контакты, условия доставки, общую информацию о вашем QR меню и так далее",
      main: "Основное меню",
      bar: "Бар",
      breakfast: "ЗАВТРАКИ (8:00 - 10:00)",
      hot: "Горячие блюда",
      salad: "Салаты",
      dessert: "Десерты",
      cocktail: "Коктейли",
      wine: "Вино",
      beer: "Пиво",
      non: "Безалкогольное",
      look: "Посмотреть заказ",
      goback: "Вернуться в меню",
      
      menuItems: {
        breakfast: {
            "1": { "name": "Яичный тост", "descr": "Жареные яйца, помидор, тост, зеленый лук", "check": { "1": { "name": "Черный Хлеб", "price": "2 000" }, "2": { "name": "Белый Хлеб", "price": "2 000" } }, "toggle": { "1": { "name": "Зелень", "price": "3 000" }, "2": { "name": "Авокадо", "price": "7 000" }, "3": { "name": "Лук", "price": "2 000" }, "4": { "name": "Овощи", "price": "5 000" }, "5": { "name": "Морковка", "price": "2 000" } } },
            "2": { "name": "Яичный сэндвич", "descr": "Хлеб, яйцо, сливочный сыр" },
            "3": { "name": "Блинчики", "descr": "Ягоды, масло, сироп" },
            "4": { "name": "Овсянка", "descr": "Овсяные хлопья, орехи, изюм" },
            "5": { "name": "Вафли", "descr": "Крем, клубника, черника, посыпка" },
            "6": { "name": "Тост с авокадо", "descr": "Жареные яйца, авокадо, цельнозерновой хлеб" }
        },
        hot: {
            "7": { "name": "Куриная грудка с овощами", "descr": "Куриная грудка, брокколи, морковь, рис" },
            "8": { "name": "Лосось с лимоном", "descr": "Филе лосося, лимон, спаржа, картофель" },
            "9": { "name": "Паста с креветками", "descr": "Спагетти, креветки, чесночный соус" },
            "10": { "name": "Бефстроганов", "descr": "Говядина, грибы, лук, сливочный соус" },
            "11": { "name": "Стейк с картофелем", "category": "hot", "file": "h1.png", "descr": "Говяжий стейк, картофельное пюре, овощи гриль", "price": "95 000", "add": "1", "check": { "1": { "name": "Средняя прожарка", "price": "0" }, "2": { "name": "Полная прожарка", "price": "0" } }, "toggle": { "1": { "name": "Грибной соус", "price": "8 000" }, "2": { "name": "Перечный соус", "price": "6 000" }, "3": { "name": "Доп. мясо", "price": "20 000" } } },
            "12": { "name": "Рататуй", "descr": "Баклажан, кабачок, томаты, прованские травы" }
        },
        salad: {
            "13": { "name": "Греческий салат", "descr": "Помидоры, огурцы, оливки, фета, орегано" },
            "14": { "name": "Цезарь", "descr": "Романо, курица, пармезан, соус Цезарь", "check": { "1": { "name": "Хлеб", "price": "2 000" }, "2": { "name": "Без хлеба", "price": "0" } }, "toggle": { "1": { "name": "Зелень", "price": "3 000" }, "2": { "name": "Авокадо", "price": "7 000" }, "3": { "name": "Лук", "price": "2 000" }, "4": { "name": "Овощи", "price": "5 000" }, "5": { "name": "Морковь", "price": "2 000" } } },
            "15": { "name": "Нисуаз", "descr": "Тунец, яйца, картофель, стручковая фасоль" },
            "16": { "name": "Салат с авокадо", "descr": "Авокадо, шпинат, кедровые орехи, лимонный соус" },
            "17": { "name": "Салат с киноа", "descr": "Киноа, авокадо, черри, шпинат, орехи" },
            "18": { "name": "Оливье", "descr": "Картофель, морковь, яйца, колбаса, майонез" }
        },
        dessert: {
            "19": { "name": "Тирамису", "descr": "Савоярди, кофе, маскарпоне, какао" },
            "20": { "name": "Профитроли", "descr": "Заварное тесто, крем, шоколад" },
            "21": { "name": "Мороженое", "descr": "Ванильное мороженое, шоколадный соус, орехи" },
            "22": { "name": "Чизкейк", "descr": "Сыр маскарпоне, клубника, основа из печенья", "check": { "1": { "name": "С клубникой", "price": "5 000" }, "2": { "name": "С шоколадом", "price": "4 000" } }, "toggle": { "1": { "name": "Орехи", "price": "4 000" }, "2": { "name": "Карамельный соус", "price": "3 000" }, "3": { "name": "Шоколадная стружка", "price": "5 000" } } },
            "23": { "name": "Яблочный пирог", "descr": "Песочное тесто, яблоки, корица, ваниль" },
            "24": { "name": "Крем-брюле", "descr": "Заварной крем, карамелизированный сахар" }
        },
        cocktail: {
            "25": { "name": "Маргарита", "descr": "Текила, трипл сек, свежий сок лайма" },
            "26": { "name": "Мохито", "descr": "Белый ром, мята, сахар, лайм, содовая" },
            "27": { "name": "Куба Либре", "descr": "Темный ром, кола, лайм" },
            "28": { "name": "Пина Колада", "descr": "Белый ром, кокосовое молоко, ананасовый сок" },
            "29": { "name": "Негрони", "descr": "Джин, Кампари, красный вермут" },
            "30": { "name": "Дайкири", "descr": "Белый ром, сахарный сироп, свежий сок лайма" }
        },
        wine: {
            "31": { "name": "Шардоне", "descr": "" },
            "32": { "name": "Каберне Совиньон", "descr": "" },
            "33": { "name": "Мерло", "descr": "" },
            "34": { "name": "Совиньон Блан", "descr": "" },
            "35": { "name": "Пино Нуар", "descr": "" },
            "36": { "name": "Розе", "descr": "" }
        },
        beer: {
            "37": { "name": "Лагер", "descr": "" },
            "38": { "name": "Пилснер", "descr": "" },
            "39": { "name": "IPA", "descr": "" }
        },
        non: {
            "43": { "name": "Апельсиновый сок", "descr": "" },
            "44": { "name": "Яблочный сок", "descr": "" },
            "45": { "name": "Минеральная вода", "descr": "" },
            "46": { "name": "Газированная вода", "descr": "" },
            "47": { "name": "Негазированная вода", "descr": "" },
            "48": { "name": "Кофе", "descr": "" }
        }
    }
    
    },
  
    uz: {
      cart: "Mening buyurtmam",
      total: "Jami",
      checkout: "Buyurtma berish",
      selectLanguage: "Tilni tanlang",
      menu: "Menyu",
      back: "Orqaga",
      confirm: "Tasdiqlash",
      emptyCart: "Sizning savatingiz bo'sh.",
      extras: "Qo'shimchalar",
      addToCart: "Savatga qo'shish",
      chooseOption: "Iltimos, variantni tanlang",
      info: "Bu yerda mehmonlaringiz uchun qo‘shimcha ma’lumot qo‘shishingiz mumkin, masalan, soliqlar, xizmat narxi, restoran ish vaqti, kontaktlar, yetkazib berish shartlari, QR menyu haqida umumiy ma’lumot va hokazo.",
      main: "Asosiy menyu",
      bar: "Bar",
      breakfast: "NONUSHTA (8:00 - 10:00)",
      hot: "Issiq taomlar",
      salad: "Salatlar",
      dessert: "Desertlar",
      cocktail: "Kokteyllar",
      wine: "Vino",
      beer: "Pivo",
      non: "Alkogolsiz",
      look: "Buyurtmani ko‘rish",
      goback: "Menyuga qaytish",
  
      menuItems: {
        breakfast: {
            "1": { "name": "Tuxumli tost", "descr": "Qovurilgan tuxum, pomidor, tost, ko‘k piyoz", "check": { "1": { "name": "Qora non", "price": "2 000" }, "2": { "name": "Oq non", "price": "2 000" } }, "toggle": { "1": { "name": "Ko‘katlar", "price": "3 000" }, "2": { "name": "Avokado", "price": "7 000" }, "3": { "name": "Piyoz", "price": "2 000" }, "4": { "name": "Sabzavotlar", "price": "5 000" }, "5": { "name": "Sabzi", "price": "2 000" } } },
            "2": { "name": "Tuxumli sendvich", "descr": "Non, tuxum, qaymoqli pishloq" },
            "3": { "name": "Pankeyk", "descr": "Rezavor mevalar, sariyog‘, sirop" },
            "4": { "name": "Suli bo‘tqa", "descr": "Suli yormasi, yong‘oq, mayiz" },
            "5": { "name": "Vafli", "descr": "Krem, qulupnay, ko‘k rezavorlar, sepilma" },
            "6": { "name": "Avokadoli tost", "descr": "Qovurilgan tuxum, avokado, butun donli non" }
        },
        hot: {
            "7": { "name": "Tovuq ko‘krak go‘shti sabzavot bilan", "descr": "Tovuq ko‘kragi, brokkoli, sabzi, guruch" },
            "8": { "name": "Limonli losos", "descr": "Losos filesi, limon, qushqo‘nmas, kartoshka" },
            "9": { "name": "Krevetkali pasta", "descr": "Spagetti, krevetka, sarimsoqli sous" },
            "10": { "name": "Befstroganov", "descr": "Mol go‘shti, qo‘ziqorin, piyoz, qaymoqli sous" },
            "11": { "id": 11, "name": "Steyk kartoshka bilan", "category": "hot", "file": "h1.png", "descr": "Mol go‘shti steyki, kartoshka pyuresi, qovurilgan sabzavotlar", "price": "95 000", "add": "1", "check": { "1": { "name": "O‘rtacha pishirilgan", "price": "0" }, "2": { "name": "To‘liq pishirilgan", "price": "0" } }, "toggle": { "1": { "name": "Qo‘ziqorinli sous", "price": "8 000" }, "2": { "name": "Murchli sous", "price": "6 000" }, "3": { "name": "Qo‘shimcha go‘sht", "price": "20 000" } } },
            "12": { "name": "Ratatuy", "descr": "Baqlajon, qovoq, pomidor, provans giyohlar" }
        },
        salad: {
            "13": { "name": "Gretsiya salati", "descr": "Pomidor, bodring, zaytun, feta pishlog‘i, oregano" },
            "14": { "name": "Sezar", "descr": "Romen, tovuq, parmesan, Sezar sousi", "check": { "1": { "name": "Non", "price": "2 000" }, "2": { "name": "Nonsiz", "price": "0" } }, "toggle": { "1": { "name": "Ko‘katlar", "price": "3 000" }, "2": { "name": "Avokado", "price": "7 000" }, "3": { "name": "Piyoz", "price": "2 000" }, "4": { "name": "Sabzavotlar", "price": "5 000" }, "5": { "name": "Sabzi", "price": "2 000" } } },
            "15": { "name": "Nisuaz", "descr": "Tunika, tuxum, kartoshka, ko‘k loviya" },
            "16": { "name": "Avokadoli salat", "descr": "Avokado, ismaloq, kedr yong‘oqlari, limon sousi" },
            "17": { "name": "Kinoali salat", "descr": "Kinoa, avokado, gilos pomidorlari, ismaloq, yong‘oqlar" },
            "18": { "name": "Olivye", "descr": "Kartoshka, sabzi, tuxum, kolbasa, mayonez" }
        },
        dessert: {
            "19": { "name": "Tiramisu", "descr": "Savoyardi, qahva, maskarpone, kakao" },
            "20": { "name": "Profitrol", "descr": "Xamir, qaymoqli krem, shokolad" },
            "21": { "name": "Muzqaymoq", "descr": "Vanilli muzqaymoq, shokoladli sous, yong‘oqlar" },
            "22": { "name": "Chizkeyk", "descr": "Maskarpone pishlog‘i, qulupnay, pechene asos", "check": { "1": { "name": "Qulupnay bilan", "price": "5 000" }, "2": { "name": "Shokolad bilan", "price": "4 000" } }, "toggle": { "1": { "name": "Yong‘oqlar", "price": "4 000" }, "2": { "name": "Karamelli sous", "price": "3 000" }, "3": { "name": "Shokoladli qirilgan", "price": "5 000" } } },
            "23": { "name": "Olmali pirog", "descr": "Qisqichbaqa xamiri, olma, dolchin, vanil" },
            "24": { "name": "Krem bryule", "descr": "Qaymoqli krem, karamelizatsiyalangan shakar" }
        },
        cocktail: {
            "25": { "name": "Margatita", "descr": "Tekila, uchlik sek, yangi laym sharbati" },
            "26": { "name": "Mohito", "descr": "Oq rom, yalpiz, shakar, laym, soda" },
            "27": { "name": "Kuba Libre", "descr": "Qorong‘i rom, kola, laym" },
            "28": { "name": "Pina Kolada", "descr": "Oq rom, kokos suti, ananas sharbati" },
            "29": { "name": "Negroni", "descr": "Jin, Kampari, qizil vermut" },
            "30": { "name": "Daykiri", "descr": "Oq rom, shakar siropi, yangi laym sharbati" }
        },
        wine: {
            "31": { "name": "Shardonnay", "descr": "" },
            "32": { "name": "Kaberne Sovinyon", "descr": "" },
            "33": { "name": "Merlo", "descr": "" },
            "34": { "name": "Sovinyon Blan", "descr": "" },
            "35": { "name": "Pino Nuar", "descr": "" },
            "36": { "name": "Rozé", "descr": "" }
        },
        beer: {
            "37": { "name": "Lager", "descr": "" },
            "38": { "name": "Pilsner", "descr": "" },
            "39": { "name": "IPA", "descr": "" }
        },
        non: {
            "43": { "name": "Apelsin sharbati", "descr": "" },
            "44": { "name": "Olma sharbati", "descr": "" },
            "45": { "name": "Mineral suv", "descr": "" },
            "46": { "name": "Gazlangan suv", "descr": "" },
            "47": { "name": "Gazlanmagan suv", "descr": "" },
            "48": { "name": "Qahva", "descr": "" }
        }
    }
    
    }
  };
  