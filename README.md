# Aurora Commerce

A modern React + NestJS + MongoDB ecommerce starter designed so retrieval-augmented product search can be added cleanly.

## Stack

- React + TypeScript + Vite for the storefront
- NestJS + Mongoose for the API
- MongoDB for catalog storage
- RAG-ready product schema with searchable text, knowledge chunks, and embedding slots

## Structure

- `apps/web`: storefront
- `apps/api`: backend API

## Run

1. Install dependencies:

```bash
npm install
```

2. Copy the environment examples:

```bash
cp apps/api/.env.example apps/api/.env
cp apps/web/.env.example apps/web/.env
```

3. Start the API:

```bash
npm run dev:api
```

4. Start the frontend:

```bash
npm run dev:web
```

## RAG Direction

The backend already includes:

- `embedding` field on products
- `knowledgeChunks` field for chunked product facts and policies
- `searchableText` for indexing
- hybrid search scoring with a clean seam for semantic similarity later
- `/products/search` and `/products/:id/retrieval-context` endpoints

The current starter now also includes:

- automatic embedding backfill for products during API startup
- OpenAI embeddings support with local fallback if `OPENAI_API_KEY` is not set
- grounded answer generation through `POST /products/ask`
- a dedicated retrieval-text builder that combines product copy, features, tags, and chunks
- a separate `/admin` portal with login-backed product create, bulk upload, and reindexing
- MongoDB Atlas vector-search support through `MONGODB_VECTOR_INDEX`, with in-app fallback when the Atlas index is not available

To move from starter RAG to production RAG:

1. Set `OPENAI_API_KEY` in `apps/api/.env`.
2. Set `ADMIN_EMAIL`, `ADMIN_PASSWORD`, and `ADMIN_TOKEN_SECRET` in `apps/api/.env`.
3. Visit `/admin` in the web app and sign in before using product management actions.
4. Start MongoDB, the API, and the web app.
5. Open the storefront for customer search and `/admin` for the protected admin portal.

For real vector retrieval with MongoDB Atlas:

1. Use MongoDB Atlas rather than local standalone MongoDB.
2. Create a vector search index on the `embedding` field named `products_embedding_index` or update `MONGODB_VECTOR_INDEX`.
3. Ensure products have OpenAI-generated embeddings stored in `embedding`.
4. Use `semantic` or `hybrid` search modes to let Atlas vector search rank results.
