import mangoPickle from "@/assets/product-mango-pickle.jpg";
import garlicPickle from "@/assets/product-garlic-pickle.jpg";
import murukulu from "@/assets/product-murukulu.jpg";
import chekkalu from "@/assets/product-chekkalu.jpg";
import powders from "@/assets/category-powders.jpg";

export type Product = {
  id: number;
  name: string;
  price: number;
  category: "Pickles" | "Snacks" | "Powders";
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
    name: "Garlic Pickle",
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
    name: "Murukulu",
    price: 150,
    category: "Snacks",
    rating: 4.8,
    image: murukulu,
    description: "Crispy, crunchy spiral snack made from rice flour and urad dal, seasoned with cumin and sesame. Deep-fried to golden perfection using our traditional recipe. Perfect with evening chai!",
    ingredients: ["Rice Flour", "Urad Dal Flour", "Cumin Seeds", "Sesame Seeds", "Butter", "Salt"],
    shelfLife: "3 months",
  },
  {
    id: 4,
    name: "Chekkalu",
    price: 180,
    category: "Snacks",
    rating: 4.7,
    image: chekkalu,
    description: "Thin, crispy rice crackers infused with aromatic spices. These traditional Andhra snacks are sun-dried and deep-fried for that perfect crunch. One bite and you'll be transported to an Andhra kitchen!",
    ingredients: ["Rice Flour", "Chili Flakes", "Cumin", "Sesame Seeds", "Salt"],
    shelfLife: "3 months",
  },
  {
    id: 5,
    name: "Karam Podi (Spice Powder)",
    price: 199,
    category: "Powders",
    rating: 4.9,
    image: powders,
    description: "Fiery and flavorful Andhra-style spice powder, perfect to mix with hot rice and ghee. Made with roasted lentils and dry red chilies for an authentic taste that elevates every meal.",
    ingredients: ["Red Chilies", "Urad Dal", "Chana Dal", "Garlic", "Salt", "Sesame Oil"],
    shelfLife: "4 months",
  },
  {
    id: 6,
    name: "Palli Podi (Peanut Powder)",
    price: 179,
    category: "Powders",
    rating: 4.6,
    image: powders,
    description: "Nutty and spicy peanut powder made with roasted peanuts and dry red chilies. A versatile condiment that pairs beautifully with idli, dosa, or simply mixed into steaming rice.",
    ingredients: ["Roasted Peanuts", "Red Chilies", "Garlic", "Cumin", "Salt"],
    shelfLife: "4 months",
  },
];

export const categories = ["Pickles", "Snacks", "Powders"] as const;
