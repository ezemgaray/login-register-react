import { useEffect }                      from 'react'
import { connect }                        from 'react-redux'
import { resetStateAction }               from '../../actions/user'
import { getUserToken, deleteUserToken }  from '../../../utils/auth'
import api                                from '../../../services/api'


function LoadUser({
  resetState
}) {
  useEffect(()=>{
    /**
     * Check user logged in. 
     * Check if the token is correck and return user data.
     */
    const checkLoggedIn = async () => {
      const token = getUserToken()
      if(!token) return // If there are no toke, continue
      const user = await api.user.whoami(token)
      .then(({data}) => data)
      .catch( _ => {
        deleteUserToken() // When the token is wron, remove the token
      })
      // Update state only if the token is correct
      if(user){
        resetState('user', {
          ...user,
          token
        })
        resetState('isLoggedIn', true)
      }
    }
    checkLoggedIn()
  }, [resetState])

  return (<></>)
}

const mapDispatchToProps = (dispatch) => ({
  resetState: (property, value) => dispatch(resetStateAction(property, value)),
})

export const LoadUserContainer = connect(null, mapDispatchToProps)(LoadUser)