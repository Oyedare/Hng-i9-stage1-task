import './App.css';
import profile from './assets/profile__img.svg'
import ShareBtn from './assets/share-btn'
function App() {
  return (
    <div className="container">
      <div className="main_section">
        <div className="profile_section">
          <img src={profile} alt="profile pic" id='profile__img'/>
          <h1 id='twitter'>Annette Black</h1>
          <p id='slack'>Oyedare Temiloluwa Stephen</p>
          <div className="share-icon">
            <ShareBtn />
          </div>
        </div>

      </div>
      <div className="social_section"></div>
    </div>
  );
}

export default App;
