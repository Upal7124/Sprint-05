import { useDroppable } from "@dnd-kit/core";
import TaskCard from "./TaskCard";

function Done({ tasks, moveTask }) {
  const doneTasks = tasks.filter((task) => task.status === "done");

  const { setNodeRef } = useDroppable({
    id: "done",
  });

  const priorityStyle = {
    high: "border-l-4 border-red-500",
    medium: "border-l-4 border-yellow-500",
    low: "border-l-4 border-green-500",
  };

  return (
    <div ref={setNodeRef} className="bg-[#181b24] rounded-xl p-5 min-h-[500px]">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-semibold text-white">Done</h2>

        <span className="bg-green-500/10 text-green-400 px-2.5 py-1 rounded-full text-sm">
          {doneTasks.length}
        </span>
      </div>

      <div className="space-y-3">
        {doneTasks.map((task) => (
          <TaskCard key={task.id} task={task}>
            <div className={`rounded-lg ${priorityStyle[task.priority]}`}>
              <div className="flex justify-between items-center gap-3">
                <span className="text-gray-200 break-words">{task.text}</span>

                <button
                  onClick={() => moveTask(task.id, "inprogress")}
                  className="shrink-0 px-3 py-1.5 rounded-md bg-yellow-500/10 text-yellow-400 hover:bg-yellow-500/20"
                >
                  Back
                </button>
              </div>
            </div>
          </TaskCard>
        ))}
      </div>

      {doneTasks.length === 0 && (
        <p className="text-gray-500 text-sm text-center mt-10">
          No completed tasks yet.
        </p>
      )}
    </div>
  );
}

export default Done;
