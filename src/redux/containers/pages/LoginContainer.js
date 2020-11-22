import { connect }        from 'react-redux'
import { Login }          from '../../../pages'
import {
  loginRequest,
  resetStateAction
}   from '../../actions/user'

const mapStateToProps = (state) => ({
  currentUserState: state.user,
})

const mapDispatchToProps = (dispatch) => ({
  loginRequest: ({ email, password }) => dispatch(loginRequest({ email, password })),
  resetState: (property, value) => dispatch(resetStateAction(property, value)),
})

export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login)