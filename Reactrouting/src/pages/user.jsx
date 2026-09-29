import {useParams} from "react-router-dom";

export default function User() {
  const { id } = useParams();

  return (
    <main className="min-h-screen bg-white-950 text-black flex flex-col justify-center items-center px-6 relative overflow-hidden">
      <div className="max-w-lg w-full bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center shadow-xl space-y-6">
        <h1 className="text-3xl font-extrabold text-white tracking-tight">
          User Profile
        </h1>
        <p className="text-gray-400">
          This is the profile page for user with ID: {id}
        </p>
      </div>
    </main>
  );
}