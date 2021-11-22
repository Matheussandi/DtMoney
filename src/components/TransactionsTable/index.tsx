import { Container } from "./styles";

export function TransactionsTable() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className="title">Desenvolvimento de website</td>
                        <td className="positive">R$ 12.000,00</td>
                        <td>Venda</td>
                        <td>12/04/2021</td>
                    </tr>

                    <tr>
                        <td className="title">Hamburge</td>
                        <td className="negative">-R$ 19.00,00</td>
                        <td>Alimentação</td>
                        <td>10/04/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}