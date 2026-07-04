import type { profile } from "../data/profile";

type HeroProps = {
  profile: typeof profile;
};

export function Hero({ profile }: HeroProps) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="hero-kicker">{profile.tagLine}</p>
        <h1 id="hero-title">{profile.name}</h1>
        <p className="hero-role">{profile.role}</p>
        <p className="hero-text">{profile.heroText}</p>
        <div className="hero-actions" aria-label="主要操作">
          <a className="button primary" href="#profile">
            View Profile
          </a>
          <a className="button secondary" href="#contact">
            Contact
          </a>
        </div>
      </div>

      <aside className="observation-panel" aria-label="生命科学观察记录">
        <div className="panel-grid" aria-hidden="true" />
        <figure className="profile-photo-frame">
          <img src={profile.photo.src} alt={profile.photo.alt} />
        </figure>
        <div className="specimen-orbit">
          <span className="orbit-cell cell-a" />
          <span className="orbit-cell cell-b" />
          <span className="orbit-cell cell-c" />
        </div>
        <div className="observation-notes">
          <p className="note-label">Clinical Observation</p>
          <p>诊断学习、实验记录与生命照护，构成这份档案的主要线索。</p>
        </div>
        <dl className="micro-record">
          <div>
            <dt>Study</dt>
            <dd>Animal medicine</dd>
          </div>
          <div>
            <dt>Focus</dt>
            <dd>Clinical diagnosis</dd>
          </div>
          <div>
            <dt>Method</dt>
            <dd>Careful records</dd>
          </div>
        </dl>
      </aside>
    </section>
  );
}
