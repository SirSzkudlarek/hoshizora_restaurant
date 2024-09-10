const beefs = [
  {
    id: 1,
    name: 'Kobe Beef Rib Eye Steak',
    name__japanease: '神戸牛リブアイステーキ',
    price: '22,800',
    grams: 200,
    description: 'Served with Sautéed spinach, garlic rice, shiitake mushrooms',
  },
  {
    id: 2,
    name: 'Kobe Beef Sirloin Steak',
    name__japanease: '神戸牛サーロインステーキ',
    price: '21,530',
    grams: 170,
    description: 'Served with Daikon paste, soy rice, shiitake mushrooms and bean sprouts',
  },
  {
    id: 3,
    name: 'Kobe Beef Fillet Steak',
    name__japanease: '神戸牛フィレステーキ',
    price: '23,640',
    grams: 120,
    description: 'Served with Miso Butter, grain rice, red pickled ginger, egg paste with green onion',
  },
  {
    id: 4,
    name: 'Kobe Gyutan',
    name__japanease: '神戸牛タン',
    price: '17,420',
    grams: 115,
    description:
      'Served with Yuzu Kosho(yuzu fruit), mentaiko gohan(rice with spicy cod roe), shiitake mushrooms, bean sprouts',
  },
];

const ramen = [
  {
    id: 1,
    name: 'Shoyu',
    name__japanease: '醤油',
    price: '3,440',
    grams: 300,
    description:
      'Shoyu (soy sauce) broth, chashu (braised pork belly) alongside with menma, norim, bamboo shoots, soft-boiled egg, bean sprouts, corn',
  },
  {
    id: 2,
    name: 'Shio',
    name__japanease: '塩',
    price: '3,140',
    grams: 290,
    description:
      'Shio (salt) broth, chashu (braised pork belly) alongside with green onions, sliced mushrooms, menma, nori, ginger, garlic',
  },
  {
    id: 3,
    name: 'Tonkotsu',
    name__japanease: '豚骨',
    price: '3,670',
    grams: 300,
    description:
      'Tonkotsu (pork bone) broth, chashu (braised pork belly) alongside with menma, nori, sesame seeds, red pickled ginger, garlic, soft-boiled egg, bean sprouts',
  },
  {
    id: 4,
    name: 'Miso',
    name__japanease: '味噌',
    price: '3,540',
    grams: 295,
    description:
      'Miso (fermented soybean paste) broth, chashu (braised pork belly) alongside with cabbage, sliced mushrooms, bamboo shoots, green onion, hard-boiled egg, menma, nori',
  },
];

const sashimi = [
  {
    id: 1,
    name: 'Maguro',
    name__japanease: 'まぐろ',
    price: '16,820',
    grams: 270,
    description: 'Tuna served from fish part known as otoro (the fattier belly part)',
  },
  {
    id: 2,
    name: 'Sake',
    name__japanease: '鮭',
    price: '24,510',
    grams: 260,
    description: 'Salomon served with pickled ginger, daikon radish',
  },
  {
    id: 3,
    name: 'Hamachi',
    name__japanease: 'はまち',
    price: '22,240',
    grams: 300,
    description: 'Yellowtail sashimi served with shiso leaves, wasabi',
  },
  {
    id: 4,
    name: 'Tai',
    name__japanease: '鯛',
    price: '17,420',
    grams: 115,
    description: 'Red snapper served with daikon radish, our secret soy souce',
  },
];

const sea__food = [
  {
    id: 1,
    name: 'Unagi',
    name__japanease: 'うなぎ',
    price: '20,800',
    grams: 325,
    description: 'Grilled eel, rice, sweet teriyaki souce',
  },
  {
    id: 2,
    name: 'Ikayaki',
    name__japanease: 'いか焼き',
    price: '19,530',
    grams: 270,
    description: 'Grilled octopus served with soy souce and sprinkled with sesame seeds',
  },
  {
    id: 3,
    name: 'Okonomiyaki',
    name__japanease: 'お好み焼き',
    price: '20,780',
    grams: 290,
    description: 'Savory pancake containing shrimps, bonito flakes, dashi, green onions',
  },
  {
    id: 4,
    name: 'Tempura',
    name__japanease: '天ぷら',
    price: '15,420',
    grams: 200,
    description: 'Shrimps coated in batter and deep-fried, egg rice with addition of green onions and sesame seeds',
  },
  {
    id: 5,
    name: 'Toro Sushi',
    name__japanease: 'トロ寿司',
    price: '21,960',
    grams: '200, 3 pieces',
    description: 'Toro(Fatty belly part of the tuna), vinegared rice, nori, soy souce, wasabi, pickled ginger',
  },
];
export { beefs, ramen, sashimi, sea__food };
