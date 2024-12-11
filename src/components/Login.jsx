import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
const Login = () => {
  const [emailId, setEmailId] = useState("elon123@gmail.com");
  const [password, setPassword] = useState("Test@123##");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res.data));
      navigate("/");
    } catch (error) {
      setError(error?.response?.data || "Someting went wrong!");
      console.log("Login Error:", error);
    }
  };
  return (
    <div className="flex justify-center my-10">
      <div className="card bg-primary text-primary-content w-96">
        <div className="card-body">
          <h2 className="card-title justify-center">Login to DevTinder</h2>
          <div>
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text text-black ">
                  Email ID : {emailId}
                </span>
              </div>
              <input
                type="text"
                value={emailId}
                placeholder="Enter Email ID"
                className="input input-bordered w-full max-w-xs text-white"
                onChange={(e) => setEmailId(e.target.value)}
              />
            </label>
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text text-black ">Password</span>
              </div>
              <input
                type="text"
                value={password}
                placeholder="Enter Password"
                className="input input-bordered w-full max-w-xs text-white"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <p className="text-red-800">{error}</p>
          <div className="card-actions justify-center m-2">
            <button className="btn text-white" onClick={() => handleLogin()}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
