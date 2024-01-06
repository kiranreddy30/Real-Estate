import React from "react";

function Profile() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="font-semibold text-center my-7 text-3xl">Profile</h1>
      

      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          id="username"
          className="border rounded-lg p-3"
        ></input>
        <input
          type="text"
          placeholder="email"
          id="email"
          className="border rounded-lg p-3"
        ></input>
        <input
          type="text"
          placeholder="password"
          id="password"
          className="border rounded-lg p-3"
        ></input>

        <button className="bg-slate-600 rounded-lg py-3 text-white uppercase">Update</button>
        
        
      </form>
    </div>
  );
}

export default Profile;
