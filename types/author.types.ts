import { Image } from "./image.types";

export interface Author {
  Name: string;
  Email: string;
  Description: string;
  Avatar?: Image;
}
