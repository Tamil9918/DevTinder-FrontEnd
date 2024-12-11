import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../utils/constants";
import UserCard from "./UserCard";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [age, setAge] = useState(user.age);
  const [gender, setGender] = useState(user.gender);
  const [about, setAbout] = useState(user.about);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);
  const dispatch = useDispatch();
  const saveProfile = async () => {
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        { firstName, lastName, photoUrl, age, gender, about },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data?.data));
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (error) {
      setError(error.response.data);
    }
  };
  return (
    <>
      <div className="flex justify-center my-10">
        <div className="flex justify-center mx-10">
          <div className="card bg-primary text-primary-content w-96">
            <div className="card-body">
              <h2 className="card-title justify-center">Edit Profile</h2>
              <div>
                <label className="form-control w-full max-w-xs my-2">
                  <div className="label">
                    <span className="label-text text-black ">First Name</span>
                  </div>
                  <input
                    type="text"
                    value={firstName}
                    placeholder="Enter First Name"
                    className="input input-bordered w-full max-w-xs text-white"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </label>
                <label className="form-control w-full max-w-xs my-2">
                  <div className="label">
                    <span className="label-text text-black ">Last Name</span>
                  </div>
                  <input
                    type="text"
                    value={lastName}
                    placeholder="Enter Last Name"
                    className="input input-bordered w-full max-w-xs text-white"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </label>
                <label className="form-control w-full max-w-xs my-2">
                  <div className="label">
                    <span className="label-text text-black ">Age</span>
                  </div>
                  <input
                    type="text"
                    value={age}
                    placeholder="Enter Age"
                    className="input input-bordered w-full max-w-xs text-white"
                    onChange={(e) => setAge(e.target.value)}
                  />
                </label>
                <label className="form-control w-full max-w-xs my-2">
                  <div className="label">
                    <span className="label-text text-black ">Gender</span>
                  </div>
                  <input
                    type="text"
                    value={gender}
                    placeholder="Enter Gender"
                    className="input input-bordered w-full max-w-xs text-white"
                    onChange={(e) => setGender(e.target.value)}
                  />
                </label>
                <label className="form-control w-full max-w-xs my-2">
                  <div className="label">
                    <span className="label-text text-black ">About</span>
                  </div>
                  <input
                    type="text"
                    value={about}
                    placeholder="Enter About"
                    className="input input-bordered w-full max-w-xs text-white"
                    onChange={(e) => setAbout(e.target.value)}
                  />
                </label>
                <label className="form-control w-full max-w-xs my-2">
                  <div className="label">
                    <span className="label-text text-black ">Photo Url</span>
                  </div>
                  <input
                    type="text"
                    value={photoUrl}
                    placeholder="Enter Photo Url"
                    className="input input-bordered w-full max-w-xs text-white"
                    onChange={(e) => setPhotoUrl(e.target.value)}
                  />
                </label>
              </div>

              <div className="card-actions justify-center m-2">
                <button
                  className="btn text-white"
                  onClick={() => saveProfile()}
                >
                  Save Profile
                </button>
              </div>
              {error && <p className="flex justify-center">{error}</p>}
            </div>
          </div>
        </div>
        <UserCard
          user={{ firstName, lastName, photoUrl, age, gender, about }}
        />
      </div>
      {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Profile Saved Successfully.</span>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProfile;
