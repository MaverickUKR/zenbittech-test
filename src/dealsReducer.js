const GET_DEALS = "GET_DEALS";

export const getDeals = () => async (dispatch) => {
  try {
    const response = await fetch(
      "https://client-n5fppci2o-mazepav88gmailcoms-projects.vercel.app/api/deals"
    );
    const data = await response.json();
    dispatch({
      type: GET_DEALS,
      payload: data,
    });
  } catch (error) {
    console.error("Error fetching deals:", error);
  }
};

const initialState = [];

const dealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DEALS:
      return action.payload;
    default:
      return state;
  }
};

export default dealsReducer;
