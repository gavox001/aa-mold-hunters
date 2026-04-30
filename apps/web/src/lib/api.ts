import { auth } from "@/lib/auth";

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface ApiClientOptions {
  baseUrl?: string;
  headers?: Record<string, string>;
}

interface RequestOptions extends Omit<RequestInit, "method" | "body"> {
  params?: Record<string, string | number | boolean | undefined>;
  body?: unknown;
}

class ApiClient {
  private baseUrl: string;
  private defaultHeaders: Record<string, string>;

  constructor(options: ApiClientOptions = {}) {
    this.baseUrl = options.baseUrl || "/api";
    this.defaultHeaders = {
      "Content-Type": "application/json",
      ...options.headers,
    };
  }

  private async getAuthHeaders(): Promise<Record<string, string>> {
    const session = await auth();
    if (session?.user) {
      return {
        Authorization: `Bearer ${session.user.id}`,
      };
    }
    return {};
  }

  private buildUrl(
    endpoint: string,
    params?: Record<string, string | number | boolean | undefined>
  ): string {
    const url = new URL(endpoint, window.location.origin + this.baseUrl);

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          url.searchParams.append(key, String(value));
        }
      });
    }

    return url.toString();
  }

  private async request<T>(
    method: HttpMethod,
    endpoint: string,
    options: RequestOptions = {}
  ): Promise<T> {
    const { params, body, ...fetchOptions } = options;

    const authHeaders = await this.getAuthHeaders();

    const response = await fetch(this.buildUrl(endpoint, params), {
      method,
      headers: {
        ...this.defaultHeaders,
        ...authHeaders,
        ...fetchOptions.headers,
      },
      body: body ? JSON.stringify(body) : undefined,
      ...fetchOptions,
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new ApiError(
        error.message || `HTTP error! status: ${response.status}`,
        response.status,
        error
      );
    }

    // Handle empty responses (e.g., DELETE requests)
    if (response.status === 204) {
      return undefined as T;
    }

    return response.json();
  }

  async get<T>(endpoint: string, options?: RequestOptions): Promise<T> {
    return this.request<T>("GET", endpoint, options);
  }

  async post<T>(endpoint: string, options?: RequestOptions): Promise<T> {
    return this.request<T>("POST", endpoint, options);
  }

  async put<T>(endpoint: string, options?: RequestOptions): Promise<T> {
    return this.request<T>("PUT", endpoint, options);
  }

  async patch<T>(endpoint: string, options?: RequestOptions): Promise<T> {
    return this.request<T>("PATCH", endpoint, options);
  }

  async delete<T>(endpoint: string, options?: RequestOptions): Promise<T> {
    return this.request<T>("DELETE", endpoint, options);
  }
}

export class ApiError extends Error {
  constructor(
    message: string,
    public statusCode: number,
    public data?: Record<string, unknown>
  ) {
    super(message);
    this.name = "ApiError";
  }
}

// Singleton instance
export const api = new ApiClient();

// Export for creating custom instances
export { ApiClient };

// Helper hooks for common API operations
export const fetcher = async <T>(url: string): Promise<T> => {
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};
