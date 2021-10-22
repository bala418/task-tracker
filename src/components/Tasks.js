import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onnnDelete={onDelete}
          onoToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Tasks;
