import menuPaths from './menu-paths';

const navigationMenuItems = [
    {
        navItemPath: menuPaths.DASHBOARD,
        navItemTitle: "dashboard"
    }, {
        navItemPath: menuPaths.PROFILE,
        navItemTitle: "my profile"
    // }, {
    //     navItemPath: menuPaths.RIDE,
    //     navItemTitle: "create ride"
    }, {
        navItemPath: menuPaths.USER_RIDES,
        navItemTitle: "my rides"
    }, {
        navItemPath: menuPaths.STRAVA,
        navItemTitle: "strava",
        navItemUrl: 'https://www.strava.com/'
    }
];

export default navigationMenuItems;
