import { Handle } from "reactflow";

export const BaseNode = ({
  title,
  handles = [],
  children,
}) => {
  return (
    <div
      className="
        w-[220px]
        rounded-lg
        border border-slate-200
        bg-white
        shadow-sm
        hover:shadow-md
        transition-shadow
      "
    >
      {/* Handles */}
      {handles.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={handle.position}
          id={handle.id}
          style={handle.style}
          className="!bg-indigo-500 !w-3 !h-3"
        />
      ))}

      {/* Header */}
      <div
        className="
          px-3 py-2
          border-b border-slate-100
          text-sm font-semibold
          text-slate-700
          select-none
        "
      >
        {title}
      </div>

      {/* Content */}
      <div className="p-3 space-y-3 text-sm text-slate-600">
        {children}
      </div>
    </div>
  );
};
