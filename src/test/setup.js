import '@testing-library/jest-dom'

// Mock Leaflet for testing
global.L = {
  map: vi.fn(() => ({
    setView: vi.fn(),
    on: vi.fn(),
    off: vi.fn(),
    remove: vi.fn(),
    invalidateSize: vi.fn(),
    getZoom: vi.fn(() => 6),
    getBounds: vi.fn(() => ({
      getNorthEast: vi.fn(() => ({ lat: 20, lng: 110 })),
      getSouthWest: vi.fn(() => ({ lat: 5, lng: 95 }))
    })),
    fitBounds: vi.fn(),
    panTo: vi.fn(),
    setZoom: vi.fn()
  })),
  tileLayer: vi.fn(() => ({
    addTo: vi.fn()
  })),
  geoJSON: vi.fn(() => ({
    addTo: vi.fn(),
    remove: vi.fn(),
    setStyle: vi.fn()
  })),
  marker: vi.fn(() => ({
    addTo: vi.fn(),
    bindPopup: vi.fn(),
    remove: vi.fn()
  })),
  popup: vi.fn(() => ({
    setLatLng: vi.fn(),
    setContent: vi.fn(),
    openOn: vi.fn()
  }))
}

// Mock ResizeObserver
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}))

// Mock IntersectionObserver
global.IntersectionObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}))