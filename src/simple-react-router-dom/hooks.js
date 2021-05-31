import RouterContext from './RouterContext'
import { useContext } from 'react'

export function useHistory() {
    return useContext(RouterContext).history
}

export function useLocation() {
    return useContext(RouterContext).location
}

export function useRouteMatch() {
    return useContext(RouterContext).match
}

export function useParams() {
    const { params } = useRouteMatch() || { params: {} }
    return params
}