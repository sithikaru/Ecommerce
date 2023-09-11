export const navOptions = [
    {
        id: "home",
        label: "Home",
        path: "/"
    },
    {
        id: "listing",
        label: "All Products",
        path: "/product.listing/all-products"
    },
    {
        id: "listingMen",
        label: "Men",
        path: "/product.listing/men"
    },
    {
        id: "listingWomen",
        label: "Women",
        path: "/product.listing/women"
    },
    {
        id: "listingKids",
        label: "Kids",
        path: "/product.listing/kids"
    },
]

export const adminNavOptions = [
    {
        id: "adminListing",
        label: "Mange All Products",
        path: "/admin-view/all-products"
    },
    {
        id: "adminNewProduct",
        label: "Add New Product",
        path: "/admin-view/add-product"
    },
]


export const registrationFormControls = [
    {
        id: "firstName",
        label: "Name",
        type: "text",
        placeholder: "Enter your first name",
        componentType: "input",
    },
    {
        id: "email",
        label: "Email",
        type: "email",
        placeholder: "Enter your femail",
        componentType: "input",
    },
    {
        id: "password",
        label: "Password",
        type: "password",
        placeholder: "Enter Password",
        componentType: "input",
    },
    {
        id: "role",
        label: "Role",
        type: "",
        placeholder: "",
        componentType: "select",
        options:[
            {
                id: "admin",
                label: "Admin",

            },
            {
                id: "customer",
                label: "Customer",
            }
        ]
    }
]
export const loginFormControls = [
    {
        id: "email",
        label: "Email",
        type: "email",
        placeholder: "Enter your femail",
        componentType: "input",
    },
    {
        id: "password",
        label: "Password",
        type: "password",
        placeholder: "Enter Password",
        componentType: "input",
    },
]