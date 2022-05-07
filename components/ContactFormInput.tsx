import React from "react";

type ContactFormInputProps = {
  label: string;
  placeholder: string;
  type: "text" | "textarea";
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

const ContactFormInput = ({
  label,
  placeholder,
  type,
  onChange,
  value,
}: ContactFormInputProps) => {
  return (
    <div className="relative">
      <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">
        {label}
      </label>
      {type === "text" ? (
        <input
          type={type}
          className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e)}
        />
      ) : (
        <textarea
          className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e)}
        />
      )}
    </div>
  );
};

export default ContactFormInput;
