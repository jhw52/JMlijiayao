import { About } from "./components/About";
import { BackToTop } from "./components/BackToTop";
import { Certificates } from "./components/Certificates";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import { Hero } from "./components/Hero";
import { ParticleCanvas } from "./components/ParticleCanvas";
import { Practice } from "./components/Practice";
import { ProfessionalFocus } from "./components/ProfessionalFocus";
import { profile } from "./data/profile";

function App() {
  return (
    <div className="site-shell">
      <ParticleCanvas />
      <header className="site-nav" aria-label="主导航">
        <a className="brand-mark" href="#top" aria-label="返回首页">
          <span>JY</span>
        </a>
        <nav className="nav-links">
          <a href="#profile">Profile</a>
          <a href="#focus">Focus</a>
          <a href="#practice">Practice</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <Hero profile={profile} />
        <About text={profile.about} />
        <Education education={profile.education} />
        <ProfessionalFocus groups={profile.focusGroups} />
        <Practice practice={profile.practice} />
        <Certificates
          certificates={profile.certificates}
          statement={profile.statement}
        />
        <Contact email={profile.email} closing={profile.closing} />
      </main>
      <BackToTop />
    </div>
  );
}

export default App;
