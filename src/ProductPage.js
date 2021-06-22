import React from 'react';
import { Link, Prompt, Redirect } from './simple-react-router-dom'
import withRouter from './simple-react-router-dom/withRouter'


class Product extends React.Component {
    state = {confirm: true}
    render() {
        return (
            <div>
                <h3>Product</h3>
                <Link to="/">go home</Link>
                <Prompt
                    when={this.state.confirm}
                    message = 'Are you sure you want to go to'
                />
            </div>
        )
    }
}

const ProductWrapper = withRouter(Product)


class ProductPage extends React.Component {
    render() {
        const { match } = this.props
        const { id } = match.params || {}
        return <div>
            ProductPage
            <div>产品id： {id}</div>
            <ProductWrapper />
        </div>
    }
}

export default ProductPage