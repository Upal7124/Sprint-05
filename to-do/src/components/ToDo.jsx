import { useState } from "react";

function Todo({ tasks, addTask, deleteTask, moveTask, editTask }) {
  const [taskText, setTaskText] = useState("");

  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const [priority, setPriority] = useState("medium");

  const handleAddTask = () => {
    addTask(taskText, priority);
    setTaskText("");
  };

  const todoTasks = tasks.filter((task) => task.status === "todo");

  const startEditing = (task) => {
    setEditingId(task.id);
    setEditText(task.text);
  };
  const priorityStyle = {
    high: "border-l-4 border-red-500",
    medium: "border-l-4 border-yellow-500",
    low: "border-l-4 border-green-500",
  };
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
          className={`bg-[#252936] rounded-lg p-4 mb-3 ${
            priorityStyle[task.priority]
          }`}
        >
          {editingId === task.id ? (
            <div className="flex gap-2">
              <input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="flex-1 rounded-lg bg-[#181b24] px-3 py-2 text-white outline-none"
              />

              <button
                onClick={() => {
                  editTask(task.id, editText);
                  setEditingId(null);
                  setEditText("");
                }}
                className="bg-green-600 px-3 py-2 rounded-lg"
              >
                Save
              </button>
            </div>
          ) : (
            <div className="flex justify-between items-center">
              <span>{task.text}</span>

              <div className="flex gap-2">
                <button
                  onClick={() => startEditing(task)}
                  className="text-blue-400 hover:text-blue-300"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-red-400 hover:text-red-300"
                >
                  Delete
                </button>

                <button
                  onClick={() => moveTask(task.id, "inprogress")}
                  className="text-yellow-400 hover:text-yellow-300"
                >
                  Start
                </button>
              </div>
            </div>
          )}
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
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="rounded-lg bg-[#252936] px-3 py-3 text-white outline-none"
        >
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>

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
