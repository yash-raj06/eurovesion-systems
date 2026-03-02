import React, { useState, useMemo } from 'react';
import { products, categories } from '../data/products';
import './Products.css';

const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under ₹5,000', min: 0, max: 5000 },
  { label: '₹5,000 – ₹20,000', min: 5000, max: 20000 },
  { label: '₹20,000 – ₹50,000', min: 20000, max: 50000 },
  { label: 'Above ₹50,000', min: 50000, max: Infinity },
];

const brands = ['All Brands', 'Maxsell', 'Godrej', 'True Count', 'Generic'];

function formatPrice(price) {
  if (price >= 100000) return `₹${(price / 100000).toFixed(1)}L`;
  if (price >= 1000) return `₹${(price / 1000).toFixed(1)}K`;
  return `₹${price}`;
}

export default function Products() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [priceRange, setPriceRange] = useState(0);
  const [brand, setBrand] = useState('All Brands');
  const [sortBy, setSortBy] = useState('default');

  const filtered = useMemo(() => {
    let result = products.filter(p => {
      const range = priceRanges[priceRange];
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase()) ||
        p.brand.toLowerCase().includes(search.toLowerCase());
      const matchCategory = category === 'All' || p.category === category;
      const matchPrice = p.price >= range.min && p.price < range.max;
      const matchBrand = brand === 'All Brands' || p.brand === brand;
      return matchSearch && matchCategory && matchPrice && matchBrand;
    });

    if (sortBy === 'price-asc') result = [...result].sort((a, b) => a.price - b.price);
    if (sortBy === 'price-desc') result = [...result].sort((a, b) => b.price - a.price);
    if (sortBy === 'name') result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    return result;
  }, [search, category, priceRange, brand, sortBy]);

  const resetFilters = () => {
    setSearch(''); setCategory('All'); setPriceRange(0); setBrand('All Brands'); setSortBy('default');
  };

  return (
    <section id="products" className="products-section">
      <div className="section-container">
        <div className="section-header">
          <div className="section-badge">Our Products</div>
          <h2 className="section-title">Premium Cash Handling Machines</h2>
          <p className="section-sub">Explore our wide range of note counting, fake note detection, and coin sorting machines.</p>
        </div>

        {/* Search & Filters */}
        <div className="filter-bar">
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search products, brands..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            {search && <button className="clear-search" onClick={() => setSearch('')}>✕</button>}
          </div>

          <div className="filter-group">
            <select value={category} onChange={e => setCategory(e.target.value)}>
              {categories.map(c => <option key={c}>{c}</option>)}
            </select>

            <select value={priceRange} onChange={e => setPriceRange(Number(e.target.value))}>
              {priceRanges.map((r, i) => <option key={r.label} value={i}>{r.label}</option>)}
            </select>

            <select value={brand} onChange={e => setBrand(e.target.value)}>
              {brands.map(b => <option key={b}>{b}</option>)}
            </select>

            <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
              <option value="default">Sort By</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name">Name A-Z</option>
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="category-pills">
          {categories.map(c => (
            <button
              key={c}
              className={`pill ${category === c ? 'active' : ''}`}
              onClick={() => setCategory(c)}
            >{c}</button>
          ))}
        </div>

        {/* Results Info */}
        <div className="results-info">
          <span>{filtered.length} product{filtered.length !== 1 ? 's' : ''} found</span>
          {(search || category !== 'All' || priceRange !== 0 || brand !== 'All Brands') && (
            <button className="reset-btn" onClick={resetFilters}>Clear Filters ✕</button>
          )}
        </div>

        {/* Product Grid */}
        {filtered.length > 0 ? (
          <div className="products-grid">
            {filtered.map(product => (
              <div key={product.id} className="product-card">
                {product.badge && <span className="product-badge">{product.badge}</span>}
                <div className="product-icon">
                  {product.category.includes('Fake') ? '🔍' :
                   product.category.includes('Coin') ? '🪙' :
                   product.category.includes('Sorting') ? '📊' :
                   product.category.includes('Weighing') ? '⚖️' : '💵'}
                </div>
                <div className="product-brand">{product.brand}</div>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-desc">{product.description}</p>
                <div className="product-features">
                  {product.features.map(f => <span key={f} className="feature-tag">{f}</span>)}
                </div>
                <div className="product-footer">
                  <div className="product-price">
                    <span className="price-label">Starting at</span>
                    <span className="price-value">{formatPrice(product.price)}</span>
                  </div>
                  <a href="#contact" className="enquire-btn">Get Quote</a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <div className="no-results-icon">🔎</div>
            <h3>No products found</h3>
            <p>Try adjusting your search or filters</p>
            <button className="reset-btn" onClick={resetFilters}>Clear All Filters</button>
          </div>
        )}
      </div>
    </section>
  );
}
