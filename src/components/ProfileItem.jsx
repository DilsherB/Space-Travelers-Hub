import React from "react";
import { ListGroup } from "react-bootstrap";
import PropTypes from "prop-types";

const ProfileItem = ({ items, title }) => {
  return (
    <div className="col">
      <h2>{title}</h2>
      <ListGroup>
        {items.lenght ? (
          items.map((item) => (
            <ListGroup.Item key={item}>{item}</ListGroup.Item>
          ))
        ) : (
          <ListGroup.Item>No reservation</ListGroup.Item>
        )}
      </ListGroup>
    </div>
  );
};

export default ProfileItem;

ProfileItem.defaultProps = {
  items: [],
  title: "",
};

ProfileItem.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
};
