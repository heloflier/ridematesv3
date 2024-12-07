import RootStore from './root-store';

// export const createStores = () => {
//   return new RootStore();
// };

// stores.ts
let storesInstance = null;

export function createStores() {
  if (!storesInstance) {
    storesInstance = new RootStore();
    console.log('Stores initialized');
  }
  return storesInstance;
}
