 export const Contact =  () =>  {
    return (
         <div className="grid gap-12 md:grid-cols-2">
            {/* Left Side: Contact Info */}
            <div className="space-y-4 text-lg">
              <p className="font-semibold text-slate-900">
                Waterfront Law Center
              </p>
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

            {/* Right Side: Map and Directions Button */}
            <div className="space-y-5">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                {/* Loading placeholder with skeleton animation */}
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-slate-100 animate-pulse">
                  <div className="text-center">
                    <div className="h-8 w-8 animate-spin rounded-full border-4 border-teal-600 border-t-transparent mx-auto mb-2"></div>
                    <p className="text-sm text-slate-600">Loading map...</p>
                  </div>
                </div>
                
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2678.966774643538!2d-122.38382402375545!3d47.81180417122176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54901b8b832b872b%3A0x10344b58e7275782!2s144%20Railroad%20Ave%2C%20Edmonds%2C%20WA%2098020!5e0!3m2!1sen!2sus!4v1668822233157!5m2!1sen!2sus"
                  className="h-80 w-full border-0 relative z-20"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Waterfront Law Center Location Map"
                  onLoad={(e) => {
                    // Hide loading indicator when iframe loads
                    const loadingDiv = e.target.parentNode.querySelector('.absolute');
                    if (loadingDiv) {
                      loadingDiv.style.display = 'none';
                    }
                  }}
                ></iframe>
              </div>
              
              {/* Quick action button */}
              <div className="text-center">
                <a
                  href="https://maps.google.com/?q=144+Railroad+Avenue,+Edmonds,+WA+98020"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-teal-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-teal-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Get Directions
                </a>
              </div>
            </div>
          </div>
    )
}
