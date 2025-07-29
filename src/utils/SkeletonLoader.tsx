const SkeletonBox = ({ className = "" }) => (
    <div className={`bg-gray-300 animate-pulse rounded ${className}`} />
  );
  
  const SkeletonLoader = () => {
    return (
      <>
        <div
          className="min-h-[300px] md:min-h-[300px] bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://cdn.10minuteschool.com/images/ui_(1)_1716445506383.jpeg")',
          }}
        >
          <div className="container relative flex flex-col gap-4 md:flex-row md:gap-12 pb-6 md:py-10 min-h-[300px] mx-auto text-[#111827]">
            <SkeletonBox className="w-full md:w-1/2 h-48 md:h-60" />
            <SkeletonBox className="w-full md:w-1/2 h-48 md:h-60" />
          </div>
        </div>
  
        <div className="container flex flex-col gap-4 md:flex-row md:gap-12 mx-auto text-[#111827]">
          <div className="order-2 flex-1 md:order-1 md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)] px-4 xl:px-0">
            <SkeletonBox className="w-full h-12 mb-6" />
            <SkeletonBox className="w-full h-32 mb-6" />
            <SkeletonBox className="w-full h-20 mb-6" />
            <SkeletonBox className="w-full h-40 mb-6" />
            <SkeletonBox className="w-full h-20 mb-6" />
            <SkeletonBox className="w-full h-20" />
          </div>
        </div>
      </>
    );
  };
  
  export default SkeletonLoader;
  