import { Plus, ChevronLeft, ChevronRight } from 'lucide-react';

const Calendar = () => {
  const currentMonth = 'October 2025';
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  // Sample calendar data
  const calendarDays = [
    { day: 27, isCurrentMonth: false },
    { day: 28, isCurrentMonth: false },
    { day: 29, isCurrentMonth: false },
    { day: 30, isCurrentMonth: false },
    { day: 1, isCurrentMonth: true },
    { day: 2, isCurrentMonth: true },
    { day: 3, isCurrentMonth: true, markers: ['fertilizer'] },
    { day: 4, isCurrentMonth: true, isToday: true },
    { day: 5, isCurrentMonth: true, markers: ['planting', 'irrigation'] },
    { day: 6, isCurrentMonth: true },
    { day: 7, isCurrentMonth: true },
    { day: 8, isCurrentMonth: true, markers: ['pest-control'] },
    { day: 9, isCurrentMonth: true },
    { day: 10, isCurrentMonth: true },
    { day: 11, isCurrentMonth: true },
    { day: 12, isCurrentMonth: true },
    { day: 13, isCurrentMonth: true },
    { day: 14, isCurrentMonth: true },
    { day: 15, isCurrentMonth: true, markers: ['harvest'] },
    { day: 16, isCurrentMonth: true },
    { day: 17, isCurrentMonth: true },
    { day: 18, isCurrentMonth: true },
    { day: 19, isCurrentMonth: true },
    { day: 20, isCurrentMonth: true, markers: ['fertilizer'] },
    { day: 21, isCurrentMonth: true },
    { day: 22, isCurrentMonth: true },
    { day: 23, isCurrentMonth: true },
    { day: 24, isCurrentMonth: true },
    { day: 25, isCurrentMonth: true, markers: ['planting'] },
    { day: 26, isCurrentMonth: true },
    { day: 27, isCurrentMonth: true },
    { day: 28, isCurrentMonth: true },
    { day: 29, isCurrentMonth: true },
    { day: 30, isCurrentMonth: true },
    { day: 31, isCurrentMonth: true },
  ];

  const upcomingTasks = [
    {
      id: 1,
      title: 'Apply Fertilizer to Maize',
      date: 'Today',
      crop: 'Maize',
      color: 'yellow',
      icon: '🌱',
    },
    {
      id: 2,
      title: 'Spray Pesticide on Cassava',
      date: 'Oct 3',
      crop: 'Cassava',
      color: 'orange',
      icon: '🧪',
    },
    {
      id: 3,
      title: 'Maize Planting Window',
      date: 'Oct 5',
      crop: 'Maize',
      color: 'yellow',
      icon: '🌾',
    },
    {
      id: 4,
      title: 'Check Irrigation System',
      date: 'Oct 8',
      crop: 'All Crops',
      color: 'blue',
      icon: '💧',
    },
  ];

  const getMarkerColor = (type: string) => {
    switch (type) {
      case 'planting':
        return 'bg-green-500';
      case 'fertilizer':
        return 'bg-blue-500';
      case 'pest-control':
        return 'bg-orange-500';
      case 'harvest':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-full bg-gray-50">
      {/* Header */}
      <div className="bg-white px-4 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-semibold text-gray-900">Calendar</h1>
          <button className="p-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors">
            <Plus size={20} />
          </button>
        </div>

        {/* Month Navigation */}
        <div className="flex items-center justify-between">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <ChevronLeft size={20} className="text-gray-700" />
          </button>
          <h2 className="text-lg font-semibold text-gray-900">{currentMonth}</h2>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <ChevronRight size={20} className="text-gray-700" />
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="bg-white px-4 py-4">
        {/* Days of Week */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {daysOfWeek.map((day) => (
            <div key={day} className="text-center text-xs font-medium text-gray-500 py-2">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-1">
          {calendarDays.map((day, index) => (
            <button
              key={index}
              className={`aspect-square p-1 rounded-lg transition-colors relative ${
                !day.isCurrentMonth
                  ? 'text-gray-300'
                  : day.isToday
                  ? 'bg-primary text-white font-semibold'
                  : 'text-gray-900 hover:bg-gray-100'
              }`}
            >
              <div className="text-sm">{day.day}</div>
              {day.markers && day.markers.length > 0 && (
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex gap-0.5">
                  {day.markers.map((marker, i) => (
                    <div
                      key={i}
                      className={`w-1 h-1 rounded-full ${getMarkerColor(marker)}`}
                    ></div>
                  ))}
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-gray-700">Planting</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span className="text-gray-700">Fertilizer</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-orange-500"></div>
              <span className="text-gray-700">Pest Control</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <span className="text-gray-700">Harvest</span>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Tasks */}
      <div className="px-4 py-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold text-gray-900">Upcoming Tasks</h2>
          <button className="text-sm font-medium text-primary hover:text-primary-dark">
            View All
          </button>
        </div>

        <div className="space-y-3">
          {upcomingTasks.map((task) => (
            <div key={task.id} className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="text-2xl">{task.icon}</div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900 mb-1">{task.title}</div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>📅 {task.date}</span>
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                        task.color === 'yellow'
                          ? 'bg-yellow-100 text-yellow-800'
                          : task.color === 'orange'
                          ? 'bg-orange-100 text-orange-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {task.crop}
                    </span>
                  </div>
                </div>
                <button className="text-primary hover:text-primary-dark">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
