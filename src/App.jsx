import { useState } from "react";
import ImageCard from "./components/ImageCard";
import "./App.css";

const images = [
  // 1. NATURE — 10 images
  { id: 1, title: "Mountain Escape", description: "Majestic mountain landscapes.", category: "Nature", url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800" },
  { id: 2, title: "Green Forest", description: "A peaceful forest filled with trees.", category: "Nature", url: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800" },
  { id: 3, title: "Ocean Waves", description: "Beautiful blue ocean waves.", category: "Nature", url: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800" },
  { id: 4, title: "Waterfall Wonder", description: "Water flowing through nature.", category: "Nature", url: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800" },
  { id: 5, title: "Golden Sunset", description: "Golden light across the landscape.", category: "Nature", url: "https://images.unsplash.com/photo-1472120435266-53107fd0c44a?w=800" },
  { id: 6, title: "Misty Mountains", description: "Mountains covered in morning mist.", category: "Nature", url: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800" },
  { id: 7, title: "Autumn Leaves", description: "Warm colours of the autumn season.", category: "Nature", url: "https://images.unsplash.com/photo-1507371341162-763b5e419408?w=800" },
  { id: 8, title: "Desert Beauty", description: "Beautiful desert sand dunes.", category: "Nature", url: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800" },
  { id: 9, title: "Flower Garden", description: "Colourful flowers in full bloom.", category: "Nature", url: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800" },
  { id: 10, title: "Starry Sky", description: "A beautiful view of the night sky.", category: "Nature", url: "https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?w=800" },

  // 2. FOOD — 10 images
  { id: 11, title: "Italian Pizza", description: "Fresh pizza with delicious toppings.", category: "Food", url: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800" },
  { id: 12, title: "Classic Burger", description: "A juicy burger with fresh ingredients.", category: "Food", url: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800" },
  { id: 13, title: "Fresh Pasta", description: "Delicious pasta with rich sauce.", category: "Food", url: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800" },
  { id: 14, title: "Sweet Pancakes", description: "Fluffy pancakes with sweet toppings.", category: "Food", url: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=800" },
  { id: 15, title: "Chocolate Dessert", description: "A tempting chocolate dessert.", category: "Food", url: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800" },
  { id: 16, title: "Fresh Salad", description: "A colourful bowl of fresh vegetables.", category: "Food", url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800" },
  { id: 17, title: "Sushi Platter", description: "Beautifully prepared Japanese sushi.", category: "Food", url: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800" },
  { id: 18, title: "Morning Coffee", description: "A warm cup of freshly brewed coffee.", category: "Food", url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800" },
  { id: 19, title: "Fresh Strawberries", description: "Juicy and delicious red strawberries.", category: "Food", url: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=800" },
  { id: 20, title: "Delicious Biryani", description: "Aromatic rice and traditional spices.", category: "Food", url: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=800" },

  // 3. CITY — 10 images
  { id: 21, title: "City Skyline", description: "A stunning modern city skyline.", category: "City", url: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800" },
  { id: 22, title: "New York Streets", description: "The energy of busy city streets.", category: "City", url: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800" },
  { id: 23, title: "City at Night", description: "Beautiful lights across the city.", category: "City", url: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=800" },
  { id: 24, title: "Urban Buildings", description: "Tall buildings above city streets.", category: "City", url: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800" },
  { id: 25, title: "Busy Crossroads", description: "The movement of busy city traffic.", category: "City", url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800" },
  { id: 26, title: "Bridge Lights", description: "A beautiful bridge in the evening.", category: "City", url: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800" },
  { id: 27, title: "Urban Evening", description: "An atmospheric city evening.", category: "City", url: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800" },
  { id: 28, title: "Street Photography", description: "Everyday life in the city.", category: "City", url: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=800" },
  { id: 29, title: "City Reflections", description: "City buildings reflected in glass.", category: "City", url: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800" },
  { id: 30, title: "Downtown View", description: "A memorable view of downtown.", category: "City", url: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800" },

  // 4. ARCHITECTURE — 10 images
  { id: 31, title: "Modern House", description: "A clean and modern architectural design.", category: "Architecture", url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800" },
  { id: 32, title: "Minimal Interior", description: "Simple interiors with elegant details.", category: "Architecture", url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800" },
  { id: 33, title: "Glass Building", description: "Contemporary glass architecture.", category: "Architecture", url: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800" },
  { id: 34, title: "Elegant Living Room", description: "A comfortable and stylish living space.", category: "Architecture", url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800" },
  { id: 35, title: "Modern Kitchen", description: "A beautiful modern kitchen design.", category: "Architecture", url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800" },
  { id: 36, title: "Classic Architecture", description: "Timeless architectural details.", category: "Architecture", url: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800" },
  { id: 37, title: "Cozy Bedroom", description: "A peaceful bedroom interior.", category: "Architecture", url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800" },
  { id: 38, title: "Wooden Interior", description: "Natural wood and warm interior tones.", category: "Architecture", url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800" },
  { id: 39, title: "Designer Home", description: "A home with creative architectural features.", category: "Architecture", url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800" },
  { id: 40, title: "Bright Apartment", description: "An airy apartment with natural light.", category: "Architecture", url: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800" },

  // 5. TRAVEL — 10 images
  { id: 41, title: "Tropical Beach", description: "A relaxing tropical beach destination.", category: "Travel", url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800" },
  { id: 42, title: "Paris Getaway", description: "Explore the romantic streets of Paris.", category: "Travel", url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800" },
  { id: 43, title: "Mountain Journey", description: "An unforgettable mountain adventure.", category: "Travel", url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800" },
  { id: 44, title: "Island Escape", description: "Discover a peaceful tropical island.", category: "Travel", url: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=800" },
  { id: 45, title: "Desert Adventure", description: "Discover beautiful desert landscapes.", category: "Travel", url: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=800" },
  { id: 46, title: "Venice Canals", description: "Beautiful waterways and historic views.", category: "Travel", url: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=800" },
  { id: 47, title: "Coastal Road", description: "A scenic road beside the sea.", category: "Travel", url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800" },
  { id: 48, title: "Camping Adventure", description: "Enjoy a peaceful outdoor getaway.", category: "Travel", url: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800" },
  { id: 49, title: "Alpine Village", description: "A charming village among the mountains.", category: "Travel", url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800" },
  { id: 50, title: "Beautiful Lighthouse", description: "A lighthouse standing beside the ocean.", category: "Travel", url: "https://images.unsplash.com/photo-1498623116890-37e912163d5d?w=800" }
];

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Nature",
    "Food",
    "City",
    "Architecture",
    "Travel"
  ];

  const filteredImages = images.filter((image) => {
    const matchesSearch =
      image.title.toLowerCase().includes(search.toLowerCase()) ||
      image.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || image.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <header className="hero">
        <nav className="navbar">
          <a className="logo" href="#gallery">
            Frame<span>ly.</span>
          </a>
          <span className="nav-label">VISUAL COLLECTION</span>
        </nav>

        <div className="hero-content">
          <p className="eyebrow">A LITTLE INSPIRATION</p>
          <h1>
            Moments worth
            <br />
            <span>looking at.</span>
          </h1>
          <p className="hero-description">
            Explore a curated collection of beautiful places,
            delicious food, creative spaces and unforgettable views.
          </p>
          <a className="explore-button" href="#gallery">
            Explore gallery <span>↓</span>
          </a>
        </div>

        <div className="hero-decoration">50 PHOTOGRAPHS</div>
      </header>

      <main className="gallery-section" id="gallery">
        <div className="section-heading">
          <div>
            <p className="eyebrow">THE COLLECTION</p>
            <h2>Explore the gallery</h2>
            <p className="section-description">
              Every image tells a different story.
            </p>
          </div>
          <span className="image-count">
            {filteredImages.length} images
          </span>
        </div>

        <div className="gallery-controls">
          <div className="search-box">
            <span>⌕</span>
            <input
              type="text"
              placeholder="Search images..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>

          <div className="category-filters">
            {categories.map((item) => (
              <button
                key={item}
                className={
                  category === item
                    ? "filter-button active"
                    : "filter-button"
                }
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <section className="image-grid">
          {filteredImages.length > 0 ? (
            filteredImages.map((image) => (
              <ImageCard key={image.id} image={image} />
            ))
          ) : (
            <div className="empty-state">
              <h3>No images found</h3>
              <p>Try another search or category.</p>
              <button
                className="reset-button"
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                }}
              >
                Reset filters
              </button>
            </div>
          )}
        </section>
      </main>

      <footer className="footer">
        <a className="logo" href="#gallery">
          Frame<span>ly.</span>
        </a>
        <p>Collect moments. Appreciate beauty.</p>
        <p className="copyright">© 2026 Framely Image Gallery</p>
      </footer>
    </>
  );
}

export default App;