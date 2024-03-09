import Item1 from "@/assets/images/item1.png";
import Item2 from "@/assets/images/item2.png";
import Item3 from "@/assets/images/item3.png";

export interface AdvertismentType {
  title: string;
  description: string;
  image: string;
}

const HOME_ADVERTISMENTS = [
  {
    title: "Artistic Inspiration",
    description:
      "Explore our wide range of high-quality art supplies and fuel your artistic passion.",
    image: Item1,
  },
  {
    title: "Fashion Forward",
    description:
      "Discover trendy clothing, shoes, and accessories to elevate your style game.",
    image: Item2,
  },
  {
    title: "Luxury Living",
    description:
      "Transform your living space with our luxurious home decor essentials.",
    image: Item3,
  },
];

export default HOME_ADVERTISMENTS;
