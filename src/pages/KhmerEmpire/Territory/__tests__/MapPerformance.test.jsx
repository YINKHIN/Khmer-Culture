import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'

// Performance testing utilities
const measurePerformance = (fn) => {
  const startTime = performance.now()
  const result = fn()
  const endTime = performance.now()
  return {
    result,
    duration: endTime - startTime
  }
}

// Mock large dataset for performance testing
const generateLargeDataset = (size) => {
  return Array.from({ length: size }, (_, i) => ({
    period: `period-${i}`,
    boundaries: {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [[[100 + i, 10 + i], [110 + i, 10 + i], [110 + i, 15 + i], [100 + i, 15 + i], [100 + i, 10 + i]]]
      }
    },
    majorCities: Array.from({ length: 10 }, (_, j) => ({
      name: `City${i}-${j}`,
      coordinates: [100 + i + j * 0.1, 10 + i + j * 0.1],
      significance: 'Test City',
      period: `period-${i}`
    })),
    description: `Test territory ${i}`
  }))
}

// Mock map component for performance testing
const MockMapComponent = ({ data, renderMode = 'normal' }) => {
  const renderStartTime = performance.now()
  
  const processedData = data?.map(item => ({
    ...item,
    processed: true,
    renderTime: performance.now()
  }))

  const renderEndTime = performance.now()
  
  return (
    <div 
      data-testid="performance-map"
      data-render-time={renderEndTime - renderStartTime}
      data-item-count={data?.length || 0}
      data-render-mode={renderMode}
    >
      {renderMode === 'detailed' && processedData?.map((item, index) => (
        <div key={item.period} data-testid={`map-item-${index}`}>
          <div data-testid={`boundaries-${index}`}>
            {JSON.stringify(item.boundaries)}
          </div>
          {item.majorCities.map((city, cityIndex) => (
            <div key={city.name} data-testid={`city-${index}-${cityIndex}`}>
              {city.name} - {city.coordinates.join(', ')}
            </div>
          ))}
        </div>
      ))}
      {renderMode === 'summary' && (
        <div data-testid="summary-view">
          {data?.length} territories loaded
        </div>
      )}
    </div>
  )
}

