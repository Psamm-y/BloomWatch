import { ChevronRight, User, MapPin, Bell, Globe, Database, HelpCircle, Info, Share2, LogOut } from 'lucide-react';

const Settings = () => {
  const menuItems = [
    { icon: User, label: 'Edit Profile', color: 'text-blue-600' },
    { icon: MapPin, label: 'My Farm Details', color: 'text-green-600' },
    { icon: Bell, label: 'Notification Settings', color: 'text-orange-600' },
    { icon: Globe, label: 'Language & Region', color: 'text-purple-600' },
    { icon: Database, label: 'Data Usage', color: 'text-teal-600' },
    { icon: HelpCircle, label: 'Help & Support', color: 'text-indigo-600' },
    { icon: Info, label: 'About BloomWatch', color: 'text-gray-600' },
    { icon: Share2, label: 'Share with Others', color: 'text-pink-600' },
  ];

  return (
    <div className="min-h-full bg-gray-50">
      {/* Header */}
      <div className="bg-white px-4 py-4 border-b border-gray-200">
        <h1 className="text-xl font-semibold text-gray-900">More</h1>
      </div>

      {/* Profile Card */}
      <div className="bg-white px-4 py-6 border-b border-gray-200">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-semibold">
            R
          </div>
          <div className="flex-1">
            <div className="font-semibold text-gray-900 text-lg">Ray</div>
            <div className="text-sm text-gray-600">+233 XX XXX XXXX</div>
            <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
              <MapPin size={14} />
              <span>Tema, Accra</span>
            </div>
          </div>
          <button className="text-primary hover:text-primary-dark">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Menu Items */}
      <div className="px-4 py-4 space-y-2">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              key={index}
              className="w-full bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow flex items-center gap-3"
            >
              <div className={`w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center ${item.color}`}>
                <Icon size={20} />
              </div>
              <div className="flex-1 text-left font-medium text-gray-900">{item.label}</div>
              <ChevronRight size={20} className="text-gray-400" />
            </button>
          );
        })}
      </div>

      {/* Logout Button */}
      <div className="px-4 py-4">
        <button className="w-full bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow flex items-center justify-center gap-2 text-red-600 font-medium">
          <LogOut size={20} />
          <span>Log Out</span>
        </button>
      </div>

      {/* App Version */}
      <div className="px-4 py-4 text-center text-sm text-gray-500">
        BloomWatch v1.0.0
      </div>
    </div>
  );
};

export default Settings;
