import * as api from '../api';

// Action creators
export const getTrips = () => async (dispatch) => {
    try {
        const { data } = await api.fetchTrips();
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

