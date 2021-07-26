import './App.css';
import SocialIcons from "./components/socialicons"
import picture from "./images/profile-picture.jpg"
import picture2x from "./images/profile-picture-2x.jpg"

function App() {
  return (
    <main>
      
      <img
        srcSet={`${picture} 1x, ${picture2x} 2x`}
        alt="Antonio Rodriguez, wearing a pink dress shirt and horn-rimmed glasses and a smile."
      />

      <p>Hi! My name is Antonio Rodriguez, and I enjoy leading teams, building software, and learning about anything.</p>

      <p>Some years ago, a friend and I founded a web development company and later sold it. The experience was more educational than lucrative. Since then, I've worked as a Chief Technology Officer, as an engineering manager, at the Director-level, and my favorite, as an individual contributor in many projects and products with various levels of effort and impact. Currently, I'm exploring different disciplines and have taken on a Product Owner role at a global company.</p>

      <p>Aside from work, I put most of my efforts into being a conscious and involved parent, a better husband, and a healthier person.</p>

      <p>This site is under construction, just as I am. Feel free to ignore my social media links below.</p>

      <SocialIcons />
    </main>
  );
}

export default App;
