/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { galleryImages } from "../contants/galleryImages";
import { format } from "date-fns";

const INITIAL_IMAGE_COUNT = 5;
const COUNT_UP = 5;

const Page = () => {
  const [showCount, setShowCount] = useState(INITIAL_IMAGE_COUNT);
  const [popupImage, setPopupImage] = useState<null | string>(null);
  const showMoreButton = showCount < galleryImages.length;

  return (
    <div>
      {popupImage && (
        <div className="cursor-pointer" onClick={() => setPopupImage(null)}>
          <div className="h-screen w-screen fixed left-0 top-0 bg-black opacity-20 flex justify-center items-center" />
          <img
            className="w-4/5 h-4/5 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 fixed object-contain"
            src={popupImage}
            loading="lazy"
            alt=""
          />
        </div>
      )}

      <div className="flex flex-col gap-10">
        {galleryImages.slice(0, showCount).map((image) => (
          <div key={image.imageHref}>
            <button onClick={() => setPopupImage(image.imageHref)}>
              <img
                className="rounded-lg"
                src={image.imageHref}
                alt=""
                loading="lazy"
              />
            </button>
            <div className="flex justify-between text-gray-500">
              <div>{image.title}</div>
              <div>
                <a href={image.url}>{format(image.createdAt, "yyyy/MM/dd")}</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showMoreButton && (
        <div className="flex justify-center">
          <button
            className="p-3"
            onClick={() =>
              setShowCount((v) => Math.min(v + COUNT_UP, galleryImages.length))
            }
          >
            もっとみる
          </button>
        </div>
      )}
    </div>
  );
};

export default Page;
