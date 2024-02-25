
type Property = {
    id: number;
    src: string;
    alt: string;
    label: string;
    price: string;
    length: string;
    rooms: number;
    baths: number;
    m2: number;
  };
  
  type MappedGalleryGroup = {
    id: number;
    image: string;
    label: string;
    details: {
      price: string;
      length: string;
      rooms: number;
      baths: number;
      area: number;
    };
  };
  
  export function mapGalleryGroup(galleryGroup: Record<string, Property[]>): MappedGalleryGroup[] {
    const mapped: MappedGalleryGroup[] = [];
  
    for (const key in galleryGroup) {
      const properties = galleryGroup[key];
      properties.forEach(property => {
        mapped.push({
          id: property.id,
          image: property.src,
          label: property.label,
          details: {
            price: property.price,
            length: property.length,
            rooms: property.rooms,
            baths: property.baths,
            area: property.m2,
          },
        });
      });
    }
  
    return mapped;
  }
  