import { useState } from "react";

interface ListProps {
  selectedItem: (item: string) => void;
  items: string[];
}

const ListGroup = ({ selectedItem, items }: ListProps) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);
  return (
    <>
      <h1>Lists</h1>
      {items.map((item, index) => {
        return (
          <li
            onClick={() => {
              setSelectedItemIndex(index);
              selectedItem(item);
            }}
            className={
              selectedItemIndex === index
                ? "list-group list-group-item active"
                : "list-group list-group-item"
            }
            key={item}
          >
            {item}
          </li>
        );
      })}
    </>
  );
};

export default ListGroup;
