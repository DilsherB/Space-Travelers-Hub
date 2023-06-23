import React from "react";
import PropTypes from "prop-types";
import { Badge, Button, Image } from "react-bootstrap";
import { useDispatch } from "react-redux";
import styles from "./styles/Rocket.module.css";
import { actions } from "../redux/rockets/rocketsSlice";

const Rocket = ({ rocket }) => {
  const dispatch = useDispatch();
  const reserve = (id) => {
    dispatch(actions.reserve({ id }));
  };

  const cancel = (id) => {
    dispatch(actions.cancel({ id }));
  };

  return (
    <div className={`${styles["rocket-container"]} row mt-3`}>
      <div className={`${styles["image-container"]}  col-12 col-md-3`}>
        <Image className={styles.image} src={rocket.flickr_images} />
      </div>
      <div className="col col-12 col-md-9">
        <h3 className={styles.title}>{rocket.name}</h3>
        <p className={styles.description}>
          {rocket.reserved ? <Badge bg="info">Reserved</Badge> : ""}
          {rocket.description}
        </p>
        <Button
          variant={!rocket.reserved ? "primary" : "outline-secondary"}
          className={styles.button}
          onClick={!rocket.reserved ? () => reserve(rocket.id) : () => cancel(rocket.id)}
        >
          {!rocket.reserved ? "Reserve Rocket" : "Cancel Reservation"}
        </Button>
      </div>
    </div>
  );
};

export default Rocket;
Rocket.defaultProps = {
  rocket: {},
};
Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    flickr_images: PropTypes.string,
    reserved: PropTypes.bool,
    description: PropTypes.string,
  }),
};
