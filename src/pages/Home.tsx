import { Bell, MapPin, Users, Map as MapIcon, BookOpen, TrendingUp } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-full bg-gray-50">
      {/* Header */}
      <header className="bg-white px-4 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-semibold">
              R
            </div>
            <div>
              <h1 className="text-lg font-semibold text-gray-900">Good Morning, Ray 👋</h1>
              <div className="flex items-center gap-1 text-sm text-gray-600">
                <MapPin size={14} />
                <span>Tema, Accra</span>
              </div>
            </div>
          </div>
          <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Bell size={24} className="text-gray-700" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-danger rounded-full"></span>
          </button>
        </div>
      </header>

      {/* Content */}
      <div className="px-4 py-6 space-y-6">
        {/* Weather Card */}
        <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl p-6 text-white shadow-lg">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="text-6xl font-bold mb-2">27°</div>
              <div className="text-lg opacity-90">Partly Cloudy</div>
            </div>
            <div className="text-right">
              <div className="text-4xl mb-2">☁️</div>
            </div>
          </div>
          
          <div className="flex gap-6 mb-4">
            <div className="flex items-center gap-2">
              <span className="opacity-75">💧</span>
              <div>
                <div className="text-xs opacity-75">Humidity</div>
                <div className="font-semibold">77%</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="opacity-75">💨</span>
              <div>
                <div className="text-xs opacity-75">Wind Speed</div>
                <div className="font-semibold">15km/h</div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-3">
            <button className="text-sm font-medium opacity-90 hover:opacity-100 transition-opacity">
              Today's Weather Prediction →
            </button>
          </div>

          <div className="mt-3 text-xs opacity-60 text-right">
            Powered by NASA
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-3">
            <button className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow text-left">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-3">
                <Users size={24} className="text-orange-600" />
              </div>
              <div className="font-semibold text-gray-900">Community</div>
              <div className="text-sm text-gray-500">Report</div>
            </button>

            <button className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow text-left">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-3">
                <MapIcon size={24} className="text-green-600" />
              </div>
              <div className="font-semibold text-gray-900">Crop Health</div>
              <div className="text-sm text-gray-500">Map</div>
            </button>

            <button className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow text-left">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                <BookOpen size={24} className="text-blue-600" />
              </div>
              <div className="font-semibold text-gray-900">Advisory</div>
              <div className="text-sm text-gray-500">Library</div>
            </button>

            <button className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow text-left">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-3">
                <TrendingUp size={24} className="text-purple-600" />
              </div>
              <div className="font-semibold text-gray-900">Market</div>
              <div className="text-sm text-gray-500">Prices</div>
            </button>
          </div>
        </div>

        {/* Urgent Alerts */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
          <div className="flex gap-3">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <span className="text-xl">🐛</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="font-semibold text-red-900 mb-1">Fall Armyworm Alert</div>
              <div className="text-sm text-red-700 mb-2">Check your maize fields</div>
              <button className="text-sm font-medium text-red-600 hover:text-red-700">
                View Details →
              </button>
            </div>
          </div>
        </div>

        {/* Upcoming Tasks */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold text-gray-900">Upcoming Tasks</h2>
            <button className="text-sm font-medium text-primary hover:text-primary-dark">
              View All
            </button>
          </div>
          <div className="space-y-3">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 w-5 h-5 text-primary rounded" />
                <div className="flex-1">
                  <div className="font-medium text-gray-900 mb-1">Apply Fertilizer to Maize</div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>📅 Today</span>
                    <span className="px-2 py-0.5 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                      Maize
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 w-5 h-5 text-primary rounded" />
                <div className="flex-1">
                  <div className="font-medium text-gray-900 mb-1">Spray Pesticide on Cassava</div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>📅 Oct 3</span>
                    <span className="px-2 py-0.5 bg-orange-100 text-orange-800 rounded-full text-xs font-medium">
                      Cassava
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 w-5 h-5 text-primary rounded" />
                <div className="flex-1">
                  <div className="font-medium text-gray-900 mb-1">Check Irrigation System</div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>📅 Oct 5</span>
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                      All Crops
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Community Updates */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold text-gray-900">Community Updates</h2>
            <button className="text-sm font-medium text-primary hover:text-primary-dark">
              See All
            </button>
          </div>
          <div className="space-y-3">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-gray-900">Kwame Darquah</span>
                    <span className="text-xs text-gray-500">• 2h ago</span>
                  </div>
                  <div className="text-sm text-gray-700 mb-2">Sprinkle on maize leaves</div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <MapPin size={12} />
                    <span>Kumasi</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-gray-900">Ama Bababara</span>
                    <span className="text-xs text-gray-500">• 5h ago</span>
                  </div>
                  <div className="text-sm text-gray-700 mb-2">Early harvest success</div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <MapPin size={12} />
                    <span>Accra</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
