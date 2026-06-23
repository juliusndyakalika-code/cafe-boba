export type Size = 'S' | 'M' | 'L';

export interface MenuItem {
  name: string;
  description: string;
  ingredients: string;
  prices: Partial<Record<Size, number>>;
  tag?: 'top' | 'new';
}

export interface MenuCategory {
  id: string;
  label: string;
  emoji: string;
  color: string;
  bg: string;
  defaultSizes: Partial<Record<Size, number>>;
  items: MenuItem[];
  note?: string;
}

export const MENU: MenuCategory[] = [
  {
    id: 'bubble-milk-tea',
    label: 'Bubble Milk Tea',
    emoji: '🧋',
    color: 'text-purple-700',
    bg: 'bg-purple-50',
    defaultSizes: { S: 13000, M: 15000, L: 18000 },
    note: 'Made with real fruits and natural sweetness — no artificial syrups, colours, chemicals or preservatives.',
    items: [
      { name: 'Classic Tea', ingredients: 'Tea, Milk', description: 'A timeless classic — smooth black tea with creamy milk.', prices: { S: 10000, M: 13000, L: 15000 } },
      { name: 'Mocha', ingredients: 'Coffee, Cadbury, Milk', description: 'Rich coffee meets Cadbury chocolate in a creamy milk tea.', prices: { M: 15000, L: 18000 } },
      { name: 'Vanilla', ingredients: 'Vanilla creamer, Hershey, Milk', description: 'Sweet vanilla with a drizzle of Hershey in creamy milk.', prices: {} },
      { name: 'Strawberry', ingredients: 'Strawberry creamer, Tea, Milk', description: 'Fruity strawberry blended with black tea and milk.', prices: {} },
      { name: 'Mango', ingredients: 'Mango creamer, Tea, Milk', description: 'Tropical mango creamer meets bold black tea.', prices: {} },
      { name: 'Matcha', ingredients: 'Matcha, Full Cream Milk', description: 'Premium Japanese matcha with rich full cream milk.', prices: { M: 15000, L: 18000 } },
      { name: 'Coffee Tea', ingredients: 'Coffee, Tea, Milk, Evaporated Milk', description: 'The best of both worlds — coffee and tea together.', prices: {} },
      { name: 'Taro', ingredients: 'Taro creamer, Tea, Milk', description: 'Purple taro cream blended into smooth milk tea.', prices: {} },
      { name: 'Hazelnut', ingredients: 'Hazelnut creamer, Tea, Milk', description: 'Nutty hazelnut with tea and creamy milk.', prices: {} },
      { name: 'Cotton Candy', ingredients: 'Cotton candy creamer, Milk', description: 'Dreamy cotton candy sweetness in every sip.', prices: { M: 15000, L: 18000 } },
      { name: 'Thai', ingredients: 'Thai tea, Evaporated Milk', description: 'Authentic Thai tea with rich evaporated milk.', prices: {} },
      { name: 'Green Apple', ingredients: 'Green apple creamer, Tea, Milk', description: 'Crisp green apple with milk tea.', prices: { M: 15000, L: 18000 } },
      { name: 'Caramel', ingredients: 'Caramel sauce, Tea, Evaporated Milk', description: 'Smooth caramel swirled into tea and evaporated milk.', prices: {} },
      { name: 'Brown Sugar', ingredients: 'Brown sugar, Okinawa creamer', description: 'Rich Okinawa brown sugar — a TikTok-famous classic.', prices: {} },
    ],
  },
  {
    id: 'fruit-milk-tea',
    label: 'Fruit Milk Tea',
    emoji: '🍓',
    color: 'text-pink-700',
    bg: 'bg-pink-50',
    defaultSizes: { S: 15000, M: 17000, L: 19000 },
    items: [
      { name: 'Matcha Mango', ingredients: 'Matcha, Mango puree, Tea', description: 'Earthy matcha meets sweet tropical mango.', prices: {} },
      { name: 'Berry Matcha', ingredients: 'Strawberry puree, Matcha, Milk', description: 'Berry freshness layered with green matcha.', prices: {} },
      { name: 'Mango Coco', ingredients: 'Mango puree, Tea, Coconut milk, Coconut jelly', description: 'Tropical mango and coconut with chewy coconut jelly.', prices: {} },
      { name: 'Passion Hawaii', ingredients: 'Passion pulp, Tea, Coconut milk, Coconut jelly', description: 'A Hawaiian escape in a cup — passion and coconut.', prices: {} },
    ],
  },
  {
    id: 'milky-treat',
    label: 'Milky Treat',
    emoji: '🍫',
    color: 'text-amber-700',
    bg: 'bg-amber-50',
    defaultSizes: { S: 17000, M: 20000, L: 23000 },
    note: 'Also available hot: Hot Chocolate (TZS 8,000) · Hot Milk Tea (TZS 6,000) · Hot Mocha (TZS 8,000)',
    items: [
      { name: 'Nutella Coffee Latte', ingredients: 'Nutella, Milk, Coffee, Evaporated milk, Cream', description: 'The perfect blend of Nutella, coffee and cream.', prices: {} },
      { name: 'Cocoa Strawberry Milk', ingredients: 'Strawberry, Milk, Cadbury, Evaporated milk, Cream', description: 'Creamy strawberry bliss with Cadbury and a splash of evaporated milk.', prices: {} },
      { name: 'Coffee Oreo Milk', ingredients: 'Oreo, Milk, Evaporated milk, Coffee, Cream', description: 'Coffee and Oreos together — the ultimate caffeine fix.', prices: {} },
      { name: 'Taro Cadbury Milk', ingredients: 'Taro, Milk, Cadbury, Evaporated milk', description: 'Sweet taro cravings satisfied with Cadbury richness.', prices: {} },
      { name: 'Thai Tea Cocoa', ingredients: 'Thai Tea, Milk, Evaporated milk, Cadbury, Condensed milk', description: 'Thai tea meets Cadbury chocolate in condensed milk.', prices: {} },
    ],
  },
  {
    id: 'fizzy-float',
    label: 'Fizzy Tea Float',
    emoji: '🫧',
    color: 'text-sky-700',
    bg: 'bg-sky-50',
    defaultSizes: { M: 17000, L: 20000 },
    items: [
      { name: 'Blueberry Float', ingredients: 'Blueberry purée, Sparkling soda, Blueberry sauce, Ice cream', description: 'Sparkling blueberry soda topped with a scoop of ice cream.', prices: {} },
      { name: 'Strawberry Float', ingredients: 'Strawberry purée, Sparkling water, Strawberry sauce, Ice cream', description: 'Refreshing strawberry fizz with creamy ice cream.', prices: {} },
      { name: 'Green Grape Yakult', ingredients: 'Green Grapes, Lime, Sparkling water, Yakult', description: 'Zesty grape and Yakult with a sparkling twist.', prices: {} },
      { name: 'Citrus Matcha', ingredients: 'Orange, Lemon, Matcha, Sparkling water', description: 'Citrusy matcha fizz — refreshing and energizing.', prices: {} },
    ],
  },
  {
    id: 'frappuccino',
    label: 'Frappuccino',
    emoji: '☕',
    color: 'text-rose-700',
    bg: 'bg-rose-50',
    defaultSizes: { S: 15000, M: 18000, L: 22000 },
    note: 'Spice up your frappe with Coffee Jelly or Crystal Boba!',
    items: [
      { name: 'Pink Teddy', ingredients: 'Strawberry pureé, Vanilla shake, Strawberry syrup, Cream', description: 'A burst of fresh strawberry with vanilla shake and cream on top.', prices: { S: 15000, M: 17000, L: 20000 }, tag: 'top' },
      { name: 'Purple Teddy', ingredients: 'Blueberries, Grapes, Vimto, Blueberry syrup, Vanilla shake, Cream', description: 'Berry dreams with Vimto, blueberries and vanilla shake.', prices: { S: 15000, M: 17000, L: 20000 }, tag: 'top' },
      { name: 'Yellow Teddy', ingredients: 'Fresh Mango pureé, Vanilla shake, Cream', description: 'Tropical mango pureé with vanilla shake — summer in a cup.', prices: { S: 15000, M: 17000, L: 20000 } },
      { name: 'Chocoholic Nutella', ingredients: 'Nutella, Ice cream, Whipped cream', description: 'Rich Nutella and melted ice cream topped with clouds of whipped cream.', prices: {}, tag: 'top' },
      { name: 'Caramel Coffee', ingredients: 'Coffee, Caramel sauce, Vanilla shake, Whipped cream', description: 'Caramel coffee milkshake with homemade sauce and whipped cream.', prices: {}, tag: 'top' },
      { name: 'Matcha Cadbury', ingredients: 'Matcha, Cadbury, Milkshake, Whipped cream', description: 'Japanese matcha meets Cadbury in a creamy frappe.', prices: { S: 15000, M: 18000, L: 22000 } },
      { name: 'Kinder Bueno Crush', ingredients: 'Kinder Bueno, Milkshake, Nutella, Cream', description: 'A creamy dream with Kinder Bueno and Nutella.', prices: { M: 20000, L: 25000 }, tag: 'new' },
      { name: 'Lotus Crush', ingredients: 'Lotus Biscoff cookies, Spread, Milkshake, Whipped cream', description: 'Crunchy Lotus cookies and creamy spread in a vanilla shake.', prices: { S: 15000, M: 17000, L: 20000 } },
      { name: 'Oreo Crush', ingredients: 'Oreo, Cadbury, Vanilla shake, Whipped cream, Hershey sauce', description: 'Oreo and Cadbury in a sweet vanilla shake symphony.', prices: { S: 15000, M: 17000, L: 20000 } },
      { name: 'Nutella Frappe', ingredients: 'Nutella, Vanilla shake, Whipped cream', description: 'Nutella and vanilla shake crowned with fluffy whipped cream.', prices: { S: 15000, M: 18000, L: 22000 } },
    ],
  },
  {
    id: 'iced-fruit-tea',
    label: 'Iced Fruit Tea',
    emoji: '🍵',
    color: 'text-green-700',
    bg: 'bg-green-50',
    defaultSizes: { S: 13000, M: 15000, L: 17000 },
    items: [
      { name: 'Vimto Berry', ingredients: 'Blueberry, Strawberry, Vimto, Green tea', description: 'Mixed berries and Vimto with iced green tea.', prices: {} },
      { name: 'Citrus Twist', ingredients: 'Imported Lemon, Oranges, Green tea', description: 'Zesty citrus with chilled green tea.', prices: {} },
      { name: 'Passion Hawaii', ingredients: 'Passion pulp, Imported Lemon, Green tea', description: 'Tropical passion with a citrus green tea base.', prices: {} },
      { name: 'Grape Slush', ingredients: 'Seedless grapes, Green tea, Ice', description: 'Fresh seedless grapes slushed with green tea.', prices: {} },
      { name: 'Fruit Smash', ingredients: 'Kiwi, Pineapple, Orange, Green tea', description: 'A tropical medley of four fruits and green tea.', prices: {} },
      { name: 'Exotic', ingredients: 'Pineapple, Passion, Grapefruit, Green tea', description: 'An exotic blend of tropical fruits and green tea.', prices: {} },
      { name: 'Summer Blend', ingredients: 'Strawberry, Mango, Green tea', description: 'Classic summer fruits with refreshing green tea.', prices: {} },
    ],
  },
  {
    id: 'milkshake',
    label: 'Milkshakes',
    emoji: '🥛',
    color: 'text-indigo-700',
    bg: 'bg-indigo-50',
    defaultSizes: {},
    items: [
      { name: 'Vanilla', ingredients: 'Vanilla, Milk, Cream', description: 'Classic creamy vanilla milkshake.', prices: { S: 10000, M: 15000 } },
      { name: 'Strawberry', ingredients: 'Strawberry, Milk, Cream', description: 'Fresh strawberry in a thick creamy shake.', prices: { S: 13000, M: 15000 } },
      { name: 'Cadbury', ingredients: 'Cadbury, Milk, Cream', description: 'Rich Cadbury chocolate milkshake.', prices: { S: 13000, M: 15000, L: 17000 } },
      { name: 'Taro', ingredients: 'Taro, Milk, Cream', description: 'Creamy purple taro milkshake.', prices: { S: 13000, M: 15000 } },
      { name: 'Rose', ingredients: 'Rose syrup, Milk, Cream', description: 'Delicate floral rose milkshake.', prices: { S: 13000, M: 15000 } },
    ],
  },
];

