function SkeletonCard() {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition flex flex-col animate-pulse">
        <div className="relative w-full h-48 bg-gray-300 rounded"></div>
        <h2 className="mt-4 h-6 bg-gray-300 rounded w-3/4"></h2>
        <p className="mt-2 h-4 bg-gray-300 rounded w-1/2"></p>
        <button className="mt-auto w-full h-10 bg-gray-300 rounded"></button>
      </div>
    );
  }
  
  export default SkeletonCard