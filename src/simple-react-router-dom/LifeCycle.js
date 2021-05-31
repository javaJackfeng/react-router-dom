import React from 'react'

class LifeCycle extends React.Component {
    componentDidMount() {
        const { onMount } = this.props
        onMount && onMount.call(this, this)
    }
    componentDidUpdate(prevProps) {
        const { onUpdate } = this.props
        onUpdate && onUpdate.call(this, this, prevProps)
    }
    componentWillUnmount() {
        const { onUnmount } = this.props
        onUnmount && onUnmount.call(this, this)
    }
    render() {
        return null
    }
}

export default LifeCycle