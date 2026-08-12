import { useState } from "react";
import Todo from "./components/Todo";
import InProgress from "./components/InProgress";
import Done from "./components/Done";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");
  const addTask = (text) => {
    if (text.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: text,
      status: "todo",
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
  return (
    <div className="min-h-screen bg-[#0f1117] text-white p-8">
      <h1 className="text-4xl font-bold mb-8">My Task Board</h1>

      <div className="grid grid-cols-3 gap-6">
        <Todo
          tasks={tasks}
          addTask={addTask}
          deleteTask={deleteTask}
          moveTask={moveTask}
        />

        <InProgress tasks={tasks} deleteTask={deleteTask} moveTask={moveTask} />

        <Done tasks={tasks} deleteTask={deleteTask} moveTask={moveTask} />
      </div>
    </div>
  );
}

export default App;
