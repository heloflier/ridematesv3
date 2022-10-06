import { action, autorun, makeAutoObservable } from 'mobx';

export default class RootStore {
    
    currentPage = undefined;

    constructor(page) {
        makeAutoObservable(this);

        // autorun(() => {
        //     console.log('*** from store, currentPage : ', this.currentPage);
        // })
    }
    
    get store() {
        return this;
    }

    setCurrentPage = action((page) => {
        this.currentPage = page;
    })

    setCurrentPageNoaction = ((page) => {
        console.log('setCurrentPageNoaction: ', page);
        this.currentPage = page;
    })

    showCurrentPage() {
        console.log('currentPage: ', this.currentPage);
    }

    get figuredOutCurrentPage() {
        if (this.currentPage) {
          return this.currentPage;
        }
    
        return 404;
    }
}
