import { useState } from "react"
import { Input } from "../Input"

// eslint-disable-next-line react/prop-types
export const AddTask = ({ onAddTaskClick, }) => {
    const [titulo, setTitulo] = useState("")
    const [descricao, setDescricao] = useState("")

    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col  ">

            <Input
                type="text"
                placeholder="Digite o título"
                value={titulo}
                onChange={(event) => setTitulo(event.target.value)} />
            <Input
                type="text"
                placeholder="Digite sua tarefa"
                value={descricao}
                onChange={(event) => setDescricao(event.target.value)} />
            <button
                className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
                type="submit"
                onClick={() => {
                    if (!titulo.trim() || !descricao.trim()) {
                        return alert("Preencha o título e a descrição da tarefa");
                    }
                    onAddTaskClick(titulo, descricao)
                    setDescricao("")
                    setTitulo("")
                }}>Adicionar</button>
        </div>
    )
}