import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
//     const chatProps = useMultiChatLogic(
//         '617d57aa-0f7c-4046-96e3-cacddfdc45a8', 
//         props.user.username, 
//         props.user.secret
//     );

    return (
    <div style={{ height: '100vh' }}>
        <PrettyChatWindow
            projectId='617d57aa-0f7c-4046-96e3-cacddfdc45a8'
            username={props.user.username}
            secret={props.user.secret}
            style={{height: '100%'}}
        />
    </div>
    )
}

export default ChatsPage;