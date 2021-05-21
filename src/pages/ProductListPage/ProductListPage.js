import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductItem from '../../components/ProductItem/ProductItem';
import ProductList from '../../components/ProductList/ProductList';
import apiCall from '../../utils/apiCall';


class ProductListPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount(){
        apiCall('products', 'GET', null).then(res => {
            this.setState({
                products: res.data
            })
        })
    }

    onDelete = (id) => {
        var {products} = this.state;
        apiCall(`products/${id}`, 'delete', null, null).then(res => {
            if(res.status === 200){
                var index = this.findIndex(products, id);
                products.splice(index,1);
                this.setState({
                    products: products
                })
            }
        })
    }

    findIndex = (products, id) => {
        var result = -1
        products.forEach((elm, index) => {
            if(elm.id === id){
                result = index;
            }
        });
        return result;
    }
    render() {
        var {products} = this.state;
        
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Link to="product/add" className="btn btn-info mb-10">Thêm sản phẩm</Link>
                <ProductList>
                    {this.showProducts(products)}
                </ProductList>
            </div>
        );
    }

    showProducts = (products) => {
        var result = null;
        if(products.length > 0) {
            result = products.map((item, index) => {
                return (
                    <ProductItem 
                        key={index}
                        product={item}
                        index={index}
                        onDelete={this.onDelete}
                    />
                ) 
            })
        }
        return result;
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, null)(ProductListPage);