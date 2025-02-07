/* eslint-disable react/prop-types */
import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";

export const Task = (props) => {
    const navigate = useNavigate();

    function onSeeDetailClick(task) {
        const query = new URLSearchParams();
        query.set("titulo", task.titulo);
        query.set("descricao", task.descricao);
        navigate(`/task?${query.toString()}`);
    }
    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">{props.tasks.map((task) => (
            <li key={task.id} className="flex gap-2">
                <button
                    onClick={() => { props.onTaskClick(task.id) }}
                    className={`bg-slate-400 text-white w-full p-2 rounded-md ${task.isCompleted && "line-through"}`}>
                    {task.titulo}</button>
                <Button
                    onClick={() => {
                        onSeeDetailClick(task)
                    }}>
                    <ChevronRightIcon />
                </Button>
                <Button onClick={() => props.onDeleteTaskClick(task.id)} className="bg-slate-400 p-2 rounded-md text-white">
                    <TrashIcon />
                </Button>
            </li>
        ))}
        </ul>
    );
}
