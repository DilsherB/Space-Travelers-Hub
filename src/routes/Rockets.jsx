import React from "react";
import { Badge, Button, Image } from "react-bootstrap";
import styles from "./styles/Rocket.module.css";

const image = "https://www.channelstv.com/wp-content/uploads/2018/03/Buhari-Gates-4.jpg";

const Rockets = () => {
  return (
    <div>
      <div className={`${styles["rocket-container"]} row mt-3`}>
        <div className={`${styles["image-container"]}  col-12 col-md-4`}>
          <Image className={styles.image} src={image} />
        </div>
        <div className="col col-12 col-md-8">
          <h3 className={styles.title}>Falcon 1</h3>
          <p className={styles.description}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo ab
            quam culpa cupiditate a, nostrum magnam voluptas suscipit laudantium
            officiis nam adipisci impedit voluptatem quisquam.
          </p>
          <Button variant="primary" className={styles.button}>Reserve Rocket</Button>
        </div>
      </div>
      <div className={`${styles["rocket-container"]} row mt-3`}>
        <div className={`${styles["image-container"]}  col-12 col-md-4`}>
          <Image className={styles.image} src={image} />
        </div>
        <div className="col col-12 col-md-8">
          <h3 className={styles.title}>Falcon 1</h3>
          <p className={styles.description}>
            <Badge bg="info">Reserved</Badge>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo ab
            quam culpa cupiditate a, nostrum magnam voluptas suscipit laudantium
            officiis nam adipisci impedit voluptatem quisquam.
          </p>
          <Button variant="outline-secondary" className={styles.button}>Cancel Reservation</Button>
        </div>
      </div>
    </div>
  );
};

export default Rockets;
