import { useState } from "react";

function Todo({ tasks, addTask, deleteTask, moveTask }) {
  const [taskText, setTaskText] = useState("");

  const handleAddTask = () => {
    addTask(taskText);
    setTaskText("");
  };

  const todoTasks = tasks.filter((task) => task.status === "todo");

  return (
    <div className="bg-[#181b24] rounded-xl p-5 min-h-[500px]">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-semibold text-white">To Do</h2>

        <span className="bg-green-500/10 text-green-400 px-2.5 py-1 rounded-full text-sm">
          {todoTasks.length}
        </span>
      </div>

      {todoTasks.map((task) => (
        <div
          key={task.id}
          className="bg-[#252936] rounded-lg p-4 mb-3 flex justify-between items-center"
        >
          <span>{task.text}</span>

          <button
            onClick={() => deleteTask(task.id)}
            className="text-red-400 hover:text-red-300"
          >
            Delete
          </button>
          <button onClick={() => moveTask(task.id, "inprogress")}>Start</button>
        </div>
      ))}

      <div className="flex gap-2 mt-6">
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Add a task..."
          className="flex-1 min-w-0 rounded-lg bg-[#252936] px-4 py-3 text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={handleAddTask}
          className="rounded-lg bg-blue-600 px-5 py-3 font-semibold hover:bg-blue-700"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default Todo;
