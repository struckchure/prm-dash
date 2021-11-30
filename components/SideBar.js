export default function SideBar() {
  return (
    <aside>
      <div>
        <button className="side-btn">
          <i className="icon dashboard"></i>
        </button>

        <button className="side-btn">
          <i className="icon user outline"></i>
        </button>

        <button className="side-btn">
          <i className="icon connectdevelop outline"></i>
        </button>

        <button className="side-btn">
          <i className="icon share alternate"></i>
        </button>

        <button className="side-btn">
          <i className="icon paper plane outline"></i>
        </button>

        <button className="side-btn">
          <i className="icon envelope outline"></i>
        </button>

        <button className="side-btn">
          <i className="icon calendar outline"></i>
        </button>

        <button className="side-btn">
          <i className="icon setting"></i>
        </button>
      </div>

      <div>
        <button className="side-btn mode">Light</button>

        <button className="side-btn mode">Dark</button>
      </div>
    </aside>
  );
}
