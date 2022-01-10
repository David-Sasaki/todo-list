import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import TodoList from "./components/TodoList/TodoList";
import { Item } from "./types";
import "./App.css";

const App: React.FC = () => {
  const [rowCount, setRowCount] = useState<number>(3);
  const [colCount, setColCount] = useState<number>(3);
  const [items, setItems] = useState<Item[]>([]);
  const [itemCount, setItemCount] = useState<number>(0);

  const addItem = (r: number, c: number) => {
    const newItem: Item = {
      id: itemCount,
      row: r,
      col: c,
      content: "",
      isSelected: false,
    };
    setItems([...items, newItem]);
    setItemCount((prev) => prev + 1);
  };

  const changeCheckBox = (itemId: number) => {
    const newItems = [...items];
    const updatedItem = newItems.find((item) => item.id === itemId);
    if (updatedItem) {
      updatedItem.isSelected = !updatedItem.isSelected;
      setItems(newItems);
    }
  };

  const deleteSelectedItems = (r: number, c: number) => {
    const newItems = items.filter((item) => {
      if (item.row !== r) return true;
      if (item.col !== c) return true;
      return !item.isSelected;
    });
    setItems(newItems);
  };

  const changeContext = (itemId: number, newContent: string) => {
    const newItems = [...items];
    const updatedItem = newItems.find((item) => item.id === itemId);
    if (updatedItem) {
      updatedItem.content = newContent;
      setItems(newItems);
    }
  };

  const moveItem = (itemId: number, direction: number) => {
    const newItems = [...items];
    const updatedItem = newItems.find((item) => item.id === itemId);
    if (updatedItem) {
      if (direction === 0) {
        updatedItem.col = Math.max(0, updatedItem.col - 1);
      } else if (direction === 1) {
        updatedItem.col = Math.min(colCount - 1, updatedItem.col + 1);
      } else if (direction === 2) {
        updatedItem.row = Math.max(0, updatedItem.row - 1);
      } else {
        updatedItem.row = Math.min(rowCount - 1, updatedItem.row + 1);
      }
      setItems(newItems);
    }
  };

  return (
    <div className="app-container">
      <div className="text-boxes">
        <TextField
          label="Row Count"
          type="number"
          value={rowCount}
          onChange={(e) => setRowCount(Number(e.target.value))}
        />
        <TextField
          label="Column Count"
          type="number"
          value={colCount}
          onChange={(e) => setColCount(Number(e.target.value))}
        />
      </div>
      <div className="grid">
        {Array(rowCount)
          .fill(0)
          .map((_, rowIndex) => (
            <div className="grid-row" key={`row-${rowIndex}`}>
              {Array(colCount)
                .fill(0)
                .map((_, colIndex) => (
                  <div
                    className="grid-cell"
                    key={`cell-${rowIndex}-${colIndex}`}
                  >
                    <TodoList
                      row={rowIndex}
                      col={colIndex}
                      items={items}
                      handleAddItem={addItem}
                      handleCheckboxChange={changeCheckBox}
                      handleDeleteSelectedItems={deleteSelectedItems}
                      handleTextChange={changeContext}
                      handleMove={moveItem}
                    />
                  </div>
                ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;
