function SSR({ clientes }) {
    return (
        <div>
            <h1>Aprendendo NextJS - CSR</h1>
            <table>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        clientes.map(obj => (
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

export default SSR;

export async function getServerSideProps() {
    //const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/clientes`);
    // por algum motivo deu errado com o /clientes
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}clientes`);
    const clientes = await res.json();

    return {
        props: {
            clientes
        }
    }
}