export const TOPPINGS = [
  { name: 'Brown Sugar Syrup', price: 2000 },
  { name: 'Extra Tapioca', price: 2000 },
  { name: 'Agar Boba (Vegan)', price: 2000 },
  { name: 'Crystal Boba', price: 2000 },
  { name: 'Popping Boba', price: 2000 },
  { name: 'Coconut Jelly', price: 3000 },
  { name: 'Whipped Cream', price: 3000 },
  { name: 'Taro Pudding', price: 3000 },
  { name: 'Cooling Jelly (Konjac)', price: 3000 },
  { name: 'Coffee Jelly', price: 3000 },
  { name: 'Yakult', price: 3000 },
  { name: 'Cheese Foam', price: 3000 },
  { name: 'Matcha Powder', price: 5000 },
  { name: 'Ice Cream', price: 5000 },
];

export const COMBOS = [
  {
    name: 'The Sweet Escape',
    description: 'S Frappuccino + Vanilla Waffle',
    price: 28000,
    emoji: '🧇',
  },
  {
    name: 'The Signature Duo',
    description: 'Pink Teddy S + Cadbury Waffle',
    price: 30000,
    emoji: '🍓',
  },
  {
    name: 'The Go Big Deal',
    description: 'L Frappuccino + Matcha Waffle + Ice Cream',
    price: 42000,
    emoji: '🏆',
  },
];
