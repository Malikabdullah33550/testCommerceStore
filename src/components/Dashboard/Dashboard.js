import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            <div className="grid place-content-center rounded bg-gray-100 p-6 sm:p-8">
              <div className="mx-auto max-w-md text-center lg:text-left">
                <header>
                  <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                    Welcome to the Official Gamica Gaming Store
                  </h2>

                  <p className="mt-4 text-gray-500">
                    We have a wide variety of PC components for you to browse
                    from
                  </p>
                </header>

                <a
                  href="/"
                  className="mt-8 inline-block rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
                >
                  Browse our Store
                </a>
              </div>
            </div>

            <div className="lg:col-span-2 lg:py-8">
              <ul className="grid grid-cols-2 gap-4">
                <li>
                  <Link to="/Computers" className="group block">
                    <img
                      src="/Computers.jpg"
                      alt=""
                      className="aspect-square w-full rounded object-cover"
                    />

                    <div className="mt-3">
                      <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                        Computers
                      </h3>

                      <p className="mt-1 text-sm text-gray-700">Click to Explore</p>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link to="/Monitors" className="group block">
                    <img
                      src="/Monitors.jpg"
                      alt=""
                      className="aspect-square w-full rounded object-cover"
                    />

                    <div className="mt-3">
                      <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                        Monitors
                      </h3>

                      <p className="mt-1 text-sm text-gray-700">Click to Explore</p>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
