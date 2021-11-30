export default function Card() {
  return (
    <div className="card">
      <div className="card-tools">
        <div className="card-icon">
          <i className="icon slack hash big light"></i>
        </div>

        <div>
          <button className="btn-icon">
            <i className="icon ellipsis horizontal"></i>
          </button>

          <button className="btn-icon">
            <i className="icon plus"></i>
          </button>
        </div>
      </div>
      <div className="card-content">
        <label className="card-title">Slack technologies</label>
        <p className="card-description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus,
          exercitationem! Nisi, harum!
        </p>

        <button className="active-project">
          <p>16 Active Project &rarr;</p>
        </button>

        <div className="team">
          <div className="members">
            {/* members */}
            <img src="/images/user-2.jpg" alt="" />
            <img src="/images/user-3.jpg" alt="" />
            <img src="/images/user-4.jpg" alt="" />
          </div>

          <div className="team-lead">
            {/* PM */}
            <img src="/images/user-5.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
