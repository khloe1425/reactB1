import React, { Component } from 'react'

export default class DataBinding extends Component {

    //Thuộc tính
    age = 20;
    img = "https://i.imgur.com/8dENvNB.jpg";

    //phương thức
    renderCard = () => {
        let product = {
            id: 1,
            name: "sp 01",
            price: 100,
            img: "https://i.imgur.com/8dENvNB.jpg"
        }

        return <div className="card" style={{ width: '18rem' }}>
            <img src={product.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.price}</p>               
            </div>
        </div>

    }

    render() {
        //Khai báo biến
        let tenhv = "Nguyễn Thị Học Viên";
        return (
            <div className="container">
                <p>{tenhv}</p>
                <p>{this.age}</p>
                <img className="w-25" src={this.img} alt="..." />

                {this.renderCard()}
            </div>
        )
    }
}
