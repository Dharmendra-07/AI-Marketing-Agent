import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Signup(){
  const [email, setEmail] = useState('')
  const {login} = useContext(AuthContext)
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    login(email);
    navigate('/dashboard')
  }
  return (
    <form onSubmit={handleSignup}>
      <h2>Signup</h2>
      <input type="email" 
      placeholder="Email"
      required onChange={(e) => setEmail(e.target.value)}
      />
      <button>Signup</button>
    </form>
  )
}