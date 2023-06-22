import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import fetchMissions from "../redux/missions/missionsAPI";

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);
  const isLoading = useSelector((state) => state.missions.isLoading);
  const error = useSelector((state) => state.missions.error);

  const [member, setMember] = useState(false);
  const [missionbtn, setMissionbtn] = useState(true);

  const handleMember = () => {
    setMember(!member);
  };
  const handleMission = () => {
    setMissionbtn(!missionbtn);
  };

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <div className="container mt-3">
      {isLoading && (
        <h3
          className="rounded d-flex justify-content-center align-items-center"
          style={{ height: "80vh" }}
        >
          Loading...
        </h3>
      )}
      {error && (
        <h2
          className="text-danger rounded d-flex justify-content-center align-items-center"
          style={{ height: "80vh" }}
        >
          something went wrong
        </h2>
      )}
      {!(isLoading && error) && (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Mission</th>
              <th>Description</th>
              <th>Status</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {missions.map((mission) => (
              <tr key={mission.mission_id}>
                <td className="fw-bold">{mission.mission_name}</td>
                <td style={{ fontSize: "14px" }}>{mission.description}</td>
                <td style={{ verticalAlign: "middle" }}>
                  <button
                    type="button"
                    className={`btn btn-sm rounded-pill ${
                      member ? "btn-info" : "btn-secondary"
                    }`}
                    style={{ minWidth: "max-content" }}
                    onClick={handleMember}
                  >
                    {member ? "Active Member" : "Not A Member"}
                  </button>
                </td>
                <td style={{ verticalAlign: "middle" }}>
                  <button
                    type="button"
                    className={`btn btn-sm ${
                      missionbtn
                        ? "btn-outline-secondary"
                        : "btn-outline-danger"
                    }`}
                    style={{ minWidth: "max-content" }}
                    onClick={handleMission}
                  >
                    {missionbtn ? "Join Mission" : "Leave Mission"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}{" "}
    </div>
  );
};

export default Missions;
