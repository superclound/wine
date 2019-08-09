
export default {
    path: "/carts/:text",
    // path: "/carts",

    component: () => import("views/carts"),
    name: "carts",
    meta: {
        title: "购物车",
        flag: true,       
    }
}