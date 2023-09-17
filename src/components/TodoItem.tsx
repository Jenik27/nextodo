"use client";

type TodoItemProps = {
  title: string;
  completed: boolean;
  id: string;
  toggleTodo: (id: string, complete: boolean) => void;
};

export function TodoItem({ title, completed, id, toggleTodo }: TodoItemProps) {
  return (
    <li className="flex gap-1 items-center">
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer"
        defaultChecked={completed}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <label
        htmlFor={id}
        className="peer-checked:line-through peer-checked:text-slate-500"
      >
        {title}
      </label>
    </li>
  );
}
