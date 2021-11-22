import { Container } from "./styles";
import { api } from "../../services/api";
import { useEffect } from "react";

export function TransactionTable() {
  useEffect(() => {
    api.get('/transactions')
    .then(response => console.log(response.data))
  }, [])

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Title</th>
            <th>Title</th>
            <th>Title</th>
          </tr>
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