import { GET_USERS } from '../../constants/usersTypes'

const INITIAL_STATE = {
  users: []
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case GET_USERS:
      return { ...state, users: action.payload }
    default: return state
  }
}