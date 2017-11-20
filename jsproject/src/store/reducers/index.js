import { combineReducers } from 'redux';
import { sidebarReducer } from './sidebar.reducer';
import { dashboardReducer } from './dashboard.reducer';

export const appReducers = combineReducers({
    sidebar: sidebarReducer,
    dashboard: dashboardReducer
});