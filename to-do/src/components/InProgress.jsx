function InProgress({ tasks, moveTask }) {
  const inProgressTasks = tasks.filter((task) => task.status === "inprogress");
  const priorityStyle = {
    high: "border-l-4 border-red-500",
    medium: "border-l-4 border-yellow-500",
    low: "border-l-4 border-green-500",
  };
  return (
    <div className="bg-[#181b24] rounded-xl p-5 min-h-[500px]">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-semibold text-white">In Progress</h2>

        <span className="bg-yellow-500/10 text-yellow-400 px-2.5 py-1 rounded-full text-sm">
          {inProgressTasks.length}
        </span>
      </div>

      <div className="space-y-3">
        {inProgressTasks.map((task) => (
          <div
            key={task.id}
            className={`bg-[#252936] rounded-lg p-4 mb-3 ${
              priorityStyle[task.priority]
            }`}
          >
            <span className="text-gray-200 break-words">{task.text}</span>

            <div className="flex gap-2 shrink-0">
              <button
                onClick={() => moveTask(task.id, "todo")}
                className="px-3 py-1.5 rounded-md bg-gray-500/10 text-gray-300 hover:bg-gray-500/20 transition"
              >
                Back
              </button>

              <button
                onClick={() => moveTask(task.id, "done")}
                className="px-3 py-1.5 rounded-md bg-green-500/10 text-green-400 hover:bg-green-500/20 transition"
              >
                Done
              </button>
            </div>
          </div>
        ))}
      </div>

      {inProgressTasks.length === 0 && (
        <p className="text-gray-500 text-sm text-center mt-10">
          No tasks in progress.
        </p>
      )}
    </div>
  );
}

export default InProgress;
