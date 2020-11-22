import { connect }        from 'react-redux'
import { Navigation }            from '../../../components'
import { logoutRequest }  from '../../actions/user'

const mapStateToProps = (state) => ({
  currentUserState: state.user,
})

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logoutRequest()),
})

export const NavigationContainer = connect(mapStateToProps, mapDispatchToProps)(Navigation)