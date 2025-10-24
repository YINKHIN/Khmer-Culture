const KhmerEmpire = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">The Khmer Empire</h1>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
        Explore the magnificent history of the Khmer Empire (802-1431 CE), one of Southeast Asia's 
        most powerful and influential civilizations.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-xl font-semibold mb-4">Timeline</h3>
          <p className="text-gray-600">Interactive timeline of major events from 802-1431 CE</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-xl font-semibold mb-4">Rulers</h3>
          <p className="text-gray-600">Profiles of influential kings and queens</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-xl font-semibold mb-4">Territory</h3>
          <p className="text-gray-600">Interactive maps showing territorial expansion</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h3 className="text-xl font-semibold mb-4">Achievements</h3>
          <p className="text-gray-600">Architecture, art, and cultural innovations</p>
        </div>
      </div>
    </div>
  )
}

export default KhmerEmpire