import mangoPickle from "@/assets/product-mango-pickle.jpg";
import garlicPickle from "@/assets/product-garlic-pickle.jpg";
import lemonPickle from "@/assets/product-lemon-pickle.jpg";
import tomatoPickle from "@/assets/product-tomato-pickle.jpg";
import mixedPickle from "@/assets/product-mixed-pickle.jpg";
import gingerPickle from "@/assets/product-ginger-pickle.jpg";
import chiliPickle from "@/assets/product-chili-pickle.jpg";
import amlaPickle from "@/assets/product-amla-pickle.jpg";
import maagayaPickle from "@/assets/product-maagaya.jpg";
import ulliAavakayaPickle from "@/assets/product-ulli-aavakaya.jpg";

export type Product = {
  id: number;
  name: string;
  price: number;
  category: "Pickles";
  rating: number;
  image: string;
  description: string;
  ingredients: string[];
  shelfLife: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Andhra Mango Pickle (Avakaya)",
    price: 299,
    category: "Pickles",
    rating: 4.8,
    image: mangoPickle,
    description: "Traditional spicy Andhra-style mango pickle made with authentic ingredients. Every jar carries the bold, tangy flavors of raw mangoes hand-picked at the perfect stage, mixed with our secret spice blend passed down through generations.",
    ingredients: ["Raw Mango", "Mustard Powder", "Red Chili Powder", "Fenugreek Seeds", "Sesame Oil", "Salt"],
    shelfLife: "6 months",
  },
  {
    id: 2,
    name: "Garlic Pickle (Velluli Pachadi)",
    price: 249,
    category: "Pickles",
    rating: 4.7,
    image: garlicPickle,
    description: "Fiery and aromatic garlic pickle made with plump garlic cloves slow-marinated in a rich blend of spices and cold-pressed oil. A must-have condiment that transforms any simple meal.",
    ingredients: ["Garlic", "Red Chili Powder", "Mustard", "Fenugreek", "Sesame Oil", "Salt"],
    shelfLife: "6 months",
  },
  {
    id: 3,
    name: "Lemon Pickle (Nimma Kaya)",
    price: 229,
    category: "Pickles",
    rating: 4.9,
    image: lemonPickle,
    description: "Tangy and zesty lemon pickle bursting with citrus goodness. Sun-ripened lemons are carefully marinated with mustard and chili, creating a bright, refreshing condiment that pairs perfectly with rice and dal.",
    ingredients: ["Lemon", "Red Chili Powder", "Mustard Seeds", "Turmeric", "Sesame Oil", "Salt"],
    shelfLife: "8 months",
  },
  {
    id: 4,
    name: "Tomato Pickle (Tomato Pachadi)",
    price: 199,
    category: "Pickles",
    rating: 4.6,
    image: tomatoPickle,
    description: "A sweet and tangy tomato pickle slow-cooked to perfection with aromatic spices. This unique Andhra delicacy has a rich, jammy texture that makes it irresistible with hot rice or rotis.",
    ingredients: ["Tomatoes", "Red Chili Powder", "Mustard Seeds", "Fenugreek", "Jaggery", "Sesame Oil", "Salt"],
    shelfLife: "4 months",
  },
  {
    id: 5,
    name: "Mixed Vegetable Pickle",
    price: 279,
    category: "Pickles",
    rating: 4.7,
    image: mixedPickle,
    description: "A vibrant medley of seasonal vegetables — carrots, cauliflower, green chilies, and raw mango — pickled in a robust mustard-chili masala. Every spoonful is a colorful burst of flavor and crunch.",
    ingredients: ["Carrot", "Cauliflower", "Green Chili", "Raw Mango", "Mustard", "Red Chili Powder", "Sesame Oil", "Salt"],
    shelfLife: "5 months",
  },
  {
    id: 6,
    name: "Ginger Pickle (Allam Pachadi)",
    price: 239,
    category: "Pickles",
    rating: 4.8,
    image: gingerPickle,
    description: "Warm and spicy ginger pickle made with tender young ginger, slow-marinated in a fiery chili-sesame blend. Known for its digestive benefits and its ability to add a zing to any meal.",
    ingredients: ["Ginger", "Red Chili Powder", "Mustard Seeds", "Fenugreek", "Sesame Oil", "Salt"],
    shelfLife: "6 months",
  },
  {
    id: 7,
    name: "Green Chili Pickle (Mirchi Pachadi)",
    price: 219,
    category: "Pickles",
    rating: 4.5,
    image: chiliPickle,
    description: "For those who love the heat! Whole green chilies stuffed and marinated with aromatic spices in mustard oil. A bold, fiery pickle that adds excitement to every bite.",
    ingredients: ["Green Chilies", "Mustard Powder", "Red Chili Powder", "Fenugreek", "Mustard Oil", "Salt"],
    shelfLife: "6 months",
  },
  {
    id: 8,
    name: "Amla Pickle (Usirikaya Pachadi)",
    price: 259,
    category: "Pickles",
    rating: 4.9,
    image: amlaPickle,
    description: "Nutrient-rich Indian gooseberry pickle packed with Vitamin C. The tangy, slightly bitter amla is beautifully balanced with warming spices, creating a pickle that's as healthy as it is delicious.",
    ingredients: ["Amla (Gooseberry)", "Red Chili Powder", "Mustard Seeds", "Fenugreek", "Turmeric", "Sesame Oil", "Salt"],
    shelfLife: "8 months",
  },
];

export const categories = ["Pickles"] as const;
