import logo from './logo.svg';
import './App.css';

function Login() {
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
          <td colspan="2"><button>Login</button></td>
        </tr>
      </table>
    </div>
  );
}

export default Login;
