import { useDraggable } from "@dnd-kit/core";

function TaskCard({ task, children }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        zIndex: 10,
      }
    : undefined;

  return (
    <div ref={setNodeRef} style={style} className="relative">
      <div className="bg-[#252936] rounded-lg p-4 mb-3">
        <div className="flex items-center gap-3">
          <button
            {...listeners}
            {...attributes}
            className="text-gray-500 hover:text-gray-300 cursor-grab active:cursor-grabbing text-lg"
            title="Drag task"
          >
            ||
          </button>

          <div className="flex-1 min-w-0">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
