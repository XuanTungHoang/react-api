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

    componentDidMount(){
        var {match} = this.props;
        if(match){
            var id = match.params.id;
            apiCall(`products/${id}`, 'get', null, null).then(res => {
                var data = res.data;
                this.setState({
                    id: data.id,
                    name: data.name,
                    price: data.price,
                    status: data.status
                })
            })
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
        var { id, name, price, status } = this.state;
        var { history } = this.props;
        var url = 'https://60a765ac3b1e130017175fad.mockapi.io/products';
        var data = {
            name: name,
            price: price,
            status: status
        }
        if (id) { // update
            axios.put(`${url}/${id}`, data).then(res => {
                console.log(res);
                history.goBack();
            })
        } else { // add
            var querystring = require('querystring');
            axios.post(url,
                querystring.stringify(data), {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }).then(function (response) {
                history.goBack();
            });
        }
        
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
        var isChecked =  status === 'true' ? true : false;
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
                            <input type="checkbox" name="status" value={status} onChange={this.onChange} checked={isChecked} />
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