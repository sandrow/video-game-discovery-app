import { useState } from "react";
import "./ListGroup.css";
import styles from "./ListGroup.module.css";
import styled from "styled-components";

const List = styled.ul`
.listGroup 
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 5px 0;
  color: white;
  background: ${(props) => (props.active ? "black" : "none")};
`;

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No Items Found</p>}
      <List className={[styles.listGroup, styles.container].join(" ")}>
        {items.map((items, index) => (
          <ListItem
            active={index === selectedIndex}
            key={items}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(items);
            }}
          >
            {items}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
