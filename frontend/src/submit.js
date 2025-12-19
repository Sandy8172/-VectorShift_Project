import { useStore } from "./store";

export const SubmitButton = () => {
  const nodes = useStore((s) => s.nodes);
  const edges = useStore((s) => s.edges);

  const handleSubmit = async () => {
    console.log(nodes, edges);

    try {
      const response = await fetch("http://localhost:8000/pipelines/parse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nodes, edges }),
      });

      const result = await response.json();

      alert(
        `Pipeline Analysis\n\n` +
          `Nodes: ${result.num_nodes}\n` +
          `Edges: ${result.num_edges}\n` +
          `Is DAG: ${result.is_dag ? "Yes ✅" : "No ❌"}`
      );
    } catch (err) {
      alert("Failed to submit pipeline");
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={handleSubmit}
        className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
      >
        Submit
      </button>
    </div>
  );
};
