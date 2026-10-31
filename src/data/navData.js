import client from "./client.json";

const navData = [
  {
    key: "home",
    url: "/",
    children: []
  },
  {
    key: "about",
    url: "/about",
    children: []
  },
  {
    key: "massages",
    url: "/massages",
    children: []
  },
  {
    key: "giftVoucher",
    url: client.giftVoucher,
    external: true,
    children: []
  },
  {
    key: "contact",
    url: "/contact",
    children: []
  },
]
export default navData