export default (trips = [], action) => {
    switch(action.type){
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return trips;
        default:
            return trips;
    }
}