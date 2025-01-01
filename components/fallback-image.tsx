import React from "react";
import Image, { ImageProps } from "next/image";

type FallbackImageProps = ImageProps & {
  fallbackSrc: string;
};
export default function FallbackImage({
  src,
  fallbackSrc,
  alt,
  ...props
}: FallbackImageProps) {
  const [imgSrc, setImgSrc] = React.useState(src);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      onError={() => setImgSrc(fallbackSrc)}
      {...props}
    />
  );
}
