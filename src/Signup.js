import logo from './logo.svg';
import './App.css';

function Signup() {
  return (
    <div className="App">
      <table border="1">
        <tr>
          <th>ID</th>
          <td><input type="text"></input></td>
        </tr>
        <tr>
          <th>PW</th>
          <td><input type="password"></input></td>
        </tr>
        <tr>
          <th>이름</th>
          <td><input type="text"></input></td>
        </tr>
        <tr>
          <th>전화번호</th>
          <td><input type="number"></input></td>
        </tr>
        <tr>
          <td colspan="2"><button>Signup</button></td>
        </tr>
      </table>
    </div>
  );
}

export default Signup;