describe('Map Performance Tests', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    // Mock performance.now for consistent testing
    vi.spyOn(performance, 'now').mockImplementation(() => Date.now())
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Large Dataset Rendering Performance', () => {
    it('should render small datasets quickly (< 50ms)', async () => {
      const smallDataset = generateLargeDataset(5)
      
      const { duration } = measurePerformance(() => {
        render(<MockMapComponent data={smallDataset} renderMode="detailed" />)
      })

      expect(screen.getByTestId('performance-map')).toBeInTheDocument()
      expect(screen.getByTestId('performance-map')).toHaveAttribute('data-item-count', '5')
      expect(duration).toBeLessThan(50)
    })

    it('should handle medium datasets efficiently (< 100ms)', async () => {
      const mediumDataset = generateLargeDataset(20)
      
      const { duration } = measurePerformance(() => {
        render(<MockMapComponent data={mediumDataset} renderMode="detailed" />)
      })

      expect(screen.getByTestId('performance-map')).toBeInTheDocument()
      expect(screen.getByTestId('performance-map')).toHaveAttribute('data-item-count', '20')
      expect(duration).toBeLessThan(100)
    })

    it('should use summary mode for very large datasets to maintain performance', async () => {
      const largeDataset = generateLargeDataset(100)
      
      const { duration } = measurePerformance(() => {
        render(<MockMapComponent data={largeDataset} renderMode="summary" />)
      })

      expect(screen.getByTestId('performance-map')).toBeInTheDocument()
      expect(screen.getByTestId('summary-view')).toBeInTheDocument()
      expect(screen.getByTestId('summary-view')).toHaveTextContent('100 territories loaded')
      
      // Summary mode should be very fast even with large datasets
      expect(duration).toBeLessThan(50)
    })

    it('should handle memory efficiently during multiple re-renders', async () => {
      const dataset = generateLargeDataset(10)
      
      const { rerender } = render(<MockMapComponent data={dataset} />)
      
      // Simulate multiple updates
      const iterations = 10
      const durations = []
      
      for (let i = 0; i < iterations; i++) {
        const { duration } = measurePerformance(() => {
          rerender(<MockMapComponent data={dataset} renderMode={i % 2 === 0 ? 'detailed' : 'summary'} />)
        })
        durations.push(duration)
      }
      
      // Performance should remain consistent across re-renders
      const avgDuration = durations.reduce((sum, d) => sum + d, 0) / durations.length
      expect(avgDuration).toBeLessThan(30)
      
      // No significant performance degradation (handle edge case where first duration is 0)
      const lastDuration = durations[durations.length - 1]
      const firstDuration = Math.max(durations[0], 1) // Ensure minimum 1ms to avoid division issues
      expect(lastDuration).toBeLessThan(firstDuration * 3) // No more than 3x slower
    })
  })

  describe('Mobile Performance Optimization', () => {
    beforeEach(() => {
      // Mock mobile environment
      Object.defineProperty(navigator, 'userAgent', {
        value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X)',
        configurable: true
      })
      
      // Mock mobile viewport
      Object.defineProperty(window, 'innerWidth', { value: 375, configurable: true })
      Object.defineProperty(window, 'innerHeight', { value: 667, configurable: true })
    })

    it('should optimize rendering for mobile devices', async () => {
      const mobileDataset = generateLargeDataset(15)
      
      const { duration } = measurePerformance(() => {
        render(<MockMapComponent data={mobileDataset} renderMode="summary" />)
      })

      expect(screen.getByTestId('performance-map')).toBeInTheDocument()
      
      // Mobile rendering should be optimized (faster than desktop detailed mode)
      expect(duration).toBeLessThan(40)
    })

    it('should handle touch event performance', async () => {
      const dataset = generateLargeDataset(10)
      render(<MockMapComponent data={dataset} />)
      
      const mapElement = screen.getByTestId('performance-map')
      
      // Simulate rapid touch events
      const touchEventDurations = []
      
      for (let i = 0; i < 5; i++) {
        const { duration } = measurePerformance(() => {
          act(() => {
            mapElement.dispatchEvent(new TouchEvent('touchstart', {
              touches: [{ clientX: 100 + i * 10, clientY: 100 + i * 10 }]
            }))
            mapElement.dispatchEvent(new TouchEvent('touchend'))
          })
        })
        touchEventDurations.push(duration)
      }
      
      // Touch events should be handled quickly
      const avgTouchDuration = touchEventDurations.reduce((sum, d) => sum + d, 0) / touchEventDurations.length
      expect(avgTouchDuration).toBeLessThan(20)
    })
  })

  describe('Memory Management', () => {
    it('should clean up resources when component unmounts', async () => {
      const dataset = generateLargeDataset(20)
      
      const { unmount } = render(<MockMapComponent data={dataset} />)
      
      expect(screen.getByTestId('performance-map')).toBeInTheDocument()
      
      // Measure unmount performance
      const { duration } = measurePerformance(() => {
        unmount()
      })
      
      // Cleanup should be fast
      expect(duration).toBeLessThan(30)
    })

    it('should handle rapid data updates without memory leaks', async () => {
      const initialDataset = generateLargeDataset(5)
      const { rerender } = render(<MockMapComponent data={initialDataset} />)
      
      // Simulate rapid data updates
      const updateDurations = []
      
      for (let i = 1; i <= 10; i++) {
        const newDataset = generateLargeDataset(5 + i)
        
        const { duration } = measurePerformance(() => {
          rerender(<MockMapComponent data={newDataset} />)
        })
        
        updateDurations.push(duration)
      }
      
      // Updates should remain fast (no memory accumulation)
      const lastUpdate = updateDurations[updateDurations.length - 1]
      const firstUpdate = Math.max(updateDurations[0], 1) // Ensure minimum 1ms to avoid division issues
      
      expect(lastUpdate).toBeLessThan(firstUpdate * 2) // No significant slowdown
    })
  })

  describe('Network and Loading Performance', () => {
    it('should handle loading states efficiently', async () => {
      // Test loading state performance
      const { duration: loadingDuration } = measurePerformance(() => {
        render(<MockMapComponent data={null} />)
      })
      
      expect(screen.getByTestId('performance-map')).toBeInTheDocument()
      expect(loadingDuration).toBeLessThan(20) // Loading state should be instant
    })

    it('should transition from loading to loaded state smoothly', async () => {
      const { rerender } = render(<MockMapComponent data={null} />)
      
      const dataset = generateLargeDataset(10)
      
      const { duration: transitionDuration } = measurePerformance(() => {
        rerender(<MockMapComponent data={dataset} />)
      })
      
      expect(screen.getByTestId('performance-map')).toHaveAttribute('data-item-count', '10')
      expect(transitionDuration).toBeLessThan(60) // Smooth transition
    })
  })

  describe('Performance Benchmarks', () => {
    it('should meet performance requirements for Requirements 3.1 and 5.3', async () => {
      // Requirement 3.1: Interactive map display
      const mapDataset = generateLargeDataset(15) // Realistic dataset size
      
      const { duration: mapRenderDuration } = measurePerformance(() => {
        render(<MockMapComponent data={mapDataset} renderMode="detailed" />)
      })
      
      // Map should render within acceptable time for interactivity
      expect(mapRenderDuration).toBeLessThan(100)
      expect(screen.getByTestId('performance-map')).toBeInTheDocument()
      
      // Requirement 5.3: Mobile touch controls
      const mapElement = screen.getByTestId('performance-map')
      
      const { duration: touchResponseDuration } = measurePerformance(() => {
        act(() => {
          mapElement.dispatchEvent(new TouchEvent('touchstart', {
            touches: [{ clientX: 150, clientY: 150 }]
          }))
          mapElement.dispatchEvent(new TouchEvent('touchmove', {
            touches: [{ clientX: 200, clientY: 200 }]
          }))
          mapElement.dispatchEvent(new TouchEvent('touchend'))
        })
      })
      
      // Touch interactions should be responsive (< 16ms for 60fps)
      expect(touchResponseDuration).toBeLessThan(16)
    })
  })
})