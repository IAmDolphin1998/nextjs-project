import { Image } from "./image.types";

export interface Author {
  FirstName: string;
  LastName: string;
  Email: string;
  Description: string;
  Avatar?: Image;
}
