import { connect }            from 'react-redux'
import { Register }           from '../../../pages'
import { 
  registerRequest,
  resetStateAction
}    from '../../actions/user'

const mapStateToProps = (state) => ({
  currentUserState: state.user,
})

const mapDispatchToProps = (dispatch) => ({
  registerRequest: ({ name, email, password }) => dispatch(registerRequest({ name, email, password })),
  resetState: (property, value) => dispatch(resetStateAction(property, value)),
})

export const RegisterContainer =  connect(mapStateToProps, mapDispatchToProps)(Register)