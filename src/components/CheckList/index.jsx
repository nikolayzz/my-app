import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";

import Tasks from "./Main/Tasks";

function CheckList() {
  const [list, setList] = useState([
    {
      id: nanoid(),
      text: "test",
      isOpen: false,
      isEdit: false,
      isDone: false,
    },
  ]);

  const [history, setHistory] = useState([]);

  const addItem = (text, setText) => {
    if (!text) {
      return alert("Поле не может быть пустым");
    }
    const newItem = {
      id: nanoid(),
      text: text,
      isOpen: false,
      isEdit: false,
      isDone: false,
    };
    setList([...list, newItem]);
    setText("");
  };

  const removeItem = (id) => {
    setHistory([...list]);
    setList(list.filter((el) => el.id !== id));
  };

  const removeAllItems = () => {
    if (list.length !== 0) {
      setHistory([...list]);
    }
    setList([]);
  };

  const removeDoneItems = () => {
    if (list.length !== 0) {
      setHistory([...list]);
    }
    setList(
      list.filter((el) => {
        return el.isDone !== true;
      })
    );
  };

  const changeItem = (id, event) => {
    setHistory([...list]);
    setList(
      list.map((el) => {
        if (el.id === id) {
          el.text = event.target.value;
        }
        return el;
      })
    );
  };

  const returnDeleted = () => {
    setList(history);
  };

  const setOpen = (id) => {
    setList(
      list.map((el) => {
        if (el.id === id) {
          el.isOpen = !el.isOpen;
        }
        return el;
      })
    );
  };

  const setEdit = (id) => {
    setList(
      list.map((el) => {
        if (el.id === id) {
          el.isEdit = !el.isEdit;
        }
        return el;
      })
    );
  };

  const setDone = (id) => {
    setList(
      list.map((el) => {
        if (el.id === id) {
          el.isDone = !el.isDone;
        }
        return el;
      })
    );
  };

  const countTasks = list.length;
  const countDone = list.filter((el) => el.isDone === true).length;

  return (
    <div>
      <Tasks />
    </div>
  );
}

export default CheckList;
