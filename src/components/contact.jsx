import { useState, useCallback } from "react";

export const Contact = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  const handleGetDirections = useCallback(() => {
    const address = encodeURIComponent(
      "144 Railroad Avenue, Edmonds, WA 98020"
    );
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${address}`;
    window.open(mapsUrl, "_blank");
  }, []);

  return (
    <div className="grid gap-12 md:grid-cols-2">
      {/* Left Side: Contact Info */}
      <div className="space-y-4 text-lg">
        <p className="font-semibold text-slate-900">Waterfront Law Center</p>
        <address className="not-italic text-slate-600">
          Waterfront Park Building, Suite 308
          <br />
          144 Railroad Avenue
          <br />
          Edmonds, WA 98020
        </address>
        <div>
          <strong className="text-slate-900">Phone:</strong>{" "}
          <a
            className="text-teal-700 hover:text-teal-600"
            href="tel:14255828165"
          >
            425.582.8165
          </a>
        </div>
        <div>
          <strong className="text-slate-900">Email:</strong>{" "}
          <a
            className="text-teal-700 hover:text-teal-600"
            href="mailto:waterfrontlawcenter@gmail.com"
          >
            waterfrontlawcenter@gmail.com
          </a>
        </div>
      </div>

      {/* Right Side: Enhanced Map and Directions */}
      <div className="space-y-5">
        <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
          {!mapLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse">
              <div className="text-center">
                <div className="w-8 h-8 border-4 border-teal-600 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                <p className="text-sm text-gray-600">Loading map...</p>
              </div>
            </div>
          )}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2678.966774643538!2d-122.38382402375545!3d47.81180417122176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54901b8b832b872b%3A0x10344b58e7275782!2s144%20Railroad%20Ave%2C%20Edmonds%2C%20WA%2098020!5e0!3m2!1sen!2sus!4v1668822233157!5m2!1sen!2sus"
            className="h-80 w-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={() => setMapLoaded(true)}
            title="Waterfront Law Center Location"
          />
        </div>

        {/* Enhanced Directions Button */}
        <button
          onClick={handleGetDirections}
          className="w-full bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
            />
          </svg>
          Get Directions
        </button>

        {/* Additional Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          <a
            href="tel:14255828165"
            className="flex items-center justify-center gap-2 bg-teal-600  hover:bg-teal-700 active:bg-teal-800 text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 text-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Call Now
          </a>
          <a
            href="mailto:waterfrontlawcenter@gmail.com"
            className="flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 text-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            Email
          </a>
        </div>
      </div>
    </div>
  );
};
