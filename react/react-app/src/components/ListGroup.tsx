import { useState } from "react";

interface Props {
  heros: string[];
  heading: string;
  onSelectItem: (heros: string) => void;
}

function ListGroup({ heros, heading, onSelectItem }: Props) {
  // heros = []
  //   const handel = (event: MouseEvent) => console.log(event)
  //   let SelectedIndex = -1
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      {/* {heros.length === 0 ? <p>No item found.</p> : null} */}
      {heros.length === 0 && <p>No item found.</p>}
      <ul className="list-group">
        {heros.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item)
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
