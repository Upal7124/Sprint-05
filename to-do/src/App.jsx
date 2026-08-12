import { useState, useEffect } from "react";
import Todo from "./components/Todo";
import InProgress from "./components/InProgress";
import Done from "./components/Done";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");

    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [taskText, setTaskText] = useState("");

  const [search, setSearch] = useState("");

  const addTask = (text, priority) => {
    if (text.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: text,
      status: "todo",
      priority: priority,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  };
  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const moveTask = (id, newStatus) => {
    console.log("Moving:", id, newStatus);
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task,
      ),
    );
  };

  const editTask = (id, newText) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task,
      ),
    );
  };
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <div className="min-h-screen bg-[#0f1117] text-white p-8">
      <h1 className="text-4xl font-bold mb-8">My Task Board</h1>
      <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-6 rounded-lg bg-[#181b24] px-4 py-3 text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="grid grid-cols-3 gap-6">
        <Todo
          tasks={filteredTasks}
          addTask={addTask}
          deleteTask={deleteTask}
          moveTask={moveTask}
          editTask={editTask}
        />

        <InProgress
          tasks={filteredTasks}
          deleteTask={deleteTask}
          moveTask={moveTask}
        />

        <Done
          tasks={filteredTasks}
          deleteTask={deleteTask}
          moveTask={moveTask}
        />
      </div>
    </div>
  );
}

export default App;
