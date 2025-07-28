import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Medium } from "@/types/ieltsCourse.type";
import PlayIcon from "@/components/icons/PlayIcon";
import type { EmblaCarouselType } from "embla-carousel";

const Gallery = ({ galleryItems }: { galleryItems: Medium[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playedIndex, setPlayedIndex] = useState<number | null>(null);
  const [carouselApi, setCarouselApi] = useState<EmblaCarouselType | null>(
    null
  );

  const handleSetCarouselApi = useCallback(
    (api: EmblaCarouselType | undefined) => {
      setCarouselApi(api || null);
    },
    []
  );

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const onSelect = () => {
      setCurrentIndex(carouselApi.selectedScrollSnap());
      setPlayedIndex(null);
    };

    carouselApi.on("select", onSelect);

    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi]);

  return (
    <>
      <Carousel
        opts={{ align: "start" }}
        setApi={handleSetCarouselApi}
        className="w-full max-w-xl mx-auto"
      >
        <CarouselContent>
          {galleryItems.map((item, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full h-52 aspect-video overflow-hidden">
                {item.resource_type === "video" ? (
                  playedIndex === index ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${item.resource_value}?autoplay=1`}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full rounded"
                    />
                  ) : (
                    <div
                      className="relative w-full h-full cursor-pointer"
                      onClick={() => setPlayedIndex(index)}
                    >
                      <Image
                        src={item.thumbnail_url || "/placeholder.svg"}
                        alt="video thumbnail"
                        fill
                        priority
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <PlayIcon className="w-12 h-12 text-white" />
                      </div>
                    </div>
                  )
                ) : (
                  <Image
                    src={item.resource_value || "/placeholder.svg"}
                    alt="gallery image"
                    fill
                    className="object-cover"
                  />
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="cursor-pointer !border-none left-2.5" />
        <CarouselNext className="cursor-pointer !border-none right-2.5" />
      </Carousel>

      {/* Thumbnail navigation */}
      <div className="flex gap-2 justify-center p-4 overflow-x-auto hideScrollbar">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            role="button"
            className={` w-20 h-12 relative cursor-pointer border-2 rounded ${
              currentIndex === index ? "border-green-500" : "border-transparent"
            }`}
            onClick={() => {
              setCurrentIndex(index);
              setPlayedIndex(null);
              carouselApi?.scrollTo(index);
            }}
          >
            <Image
              src={
                item.resource_type === "video"
                  ? item.thumbnail_url
                  : item.resource_value
              }
              alt="thumbnail"
              fill
              className="object-cover rounded"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
