import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from "lodash";

const _fetchUsers = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({
    type: "FETCH_USER",
    payload: response.data
  });
});

export const fetchUsers = id => dispatch => {
  _fetchUsers(id, dispatch);
};
