import React from "react";
import FullWidthImage from "./Slices/FullWidthImage";
import ImageGallery from "./Slices/ImageGallery";
import ImageHighlight from "./Slices/ImageHighlight";
import Quote from "./Slices/Quote";
import Text from "./Slices/Text";

const SliceZone = ({ sliceZone }) => {
  const sliceComponents = {
    full_width_image: FullWidthImage,
    image_gallery: ImageGallery,
    image_highlight: ImageHighlight,
    quote: Quote,
    text: Text,
  };

  const sliceZoneContent = sliceZone.map((slice, index) => {
    const SliceComponent = sliceComponents[slice.slice_type];
    if (SliceComponent) {
      return <SliceComponent slice={slice} key={`slice-${index}`} />;
    }
    return null;
  });

  return <main className="container">{sliceZoneContent}</main>;
};

export default SliceZone;
