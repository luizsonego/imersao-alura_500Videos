import React, { useState } from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'
import FormField from '../../../components/FormField'

function CadastroCategoria() {
  const initialValues = {
    name: '',
    description: '',
    color: '',
  }
  const [categorias, setCategorias] = useState([])
  const [formValues, setFormValues] = useState(initialValues)


  function setFormValue(chave, value) {
    setFormValues({
      ...formValues,
      [chave]: value
    })
  }

  function handleChangeCategoria (e) {
    setFormValue(
      e.target.getAttribute('name'), 
      e.target.value
    )
  }

  const handleSubmiting = e => {
    e.preventDefault()
    setCategorias([
      ...categorias,
      formValues
    ])

    setFormValues(initialValues)
  }

  return (
    <PageDefault>
      <h1>Cadastro Categoria: {formValues.name}</h1>
      <Link to="/">Ir para a Home</Link>

      <form onSubmit={handleSubmiting}>
        <FormField 
          type="text"
          name="name"
          label="Nome"
          value={formValues.name}
          onChange={handleChangeCategoria}
        />

        <FormField 
          type="text"
          name="description"
          label="Descrição"
          value={formValues.description}
          onChange={handleChangeCategoria}
        />

        <FormField 
          type="color"
          name="color"
          label="Cor"
          value={formValues.color}
          onChange={handleChangeCategoria}
        />


        <button>Cadastrar</button>
      </form>

      <ul>
          {categorias.map((categoria, index) => {
            return (
              <li key={index}>
                {categoria.name}
              </li>
              )

          })}
      </ul>

    </PageDefault>
  )
}

export default CadastroCategoria
