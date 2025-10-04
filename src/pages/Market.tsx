import { RefreshCw, TrendingUp, TrendingDown } from 'lucide-react';

const Market = () => {
  const userCrops = [
    {
      id: 1,
      name: 'Maize',
      icon: '🌽',
      price: '₵250',
      unit: 'bag (50kg)',
      change: '+5.2%',
      isPositive: true,
      trend: [20, 25, 22, 28, 30, 27, 32],
    },
    {
      id: 2,
      name: 'Cassava',
      icon: '🥔',
      price: '₵180',
      unit: 'bag (50kg)',
      change: '-2.1%',
      isPositive: false,
      trend: [25, 28, 26, 24, 22, 23, 21],
    },
    {
      id: 3,
      name: 'Rice',
      icon: '🌾',
      price: '₵420',
      unit: 'bag (50kg)',
      change: '+1.8%',
      isPositive: true,
      trend: [35, 33, 36, 38, 37, 39, 40],
    },
  ];

  const allCrops = [
    { name: 'Yam', icon: '🍠', price: '₵320', change: '+3.5%', isPositive: true },
    { name: 'Groundnut', icon: '🥜', price: '₵280', change: '-1.2%', isPositive: false },
    { name: 'Plantain', icon: '🍌', price: '₵150', change: '+0.8%', isPositive: true },
    { name: 'Sorghum', icon: '🌾', price: '₵200', change: '+2.3%', isPositive: true },
  ];

  return (
    <div className="min-h-full bg-gray-50">
      {/* Header */}
      <div className="bg-white px-4 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-xl font-semibold text-gray-900">Market Prices</h1>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <RefreshCw size={20} className="text-gray-700" />
          </button>
        </div>
        <div className="text-sm text-gray-500">Updated 2 hours ago</div>
      </div>

      {/* Content */}
      <div className="px-4 py-6 space-y-6">
        {/* User's Crops */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Your Crops</h2>
          <div className="space-y-3">
            {userCrops.map((crop) => (
              <div key={crop.id} className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{crop.icon}</div>
                    <div>
                      <div className="font-semibold text-gray-900">{crop.name}</div>
                      <div className="text-sm text-gray-500">{crop.unit}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-gray-900">{crop.price}</div>
                    <div
                      className={`text-sm font-medium flex items-center gap-1 ${
                        crop.isPositive ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {crop.isPositive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                      {crop.change}
                    </div>
                  </div>
                </div>

                {/* Mini Trend Chart */}
                <div className="flex items-end gap-1 h-12">
                  {crop.trend.map((value, index) => (
                    <div
                      key={index}
                      className={`flex-1 rounded-t ${
                        crop.isPositive ? 'bg-green-200' : 'bg-red-200'
                      }`}
                      style={{ height: `${(value / Math.max(...crop.trend)) * 100}%` }}
                    ></div>
                  ))}
                </div>
                <div className="text-xs text-gray-500 text-center mt-1">Last 7 days</div>
              </div>
            ))}
          </div>
        </div>

        {/* All Crops */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold text-gray-900">All Crops</h2>
            <button className="text-sm font-medium text-primary hover:text-primary-dark">
              View All
            </button>
          </div>
          <div className="space-y-2">
            {allCrops.map((crop, index) => (
              <div key={index} className="bg-white rounded-xl p-4 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{crop.icon}</div>
                  <div className="font-medium text-gray-900">{crop.name}</div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-gray-900">{crop.price}</div>
                  <div
                    className={`text-sm font-medium ${
                      crop.isPositive ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    {crop.change}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Price Alert CTA */}
        <div className="bg-primary-light/20 border border-primary-light rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="text-3xl">🔔</div>
            <div className="flex-1">
              <div className="font-semibold text-gray-900 mb-1">Set Price Alerts</div>
              <div className="text-sm text-gray-600">Get notified when prices reach your target</div>
            </div>
            <button className="px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors">
              Set Alert
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;
