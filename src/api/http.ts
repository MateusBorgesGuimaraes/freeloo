type RequestOptions<TBody = unknown> = {
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  body?: TBody;
  headers?: Record<string, string>;
  signal?: AbortSignal;
};

const BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3001/api";

export async function request<TResponse, TBody = unknown>(
  url: string,
  options?: RequestOptions<TBody>,
): Promise<TResponse> {
  const res = await fetch(BASE_URL + url, {
    method: options?.method ?? "GET",
    headers: {
      ...(options?.body ? { "Content-Type": "application/json" } : {}),
      ...options?.headers,
    },
    credentials: "include",
    body: options?.body ? JSON.stringify(options.body) : undefined,
    signal: options?.signal,
  });

  const isJson = res.headers.get("content-type")?.includes("application/json");

  if (!res.ok) {
    const errorBody = isJson ? await res.json() : null;

    throw new Error(errorBody?.message || `Erro ${res.status}`);
  }

  return (isJson ? await res.json() : null) as TResponse;
}
