import { Search, BookOpen, Bug, Sprout, Cloud, Satellite, CheckCircle, Calendar } from 'lucide-react';

const Advisory = () => {
  const categories = [
    { icon: BookOpen, label: 'Crop Guides', color: 'bg-blue-100 text-blue-600' },
    { icon: Bug, label: 'Disease ID', color: 'bg-red-100 text-red-600' },
    { icon: Sprout, label: 'Pest Management', color: 'bg-orange-100 text-orange-600' },
    { icon: Cloud, label: 'Climate Adaptation', color: 'bg-green-100 text-green-600' },
    { icon: Satellite, label: 'NASA Insights', color: 'bg-purple-100 text-purple-600' },
    { icon: CheckCircle, label: 'Best Practices', color: 'bg-teal-100 text-teal-600' },
    { icon: Calendar, label: 'Seasonal Tips', color: 'bg-yellow-100 text-yellow-600' },
  ];

  const featuredArticles = [
    {
      id: 1,
      title: 'Complete Guide to Maize Cultivation in Ghana',
      image: 'bg-gradient-to-br from-yellow-200 to-yellow-400',
      readTime: '8 min read',
      category: 'Crop Guides',
    },
    {
      id: 2,
      title: 'Fall Armyworm: Identification and Control',
      image: 'bg-gradient-to-br from-red-200 to-red-400',
      readTime: '5 min read',
      category: 'Pest Management',
    },
  ];

  const recentArticles = [
    {
      id: 1,
      title: 'Best Planting Times for Cassava',
      readTime: '6 min',
      category: 'Crop Guides',
    },
    {
      id: 2,
      title: 'Understanding Satellite Crop Health Data',
      readTime: '10 min',
      category: 'NASA Insights',
    },
    {
      id: 3,
      title: 'Organic Pest Control Methods',
      readTime: '7 min',
      category: 'Best Practices',
    },
  ];

  return (
    <div className="min-h-full bg-gray-50">
      {/* Header */}
      <div className="bg-white px-4 py-4 border-b border-gray-200">
        <h1 className="text-xl font-semibold text-gray-900 mb-4">Advisory Hub</h1>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-6 space-y-6">
        {/* Featured Articles */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Featured</h2>
          <div className="space-y-3">
            {featuredArticles.map((article) => (
              <div key={article.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className={`h-40 ${article.image} flex items-center justify-center`}>
                  <div className="text-6xl">📚</div>
                </div>
                <div className="p-4">
                  <div className="text-xs text-primary font-medium mb-1">{article.category}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{article.title}</h3>
                  <div className="text-sm text-gray-500">{article.readTime}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Browse Topics</h2>
          <div className="grid grid-cols-2 gap-3">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <button
                  key={index}
                  className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow text-left"
                >
                  <div className={`w-12 h-12 rounded-full ${category.color} flex items-center justify-center mb-3`}>
                    <Icon size={24} />
                  </div>
                  <div className="font-medium text-gray-900 text-sm">{category.label}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Recently Viewed */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold text-gray-900">Recently Viewed</h2>
            <button className="text-sm font-medium text-primary hover:text-primary-dark">
              View All
            </button>
          </div>
          <div className="space-y-3">
            {recentArticles.map((article) => (
              <div key={article.id} className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-xs text-primary font-medium mb-1">{article.category}</div>
                <h3 className="font-medium text-gray-900 mb-1">{article.title}</h3>
                <div className="text-sm text-gray-500">{article.readTime}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advisory;
