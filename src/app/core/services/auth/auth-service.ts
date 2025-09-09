import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { tap } from 'rxjs';
import { AuthResponse, User } from '../../models/user';

const API_URL = 'https://node-eemi.vercel.app/api';
const TOKEN_KEY = 'auth_token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);

  private user = signal<{ name: string } | null>(null);
  readonly token = signal<string | null>(this.readToken());
  readonly isAuthenticated = computed(() => !!this.token());

  constructor() {
    if (this.token()) {
      this.me().subscribe({ error: () => this.logout() });
    }
  }

  // INSCRIPTION

  register(payload: { name: string; email: string; password: string }) {
    return this.http
      .post<AuthResponse>(`${API_URL}/auth/register`, payload)
      .pipe(tap((res) => this.hydrateAuth(res)));
  }

  // CONNEXION

  login(payload: { email: string; password: string }) {
    return this.http
      .post<AuthResponse>(`${API_URL}/auth/login`, payload)
      .pipe(tap((res) => this.hydrateAuth(res)));
  }

  // RECUPERER LE PROFIL

  me() {
    return this.http
      .get<{ user: User }>(`${API_URL}/auth/me`)
      .pipe(tap(({ user }) => this.user.set(user)));
  }

  // DECONNEXION

  logout() {
    this.user.set(null);
    this.token.set(null);
    localStorage.removeItem(TOKEN_KEY);
  }

  private hydrateAuth(res: AuthResponse) {
    this.user.set(res.user);
    this.token.set(res.token);
    localStorage.setItem(TOKEN_KEY, res.token);
  }

  private readToken(): string | null {
    try {
      return localStorage.getItem(TOKEN_KEY);
    } catch {
      return null;
    }
  }

  getUser() {
    return this.user();
  }

  setUser(data: { name: string}) {
    this.user.set(data);
  }
}
