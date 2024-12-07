// src/stores/root-store.ts
import { action, makeAutoObservable } from 'mobx';
import { AuthStore } from './authStore';

export default class RootStore {
    currentPage: string | undefined = undefined;
    existingCurrentUser: string | undefined = undefined;
    authStore: AuthStore;

    constructor(page?: string) {
        this.authStore = new AuthStore();
        makeAutoObservable(this);
    }
    
    get store(): RootStore {
        return this;
    }

    setCurrentPage = action((page: string): void => {
        this.currentPage = page;
    })

    setCurrentPageNoaction = (page: string): void => {
        console.log('setCurrentPageNoaction: ', page);
        this.currentPage = page;
    }

    showCurrentPage(): void {
        console.log('currentPage: ', this.currentPage);
    }

    setCurrentUserId = action((userId: string): void => {
        console.log('!!!!!!!!!!!!!!!!!! ==== setCurrentUserId: ', userId);
        this.existingCurrentUser = userId;
    })

    get currentUserId(): string | undefined {
        return this.existingCurrentUser;
    }

    get figuredOutCurrentPage(): string | number {
        return this.currentPage ? this.currentPage : 404;
    }
}

// Type for the store instance
export type TRootStore = InstanceType<typeof RootStore>;
