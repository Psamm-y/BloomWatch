import { useState } from 'react';
import { ZoomIn, ZoomOut, Crosshair, X } from 'lucide-react';

type LayerType = 'health' | 'satellite' | 'weather';

const CropMap = () => {
  const [activeLayer, setActiveLayer] = useState<LayerType>('health');
  const [showHealthCard, setShowHealthCard] = useState(true);

  const layers: { id: LayerType; label: string }[] = [
    { id: 'health', label: 'Health' },
    { id: 'satellite', label: 'Satellite' },
    { id: 'weather', label: 'Weather' },
  ];

  return (
    <div className="relative h-full bg-gray-100">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-white border-b border-gray-200 px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold text-gray-900">Crop Health Map</h1>
          <button className="text-sm font-medium text-primary hover:text-primary-dark">
            Add Farm Location
          </button>
        </div>

        {/* Layer Tabs */}
        <div className="flex gap-2 mt-4">
          {layers.map((layer) => (
            <button
              key={layer.id}
              onClick={() => setActiveLayer(layer.id)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeLayer === layer.id
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {layer.label}
            </button>
          ))}
        </div>
      </div>

      {/* Map Container */}
      <div className="absolute inset-0 pt-32">
        {/* Placeholder Map - In production, use Leaflet or Mapbox */}
        <div className="relative w-full h-full">
          {/* Health Layer */}
          {activeLayer === 'health' && (
            <div className="w-full h-full bg-gradient-to-br from-orange-200 via-yellow-100 to-green-200 relative">
              {/* Farm Boundaries */}
              <div className="absolute top-1/4 left-1/4 w-1/2 h-1/3 border-4 border-dashed border-white/80 rounded-lg">
                <div className="absolute -top-8 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
                  Main Farmland
                </div>
              </div>
              <div className="absolute top-1/3 right-1/4 w-1/3 h-1/4 border-4 border-dashed border-white/80 rounded-lg">
                <div className="absolute -bottom-8 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
                  North Field
                </div>
              </div>
              
              {/* Coordinates Display */}
              <div className="absolute bottom-20 left-4 bg-black/60 text-white px-3 py-1 rounded text-xs font-mono">
                165,250,0.4
              </div>
              
              {/* Scale */}
              <div className="absolute bottom-20 left-1/4 bg-black/60 text-white px-3 py-1 rounded text-xs">
                30 M²
              </div>
            </div>
          )}

          {/* Satellite Layer */}
          {activeLayer === 'satellite' && (
            <div className="w-full h-full bg-gradient-to-br from-green-800 via-green-600 to-yellow-700 relative">
              {/* Farm Boundaries */}
              <div className="absolute top-1/4 left-1/4 w-1/2 h-1/3 border-4 border-dashed border-white/80 rounded-lg">
                <div className="absolute -top-8 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
                  Main Farmland
                </div>
              </div>
              <div className="absolute top-1/3 right-1/4 w-1/3 h-1/4 border-4 border-dashed border-white/80 rounded-lg">
                <div className="absolute -bottom-8 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
                  North Field
                </div>
              </div>
            </div>
          )}

          {/* Weather Layer */}
          {activeLayer === 'weather' && (
            <div className="w-full h-full bg-gradient-to-br from-blue-300 via-blue-200 to-blue-400 relative">
              {/* Rain Visualization */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64">
                <div className="w-full h-full rounded-full bg-white/40 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🌧️</div>
                    <div className="text-2xl font-bold text-blue-900">255-40%</div>
                  </div>
                </div>
              </div>
              
              {/* Precipitation Indicator */}
              <div className="absolute top-1/4 left-1/4 bg-blue-500/30 backdrop-blur-sm px-3 py-1 rounded text-sm font-medium text-blue-900">
                20px
              </div>
            </div>
          )}

          {/* Map Controls */}
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-2">
            <button className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors">
              <ZoomIn size={20} className="text-gray-700" />
            </button>
            <button className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors">
              <ZoomOut size={20} className="text-gray-700" />
            </button>
            <button className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors">
              <Crosshair size={20} className="text-gray-700" />
            </button>
          </div>

          {/* Health Condition Card */}
          {showHealthCard && activeLayer === 'health' && (
            <div className="absolute bottom-4 left-4 right-4 bg-white rounded-2xl shadow-xl p-4">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-gray-900">Health Condition</h3>
                <button
                  onClick={() => setShowHealthCard(false)}
                  className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={20} className="text-gray-500" />
                </button>
              </div>
              
              <div className="space-y-2 mb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-health-excellent"></div>
                    <span className="text-sm text-gray-700">Excellent</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">80-100%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-health-moderate"></div>
                    <span className="text-sm text-gray-700">Moderate Stress</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">50-79%</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-200">
                <span>Updated: 2 days ago</span>
                <span className="font-medium">NASA Landsat</span>
              </div>
            </div>
          )}

          {/* Weather Info Card */}
          {activeLayer === 'weather' && (
            <div className="absolute bottom-4 left-4 right-4 bg-white rounded-2xl shadow-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Weather Overlay</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Precipitation</span>
                  <span className="text-sm font-medium text-gray-900">High (255-40%)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Cloud Cover</span>
                  <span className="text-sm font-medium text-gray-900">Moderate</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CropMap;
