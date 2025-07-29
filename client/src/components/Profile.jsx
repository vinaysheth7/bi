import { useSelector } from "react-redux"

const ProfileCard = () => {
  const user = useSelector((store) => store.user);



  


  if (!user) {
    return (
      <div className="text-center text-gray-500 mt-20">
        <p>No user data available. Please log in.</p>
      </div>
    );
  }

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 p-6 text-center my-40">
      <img
        src={user?.photoUrl}
        alt={`${user?.firstName} ${user?.lastName}`}
        className="w-24 h-24 mx-auto rounded-full object-cover border-2 border-indigo-600 mb-4"
      />

      <h2 className="text-xl font-bold text-gray-900 mb-1">
        {user?.firstName} {user?.lastName}
      </h2>

      <p className="text-sm text-gray-700 mb-1">
        <span className="font-semibold">Email:</span> {user?.emailId}
      </p>

      <p className="text-sm text-gray-700 break-words">
        <span className="font-semibold">Profile URL:</span>{" "}
        <a
          href={user?.profileUrl}
          className="text-indigo-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {user?.profileUrl}
        </a>
      </p>
    </div>
  );
};

export default ProfileCard;
