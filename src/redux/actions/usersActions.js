import axios from 'axios'
import { GET_USERS } from '../../constants/usersTypes'

export const getUsers = () => async (dispatch) => {
  const resp = await axios.get('https://jsonplaceholder.typicode.com/users')

  dispatch({
    type: GET_USERS,
    payload: resp.data
  })
}
