import { Image } from "./image.types";
import { Author } from "./author.types";
import { Area, Tag } from "./categories.types";

export interface Document {
  Title: string;
  Content: string;
  Area: Area;
  Tags: Tag[];
  Authors: Author[];
  Thumbnail: Image;
  Date?: string;
}
