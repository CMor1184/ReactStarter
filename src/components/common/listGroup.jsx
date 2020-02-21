import React from "react";

const ListGroup = ({
  items,
  currentItem,
  onItemChanged,
  textProperty,
  valueProperty
}) => {
  return (
    <ul className="list-group">
      {items.map(item => (
        <li
          key={item[valueProperty]}
          style={{ cursor: "pointer" }}
          className={
            item === currentItem ? "list-group-item active" : "list-group-item"
          }
          onClick={() => {
            onItemChanged(item);
          }}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default ListGroup;
