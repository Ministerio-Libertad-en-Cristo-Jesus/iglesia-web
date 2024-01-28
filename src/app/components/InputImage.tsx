/* eslint-disable @next/next/no-img-element */
'use client'
import { SetStateAction, useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { ArticleForm } from "../lib/definitions"
import ImageIcon from "./componentSVG/ImageIcon"

interface Props {
  article: ArticleForm
  setArticle: React.Dispatch<SetStateAction<ArticleForm>>
  setImage: React.Dispatch<SetStateAction<string>>
}

const InputImage = ({ article, setArticle, setImage }: Props) => {
  const TransformFile = (file: File) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file)
      reader.onloadend = async () => {
        if (typeof reader.result === "string") {
          setImage(reader.result)
        }
      };
    }
  };

  const handleAccept = (acceptedFiles: File[]) => {
    setArticle({...article, image: acceptedFiles[0]})
    TransformFile(acceptedFiles[0])
  }
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files
  }, [])
  const {getRootProps, getInputProps, isDragActive, acceptedFiles, fileRejections} = useDropzone({
    onDrop,
    accept:{
    'image/jpeg': [],
    'image/jpg': [],
    'image/png': [],
    'image/webp': []
    },
    maxFiles: 1,
    onDropAccepted: handleAccept
  })
  return (
    <div className="flex flex-col w-full gap-6">
      {
        article.image
        ? <div className="flex w-full justify-between items-center p-6 bg-grayI rounded-lg">
            <div className="flex items-center gap-4">
              <img src={URL.createObjectURL(article.image)} alt="imagen" className="h-16 w-16 object-cover" />
              <div>
                <p className="font-semibold text-gray-600">{article.image.name}</p>
                <p className="text-gray-600">Peso: {article.image.size}B</p>
              </div>
            </div>
            <button onClick={() => {setArticle({ ...article, image: null })}} className="bg-red-700 text-white py-2 px-4 rounded-lg">Eliminar</button>
          </div>
        : <div {...getRootProps()} className="flex flex-col justify-center items-center w-full rounded-2xl bg-white border-2 border-dashed border-blueI gap-6 p-8">
            <input {...getInputProps()} />
            <ImageIcon />
            <p className="font-semibold text-sm text-gray-500">Arrastra una imagen aquí o haz click para seleccionar una imagen</p>
            <div className="flex gap-3 items-center">
              <p className="font-semibold text-sm text-gray-500">Formatos admitidos:</p>
              <p className="font-semibold text-sm text-gray-500 bg-whiteI py-1 px-2 border border-gray-400 rounded text-center">png</p>
              <p className="font-semibold text-sm text-gray-500 bg-whiteI py-1 px-2 border border-gray-400 rounded text-center">jpeg</p>
              <p className="font-semibold text-sm text-gray-500 bg-whiteI py-1 px-2 border border-gray-400 rounded text-center">jpg</p>
              <p className="font-semibold text-sm text-gray-500 bg-whiteI py-1 px-2 border border-gray-400 rounded text-center">webp</p>
            </div>
          </div>
      }
      <div>
        {
          fileRejections.length > 1 && <p className="w-full text-start bg-red-300 text-red-800 py-3 px-3 rounded-lg">Elige solo un archivo</p>
        }
        {
          fileRejections.length === 1 ? <p className="w-full text-start bg-red-300 text-red-800 py-3 px-3 rounded-lg">Tiene que ser formato PNG, JPEG, JPG o WEBP</p> : null
        }
      </div>
    </div>
  )
}
 
export default InputImage;