import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { setCurrentUserAction } from "../redux/User/user.actions"


export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(setCurrentUserAction, dispatch)
}