import type {
  AdminLoginResponse,
  AskAssistantResponse,
  Product,
  ProductInput,
  SearchResponse,
} from "./types";

const API_BASE = import.meta.env.VITE_API_URL ?? "http://localhost:4000/api";

async function requestJson<T>(path: string, init?: RequestInit): Promise<T> {
  const headers = {
    "Content-Type": "application/json",
    ...(init?.headers ?? {}),
  };

  const response = await fetch(`${API_BASE}${path}`, {
    ...init,
    headers,
  });

  if (!response.ok) {
    const errorText = await response.text();

    try {
      const parsed = JSON.parse(errorText) as {
        message?: string | string[];
        error?: string;
      };
      const message = Array.isArray(parsed.message)
        ? parsed.message.join(", ")
        : parsed.message;

      throw new Error(
        message || parsed.error || `Request failed: ${response.status}`,
      );
    } catch {
      throw new Error(errorText || `Request failed: ${response.status}`);
    }
  }

  return response.json() as Promise<T>;
}

function withAdminAuth(token: string) {
  return {
    Authorization: `Bearer ${token}`,
  };
}

export function getProducts() {
  return requestJson<Product[]>("/products");
}

export function getProductBySlug(slug: string) {
  return requestJson<Product>(`/products/${encodeURIComponent(slug)}`);
}

export function getFeaturedProducts() {
  return requestJson<Product[]>("/products/featured");
}

export function getCategories() {
  return requestJson<string[]>("/products/categories");
}

export function searchProducts(search: string, category: string) {
  const params = new URLSearchParams();

  if (search.trim()) {
    params.set("q", search.trim());
  }
  if (category && category !== "All") {
    params.set("category", category);
  }
  params.set("mode", "hybrid");
  params.set("limit", "12");

  return requestJson<SearchResponse>(`/products/search?${params.toString()}`);
}

export function askProductAssistant(question: string, category: string) {
  return requestJson<AskAssistantResponse>("/products/ask", {
    method: "POST",
    body: JSON.stringify({
      question,
      category: category && category !== "All" ? category : undefined,
      mode: "semantic",
      limit: 4,
    }),
  });
}

export function loginAdmin(email: string, password: string) {
  return requestJson<AdminLoginResponse>("/admin/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
}

export function createProduct(product: ProductInput, token: string) {
  return requestJson<Product>("/products/admin", {
    method: "POST",
    headers: withAdminAuth(token),
    body: JSON.stringify(product),
  });
}

export function updateProduct(
  slug: string,
  product: ProductInput,
  token: string,
) {
  return requestJson<Product>(`/products/admin/${encodeURIComponent(slug)}`, {
    method: "PUT",
    headers: withAdminAuth(token),
    body: JSON.stringify(product),
  });
}

export function deleteProduct(slug: string, token: string) {
  return requestJson<{ deleted: boolean; slug: string }>(
    `/products/admin/${encodeURIComponent(slug)}`,
    {
      method: "DELETE",
      headers: withAdminAuth(token),
    },
  );
}

export function bulkUploadProducts(products: ProductInput[], token: string) {
  return requestJson<Product[]>("/products/admin/bulk", {
    method: "POST",
    headers: withAdminAuth(token),
    body: JSON.stringify({ products }),
  });
}

export function reindexProductEmbeddings(token: string) {
  return requestJson<{ reindexed: boolean }>("/products/admin/reindex", {
    method: "POST",
    headers: withAdminAuth(token),
    body: JSON.stringify({}),
  });
}
