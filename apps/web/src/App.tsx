import { useEffect, useMemo, useState } from 'react';

import {
  askProductAssistant,
  bulkUploadProducts,
  createProduct,
  deleteProduct,
  getProducts,
  getCategories,
  getFeaturedProducts,
  getProductBySlug,
  loginAdmin,
  reindexProductEmbeddings,
  searchProducts,
  updateProduct,
} from './lib/api';
import type { AskAssistantResponse, Product, ProductInput } from './lib/types';

const ADMIN_TOKEN_KEY = 'aurora-admin-token';
const ADMIN_EMAIL_KEY = 'aurora-admin-email';

function formatPrice(price: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price);
}

function parseCommaSeparated(value: string) {
  return value
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
}

function parseFeatureLines(value: string) {
  return value
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [label, ...rest] = line.split(':');

      return {
        label: label?.trim() ?? '',
        value: rest.join(':').trim(),
      };
    })
    .filter((feature) => feature.label && feature.value);
}

function parseKnowledgeLines(value: string) {
  return value
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [title, ...rest] = line.split(':');

      return {
        title: title?.trim() ?? '',
        body: rest.join(':').trim(),
      };
    })
    .filter((chunk) => chunk.title && chunk.body);
}

const emptyProductForm = {
  slug: '',
  name: '',
  subtitle: '',
  description: '',
  category: '',
  price: '0',
  heroImage: '',
  gallery: '',
  tags: '',
  searchableText: '',
  featuresText: '',
  knowledgeText: '',
  featured: true,
  inStock: true,
};

export function App() {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setPathname(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setPathname(path);
  };

  const isAdminRoute = pathname.startsWith('/admin');
  const isProductRoute = pathname.startsWith('/product/');
  const activeProductSlug = isProductRoute ? pathname.split('/product/')[1] : null;

  if (isAdminRoute) {
    return <AdminPortal />;
  }

  return (
    <StorefrontApp
      activeProductSlug={activeProductSlug}
      onNavigate={(slug) => navigate(slug ? `/product/${slug}` : '/')}
    />
  );
}

