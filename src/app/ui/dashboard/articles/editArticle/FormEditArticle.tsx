'use client'
import ButtonLogin from "@/app/components/ButtonLogin"
import Input from "@/app/components/Input"
import InputImage from "@/app/components/InputImage"
import SelectFilter from "@/app/components/SelectFilter"
import TextArea from "@/app/components/TextArea"
import { ArticleForm } from "@/app/lib/definitions"
import { useEffect, useState } from "react"
import validate from "./validate"
import SpinLoader from "@/app/components/componentSVG/SpinLoader"
import axios from "axios"
import LoadingDashboard from "@/app/components/LoadingDashboard"

const FormEditArticle = ({ id }: { id: string }) => {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [charged,setCharged] = useState(false)
  const [chargedMessage,setChargedMessage] = useState('NO') 
  const [imageUrl, setImageUrl] = useState('')
  const [article, setArticle] = useState<ArticleForm>({
    title: '',
    author: '',
    image: null,
    content: '',
    type: ''
  })
  const [articleError, setArticleError] = useState({
    title: '',
    author: '',
    content: '',
    type: ''
  })
  const typeArticleOptions =  [{ value: 'preach', text: 'Prédica' }, { value: 'news', text: 'Noticia' }]

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setMessage('')
    setArticle({
      ...article,
      [name]: value
    })
    setArticleError(validate({
      ...article,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setMessage('')
    if(Object.values(article).some(x => x === '')) {
      setMessage('*Todos los campos son obligatorios')
      return
    } else if (Object.values(articleError).some(x => x !== '')) {
      setMessage('*Verifica los errores')
      return
    }
    setLoading(true)
    
    axios.put('/api/updatearticle', {
      ...article,
      title: article.title.trim(),
      content: article.content.trim(),
      author: article.author.trim(),
      image: imageUrl,
      idArticle: id
    }, { withCredentials: true })
      .then(res => {
        setMessage(res.data.message)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err.response.data.message)
        setLoading(false)
      })
  }

  useEffect(() => {
    axios.post('/api/extractarticle', { id }, { withCredentials: true })
      .then((res) => {
        console.log(res.data)
        setArticle({
          ...article,
          title: res.data.title,
          author: res.data.author,
          type: res.data.type,
          content: res.data.content.join('\n\n'),
        })
        setCharged(true)
        setChargedMessage('OK')
      })
      .catch((err) => {
        console.log(err.response.data.message)
        setCharged(true)
        setChargedMessage('NO')
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return (
    <div className="w-full">
      {
        charged
        ? chargedMessage === 'OK' ? <form onSubmit={handleSubmit} className="flex flex-col items-center w-full gap-6">
            <InputImage article={article} setArticle={setArticle} setImage={setImageUrl} />
            <Input name="title" placeholder="Título" value={article.title} error={false} errorMessage={articleError.title} onChange={handleChange} type="text" />
            <div className="flex w-full gap-8">
              <Input name="author" placeholder="Predicador" value={article.author} error={false} errorMessage={articleError.author} onChange={handleChange} type="text" />
              <SelectFilter options={typeArticleOptions} name='type' placeholder="Tipo de artículo" value={article.type} handleChange={handleChange} />
            </div>
            <TextArea name="content" placeholder="Contenido" value={article.content} error={false} errorMessage={articleError.content} onChange={handleChange} />
            <div className={`${loading ? '' : 'hidden'}`}>
              <SpinLoader />
            </div>
            <p className={`${message === '' ? 'hidden' : ''} text-sm font-medium text-center rounded-lg ${message === 'Articulo editado correctamente' ? 'text-green-800 bg-green-300' : 'text-red-800 bg-red-300'} py-1 px-1`}>{message}</p>
            <ButtonLogin text="Editar Artículo" dark={true} type="submit" disabled={loading} />
          </form>
          : <p className="text-center text-red-800 font-medium">No se encontró el artículo</p>
        : <LoadingDashboard />
      }
    </div>
  )
}
 
export default FormEditArticle
