import { ADD_SHOW } from "../actions/index";

const addShowMiddle = store => next => action => {

    if (action.type === ADD_SHOW) {
        var localAddShow = localStorage.getItem("userShows");
        let item = action.payload;
        
        if (!localAddShow) {
            var tempArray = [];
            tempArray.push(item);
            let tempArrayStr = JSON.stringify(tempArray);
            localStorage.setItem("userShows", tempArrayStr);
        }
         else {

            var localUserShow = JSON.parse(localAddShow);
            localUserShow.push(item);
            let massstr = JSON.stringify(localUserShow);
            localStorage.removeItem("userShows");
            localStorage.setItem("userShows", massstr);
        }
    }
    return next(action);
};

export default addShowMiddle;