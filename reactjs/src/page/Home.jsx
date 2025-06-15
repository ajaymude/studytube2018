import React from 'react';

/**
 * Home component for StudyTube application.
 * Displays an overview of the app's features in bullet points.
 */
const Home = () => {
  return (
    <div className="prose mx-auto mt-16 px-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to StudyTube</h1>
      <ul className="list-disc list-inside space-y-2 text-lg">
        <li>📚 Explore a curated collection of educational videos organized by exam, subject, and chapter.</li>
        <li>🔒 Secure access: sign in to track your progress and access premium content.</li>
        <li>🎥 Seamless video player with autoplay and playlist navigation.</li>
        <li>🔍 Dynamic routing: navigate effortlessly between exams, subjects, and chapters.</li>
        <li>🌐 Responsive design: study on any device with a scrollable video library.</li>
        <li>🔔 Personalized recommendations based on your viewing history.</li>
        <li>⚡ Lightning-fast loading with React Router and code splitting.</li>
        <li>🔧 Easy-to-use interface built with Tailwind CSS and modern React patterns.</li>
      </ul>
    </div>
  );
};

export default Home;
