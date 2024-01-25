'use client'
import ButtonLogin from "@/app/components/ButtonLogin"
import Input from "@/app/components/Input"
import InputImage from "@/app/components/InputImage"
import SelectFilter from "@/app/components/SelectFilter"
import TextArea from "@/app/components/TextArea"
import { ArticleForm } from "@/app/lib/definitions"
import { useState } from "react"
import validate from "./validate"
import SpinLoader from "@/app/components/componentSVG/SpinLoader"
import axios from "axios"
import { uploadImage } from "@/app/lib/firebase/config"


const FormNewArticle = () => {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
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
    if(Object.values(article).some(x => x === '' || x === null)) {
      setMessage('*Todos los campos son obligatorios')
      return
    } else if (Object.values(articleError).some(x => x !== '')) {
      setMessage('*Verifica los errores')
      return
    }
    setLoading(true)
    
    axios.post('/api/createarticle', {
      ...article,
      title: article.title.trim(),
      content: article.content.trim(),
      author: article.author.trim(),
      image: imageUrl
    }, { withCredentials: true })
      .then(res => {
        setMessage(res.data.message)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center w-full gap-6">
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
      <p className={`${message === '' ? 'hidden' : ''} text-sm font-medium text-center rounded-lg ${message === 'Articulo creado' ? 'text-green-800 bg-green-300' : 'text-red-800 bg-red-300'} py-1 px-1`}>{message}</p>
      <ButtonLogin text="Crear Artículo" dark={true} type="submit" disabled={loading} />
    </form>
  )
}
 
export default FormNewArticle
