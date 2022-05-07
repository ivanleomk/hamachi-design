import React from "react";
import { SpinnerCircularFixed } from "spinners-react";

type ContactFormSubmitButtonProps = {
  loading: boolean;
  onClick: () => void;
};

const ContactFormSubmitButton = ({
  loading,
  onClick,
}: ContactFormSubmitButtonProps) => {
  return (
    <div className="relative">
      {!loading ? (
        <button
          type="submit"
          onClick={() => onClick()}
          className="inline-block w-full px-5 py-4 text-xl font-medium text-center text-white transition duration-200 bg-yellow-300 rounded-lg hover:bg-yellow-400 ease"
        >
          Submit
        </button>
      ) : (
        <div className="flex items-center justify-center inline-block w-full px-5 py-4 text-xl font-medium text-center text-white transition duration-200 bg-yellow-300 rounded-lg hover:bg-yellow-400 ease">
          <SpinnerCircularFixed
            size={30}
            secondaryColor={"'rgba(0,0,0,0.44)'"}
            speed={200}
          />
        </div>
      )}
    </div>
  );
};

export default ContactFormSubmitButton;
