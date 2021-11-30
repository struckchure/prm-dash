export default function ToolBar() {
  return (
    <div className="toolbar">
      {/* view selection */}
      <div className="view">
        <button className="btn-icon">
          <i className="icon grid layout"></i>
        </button>

        <button className="btn-icon">
          <i className="icon list"></i>
        </button>
      </div>

      {/* stats */}

      <div className="stats">
        <div className="stat">
          <label>Clients</label>
          <p>16</p>
        </div>

        <div className="stat">
          <label>Projects:</label>
          <p>167</p>
        </div>

        <div className="stat">
          <label>Completed:</label>
          <p>136</p>
        </div>

        <div className="stat">
          <label>In progress:</label>
          <p>19</p>
        </div>

        <div className="stat">
          <label>Overdue</label>
          <p>12</p>
        </div>
      </div>

      {/* sort projects */}
      <div className="sort">
        <p>All projects &rarr;</p>
      </div>
    </div>
  );
}
