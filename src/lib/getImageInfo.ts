interface ImageInfo {
  url: string;
  alternativeText?: string;
  width?: number;
  height?: number;
}

export const getImageInfo = (imageData: any): ImageInfo | null => {
  if (!imageData) return null;

  // Handle if imageData is a direct URL string
  if (typeof imageData === "string") {
    return {
      url: imageData,
    };
  }

  // Handle Strapi image data structure
  if (imageData.data && imageData.data.attributes) {
    const { url, alternativeText, width, height } = imageData.data.attributes;
    return {
      url: url ? import.meta.env.STRAPI_URL + url : "/images/banner.png",
      alternativeText,
      width,
      height,
    };
  }

  // Handle direct attributes
  if (imageData.url) {
    return {
      url: imageData.url
        ? import.meta.env.STRAPI_URL + imageData.url
        : "/images/banner.png",
      alternativeText: imageData.alternativeText ?? "not found",
      width: imageData.width,
      height: imageData.height,
    };
  }

  return null;
};
