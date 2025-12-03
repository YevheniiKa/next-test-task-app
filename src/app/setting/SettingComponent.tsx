"use client";
import React, { useState } from "react";

export default function SettingComponent() {
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorPass, setErrorPass] = useState("");
  const [errorName, setErrorName] = useState("");

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);

    if (value.length > 0 && value.length < 4) {
      setErrorPass("Password must be at least 4 characters");
    } else {
      setErrorPass("");
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);

    if (value.length > 0 && value.length < 4) {
      setErrorName("Name must be at least 4 characters");
    } else {
      setErrorName("");
    }
  };
  const handleSave = () => {
    if (password.length >= 4 && name.length >= 4) {
      alert("Saved!");
    }
  };

  return (
    <div className="flex flex-col gap-[14px] pt-[14px] w-[842px]">
      <div>
        <h4 className="text-[12px] font-semibold text-text-setting-grey pb-2">
          Name
        </h4>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleNameChange}
          minLength={4}
          maxLength={16}
          className={`focus:outline-none focus:shadow-[2px_-2px_12px_-1px_#64C882] focus:border-text-bg-green transition-shadow duration-300 ease-in-out
border-1 border-[#CCCCCC] rounded-[8px] w-[842px] h-14 bg-white text-[#000000] placeholder:text-text-setting-grey placeholder:text-[16px] placeholder:leading-[24px] p-4 ${
            errorName
              ? "border-button-red focus:border-button-red focus:shadow-[2px_-2px_12px_-1px_#D23D3D]"
              : "border-[#CCCCCC]"
          }`}
        />
        {errorName ? (
          <span className="block text-button-red text-[12px] font-normal mt-2">
            {errorName}
          </span>
        ) : (
          <span className="block text-[12px] text-text-setting-grey font-normal leading-[18px] pt-2">
            Your name is between 4 and 12 characters
          </span>
        )}
      </div>

      <div>
        <h4 className="text-[12px] font-semibold text-text-setting-grey pb-2">
          Password
        </h4>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={handlePasswordChange}
          minLength={4}
          maxLength={12}
          className={`focus:outline-none focus:shadow-[2px_-2px_12px_-1px_#64C882] focus:border-text-bg-green transition-shadow duration-300 ease-in-out
border-1 border-[#CCCCCC] rounded-[8px] w-[842px] h-14 bg-white text-[#000000] p-4 placeholder:text-text-setting-grey ${
            errorPass
              ? "border-button-red focus:border-button-red focus:shadow-[2px_-2px_12px_-1px_#D23D3D]"
              : "border-[#CCCCCC]"
          }`}
        />
        {errorPass ? (
          <span className="block text-button-red text-[12px] font-normal mt-2">
            {errorPass}
          </span>
        ) : (
          <span className="block text-[12px] text-text-setting-grey font-normal leading-[18px] pt-2">
            Your password is between 4 and 12 characters
          </span>
        )}
      </div>

      <button
        className={`h-[35px] w-[272px] rounded-[4px] text-[12px] font-bold text-white ml-auto
    ${
      password.length < 4 || name.length < 4
        ? "bg-[#a7a8aa] cursor-not-allowed shadow-sm"
        : "bg-text-bg-green cursor-pointer shadow-md hover:shadow-[5px_5px_5px_0px_rgba(0,_0,_0,_0.2)] transition-shadow duration-300 ease-in-out"
    }`}
        onClick={handleSave}
        disabled={password.length < 4 || name.length < 4}
      >
        Save
      </button>
    </div>
  );
}
