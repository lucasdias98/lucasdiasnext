import { useState, useEffect } from "react";

function CSR() {
    const [lista, setLista] = useState([]);

    useEffect(() => {
        //  fetch(`${process.env.NEXT_PUBLIC_API_URL}/clientes`)
        // por algum motivo deu errado com o /clientes
        fetch(`${process.env.NEXT_PUBLIC_API_URL}clientes`)
            .then(response => response.json())
            .then(json => setLista(json))
    }, []);

    return (
        <div>
            <h1> Lucas PETSHOP - CSR</h1>
            <table>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Telefone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        lista.map(obj => (
                            <tr key={obj.codigo}>
                                <td>{obj.codigo}</td>
                                <td>{obj.nome}</td>
                                <td>{obj.telefone}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CSR;