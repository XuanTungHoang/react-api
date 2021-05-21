import React, { Component } from 'react';
import apiCall from '../../utils/apiCall';
import axios from 'axios';
class ProductActionPage extends Component {
    constructor (props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            price: '',
            status: '',
        }
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }

    onSaveProduct = (e) => {
        e.preventDefault();
        var {name, price, status} = this.state;
        var data = {
            name: name,
            price: price,
            status: status
        }
        var querystring = require('querystring');
        var url = 'https://60a765ac3b1e130017175fad.mockapi.io/products';
        axios.post(url,
            querystring.stringify(data), {
            headers: { 
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }).then(function(response) {
                console.log(response);
            });
        
        var {history} = this.props;
        history.goBack();
        // var headers = {"Content-Type": "application/x-www-form-urlencoded"}
        // apiCall('products', 'POST', headers, querystring.stringify({
        //     name: name,
        //     price: price,
        //     status: status
        // })).then(res => {
        //     console.log(res);
        // })
    }

    render() {
        var {name, price, status} = this.state;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit={this.onSaveProduct}>
                    <div className="form-group">
                        <label>Tên sản phẩm</label>
                        <input type="text" className="form-control" name="name" value={name} onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label>Giá</label>
                        <input type="number" className="form-control" name="price" value={price} onChange={this.onChange}/>
                    </div>
                    <div className="form-group" >
                        <label>Trạng thái</label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" name="status" value={status} onChange={this.onChange} />
                            Còn hàng
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Lưu lại
                </button>
                </form>
            </div>

        );
    }
}

export default ProductActionPage;