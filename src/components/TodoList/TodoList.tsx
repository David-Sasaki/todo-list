import React from "react";
import { Item } from "../../types";
import "./TodoList.css";

interface TodoListProps {
  row: number;
  col: number;
  items: Item[];
  handleAddItem: (r: number, c: number) => void;
  handleCheckboxChange: (itemId: number) => void;
  handleDeleteSelectedItems: (r: number, c: number) => void;
  handleTextChange: (itemId: number, newContent: string) => void;
  handleMove: (itemId: number, d: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  row,
  col,
  items,
  handleAddItem,
  handleCheckboxChange,
  handleDeleteSelectedItems,
  handleTextChange,
  handleMove,
}) => {
  return (
    <div>
      <div>
        TodoList {row + 1}-{col + 1}{" "}
        <button onClick={() => handleAddItem(row, col)}>+</button>{" "}
        <button onClick={() => handleDeleteSelectedItems(row, col)}>x</button>
      </div>
      <div>
        {items.map(
          (item, index) =>
            item.row === row &&
            item.col === col && (
              <div key={`cell-${index}-in-list-${row}-${col}`}>
                <input
                  type="checkbox"
                  checked={item.isSelected}
                  onChange={() => handleCheckboxChange(item.id)}
                />
                <input
                  type="text"
                  value={item.content}
                  onChange={(e) => handleTextChange(item.id, e.target.value)}
                />
                <button onClick={() => handleMove(item.id, 0)}>L</button>
                <button onClick={() => handleMove(item.id, 1)}>R</button>
                <button onClick={() => handleMove(item.id, 2)}>U</button>
                <button onClick={() => handleMove(item.id, 3)}>D</button>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default TodoList;
