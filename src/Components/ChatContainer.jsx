import React from 'react';
import ChatRow from "./ChatRow.jsx";
import './ChatContainer.css';

class ChatContainer extends React.Component {
    state = {
      messages: [
        {
            avatarUrl: "https://farm2.staticflickr.com/1142/1139134023_c497d6b907_z.jpg",
            authorName:"Dog",
            date:"2019 Mar 01",
            message:"Woof!",
            key:101,
        },
        {
            avatarUrl:"https://farm5.staticflickr.com/4447/37761450081_abd8bce5f8_k.jpg",
            authorName:"Cat",
            date:"2019 Mar 01 19:45:23",
            message:"Miaow, miaow, miaow!",
            key:102,
        },
        {
            avatarUrl:"https://farm1.staticflickr.com/929/43986331111_f71f9200c3_k.jpg",
            authorName:"Rabbit",
            date:"2019 Mar 04 11:20:38",
            message:"*Appropriate rabbit noises*",
            key:103,
        },
        {
            avatarUrl:"https://farm5.staticflickr.com/4447/37761450081_abd8bce5f8_k.jpg",
            authorName:"Cat",
            date:"2019 Mar 04 11:34:08",
            message:"Miaow miaow",
            key:104,
        }
      ]
    };
    render() {
    let msgs = this.state.messages;
        return (
        <div className="chatContainer">
            <ChatRow avatarUrl={msgs[0].avatarUrl} authorName={msgs[0].authorName} date={msgs[0].date} message={msgs[0].message}/>
            <ChatRow avatarUrl={msgs[1].avatarUrl} authorName={msgs[1].authorName} date={msgs[1].date} message={msgs[1].message}/>
            <ChatRow avatarUrl={msgs[2].avatarUrl} authorName={msgs[2].authorName} date={msgs[2].date} message={msgs[2].message}/>
            <ChatRow avatarUrl={msgs[3].avatarUrl} authorName={msgs[3].authorName} date={msgs[3].date} message={msgs[3].message}/>
        </div>
        );
    }
}

export default ChatContainer;