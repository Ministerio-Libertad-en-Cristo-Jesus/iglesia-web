'use client'
import ButtonLogin from "@/app/components/ButtonLogin"
import Input from "@/app/components/Input"
import SelectFilter from "@/app/components/SelectFilter"
import TextArea from "@/app/components/TextArea"
import SpinLoader from "@/app/components/componentSVG/SpinLoader"
import axios from "axios"
import { useState } from "react"
import validate from "./validate"

const CreateTaskForm = () => {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [task, setTask] = useState({
    title: '',
    description: '',
    importance: '',
  })
  const [taskErrors, setTaskErrors] = useState({
    title: '',
    description: '',
    importance: ''
  })

  const optionsImportance = [{ value: 'low', text: 'Baja' }, { value: 'mid', text: 'Media' }, { value: 'high', text: 'Alta' }]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setMessage('')
    setTask({
      ...task,
      [name]: value
    })
    setTaskErrors(validate({
      ...task,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(Object.values(task).some(x => x === '')) {
      setMessage('*Todos los campos son obligatorios')
      return
    } else if (Object.values(taskErrors).some(x => x !== '')) {
      setMessage('*Verifica los errores')
      return
    }
    setLoading(true)
    axios.post('/api/createowntask', {
      ...task,
      title: task.title.trim(),
      description: task.description.trim()
    }, { withCredentials: true })
      .then(res => {
        setTask({
          ...task,
          title: '',
          description: '',
          importance: ''
        })
        setMessage(res.data.message)
        setLoading(false)
      })
      .catch(err => {
        setMessage(err.response.data.message)
        setLoading(false)
      })
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center w-full gap-8">
      <div className="flex w-full gap-8">
        <Input name="title" placeholder="Titulo de la tarea" value={task.title} error={false} errorMessage={taskErrors.title} onChange={handleChange} type="text" />
        <SelectFilter name="importance" options={optionsImportance} placeholder="Prioridad" value={task.importance} handleChange={handleChange} />
      </div>
      <TextArea name="description" placeholder="Descripción" value={task.description} error={false} errorMessage={taskErrors.description} onChange={handleChange} />
      <div className={`${loading ? '' : 'hidden'}`}>
        <SpinLoader />
      </div>
      <p className={`${message === '' ? 'hidden' : ''} text-sm font-medium text-center rounded-lg ${message === 'Tarea creada' ? 'text-green-800 bg-green-300' : 'text-red-800 bg-red-300'} py-1 px-1`}>{message}</p>
      <ButtonLogin text="Crear tarea" dark={true} disabled={loading} type="submit" />
    </form>
  )
}
 
export default CreateTaskForm
