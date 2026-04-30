// Auth utilities for client-side use
// No server-side imports here to avoid edge runtime issues

export interface AuthUser {
  id: string;
  email: string;
  name: string | null;
  role: string;
}

export function getToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("token");
}

export function setToken(token: string): void {
  if (typeof window !== "undefined") {
    localStorage.setItem("token", token);
  }
}

export function removeToken(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem("token");
  }
}

export function isAuthenticated(): boolean {
  return !!getToken();
}