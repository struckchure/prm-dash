export default function Nav() {
  return (
    <nav>
      <div className="logo">
        <img src="/images/logo.png" alt="" />
      </div>

      <div className="nav-content">
        <div className="brand">
          <label>Clients</label>
          <div className="input-icon">
            <input type="text" placeholder="Search" />
            <i className="icon search"></i>
          </div>
        </div>

        <div className="tools">
          <button className="btn">
            <i className="icon plus btn-icon-white"></i>
            <span>Start project</span>
          </button>

          <div className="btn-group">
            <button className="btn-icon">
              <i className="icon outline chat text-white"></i>
            </button>

            <button className="btn-icon">
              <i className="icon outline bell text-white"></i>
            </button>
          </div>

          <div className="user">
            <img src="/images/user-1.jpg" alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
}
