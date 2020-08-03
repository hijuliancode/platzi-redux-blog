import axios from 'axios'
import { GET_USERS } from '../../constants/usersTypes'

export const getUsers = () => async (dispatch) => {
  try {
    const resp = await axios.get('https://jsonplaceholder.typicode.com/userss')

    dispatch({
      type: GET_USERS,
      payload: resp.data
    })
  }
  catch (error) {
    console.log('Error =>', error.message)
  }
}
