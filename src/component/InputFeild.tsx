import React, { useRef } from "react";
import "./style.css";

interface Props {
  todo: string | number;
  setTodo: React.Dispatch<React.SetStateAction<string | number>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputFeild: React.FC<Props> = ({ todo, setTodo, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <form
        className="input"
        onSubmit={(e) => {
          handleAdd(e);
          inputRef.current?.blur();
        }}
      >
        <input
          type="text"
          placeholder="Enter task"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="input__box"
        />
        <button className="input__submit" type="submit">
          Go
        </button>
      </form>
    </div>
  );
};

export default InputFeild;
