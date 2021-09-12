var initialState = [
  {
    id: 1,
    name: "Iphone 7 Plus",
    image: "https://cdn.tgdd.vn/Products/Images/42/87839/iphone-7-plus-128gb-hh-600x600.jpg",
    description: "Iphone 7 Plus 32G Đen",
    price: 500,
    inventory: 10,
    rating : 3
  },
  {
    id: 2,
    name: "Iphone XS Max",
    image: "https://cdn.tgdd.vn/Products/Images/42/190321/iphone-xs-max-gold-600x600.jpg",
    description: "Iphone XS Max 64G Hồng",
    price: 700,
    inventory: 15,
    rating : 4
  },
  {
    id: 3,
    name: "Iphone 11 Pro",
    image: "http://product.hstatic.net/1000300544/product/iphone-11-pro-select-2019_30af29a5b7a74659aaee4a6f1442574a_grande_0e94987c211747aa9ea859fb348f195c_grande.jpg",
    description: "Iphone 11 Pro 128G Đen nhám",
    price: 900,
    inventory: 25,
    rating : 5
  },
];
const products = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};
export default products