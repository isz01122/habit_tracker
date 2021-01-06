import React, { memo } from "react";

// memo : props가 변경되지 않으면 재랜더링이 안된다.
// => PureComponent와 비슷
const HabitAddForm = memo((props) => {
  const inputRef = React.createRef();

  const onSubmit = (event) => {
    //사라짐 방지
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    inputRef.current.value = "";
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="Habit"
      />
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddForm;
