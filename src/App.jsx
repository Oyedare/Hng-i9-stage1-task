import './App.css';
import profile from './assets/profile__img.svg'
import ShareBtn from './assets/share-btn'
import Slack from './assets/slack'
import Github from './assets/github'
import zuri from './assets/Zuri.Internship_Logo.svg'
import I4G from './assets/I4G.svg'
import MobileShare from './assets/mobile-share';
function App() {
  const links = [
    {
      text: 'Twitter Link',
      id: 'btn__twitter',
      href: 'https://twitter.com/_stephentony_'
    },
    {
      text: 'Zuri Team',
      id: 'btn__zuri',
      href: 'https://training.zuri.team/'
    },
    {
      text: 'Zuri Books',
      id: 'books',
      href: 'http://books.zuri.team'
    },
    {
      text: 'Python Books',
      id: 'book__python',
      href: 'https://books.zuri.team/python-for-beginners?ref_id=stephentony'
    },
    {
      text: 'Background Check for Coders',
      id: 'pitch',
      href: 'https://background.zuri.team/'
    },
    {
      text: 'Design Books',
      id: 'book__design',
      href: 'https://books.zuri.team/design-rules'
    }
  ]
  return (
    <>
      <div className="container">
        <div className="main_section">
          <div className="profile_section">
            <img src={profile} alt="profile pic" id='profile__img'/>
            <h1 id='twitter'>_stephentony_</h1>
            <p id='slack'>stephentony</p>
            <div className="share-icon">
              <ShareBtn />
            </div>
            <div className="share-icon-mobile">
              <MobileShare />
            </div>
          </div>

          <div className="link_section">
            {links.map(({text,href,id})=>(
              <a href={href} id={id} target='_blank' rel="noreferrer">{text}</a>
            ))}
          </div>
        </div>

        <div className="social_section">
          <a href="https://app.slack.com/client/T042F7V19Q8" target='_blank' rel="noreferrer">
            <Slack />
          </a>
          <a href="https://github.com/Oyedare" target='_blank' rel="noreferrer">
            <Github />
          </a>
        </div>
      </div>

      <div className="footer">
        <img src={zuri} alt="zuri logo" />
        <p>HNG Internship 9 Frontend Task</p>
        <img src={I4G} alt="I4G logo" />
      </div>
    </>
  );
}

export default App;
