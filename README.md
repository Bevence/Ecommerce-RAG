# Aurora Commerce 🌌

A premium, full-stack ecommerce starter kit built with **React**, **NestJS**, and **MongoDB**, specifically engineered for seamless **Retrieval-Augmented Generation (RAG)** integration.

Aurora Commerce goes beyond a simple storefront, providing a sophisticated foundation for AI-powered product discovery, grounded question answering, and modern catalog management.

---

## ✨ Key Features

### 🛍️ Storefront & Catalog
- **Premium UI**: Modern, responsive React storefront built with Vite.
- **Dynamic Catalog**: Full product lifecycle management with searchable text, features, and rich metadata.
- **Advanced Search**: Hybrid search scoring combining traditional keyword matching with semantic similarity.

### 🧠 AI & RAG Integration
- **Multi-Provider AI**: Native support for **OpenAI** and **AWS Bedrock** (Claude 3) for grounded answer generation.
- **Vector Search**: Integrated MongoDB Atlas Vector Search support with an intelligent in-app fallback for local development.
- **Automatic Embeddings**: Automated backfill of product embeddings on startup using OpenAI or local fallbacks.
- **Retrieval Engine**: Custom text builder that synthesizes product copy, specifications, tags, and knowledge chunks into a rich context for LLMs.
- **Grounded Q&A**: A `/products/ask` endpoint that generates sophisticated, citation-backed answers directly from your product catalog.

### 🛡️ Admin & Management
- **Admin Portal**: A protected dashboard for product creation, bulk CSV uploads, and manual reindexing.
- **Knowledge Management**: Dedicated slots for "Knowledge Chunks"—store facts, policies, and detailed specifications that the AI uses to answer customer queries.

---

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite, Vanilla CSS (Premium Aesthetics).
- **Backend**: NestJS, Mongoose, OpenAI SDK, AWS SDK (@aws-sdk/client-bedrock-runtime).
- **Database**: MongoDB (Local or Atlas Vector Search).
- **Tooling**: NPM Workspaces (Monorepo), ESLint, Prettier.

---

## 🚀 Quick Start

### 1. Clone & Install
```bash
git clone <your-repo-url>
cd aurora-commerce
npm install
```

### 2. Environment Configuration
Copy the example environment files for both the API and the Web apps:
```bash
cp apps/api/.env.example apps/api/.env
cp apps/web/.env.example apps/web/.env
```

### 3. Launch Development Environment
You can start both services from the root:

**Start API:**
```bash
npm run dev:api
```

**Start Storefront:**
```bash
npm run dev:web
```

---

## 📂 Project Structure

```text
.
├── apps
│   ├── api          # NestJS Backend (RAG Engine, Product API)
│   └── web          # React Storefront & Admin Portal
├── package.json     # Root workspace configuration
└── README.md        # You are here
```

---

## 🧪 RAG Workflow & Configuration

Aurora is designed to scale from a local developer environment to a production-grade AI search engine.

### Using OpenAI (Recommended)
1. Set `OPENAI_API_KEY` in `apps/api/.env`.
2. Configure `RESPONSE_PROVIDER=openai`.
3. The system will automatically generate embeddings for your catalog and use GPT models for answering.

### Using AWS Bedrock
1. Set `AWS_REGION`, `AWS_ACCESS_KEY_ID`, and `AWS_SECRET_ACCESS_KEY` in `apps/api/.env`.
2. Configure `RESPONSE_PROVIDER=bedrock`.
3. Set `BEDROCK_RESPONSE_MODEL` (defaults to Claude 3 Sonnet).

### Vector Search with MongoDB Atlas
For true semantic search:
1. Connect to a MongoDB Atlas cluster.
2. Create a Search Index on the `embedding` field named `products_embedding_index`.
3. Set `MONGODB_VECTOR_INDEX=products_embedding_index` in your `.env`.

---

## 🔐 Admin Access

To access the product management features:
1. Set `ADMIN_EMAIL`, `ADMIN_PASSWORD`, and `ADMIN_TOKEN_SECRET` in `apps/api/.env`.
2. Navigate to `/admin` in the web application.
3. Sign in to unlock bulk uploads, product creation, and catalog reindexing.

---

## 📄 License

This project is licensed under the MIT License.
