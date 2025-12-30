import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login(){
  const [email, setEmail] = useState('')
  const {login} = useContext(AuthContext)
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    login(email);
    navigate('/dashboard')
  }
  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input type="email" 
      placeholder="Email"
      required onChange={(e) => setEmail(e.target.value)}
      />
      <button>Login</button>

    </form>
  )
}