import React, { useEffect, useState } from 'react';

import { fakeAPi } from './../../api/index';

import {
  DivRei,
  TodoPrin,
  TodoIntro,
  TodoInput1,
  TodoInput2,
  TodoInput3,
  TodoInputButton,
} from './styles';

function Todo() {
  return (
    <>
      <DivRei>
        <TodoPrin>
          <TodoIntro>
            <h1>Todo List</h1>
            <TodoInput1>
              <input type="checkbox" />
              <h1>Milk</h1>
            </TodoInput1>
            <TodoInput2>
              <input type="checkbox" />
              <h1>Milk</h1>
            </TodoInput2>
            <TodoInput3>
              <input type="checkbox" />
              <h1>Milk</h1>
            </TodoInput3>
            <TodoInputButton>
              <input type="text" />
              <button>Add Itens</button>
            </TodoInputButton>
          </TodoIntro>
        </TodoPrin>
      </DivRei>
    </>
  );
}

export default Todo;
