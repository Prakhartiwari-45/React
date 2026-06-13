import React from "react";

// Card component
// Props:
// - username: string to display as the card title
// - link: optional text for the button (defaults to "Visit Me")
function Card({ username, link = "Visit Me" }) {
  // quick debug to see the passed username in console
  // console.log("props", username);

  // Root container: relatively positioned card with fixed size and rounded corners
  return (
    <div className="relative h-[400px] w-[300px] rounded-md">
      {/* Background image (covers the whole card) */}
      <img
        src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        alt="AirMax Pro"
        class="h-full w-full rounded-md object-cover"
      />  

      {/* Gradient overlay to improve text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>

      {/* Content area positioned at the bottom-left of the card */}
      <div className="absolute bottom-4 left-4 text-left">
        {/* Username/title */}
        <h1 className="text-lg font-semibold text-white">{username}</h1>

        {/* Short description */}
        <p className="mt-2 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          debitis?
        </p>

        {/* Action button; shows the provided link text or the default */}
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          {link || "Visit Me"}
        </button>
      </div>
    </div>
  );
}

export default Card;
