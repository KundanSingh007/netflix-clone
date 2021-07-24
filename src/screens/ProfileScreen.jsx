import React from "react";
import Nav from "../Nav";
import "./ProfileScreen.css";
import { auth } from "../firebase";
import avatar from "../avatar.png";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";

function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img src={avatar} alt="" />

          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <p></p>
              <button
                onClick={() => auth.signOut()}
                className="profile__signOut">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
