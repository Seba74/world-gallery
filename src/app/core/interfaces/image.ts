export interface Image {
    _id: string;
    public_id: string;
    title: string;
    description?: string;
    imageUrl: string;
    countryId: string;
    countryName: string;
    createdAt?: Date;
    updatedAt?: Date;
  }


export interface createImage {
    title: string;
    description?: string;
    countryId: string;
    countryName: string;
    image: File;
}