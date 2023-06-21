import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMissions } from "../redux/missions/missionsSlice";

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);
  const isLoading = useSelector((state) => state.missions.isLoading);
  const error = useSelector((state) => state.missions.error);

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
                <td>{mission.mission_name}</td>
                <td>{mission.description}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    style={{ minWidth: "max-content" }}
                  >
                    Active Member
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-sm"
                    style={{ minWidth: "max-content" }}
                  >
                    Active Member
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