function StorefrontApp({
  activeProductSlug,
  onNavigate,
}: {
  activeProductSlug: string | null;
  onNavigate: (slug: string | null) => void;
}) {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState('');

  const [aiQuestion, setAiQuestion] = useState(
    'What is the best option for a calm premium desk setup?',
  );
  const [aiResult, setAiResult] = useState<AskAssistantResponse | null>(null);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState('');

  useEffect(() => {
    async function loadCatalog() {
      try {
        setError('');
        setIsLoading(true);
        const [featured, catalogCategories, search] = await Promise.all([
          getFeaturedProducts(),
          getCategories(),
          searchProducts('', ''),
        ]);

        setFeaturedProducts(featured);
        setCategories(['All', ...catalogCategories]);
        setSearchResults(search.results);
      } catch {
        setError('Unable to reach the catalog API. Start the NestJS server on port 4000.');
      } finally {
        setIsLoading(false);
      }
    }

    void loadCatalog();
  }, []);

  useEffect(() => {
    async function performSearch() {
      try {
        setError('');
        setIsSearching(true);
        const response = await searchProducts(
          query,
          activeCategory === 'All' ? '' : activeCategory,
        );
        setSearchResults(response.results);
      } catch {
        setError('Search failed. Check the API, MongoDB, and OpenAI configuration.');
      } finally {
        setIsSearching(false);
      }
    }

    const timeoutId = window.setTimeout(() => {
      void performSearch();
    }, 220);

    return () => window.clearTimeout(timeoutId);
  }, [query, activeCategory]);

  const heroProduct = featuredProducts[0];

  const metrics = useMemo(
    () => [
      { label: 'Curated Drops', value: '48' },
      { label: 'Premium Makers', value: '18' },
      { label: 'OpenAI Answers', value: 'Live' },
    ],
    [],
  );

  async function handleAskAssistant(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      setAiError('');
      setAiLoading(true);
      const result = await askProductAssistant(aiQuestion, activeCategory);
      setAiResult(result);
    } catch {
      setAiError('The AI assistant request failed. Confirm the API is running.');
    } finally {
      setAiLoading(false);
    }
  }

  return (
    <div className="page-shell">
      <div className="ambient ambient-left" />
      <div className="ambient ambient-right" />

      <header className="topbar">
        <div className="brand-lockup" onClick={() => onNavigate(null)} style={{ cursor: 'pointer' }}>
          <span className="brand-mark">A</span>
          <div>
            <p className="eyebrow">Aurora Commerce</p>
            <h1>Modern objects for elevated living.</h1>
          </div>
        </div>
        <nav className="topbar-nav">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onNavigate(null);
            }}
          >
            Storefront
          </a>
          <a href="#featured">Featured</a>
          <a href="#catalog">Catalog</a>
          <a href="#assistant">AI Assistant</a>
          <a href="/admin">Admin</a>
        </nav>
      </header>

      <main>
        {activeProductSlug ? (
          <ProductDetailView slug={activeProductSlug} onBack={() => onNavigate(null)} />
        ) : (
          <>
            <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Grounded commerce AI</p>
            <h2>Search, retrieve, and answer with OpenAI-backed product context.</h2>
            <p className="hero-text">
              This storefront supports real embeddings and grounded assistant answers, while the
              admin portal lives separately behind an `/admin` login.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#assistant">
                Try the assistant
              </a>
              <a className="button button-secondary" href="/admin">
                Open admin portal
              </a>
            </div>

            <div className="metric-row">
              {metrics.map((metric) => (
                <div key={metric.label} className="metric-card">
                  <span>{metric.value}</span>
                  <p>{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-panel">
            {heroProduct ? <img src={heroProduct.heroImage} alt={heroProduct.name} /> : null}
            <div className="hero-panel-content">
              <p className="eyebrow">Featured now</p>
              <h3>{heroProduct?.name ?? 'Curated luxury catalog'}</h3>
              <p>{heroProduct?.description ?? 'Start the API to load the featured product.'}</p>
            </div>
          </div>
        </section>

        <section id="featured" className="section">
          <div className="section-heading">
            <p className="eyebrow">Featured collection</p>
            <h3>Editorial products with retrieval-ready metadata.</h3>
          </div>

          <div className="featured-grid">
            {featuredProducts.map((product) => (
              <article
                key={product.slug}
                className="feature-card"
                onClick={() => onNavigate(product.slug)}
                style={{ cursor: 'pointer' }}
              >
                <img src={product.heroImage} alt={product.name} />
                <div className="feature-card-copy">
                  <div className="badge-row">
                    <span>{product.category}</span>
                    <span>{product.tags[0]}</span>
                  </div>
                  <h4>{product.name}</h4>
                  <p>{product.subtitle}</p>
                  <div className="price-row">
                    <strong>{formatPrice(product.price)}</strong>
                    <small>{product.inStock ? 'In stock' : 'Limited'}</small>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="catalog" className="section catalog-section">
          <div className="section-heading">
            <p className="eyebrow">Catalog search</p>
            <h3>Hybrid discovery with embeddings behind the scenes.</h3>
          </div>

          <div className="search-shell">
            <label className="search-field">
              <span>Search</span>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Try: quiet travel headphones, luxury home gift, warm desk light"
              />
            </label>

            <div className="category-tabs" role="tablist" aria-label="Categories">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={category === activeCategory ? 'active' : ''}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {error ? <div className="error-banner">{error}</div> : null}

          <div className="catalog-grid">
            {(isLoading || isSearching) && searchResults.length === 0 ? (
              <div className="catalog-placeholder">Loading the collection...</div>
            ) : null}

            {!isLoading && searchResults.length === 0 ? (
              <div className="catalog-placeholder">No products matched that search.</div>
            ) : null}

            {searchResults.map((product) => (
              <article
                key={product.slug}
                className="catalog-card"
                onClick={() => onNavigate(product.slug)}
                style={{ cursor: 'pointer' }}
              >
                <img src={product.heroImage} alt={product.name} />
                <div className="catalog-card-copy">
                  <div className="badge-row">
                    <span>{product.category}</span>
                    <span>{product.tags[0]}</span>
                  </div>
                  <h4>{product.name}</h4>
                  <p>{product.description}</p>
                  <div className="feature-list">
                    {product.features.slice(0, 2).map((feature) => (
                      <span key={feature.label}>
                        {feature.label}: {feature.value}
                      </span>
                    ))}
                  </div>
                  <div className="price-row">
                    <strong>{formatPrice(product.price)}</strong>
                    <small>{product.rating.toFixed(1)} / 5</small>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="assistant" className="section">
          <div className="section-heading">
            <p className="eyebrow">AI shopping assistant</p>
            <h3>Ask a product question and answer from retrieved catalog context.</h3>
          </div>

          <div className="assistant-grid">
            <form className="assistant-card" onSubmit={handleAskAssistant}>
              <label className="search-field">
                <span>Question</span>
                <textarea
                  value={aiQuestion}
                  onChange={(event) => setAiQuestion(event.target.value)}
                  rows={5}
                  placeholder="What is the best option for a quiet premium workspace?"
                />
              </label>
              <button className="button button-primary" type="submit" disabled={aiLoading}>
                {aiLoading ? 'Thinking...' : 'Ask Assistant'}
              </button>
              {aiError ? <div className="error-banner">{aiError}</div> : null}
            </form>

            <div className="assistant-card response-card response-card-premium">
              <div className="response-header">
                <p className="eyebrow">Grounded answer</p>
                <div className="ai-badge">
                  <span className="sparkle-icon">✨</span>
                  <span>AI Powered</span>
                </div>
              </div>

              {aiResult ? (
                <div className="response-meta-premium">
                  <span>
                    <strong>Model:</strong> {aiResult.model}
                  </span>
                  <span>
                    <strong>Sources:</strong> {aiResult.retrievedCount}
                  </span>
                </div>
              ) : null}

              <div className="assistant-answer-premium">
                {aiResult?.answer ? (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: aiResult.answer
                        .replace(/^#\s(.*)$/gm, '<h3>$1</h3>')
                        .replace(/^##\s(.*)$/gm, '<h4>$1</h4>')
                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        .replace(/^-\s(.*)$/gm, '<li>$1</li>')
                        .replace(/(<li>.*<\/li>)/gs, (match) => `<ul>${match}</ul>`)
                        .replace(/<\/ul>\s*<ul>/g, ''),
                    }}
                  />
                ) : (
                  'Run a question to see a grounded answer built from the top retrieved products.'
                )}
              </div>

              {aiResult && aiResult.citations.length > 0 ? (
                <div className="citation-grid">
                  {aiResult.citations.map((citation) => (
                    <button
                      key={citation.slug}
                      type="button"
                      className="citation-pill"
                      onClick={() => onNavigate(citation.slug)}
                    >
                      {citation.name}
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </section>
      </>
    )}
  </main>
</div>
);
}

function ProductDetailView({ slug, onBack }: { slug: string; onBack: () => void }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    async function loadProduct() {
      try {
        setIsLoading(true);
        const data = await getProductBySlug(slug);
        setProduct(data);
        setActiveImage(data.heroImage);
      } catch (err) {
        setError('Failed to load product details.');
      } finally {
        setIsLoading(false);
      }
    }
    loadProduct();
  }, [slug]);

  if (isLoading) return <div className="catalog-placeholder">Loading product details...</div>;
  if (error || !product) return <div className="error-banner">{error || 'Product not found'}</div>;

  return (
    <div className="product-detail-view">
      <button className="button button-secondary back-button" onClick={onBack}>
        ← Back to Catalog
      </button>

      <div className="product-detail-layout">
        <div className="product-visuals">
          <div className="main-image-frame">
            <img src={activeImage || product.heroImage} alt={product.name} />
          </div>
          <div className="gallery-strip">
            {[product.heroImage, ...product.gallery].map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${product.name} gallery ${i}`}
                className={activeImage === img ? 'active' : ''}
                onClick={() => setActiveImage(img)}
              />
            ))}
          </div>
        </div>

        <div className="product-info-panel">
          <div className="badge-row">
            <span>{product.category}</span>
            {product.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <h2>{product.name}</h2>
          <p className="subtitle">{product.subtitle}</p>

          <div className="price-box">
            <span className="price-large">{formatPrice(product.price)}</span>
            <span className="stock-status">
              {product.inStock ? '✓ In Stock' : '✕ Out of Stock'}
            </span>
          </div>

          <div className="product-description">
            <p className="eyebrow">Description</p>
            <p>{product.description}</p>
          </div>

          <div className="features-section">
            <p className="eyebrow">Key Features</p>
            <div className="detail-feature-grid">
              {product.features.map((feature) => (
                <div key={feature.label} className="detail-feature-item">
                  <strong>{feature.label}</strong>
                  <span>{feature.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="knowledge-section">
            <p className="eyebrow">Product Knowledge</p>
            <div className="knowledge-grid">
              {product.knowledgeChunks.map((chunk, i) => (
                <div key={i} className="knowledge-card">
                  <strong>{chunk.title}</strong>
                  <p>{chunk.body}</p>
                </div>
              ))}
            </div>
          </div>

          <button className="button button-primary buy-button" disabled={!product.inStock}>
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>
    </div>
  );
}

function AdminPortal() {
  const [token, setToken] = useState(() => localStorage.getItem(ADMIN_TOKEN_KEY) ?? '');
  const [email, setEmail] = useState(() => localStorage.getItem(ADMIN_EMAIL_KEY) ?? '');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [catalogProducts, setCatalogProducts] = useState<Product[]>([]);
  const [catalogCategories, setCatalogCategories] = useState<string[]>([]);
  const [catalogLoading, setCatalogLoading] = useState(false);
  const [catalogError, setCatalogError] = useState('');
  const [catalogQuery, setCatalogQuery] = useState('');
  const [editingSlug, setEditingSlug] = useState('');
  const [productModalOpen, setProductModalOpen] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<Product | null>(null);

  const [productForm, setProductForm] = useState(emptyProductForm);
  const [bulkJson, setBulkJson] = useState('');
  const [adminBusy, setAdminBusy] = useState(false);
  const [adminMessage, setAdminMessage] = useState('');
  const [adminError, setAdminError] = useState('');

  useEffect(() => {
    if (!token) {
      return;
    }

    void loadAdminCatalog();
  }, [token]);

  async function loadAdminCatalog() {
    try {
      setCatalogLoading(true);
      setCatalogError('');
      const [products, categories] = await Promise.all([getProducts(), getCategories()]);
      setCatalogProducts(products);
      setCatalogCategories(categories);
    } catch {
      setCatalogError('Unable to load catalog overview for the admin portal.');
    } finally {
      setCatalogLoading(false);
    }
  }

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      setLoginError('');
      setIsLoggingIn(true);
      const response = await loginAdmin(email, password);
      localStorage.setItem(ADMIN_TOKEN_KEY, response.token);
      localStorage.setItem(ADMIN_EMAIL_KEY, response.email);
      setToken(response.token);
      setPassword('');
    } catch {
      setLoginError('Login failed. Check the admin credentials in the API environment.');
    } finally {
      setIsLoggingIn(false);
    }
  }

  function handleLogout() {
    localStorage.removeItem(ADMIN_TOKEN_KEY);
    setToken('');
    setPassword('');
    setAdminMessage('');
    setAdminError('');
  }

  function loadProductIntoEditor(product: Product) {
    setEditingSlug(product.slug);
    setProductForm({
      slug: product.slug,
      name: product.name,
      subtitle: product.subtitle,
      description: product.description,
      category: product.category,
      price: String(product.price),
      heroImage: product.heroImage,
      gallery: product.gallery.join(', '),
      tags: product.tags.join(', '),
      searchableText: product.searchableText,
      featuresText: product.features.map((feature) => `${feature.label}: ${feature.value}`).join('\n'),
      knowledgeText: product.knowledgeChunks
        .map((chunk) => `${chunk.title}: ${chunk.body}`)
        .join('\n'),
      featured: product.featured,
      inStock: product.inStock,
    });
    setProductModalOpen(true);
    setAdminMessage(`Loaded "${product.name}" into the editor.`);
    setAdminError('');
  }

  function resetEditor() {
    setEditingSlug('');
    setProductForm(emptyProductForm);
    setProductModalOpen(false);
  }

  function openCreateModal() {
    setEditingSlug('');
    setProductForm(emptyProductForm);
    setProductModalOpen(true);
    setAdminError('');
  }

  async function handleCreateProduct(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      setAdminBusy(true);
      setAdminError('');
      setAdminMessage('');

      const payload: ProductInput = {
        slug: productForm.slug.trim() || undefined,
        name: productForm.name.trim(),
        subtitle: productForm.subtitle.trim(),
        description: productForm.description.trim(),
        category: productForm.category.trim(),
        price: Number(productForm.price),
        heroImage: productForm.heroImage.trim(),
        gallery: parseCommaSeparated(productForm.gallery),
        tags: parseCommaSeparated(productForm.tags),
        searchableText: productForm.searchableText.trim() || undefined,
        features: parseFeatureLines(productForm.featuresText),
        knowledgeChunks: parseKnowledgeLines(productForm.knowledgeText),
        featured: productForm.featured,
        inStock: productForm.inStock,
      };

      if (editingSlug) {
        await updateProduct(editingSlug, payload, token);
        setAdminMessage(`Updated product "${payload.name}" successfully.`);
      } else {
        await createProduct(payload, token);
        setAdminMessage(`Created product "${payload.name}" and generated its embedding.`);
      }
      resetEditor();
      await loadAdminCatalog();
    } catch (error) {
      setAdminError(
        error instanceof Error
          ? error.message
          : 'Product save failed. If the session expired, log in again.',
      );
    } finally {
      setAdminBusy(false);
    }
  }

  async function handleBulkUpload() {
    try {
      setAdminBusy(true);
      setAdminError('');
      setAdminMessage('');
      const parsed = JSON.parse(bulkJson) as ProductInput[];

      if (!Array.isArray(parsed)) {
        throw new Error('Bulk payload must be an array.');
      }

      await bulkUploadProducts(parsed, token);
      setAdminMessage(`Uploaded ${parsed.length} products and refreshed embeddings.`);
      setBulkJson('');
      await loadAdminCatalog();
    } catch (error) {
      setAdminError(
        error instanceof Error
          ? error.message
          : 'Bulk upload failed. Use a valid JSON array and a live admin session.',
      );
    } finally {
      setAdminBusy(false);
    }
  }

  async function handleReindex() {
    try {
      setAdminBusy(true);
      setAdminError('');
      setAdminMessage('');
      await reindexProductEmbeddings(token);
      setAdminMessage('Reindexed product embeddings from the current catalog.');
    } catch (error) {
      setAdminError(
        error instanceof Error
          ? error.message
          : 'Embedding reindex failed. If the session expired, log in again.',
      );
    } finally {
      setAdminBusy(false);
    }
  }

  async function handleDeleteProduct(product: Product) {
    try {
      setAdminBusy(true);
      setAdminError('');
      setAdminMessage('');
      await deleteProduct(product.slug, token);

      if (editingSlug === product.slug) {
        resetEditor();
      }

      setDeleteTarget(null);
      setAdminMessage(`Deleted product "${product.name}".`);
      await loadAdminCatalog();
    } catch (error) {
      setAdminError(
        error instanceof Error
          ? error.message
          : 'Product delete failed. If the session expired, log in again.',
      );
    } finally {
      setAdminBusy(false);
    }
  }

  const visibleProducts = catalogProducts.filter((product) => {
    const needle = catalogQuery.trim().toLowerCase();

    if (!needle) {
      return true;
    }

    return [product.name, product.category, product.slug, product.tags.join(' ')]
      .join(' ')
      .toLowerCase()
      .includes(needle);
  });

  const adminMetrics = [
    { label: 'Catalog products', value: String(catalogProducts.length).padStart(2, '0') },
    { label: 'Categories', value: String(catalogCategories.length).padStart(2, '0') },
    {
      label: 'Featured products',
      value: String(catalogProducts.filter((product) => product.featured).length).padStart(2, '0'),
    },
    {
      label: 'In stock',
      value: String(catalogProducts.filter((product) => product.inStock).length).padStart(2, '0'),
    },
  ];

  if (!token) {
    return (
      <div className="admin-page">
        <div className="ambient ambient-left" />
        <div className="ambient ambient-right" />
        <main className="admin-login-layout">
          <section className="admin-login-showcase">
            <div className="admin-login-badge">Aurora Admin</div>
            <p className="eyebrow">Protected operations workspace</p>
            <h1>Control the catalog, retrieval layer, and product publishing flow.</h1>
            <p className="section-text">
              This portal is designed for internal operators managing catalog quality, embeddings,
              and AI-ready product content.
            </p>

            <div className="admin-login-points">
              <div className="admin-login-point">
                <strong>Catalog operations</strong>
                <p>Create, update, bulk import, and remove products from one secure workspace.</p>
              </div>
              <div className="admin-login-point">
                <strong>Search readiness</strong>
                <p>Refresh embeddings and maintain the data that powers hybrid search and RAG.</p>
              </div>
              <div className="admin-login-point">
                <strong>Restricted access</strong>
                <p>Only authenticated admins can change product inventory or retrieval data.</p>
              </div>
            </div>
          </section>

          <section className="admin-login-panel">
            <div className="admin-login-card">
              <div className="admin-login-card-top">
                <div className="admin-login-mark">A</div>
                <div>
                  <p className="eyebrow">Sign in</p>
                  <h2>Admin portal login</h2>
                </div>
              </div>

              <p className="section-text">
                Use your admin credentials to enter the protected catalog control room.
              </p>

              <form className="admin-form" onSubmit={handleLogin}>
                <label className="search-field">
                  <span>Email</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="admin@company.com"
                    required
                  />
                </label>

                <label className="search-field">
                  <span>Password</span>
                  <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Enter your password"
                    required
                  />
                </label>

                <button className="button button-primary admin-login-submit" type="submit" disabled={isLoggingIn}>
                  {isLoggingIn ? 'Signing in...' : 'Enter admin portal'}
                </button>
              </form>

              {loginError ? <div className="error-banner">{loginError}</div> : null}

              <div className="admin-login-footer">
                <span>Storefront remains publicly accessible.</span>
                <a href="/">Back to storefront</a>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className="admin-page">
      <div className="ambient ambient-left" />
      <div className="ambient ambient-right" />

      <header className="admin-topbar">
        <div className="admin-topbar-copy">
          <p className="eyebrow">Aurora Admin</p>
          <h1>Catalog control room</h1>
          <p className="section-text">
            Manage products, oversee retrieval coverage, and keep the catalog ready for AI search.
          </p>
        </div>
        <div className="admin-topbar-actions">
          <div className="admin-identity">
            <span className="admin-identity-mark">{email.slice(0, 1).toUpperCase()}</span>
            <div>
              <strong>{email}</strong>
              <small>Authenticated admin session</small>
            </div>
          </div>
          <a className="button button-secondary" href="/">
            Storefront
          </a>
          <button className="button button-primary" type="button" onClick={handleLogout}>
            Log out
          </button>
        </div>
      </header>

      <main className="admin-layout">
        <section className="admin-overview">
          <div className="admin-overview-main">
            <p className="eyebrow">Protected workspace</p>
            <h3>Operate the catalog behind a real admin-facing command surface.</h3>
            <p className="section-text">
              Create products, bulk import catalog data, refresh embeddings, and monitor the
              product set that powers shopper search and grounded recommendations.
            </p>
          </div>
          <div className="admin-metric-grid">
            {adminMetrics.map((metric) => (
              <div key={metric.label} className="admin-metric-card">
                <span>{metric.value}</span>
                <p>{metric.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="admin-shell">
          <aside className="admin-sidebar">
            <div className="admin-card admin-quick-actions">
              <div className="admin-card-header">
                <h4>Quick actions</h4>
              </div>
              <button
                className="button button-primary admin-full-button"
                type="button"
                onClick={handleReindex}
                disabled={adminBusy}
              >
                {adminBusy ? 'Working...' : 'Refresh embeddings'}
              </button>
              <button
                className="button button-secondary admin-full-button"
                type="button"
                onClick={() => void loadAdminCatalog()}
                disabled={catalogLoading}
              >
                {catalogLoading ? 'Refreshing catalog...' : 'Reload catalog data'}
              </button>
              <button
                className="button button-secondary admin-full-button"
                type="button"
                onClick={openCreateModal}
              >
                New product
              </button>
              <div className="admin-sidebar-note">
                <strong>Session scope</strong>
                <p>All write actions in this portal use the authenticated admin token.</p>
              </div>
            </div>

            <div className="admin-card">
              <div className="admin-card-header">
                <h4>Category mix</h4>
              </div>
              <div className="admin-pill-list">
                {catalogCategories.map((category) => (
                  <span key={category}>{category}</span>
                ))}
                {catalogCategories.length === 0 ? <span>No categories loaded</span> : null}
              </div>
            </div>
          </aside>

          <div className="admin-main">
            <div className="admin-main-grid">
              <section className="admin-card admin-catalog-panel">
                <div className="admin-card-header">
                  <div>
                    <p className="eyebrow">Catalog overview</p>
                    <h4>Live product inventory</h4>
                  </div>
                  <span className="admin-muted-label">
                    {catalogLoading ? 'Syncing...' : `${visibleProducts.length} visible`}
                  </span>
                </div>

                <label className="search-field">
                  <span>Find product</span>
                  <input
                    value={catalogQuery}
                    onChange={(event) => setCatalogQuery(event.target.value)}
                    placeholder="Search by name, slug, category, or tag"
                  />
                </label>

                <div className="admin-catalog-toolbar">
                  <span className="admin-muted-label">
                    {editingSlug
                      ? 'Edit modal is prepared for the selected product.'
                      : 'Open a create modal for new items or edit any product from the inventory list.'}
                  </span>
                </div>

                {catalogError ? <div className="error-banner">{catalogError}</div> : null}

                <div className="admin-product-list">
                  {visibleProducts.map((product) => (
                    <article key={product.slug} className="admin-product-row">
                      <img src={product.heroImage} alt={product.name} />
                      <div className="admin-product-copy">
                        <div className="admin-product-head">
                          <strong>{product.name}</strong>
                          <span>{formatPrice(product.price)}</span>
                        </div>
                        <p>{product.subtitle}</p>
                        <div className="admin-pill-list">
                          <span>{product.category}</span>
                          <span>{product.featured ? 'Featured' : 'Standard'}</span>
                          <span>{product.inStock ? 'In stock' : 'Out of stock'}</span>
                        </div>
                      </div>
                      <div className="admin-row-actions">
                        <button
                          className="button button-secondary admin-inline-button"
                          type="button"
                          onClick={() => loadProductIntoEditor(product)}
                        >
                          Edit
                        </button>
                        <button
                          className="button admin-danger-button admin-inline-button"
                          type="button"
                          onClick={() => setDeleteTarget(product)}
                          disabled={adminBusy}
                        >
                          Delete
                        </button>
                      </div>
                    </article>
                  ))}
                  {!catalogLoading && visibleProducts.length === 0 ? (
                    <div className="catalog-placeholder">No catalog items match that filter.</div>
                  ) : null}
                </div>
              </section>

              <section className="admin-card admin-import-panel">
                <div className="admin-card-header">
                  <div>
                    <p className="eyebrow">Bulk operations</p>
                    <h4>Import product JSON</h4>
                  </div>
                </div>
                <label className="search-field">
                  <span>Products array</span>
                  <textarea
                    rows={18}
                    value={bulkJson}
                    onChange={(event) => setBulkJson(event.target.value)}
                    placeholder='[{"name":"New Lamp","subtitle":"Warm focus lighting","description":"...","category":"Workspace","price":120,"heroImage":"https://..."}]'
                  />
                </label>
                <button className="button button-secondary" type="button" onClick={handleBulkUpload}>
                  {adminBusy ? 'Uploading...' : 'Upload products'}
                </button>

                {adminMessage ? <div className="success-banner">{adminMessage}</div> : null}
                {adminError ? <div className="error-banner">{adminError}</div> : null}
              </section>
            </div>

          </div>
        </section>
      </main>

      {productModalOpen ? (
        <div className="admin-modal-backdrop" role="presentation" onClick={resetEditor}>
          <div
            className="admin-modal admin-product-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <form className="admin-form" onSubmit={handleCreateProduct}>
              <div className="admin-modal-header">
                <div>
                  <p className="eyebrow">Product editor</p>
                  <h4 id="product-modal-title">
                    {editingSlug ? `Update ${editingSlug}` : 'Create a new product'}
                  </h4>
                </div>
                <button
                  className="button button-secondary admin-inline-button"
                  type="button"
                  onClick={resetEditor}
                >
                  Close
                </button>
              </div>

              <div className="admin-modal-copy">
                Embedding is generated during save, and this modal is used for both create and update flows.
              </div>

              <div className="form-grid">
                <label className="search-field">
                  <span>Name</span>
                  <input
                    value={productForm.name}
                    onChange={(event) =>
                      setProductForm((current) => ({ ...current, name: event.target.value }))
                    }
                    required
                  />
                </label>
                <label className="search-field">
                  <span>Slug</span>
                  <input
                    value={productForm.slug}
                    onChange={(event) =>
                      setProductForm((current) => ({ ...current, slug: event.target.value }))
                    }
                    placeholder="optional-auto-generated"
                  />
                </label>
                <label className="search-field">
                  <span>Category</span>
                  <input
                    value={productForm.category}
                    onChange={(event) =>
                      setProductForm((current) => ({ ...current, category: event.target.value }))
                    }
                    required
                  />
                </label>
                <label className="search-field">
                  <span>Price</span>
                  <input
                    type="number"
                    min="0"
                    step="1"
                    value={productForm.price}
                    onChange={(event) =>
                      setProductForm((current) => ({ ...current, price: event.target.value }))
                    }
                    required
                  />
                </label>
              </div>

              <label className="search-field">
                <span>Subtitle</span>
                <input
                  value={productForm.subtitle}
                  onChange={(event) =>
                    setProductForm((current) => ({ ...current, subtitle: event.target.value }))
                  }
                  required
                />
              </label>

              <label className="search-field">
                <span>Description</span>
                <textarea
                  rows={4}
                  value={productForm.description}
                  onChange={(event) =>
                    setProductForm((current) => ({ ...current, description: event.target.value }))
                  }
                  required
                />
              </label>

              <label className="search-field">
                <span>Hero image URL</span>
                <input
                  value={productForm.heroImage}
                  onChange={(event) =>
                    setProductForm((current) => ({ ...current, heroImage: event.target.value }))
                  }
                  required
                />
              </label>

              <div className="form-grid">
                <label className="search-field">
                  <span>Tags</span>
                  <input
                    value={productForm.tags}
                    onChange={(event) =>
                      setProductForm((current) => ({ ...current, tags: event.target.value }))
                    }
                    placeholder="luxury, desk, focus"
                  />
                </label>
                <label className="search-field">
                  <span>Gallery URLs</span>
                  <input
                    value={productForm.gallery}
                    onChange={(event) =>
                      setProductForm((current) => ({ ...current, gallery: event.target.value }))
                    }
                    placeholder="url1, url2"
                  />
                </label>
              </div>

              <label className="search-field">
                <span>Searchable text</span>
                <textarea
                  rows={3}
                  value={productForm.searchableText}
                  onChange={(event) =>
                    setProductForm((current) => ({
                      ...current,
                      searchableText: event.target.value,
                    }))
                  }
                  placeholder="Optional. Leave blank to auto-compose from product details."
                />
              </label>

              <div className="form-grid">
                <label className="search-field">
                  <span>Features</span>
                  <textarea
                    rows={5}
                    value={productForm.featuresText}
                    onChange={(event) =>
                      setProductForm((current) => ({
                        ...current,
                        featuresText: event.target.value,
                      }))
                    }
                    placeholder={'Material: Full-grain leather\nCapacity: 38L cabin-ready volume'}
                  />
                </label>
                <label className="search-field">
                  <span>Knowledge chunks</span>
                  <textarea
                    rows={5}
                    value={productForm.knowledgeText}
                    onChange={(event) =>
                      setProductForm((current) => ({
                        ...current,
                        knowledgeText: event.target.value,
                      }))
                    }
                    placeholder={'Craft: Hand-finished leather.\nUse case: Ideal for short travel.'}
                  />
                </label>
              </div>

              <div className="toggle-row">
                <label>
                  <input
                    type="checkbox"
                    checked={productForm.featured}
                    onChange={(event) =>
                      setProductForm((current) => ({
                        ...current,
                        featured: event.target.checked,
                      }))
                    }
                  />
                  Featured
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={productForm.inStock}
                    onChange={(event) =>
                      setProductForm((current) => ({
                        ...current,
                        inStock: event.target.checked,
                      }))
                    }
                  />
                  In stock
                </label>
              </div>

              <div className="admin-editor-actions">
                <button className="button button-primary" type="submit" disabled={adminBusy}>
                  {adminBusy ? 'Saving...' : editingSlug ? 'Update product' : 'Publish product'}
                </button>
                <button className="button button-secondary" type="button" onClick={resetEditor}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}

      {deleteTarget ? (
        <div
          className="admin-modal-backdrop"
          role="presentation"
          onClick={() => setDeleteTarget(null)}
        >
          <div
            className="admin-modal admin-confirm-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="delete-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="admin-modal-header">
              <div>
                <p className="eyebrow">Delete product</p>
                <h4 id="delete-modal-title">{deleteTarget.name}</h4>
              </div>
            </div>

            <p className="admin-modal-copy">
              This will permanently remove the product from the catalog and admin inventory list.
            </p>

            <div className="admin-pill-list">
              <span>{deleteTarget.category}</span>
              <span>{deleteTarget.slug}</span>
            </div>

            <div className="admin-editor-actions">
              <button
                className="button admin-danger-button"
                type="button"
                onClick={() => void handleDeleteProduct(deleteTarget)}
                disabled={adminBusy}
              >
                {adminBusy ? 'Deleting...' : 'Delete product'}
              </button>
              <button
                className="button button-secondary"
                type="button"
                onClick={() => setDeleteTarget(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
