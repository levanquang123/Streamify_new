import { useState } from "react";
import { CameraIcon } from "lucide-react";
const OnboardingPage = () => {
  const [formState, setFormState] = useState({
    fullName: "Nguyen Van A",
    bio: "Hello world",
    nativeLanguage: "Vietnamese",
    learningLanguage: "English",
    location: "Hanoi",
    profilePic: "/anhnen.jpg",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submit: " + JSON.stringify(formState));
  };

  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center p-4">
      <div className="card bg-base-200 w-full max-w-3xl shadow-xl">
        <div className="card-body p-6 sm:p-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">
            Complete Your Profile
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="size-32 rounded-full bg-base-300 overflow-hidden">
                {formState.profilePic ? (
                  <img
                    src={formState.profilePic}
                    alt="Profile Preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <CameraIcon className="size-12 text-base-content opacity-40" />
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OnboardingPage;
