import { Component } from "react";

export default class Text extends Component{
    render(){
        return(
            <div>
                <h3>giới thiệu</h3>
                <p>trong rectjs đôi khi bạn có một số component tùy thuộc vào từng điều kiện ví dụ như trạng thái state, props..mà bạn muốn hiển thị 1 hoặc 1 số component nào đó, khi đó bạn có thể sử dụng conditional rendering để render ra component mà bạn mong muốn</p>
            </div>
        )
    }
}