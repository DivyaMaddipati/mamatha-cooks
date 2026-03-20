import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Search } from "lucide-react";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { motion } from "framer-motion";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [search, setSearch] = useState("");
  const [priceRange, setPriceRange] = useState<"all" | "under200" | "200to300" | "above300">("all");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (selectedCategory !== "All" && p.category !== selectedCategory) return false;
      if (search && !p.name.toLowerCase().includes(search.toLowerCase())) return false;
      if (priceRange === "under200" && p.price >= 200) return false;
      if (priceRange === "200to300" && (p.price < 200 || p.price > 300)) return false;
      if (priceRange === "above300" && p.price <= 300) return false;
      return true;
    });
  }, [selectedCategory, search, priceRange]);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    if (cat === "All") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="container py-8">
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-display text-3xl md:text-4xl font-bold text-center mb-8"
      >
        Our Products
      </motion.h1>

      {/* Search */}
      <div className="relative max-w-md mx-auto mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-card font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 justify-center mb-4">
        {["All", ...categories].map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`px-4 py-2 rounded-full text-sm font-body font-semibold transition-colors ${
              selectedCategory === cat
                ? "bg-primary text-primary-foreground"
                : "bg-card text-foreground border border-border hover:bg-muted"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {[
          { label: "All Prices", value: "all" as const },
          { label: "Under ₹200", value: "under200" as const },
          { label: "₹200 – ₹300", value: "200to300" as const },
          { label: "Above ₹300", value: "above300" as const },
        ].map((opt) => (
          <button
            key={opt.value}
            onClick={() => setPriceRange(opt.value)}
            className={`px-3 py-1.5 rounded-full text-xs font-body font-semibold transition-colors ${
              priceRange === opt.value
                ? "bg-accent text-accent-foreground"
                : "bg-muted text-muted-foreground hover:bg-border"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <p className="text-center text-muted-foreground py-16 font-body">No products found. Try a different search or filter.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
