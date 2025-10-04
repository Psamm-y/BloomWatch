import { MapPin, MessageCircle, Users, Plus } from 'lucide-react';

const Community = () => {
  const reports = [
    {
      id: 1,
      user: 'Kwame Darquah',
      avatar: 'bg-gradient-to-br from-green-400 to-green-600',
      location: 'Kumasi, Ashanti',
      distance: '12 km away',
      time: '2h ago',
      title: 'Sprinkle on maize leaves',
      description: 'I noticed white powdery spots on my maize leaves this morning...',
      image: 'bg-green-200',
      crop: 'Maize',
      issueType: 'Disease',
      confirmations: 5,
      comments: 3,
    },
    {
      id: 2,
      user: 'Ama Bababara',
      avatar: 'bg-gradient-to-br from-blue-400 to-blue-600',
      location: 'Accra',
      distance: '5 km away',
      time: '5h ago',
      title: 'Early harvest success',
      description: 'Harvested my cassava 2 weeks early thanks to the app alerts...',
      image: 'bg-yellow-200',
      crop: 'Cassava',
      issueType: 'Success Story',
      confirmations: 12,
      comments: 8,
    },
    {
      id: 3,
      user: 'Kofi Mensah',
      avatar: 'bg-gradient-to-br from-purple-400 to-purple-600',
      location: 'Tamale, Northern',
      distance: '45 km away',
      time: '1d ago',
      title: 'Pest control question',
      description: 'What is the best organic pesticide for fall armyworm?',
      image: 'bg-orange-200',
      crop: 'Maize',
      issueType: 'Pest',
      confirmations: 8,
      comments: 15,
    },
  ];

  return (
    <div className="min-h-full bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white px-4 py-4 border-b border-gray-200">
        <h1 className="text-xl font-semibold text-gray-900 mb-4">Community Reports</h1>

        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          <button className="px-4 py-2 bg-primary text-white rounded-full text-sm font-medium whitespace-nowrap">
            📍 My Region
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 whitespace-nowrap">
            🌍 All Regions
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 whitespace-nowrap">
            By Crop
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 whitespace-nowrap">
            By Issue
          </button>
        </div>
      </div>

      {/* Reports List */}
      <div className="px-4 py-4 space-y-4">
        {reports.map((report) => (
          <div key={report.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
            {/* Report Image */}
            <div className={`h-48 ${report.image} flex items-center justify-center text-gray-400`}>
              <div className="text-6xl">🌾</div>
            </div>

            {/* Report Content */}
            <div className="p-4">
              {/* User Info */}
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-full ${report.avatar}`}></div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-gray-900">{report.user}</div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <MapPin size={12} />
                    <span>{report.location}</span>
                    <span>•</span>
                    <span>{report.distance}</span>
                    <span>•</span>
                    <span>{report.time}</span>
                  </div>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="font-semibold text-gray-900 mb-2">{report.title}</h3>
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">{report.description}</p>

              {/* Tags */}
              <div className="flex gap-2 mb-3">
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                  {report.crop}
                </span>
                <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">
                  {report.issueType}
                </span>
              </div>

              {/* Engagement */}
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Users size={16} />
                  <span>{report.confirmations} others reported this</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle size={16} />
                  <span>{report.comments}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-24 right-4 w-14 h-14 bg-primary text-white rounded-full shadow-lg hover:bg-primary-dark transition-colors flex items-center justify-center">
        <Plus size={24} />
      </button>
    </div>
  );
};

export default Community;
