import React from "react";
import { useLoaderData } from "react-router-dom";

function GitHub() {
  const data = useLoaderData();

  return (
    <div className="min-h-[calc(100vh-200px)] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Page Heading */}
        <div className="text-center mb-10">
          <p className="text-orange-400 font-semibold tracking-wider uppercase text-sm mb-3">
            GitHub Profile
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Developer Dashboard
          </h1>

          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Explore my GitHub profile, activity, and community presence.
          </p>
        </div>

        {/* Main Profile Card */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
          
          {/* Decorative top section */}
          <div className="h-40 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-400 relative">
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          <div className="px-6 sm:px-10 pb-10">
            
            {/* Profile Image */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between -mt-20 relative">
              
              <div>
                <div className="w-40 h-40 rounded-3xl p-2 bg-slate-900 shadow-2xl">
                  <img
                    src={data.avatar_url}
                    alt={`${data.login}'s GitHub profile`}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>

                <div className="mt-5">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h2 className="text-3xl font-bold text-white">
                      {data.name || data.login}
                    </h2>

                    <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-400 text-sm border border-orange-500/20">
                      @{data.login}
                    </span>
                  </div>

                  {data.bio && (
                    <p className="text-slate-400 mt-3 max-w-2xl">
                      {data.bio}
                    </p>
                  )}
                </div>
              </div>

              <a
                href={data.html_url}
                target="_blank"
                rel="noreferrer"
                className="mt-6 sm:mt-0 inline-flex items-center justify-center gap-2 bg-white text-slate-900 font-semibold px-6 py-3 rounded-xl hover:bg-orange-400 hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                View GitHub
                <span>↗</span>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10">
              
              <div className="group rounded-2xl bg-slate-900/60 border border-white/10 p-6 hover:border-orange-500/40 transition-all duration-300">
                <p className="text-slate-400 text-sm uppercase tracking-wider">
                  Followers
                </p>

                <p className="text-4xl font-bold text-white mt-2 group-hover:text-orange-400 transition-colors">
                  {data.followers}
                </p>

                <p className="text-slate-500 text-sm mt-2">
                  People following this profile
                </p>
              </div>

              <div className="group rounded-2xl bg-slate-900/60 border border-white/10 p-6 hover:border-orange-500/40 transition-all duration-300">
                <p className="text-slate-400 text-sm uppercase tracking-wider">
                  Following
                </p>

                <p className="text-4xl font-bold text-white mt-2 group-hover:text-orange-400 transition-colors">
                  {data.following}
                </p>

                <p className="text-slate-500 text-sm mt-2">
                  Developers being followed
                </p>
              </div>

              <div className="group rounded-2xl bg-slate-900/60 border border-white/10 p-6 hover:border-orange-500/40 transition-all duration-300">
                <p className="text-slate-400 text-sm uppercase tracking-wider">
                  Public Repositories
                </p>

                <p className="text-4xl font-bold text-white mt-2 group-hover:text-orange-400 transition-colors">
                  {data.public_repos}
                </p>

                <p className="text-slate-500 text-sm mt-2">
                  Open source projects
                </p>
              </div>
            </div>

            {/* Extra Information */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
              
              {data.location && (
                <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5">
                  <p className="text-slate-500 text-sm mb-2">
                    LOCATION
                  </p>

                  <p className="text-white font-medium flex items-center gap-2">
                    <span className="text-orange-400">📍</span>
                    {data.location}
                  </p>
                </div>
              )}

              {data.blog && (
                <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5">
                  <p className="text-slate-500 text-sm mb-2">
                    WEBSITE
                  </p>

                  <a
                    href={data.blog}
                    target="_blank"
                    rel="noreferrer"
                    className="text-orange-400 hover:text-orange-300 transition-colors break-all"
                  >
                    {data.blog}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GitHub;

export const githubInfoLoader = async () => {
  const response = await fetch(
    "https://api.github.com/users/priyanshubisht-sudo"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch GitHub profile");
  }

  return response.json();
};