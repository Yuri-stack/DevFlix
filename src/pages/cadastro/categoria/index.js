import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageTemplate from '../../../components/PageTemplate';
import FormField from '../../../components/FormField';

function CadastroCategoria(){
    
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }
    
    const [categorias, setCategorias] = useState([])
    const [values, setValues] = useState(valoresIniciais);

    function atualizaValor(chave, valor){
        setValues({
            ...values,
            [chave]: valor,
        })
    }

    function handleChange(e) {
        atualizaValor(
            e.target.getAttribute('name'),
            e.target.value
        )
      }

    return (
        <PageTemplate>
            <h1>Cadastro de Categoria: {values.nome}</h1>

            <form onSubmit={function handleSubmit(e){
                e.preventDefault()

                setCategorias([
                    ...categorias,
                    values
                ])

                setValues(valoresIniciais)
            }}>

                <FormField
                    label="Nome da Categoria:"
                    type="text"
                    name="nome"
                    value={values.nome}
                    onChange={handleChange}
                />

                <FormField
                    label="Descrição:"
                    type=""
                    name="descricao"
                    value={values.descricao}
                    onChange={handleChange}
                />

                {/* <div>
                    <label>
                        Descrição:
                        <textarea 
                            type="text"
                            value={values.descricao}
                            name="descricao"
                            onChange={handleChange}
                        />
                    </label>
                </div> */}

                <FormField
                    label="Cor"
                    type="color"
                    name="cor"
                    value={values.cor}
                    onChange={handleChange}
                />

                {/* <div>
                    <label>
                        Descrição:
                        <textarea 
                            type="text"
                            value={valores.descricao}
                            name="descricao"
                            onChange={handleChange}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Cor:
                        <input 
                            type="color"
                            value={valores.cor}
                            name="cor"
                            onChange={handleChange}
                        />
                    </label>
                </div> */}

                <button>Cadastrar</button>
            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                    return(
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">
                Ir para o Home
            </Link>
        </PageTemplate>
    )
}

export default CadastroCategoria;