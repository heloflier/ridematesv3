// src/stores/authStore.ts
import { makeAutoObservable } from 'mobx';

export class AuthStore {
    isAuthenticated: boolean = false;
    isLoading: boolean = false;
    userId: string | null = null;
    error: string | null = null;

    constructor() {
        makeAutoObservable(this);
        this.checkAuth();
    }

    checkAuth = (): void => {
        const token = sessionStorage.getItem('ridemates_jwt_token');
        this.isAuthenticated = !!token;
        this.userId = sessionStorage.getItem('ridemates_user_id');
    }

    setAuthState = (token: string, userId: string): void => {
        sessionStorage.setItem('ridemates_jwt_token', token);
        sessionStorage.setItem('ridemates_user_id', userId);
        this.isAuthenticated = true;
        this.userId = userId;
        this.error = null;
    }

    setError = (error: string): void => {
        this.error = error;
    }

    setLoading = (loading: boolean): void => {
        this.isLoading = loading;
    }

    logout = (): void => {
        sessionStorage.removeItem('ridemates_jwt_token');
        sessionStorage.removeItem('ridemates_user_id');
        this.isAuthenticated = false;
        this.userId = null;
        this.error = null;
    }
}
