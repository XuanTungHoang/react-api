import React, { Component } from 'react';

class ProductList extends Component {
    state = {  }
    render() {
        return (
            <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Danh sách sản phẩm</h3>
            </div>
            <div className="panel-body">
              <table className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>ID</th>
                    <th>Tên SP</th>
                    <th>Giá SP</th>
                    <th>Trạng thái</th>
                    <th>Hành động</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.children}
                </tbody>
              </table>
            </div>
          </div>
        );
    }
}

export default ProductList;