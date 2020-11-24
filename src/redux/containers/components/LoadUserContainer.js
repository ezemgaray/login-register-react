import { useEffect } from 'react'
import { connect } from 'react-redux'
import { resetStateAction } from '../../actions/user'
import { getUserToken, deleteUserToken } from '../../../utils/auth'
import api from '../../../services/api'


function LoadUser({
  state,
  currentUserState: { user } = {},
  resetState
}) {
  useEffect(()=>{
    const checkLoggedIn = async () => {
      const token = getUserToken()
      if(!token) return
      
      try {

        const user = await api.user.whoami(token)
          .then(({data}) => data)
          .catch( error => {
            deleteUserToken()
          })
          if(user)
            resetState('user', {...user, token})
      } catch (error) {
        
      }

    }
    checkLoggedIn()
  }, [resetState])

  return (<></>)
}

const mapStateToProps = (state) => ({
  currentUserState: state.user,
  state: state
})

const mapDispatchToProps = (dispatch) => ({
  resetState: (property, value) => dispatch(resetStateAction(property, value)),
})

export const LoadUserContainer = connect(mapStateToProps, mapDispatchToProps)(LoadUser)