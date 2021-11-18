import { Container } from "./styles";

export function TransactionTable() {
  return(
    <Container>
      <table>
        <thead>
          <th>Title</th>
          <th>Title</th>
          <th>Title</th>
          <th>Title</th>
        </thead>

        <tbody>
          <tr>
            <td>blabla</td>
            <td className="withdraw">blabla</td>
            <td>blabla</td>
            <td>blabla</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>blabla</td>
            <td className="withdraw">blabla</td>
            <td>blabla</td>
            <td>blabla</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>blabla</td>
            <td className="deposit">blabla</td>
            <td>blabla</td>
            <td>blabla</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>blabla</td>
            <td className="deposit">blabla</td>
            <td>blabla</td>
            <td>blabla</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}