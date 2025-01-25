import './App.css';
import gptLogo from './assets/chatgpt.svg'
import addBtn from './assets/add-30.png'
import msgIcon from './assets/message.svg'
import home from './assets/home.svg'
import rocket from './assets/rocket.svg'
import saved from './assets/bookmark.svg'
import history from './assets/history.svg'
import sendBtn from './assets/send.svg'
import userIcon from './assets/user-icon.png'
import gptImgLogo from './assets/chatgptLogo.svg'


function App() {
  return (
    <div className="App">
      <div className='sideBar'>
        <div className='upperSide'>
          <div className='upperSideTop'>
            <img src={gptLogo} alt='chatGpt logo' className='logo' /> <span className='brand'>ChatGPT</span>
          </div>
          <button className='midBtn'><img src={addBtn} className='addBtn' alt='addBtn' />New Chat</button>
          <div className='upperSideBottom'>
            <button className='query'><img src={msgIcon} alt='first Btn' />What is Programming?</button>
            <button className='query'><img src={msgIcon} alt='second Btn' />How to use an AI?</button>
            <button className='query'><img src={msgIcon} alt='first Btn' />What is Web Development?</button>
            <button className='query'><img src={msgIcon} alt='second Btn' />What is an API?</button>
          </div>
        </div>
        <div className='lowerSide'>
          <h1 className='listItems'>Quick Access</h1>
          <div className='listItems'><img src={home} alt='' className='listitemsImg' />Home</div>
          <div className='listItems'><img src={saved} alt='' className='listitemsImg' />Saved</div>
          <div className='listItems'><img src={rocket} alt='' className='listitemsImg' />Upgrade to Pro</div>
          <div className='listItems'><img src={history} alt='' className='listitemsImg' />History</div>
        </div>
      </div>
      <div className='main'>
        <div className='chats'>
          <div className='chat'>
            <img className='chatImg' src={userIcon} alt='chatBot' /><p className='txt'>Hello, ChatGPT!</p>
          </div>
          <div className='chat bot'>
            <img className='chatImg' src={gptImgLogo} alt='chatBot' /><p className='txt'>Hey! How’s it going? 😊</p>
          </div>
        </div>
        <div className='chatFooter'>
          <div className='inp'>
            <input type='text' name='text' placeholder='Ask a question...' /> <button className='send'><img src={sendBtn} alt=''></img></button>
          </div>
          <i>ChatGPT may produce incorrect information about people, or facts, ChatGPT August 20 version</i>
        </div>
      </div>
    </div>
  );
}

export default App;
