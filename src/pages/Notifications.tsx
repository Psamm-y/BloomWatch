import { Bell, AlertTriangle, Cloud, TrendingUp, Users } from 'lucide-react';

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      type: 'alert',
      icon: AlertTriangle,
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600',
      title: 'Fall Armyworm Alert',
      description: 'Outbreak detected in Ashanti Region',
      time: '2 hours ago',
      unread: true,
    },
    {
      id: 2,
      type: 'weather',
      icon: Cloud,
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      title: 'Heavy Rainfall Expected',
      description: 'Expected rainfall: 25-40mm tomorrow',
      time: '5 hours ago',
      unread: true,
    },
    {
      id: 3,
      type: 'market',
      icon: TrendingUp,
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      title: 'Maize Price Increase',
      description: 'Price increased by 5.2% to ₵250/bag',
      time: '1 day ago',
      unread: false,
    },
    {
      id: 4,
      type: 'community',
      icon: Users,
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      title: 'New Community Report',
      description: 'Kwame Darquah reported an issue nearby',
      time: '2 days ago',
      unread: false,
    },
  ];

  return (
    <div className="min-h-full bg-gray-50">
      {/* Header */}
      <div className="bg-white px-4 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold text-gray-900">Notifications</h1>
          <button className="text-sm font-medium text-primary hover:text-primary-dark">
            Mark All as Read
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="bg-white px-4 py-3 border-b border-gray-200 overflow-x-auto">
        <div className="flex gap-2 min-w-max">
          <button className="px-4 py-2 bg-primary text-white rounded-full text-sm font-medium">
            All
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200">
            Weather
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200">
            Disease & Pests
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200">
            Market
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200">
            Community
          </button>
        </div>
      </div>

      {/* Notifications List */}
      <div className="px-4 py-4 space-y-3">
        {notifications.map((notification) => {
          const Icon = notification.icon;
          return (
            <button
              key={notification.id}
              className="w-full bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow text-left relative"
            >
              {notification.unread && (
                <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full"></div>
              )}
              <div className="flex gap-3">
                <div className={`w-12 h-12 rounded-full ${notification.iconBg} flex items-center justify-center flex-shrink-0`}>
                  <Icon size={24} className={notification.iconColor} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-gray-900 mb-1">{notification.title}</div>
                  <div className="text-sm text-gray-600 mb-2">{notification.description}</div>
                  <div className="text-xs text-gray-500">{notification.time}</div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Notifications;
