import Plugins from "@/Components/Backend/Plugins";

const AdminLayout = () => {
    return(
        <>

            <div id="wrapper">
                {/* #page */}
                <div id="page" className="">
                    {/* layout-wrap */}
                    <div className="layout-wrap">

                        {/* section-menu-left */}
                        <div className="section-menu-left">
                            <div className="box-logo">
                                <a href="index.html" id="site-logo-inner">
                                    <img
                                        className=""
                                        id="logo_header"
                                        alt=""
                                        src="images/logo/logo.png"
                                        data-light="images/logo/logo.png"
                                        data-dark="images/logo/logo-dark.png"
                                    />
                                </a>
                                <div className="button-show-hide">
                                    <i className="icon-menu-left" />
                                </div>
                            </div>
                            <div className="center">
                                <div className="center-item">
                                    <div className="center-heading">Main Home</div>
                                    <ul className="menu-list">
                                        <li className="menu-item has-children active">
                                            <a href="javascript:void(0);" className="menu-item-button">
                                                <div className="icon">
                                                    <i className="icon-grid" />
                                                </div>
                                                <div className="text">Dashboard</div>
                                            </a>
                                            <ul className="sub-menu" style={{ display: "block" }}>
                                                <li className="sub-menu-item">
                                                    <a href="index.html" className="active">
                                                        <div className="text">Home 01</div>
                                                    </a>
                                                </li>
                                                <li className="sub-menu-item">
                                                    <a href="home-2.html" className="">
                                                        <div className="text">Home 02</div>
                                                    </a>
                                                </li>
                                                <li className="sub-menu-item">
                                                    <a href="home-3.html" className="">
                                                        <div className="text">Home 03</div>
                                                    </a>
                                                </li>
                                                <li className="sub-menu-item">
                                                    <a href="home-4.html" className="">
                                                        <div className="text">Home 04</div>
                                                    </a>
                                                </li>
                                                <li className="sub-menu-item">
                                                    <a href="home-boxed.html" className="">
                                                        <div className="text">Home Boxed</div>
                                                    </a>
                                                </li>
                                                <li className="sub-menu-item">
                                                    <a href="home-menu-icon-hover.html" className="">
                                                        <div className="text">Home Menu Icon Hover</div>
                                                    </a>
                                                </li>
                                                <li className="sub-menu-item">
                                                    <a href="home-menu-icon-default.html" className="">
                                                        <div className="text">Home Menu Icon Default</div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="center-item">
                                    <div className="center-heading">All page</div>
                                    <ul className="menu-list">
                                        <li className="menu-item has-children">
                                            <a href="javascript:void(0);" className="menu-item-button">
                                                <div className="icon">
                                                    <i className="icon-shopping-cart" />
                                                </div>
                                                <div className="text">Ecommerce</div>
                                            </a>
                                            <ul className="sub-menu">
                                                <li className="sub-menu-item">
                                                    <a href="add-product.html" className="">
                                                        <div className="text">Add Product</div>
                                                    </a>
                                                </li>
                                                <li className="sub-menu-item">
                                                    <a href="product-list.html" className="">
                                                        <div className="text">Product List</div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item has-children">
                                            <a href="javascript:void(0);" className="menu-item-button">
                                                <div className="icon">
                                                    <i className="icon-layers" />
                                                </div>
                                                <div className="text">Category</div>
                                            </a>
                                            <ul className="sub-menu">
                                                <li className="sub-menu-item">
                                                    <a href="category-list.html" className="">
                                                        <div className="text">Category list</div>
                                                    </a>
                                                </li>
                                                <li className="sub-menu-item">
                                                    <a href="new-category.html" className="">
                                                        <div className="text">New category</div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item has-children">
                                            <a href="javascript:void(0);" className="menu-item-button">
                                                <div className="icon">
                                                    <i className="icon-box" />
                                                </div>
                                                <div className="text">Attributes</div>
                                            </a>
                                            <ul className="sub-menu">
                                                <li className="sub-menu-item">
                                                    <a href="attributes.html" className="">
                                                        <div className="text">Attributes</div>
                                                    </a>
                                                </li>
                                                <li className="sub-menu-item">
                                                    <a href="add-attributes.html" className="">
                                                        <div className="text">Add attributes</div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item has-children">
                                            <a href="javascript:void(0);" className="menu-item-button">
                                                <div className="icon">
                                                    <i className="icon-file-plus" />
                                                </div>
                                                <div className="text">Order</div>
                                            </a>
                                            <ul className="sub-menu">
                                                <li className="sub-menu-item">
                                                    <a href="oder-list.html" className="">
                                                        <div className="text">Order list</div>
                                                    </a>
                                                </li>
                                                <li className="sub-menu-item">
                                                    <a href="oder-detail.html" className="">
                                                        <div className="text">Order detail</div>
                                                    </a>
                                                </li>
                                                <li className="sub-menu-item">
                                                    <a href="oder-tracking.html" className="">
                                                        <div className="text">Order tracking</div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item has-children">
                                            <a href="javascript:void(0);" className="menu-item-button">
                                                <div className="icon">
                                                    <i className="icon-user" />
                                                </div>
                                                <div className="text">User</div>
                                            </a>
                                            <ul className="sub-menu">
                                                <li className="sub-menu-item">
                                                    <a href="all-user.html" className="">
                                                        <div className="text">All user</div>
                                                    </a>
                                                </li>
                                                <li className="sub-menu-item">
                                                    <a href="add-new-user.html" className="">
                                                        <div className="text">Add new user</div>
                                                    </a>
                                                </li>
                                                <li className="sub-menu-item">
                                                    <a href="login.html" className="">
                                                        <div className="text">Login</div>
                                                    </a>
                                                </li>
                                                <li className="sub-menu-item">
                                                    <a href="sign-up.html" className="">
                                                        <div className="text">Sign up</div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item has-children">
                                            <a href="javascript:void(0);" className="menu-item-button">
                                                <div className="icon">
                                                    <i className="icon-user-plus" />
                                                </div>
                                                <div className="text">Roles</div>
                                            </a>
                                            <ul className="sub-menu">
                                                <li className="sub-menu-item">
                                                    <a href="all-roles.html" className="">
                                                        <div className="text">All roles</div>
                                                    </a>
                                                </li>
                                                <li className="sub-menu-item">
                                                    <a href="create-role.html" className="">
                                                        <div className="text">Create role</div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item">
                                            <a href="gallery.html" className="">
                                                <div className="icon">
                                                    <i className="icon-image" />
                                                </div>
                                                <div className="text">Gallery</div>
                                            </a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="report.html" className="">
                                                <div className="icon">
                                                    <i className="icon-pie-chart" />
                                                </div>
                                                <div className="text">Report</div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="center-item">
                                    <div className="center-heading">Setting</div>
                                    <ul className="menu-list">
                                        <li className="menu-item has-children">
                                            <a href="javascript:void(0);" className="menu-item-button">
                                                <div className="icon">
                                                    <i className="icon-map-pin" />
                                                </div>
                                                <div className="text">Location</div>
                                            </a>
                                            <ul className="sub-menu">
                                                <li className="sub-menu-item">
                                                    <a href="countries.html" className="">
                                                        <div className="text">Countries</div>
                                                    </a>
                                                </li>
                                                <li className="sub-menu-item">
                                                    <a href="states.html" className="">
                                                        <div className="text">States</div>
                                                    </a>
                                                </li>
                                                <li className="sub-menu-item">
                                                    <a href="cities.html" className="">
                                                        <div className="text">Cities</div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item">
                                            <a href="setting.html" className="">
                                                <div className="icon">
                                                    <i className="icon-settings" />
                                                </div>
                                                <div className="text">Setting</div>
                                            </a>
                                        </li>
                                        <li className="menu-item has-children">
                                            <a href="javascript:void(0);" className="menu-item-button">
                                                <div className="icon">
                                                    <i className="icon-edit" />
                                                </div>
                                                <div className="text">Pages</div>
                                            </a>
                                            <ul className="sub-menu">
                                                <li className="sub-menu-item">
                                                    <a href="list-page.html" className="">
                                                        <div className="text">List page</div>
                                                    </a>
                                                </li>
                                                <li className="sub-menu-item">
                                                    <a href="new-page.html" className="">
                                                        <div className="text">New page</div>
                                                    </a>
                                                </li>
                                                <li className="sub-menu-item">
                                                    <a href="edit-page.html" className="">
                                                        <div className="text">Edit page</div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="center-item">
                                    <div className="center-heading">Components</div>
                                    <ul className="menu-list">
                                        <li className="menu-item">
                                            <a href="components.html" className="">
                                                <div className="icon">
                                                    <i className="icon-database" />
                                                </div>
                                                <div className="text">Components</div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="center-item">
                                    <div className="center-heading">Support</div>
                                    <ul className="menu-list">
                                        <li className="menu-item">
                                            <a href="#" className="">
                                                <div className="icon">
                                                    <i className="icon-help-circle" />
                                                </div>
                                                <div className="text">Help center</div>
                                            </a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="#" className="">
                                                <div className="icon">
                                                    <svg
                                                        width={20}
                                                        height={20}
                                                        viewBox="0 0 20 20"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M15.7727 4.27031C15.025 3.51514 14.1357 2.91486 13.1558 2.50383C12.1758 2.09281 11.1244 1.87912 10.0617 1.875H10C7.84512 1.875 5.77849 2.73102 4.25476 4.25476C2.73102 5.77849 1.875 7.84512 1.875 10V14.375C1.875 14.8723 2.07254 15.3492 2.42417 15.7008C2.77581 16.0525 3.25272 16.25 3.75 16.25H5C5.49728 16.25 5.9742 16.0525 6.32583 15.7008C6.67746 15.3492 6.875 14.8723 6.875 14.375V11.25C6.875 10.7527 6.67746 10.2758 6.32583 9.92417C5.9742 9.57254 5.49728 9.375 5 9.375H3.15313C3.27366 8.07182 3.76315 6.83 4.56424 5.79508C5.36532 4.76016 6.44481 3.97502 7.67617 3.53169C8.90753 3.08836 10.2398 3.0052 11.5167 3.29196C12.7936 3.57872 13.9624 4.22352 14.8859 5.15078C16.0148 6.28539 16.7091 7.78052 16.8477 9.375H15C14.5027 9.375 14.0258 9.57254 13.6742 9.92417C13.3225 10.2758 13.125 10.7527 13.125 11.25V14.375C13.125 14.8723 13.3225 15.3492 13.6742 15.7008C14.0258 16.0525 14.5027 16.25 15 16.25H16.875C16.875 16.7473 16.6775 17.2242 16.3258 17.5758C15.9742 17.9275 15.4973 18.125 15 18.125H10.625C10.4592 18.125 10.3003 18.1908 10.1831 18.3081C10.0658 18.4253 10 18.5842 10 18.75C10 18.9158 10.0658 19.0747 10.1831 19.1919C10.3003 19.3092 10.4592 19.375 10.625 19.375H15C15.8288 19.375 16.6237 19.0458 17.2097 18.4597C17.7958 17.8737 18.125 17.0788 18.125 16.25V10C18.1291 8.93717 17.9234 7.88398 17.5197 6.90077C17.1161 5.91757 16.5224 5.02368 15.7727 4.27031ZM5 10.625C5.16576 10.625 5.32473 10.6908 5.44194 10.8081C5.55915 10.9253 5.625 11.0842 5.625 11.25V14.375C5.625 14.5408 5.55915 14.6997 5.44194 14.8169C5.32473 14.9342 5.16576 15 5 15H3.75C3.58424 15 3.42527 14.9342 3.30806 14.8169C3.19085 14.6997 3.125 14.5408 3.125 14.375V10.625H5ZM15 15C14.8342 15 14.6753 14.9342 14.5581 14.8169C14.4408 14.6997 14.375 14.5408 14.375 14.375V11.25C14.375 11.0842 14.4408 10.9253 14.5581 10.8081C14.6753 10.6908 14.8342 10.625 15 10.625H16.875V15H15Z"
                                                            fill="#111111"
                                                        />
                                                    </svg>
                                                </div>
                                                <div className="text">FAQs</div>
                                            </a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="#" className="">
                                                <div className="icon">
                                                    <svg
                                                        width={20}
                                                        height={20}
                                                        viewBox="0 0 20 20"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g clipPath="url(#clip0_604_18468)">
                                                            <path
                                                                d="M4.71875 7V1H15.5561L18.9991 4.44801V19H4.71875C4.71875 19 4.71875 16.2 4.71875 13.5"
                                                                stroke="#111111"
                                                                strokeWidth="1.2"
                                                                strokeMiterlimit={10}
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M19.0015 4.44801H15.5586V1L19.0015 4.44801Z"
                                                                stroke="#111111"
                                                                strokeWidth="1.2"
                                                                strokeMiterlimit={10}
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M7.53469 14.5507C9.89243 14.5507 11.8037 12.6366 11.8037 10.2754C11.8037 7.91415 9.89243 6 7.53469 6C5.17695 6 3.26562 7.91415 3.26562 10.2754C3.26562 12.6366 5.17695 14.5507 7.53469 14.5507Z"
                                                                stroke="#111111"
                                                                strokeWidth="1.2"
                                                                strokeMiterlimit={10}
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M5.41029 13.9852L2.90967 16.4895C2.47263 16.9272 1.76451 16.9272 1.3275 16.4895C0.890833 16.0522 0.890833 15.3427 1.3275 14.9054L3.82812 12.4011M6.14799 10.2051L7.11794 11.175L8.91794 9.375"
                                                                stroke="#111111"
                                                                strokeWidth="1.2"
                                                                strokeMiterlimit={10}
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_604_18468">
                                                                <rect width={20} height={20} fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                                <div className="text">Privacy policy</div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="center-item">
                                    <div className="center-heading">Connect us</div>
                                    <ul className="wg-social">
                                        <li>
                                            <a href="#">
                                                <i className="icon-facebook" />
                                            </a>
                                        </li>
                                        <li className="active">
                                            <a href="#">
                                                <i className="icon-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="icon-linkedin" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="icon-instagram" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="bot text-center">
                                <div className="wrap">
                                    <div className="mb-20">
                                        <img src="images/menu-left/img-bot.png" alt="" />
                                    </div>
                                    <div className="mb-20">
                                        <h6>Hi, how can we help?</h6>
                                        <div className="text">
                                            Contact us if you have any assistance, we will contact you as
                                            soon as possible
                                        </div>
                                    </div>
                                    <a href="#" className="tf-button w-full">
                                        Contact
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* /section-menu-left */}
                        {/* section-content-right */}
                        <div className="section-content-right">
                            {/* header-dashboard */}
                            <div className="header-dashboard">
                                <div className="wrap">
                                    <div className="header-left">
                                        <a href="index.html">
                                            <img
                                                className=""
                                                id="logo_header_mobile"
                                                alt=""
                                                src="images/logo/logo.png"
                                                data-light="images/logo/logo.png"
                                                data-dark="images/logo/logo-dark.png"
                                                data-width="154px"
                                                data-height="52px"
                                                data-retina="images/logo/logo@2x.png"
                                            />
                                        </a>
                                        <div className="button-show-hide">
                                            <i className="icon-menu-left" />
                                        </div>
                                        <form className="form-search flex-grow">
                                            <fieldset className="name">
                                                <input
                                                    type="text"
                                                    placeholder="Search here..."
                                                    className="show-search"
                                                    name="name"
                                                    tabIndex={2}
                                                    defaultValue=""
                                                    aria-required="true"
                                                    required=""
                                                />
                                            </fieldset>
                                            <div className="button-submit">
                                                <button className="" type="submit">
                                                    <i className="icon-search" />
                                                </button>
                                            </div>
                                            <div className="box-content-search" id="box-content-search">
                                                <ul className="mb-24">
                                                    <li className="mb-14">
                                                        <div className="body-title">Top selling product</div>
                                                    </li>
                                                    <li className="mb-14">
                                                        <div className="divider" />
                                                    </li>
                                                    <li>
                                                        <ul>
                                                            <li className="product-item gap14 mb-10">
                                                                <div className="image no-bg">
                                                                    <img src="images/products/17.png" alt="" />
                                                                </div>
                                                                <div className="flex items-center justify-between gap20 flex-grow">
                                                                    <div className="name">
                                                                        <a href="product-list.html" className="body-text">
                                                                            Dog Food Rachael Ray Nutrish®
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="mb-10">
                                                                <div className="divider" />
                                                            </li>
                                                            <li className="product-item gap14 mb-10">
                                                                <div className="image no-bg">
                                                                    <img src="images/products/18.png" alt="" />
                                                                </div>
                                                                <div className="flex items-center justify-between gap20 flex-grow">
                                                                    <div className="name">
                                                                        <a href="product-list.html" className="body-text">
                                                                            Natural Dog Food Healthy Dog Food
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="mb-10">
                                                                <div className="divider" />
                                                            </li>
                                                            <li className="product-item gap14">
                                                                <div className="image no-bg">
                                                                    <img src="images/products/19.png" alt="" />
                                                                </div>
                                                                <div className="flex items-center justify-between gap20 flex-grow">
                                                                    <div className="name">
                                                                        <a href="product-list.html" className="body-text">
                                                                            Freshpet Healthy Dog Food and Cat
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                                <ul className="">
                                                    <li className="mb-14">
                                                        <div className="body-title">Order product</div>
                                                    </li>
                                                    <li className="mb-14">
                                                        <div className="divider" />
                                                    </li>
                                                    <li>
                                                        <ul>
                                                            <li className="product-item gap14 mb-10">
                                                                <div className="image no-bg">
                                                                    <img src="images/products/20.png" alt="" />
                                                                </div>
                                                                <div className="flex items-center justify-between gap20 flex-grow">
                                                                    <div className="name">
                                                                        <a href="product-list.html" className="body-text">
                                                                            Sojos Crunchy Natural Grain Free...
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="mb-10">
                                                                <div className="divider" />
                                                            </li>
                                                            <li className="product-item gap14 mb-10">
                                                                <div className="image no-bg">
                                                                    <img src="images/products/21.png" alt="" />
                                                                </div>
                                                                <div className="flex items-center justify-between gap20 flex-grow">
                                                                    <div className="name">
                                                                        <a href="product-list.html" className="body-text">
                                                                            Kristin Watson
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="mb-10">
                                                                <div className="divider" />
                                                            </li>
                                                            <li className="product-item gap14 mb-10">
                                                                <div className="image no-bg">
                                                                    <img src="images/products/22.png" alt="" />
                                                                </div>
                                                                <div className="flex items-center justify-between gap20 flex-grow">
                                                                    <div className="name">
                                                                        <a href="product-list.html" className="body-text">
                                                                            Mega Pumpkin Bone
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="mb-10">
                                                                <div className="divider" />
                                                            </li>
                                                            <li className="product-item gap14">
                                                                <div className="image no-bg">
                                                                    <img src="images/products/23.png" alt="" />
                                                                </div>
                                                                <div className="flex items-center justify-between gap20 flex-grow">
                                                                    <div className="name">
                                                                        <a href="product-list.html" className="body-text">
                                                                            Mega Pumpkin Bone
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="header-grid">
                                        <div className="header-item country">
                                            <select className="image-select no-text">
                                                <option data-thumbnail="images/country/1.png">ENG</option>
                                                <option data-thumbnail="images/country/9.png">VIE</option>
                                            </select>
                                        </div>
                                        <div className="header-item button-dark-light">
                                            <i className="icon-moon" />
                                        </div>
                                        <div className="popup-wrap noti type-header">
                                            <div className="dropdown">
                                                <button
                                                    className="btn btn-secondary dropdown-toggle"
                                                    type="button"
                                                    id="dropdownMenuButton1"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    <span className="header-item">
                                                        <span className="text-tiny">1</span>
                                                        <i className="icon-bell" />
                                                    </span>
                                                </button>
                                                <ul
                                                    className="dropdown-menu dropdown-menu-end has-content"
                                                    aria-labelledby="dropdownMenuButton1"
                                                >
                                                    <li>
                                                        <h6>Message</h6>
                                                    </li>
                                                    <li>
                                                        <div className="noti-item w-full wg-user active">
                                                            <div className="image">
                                                                <img src="images/avatar/user-11.png" alt="" />
                                                            </div>
                                                            <div className="flex-grow">
                                                                <div className="flex items-center justify-between">
                                                                    <a href="#" className="body-title">
                                                                        Cameron Williamson
                                                                    </a>
                                                                    <div className="time">10:13 PM</div>
                                                                </div>
                                                                <div className="text-tiny">Hello?</div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="noti-item w-full wg-user active">
                                                            <div className="image">
                                                                <img src="images/avatar/user-12.png" alt="" />
                                                            </div>
                                                            <div className="flex-grow">
                                                                <div className="flex items-center justify-between">
                                                                    <a href="#" className="body-title">
                                                                        Ralph Edwards
                                                                    </a>
                                                                    <div className="time">10:13 PM</div>
                                                                </div>
                                                                <div className="text-tiny">
                                                                    Are you there? interested i this...
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="noti-item w-full wg-user active">
                                                            <div className="image">
                                                                <img src="images/avatar/user-13.png" alt="" />
                                                            </div>
                                                            <div className="flex-grow">
                                                                <div className="flex items-center justify-between">
                                                                    <a href="#" className="body-title">
                                                                        Eleanor Pena
                                                                    </a>
                                                                    <div className="time">10:13 PM</div>
                                                                </div>
                                                                <div className="text-tiny">
                                                                    Interested in this loads?
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="noti-item w-full wg-user active">
                                                            <div className="image">
                                                                <img src="images/avatar/user-11.png" alt="" />
                                                            </div>
                                                            <div className="flex-grow">
                                                                <div className="flex items-center justify-between">
                                                                    <a href="#" className="body-title">
                                                                        Jane Cooper
                                                                    </a>
                                                                    <div className="time">10:13 PM</div>
                                                                </div>
                                                                <div className="text-tiny">
                                                                    Okay...Do we have a deal?
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="tf-button w-full">
                                                            View all
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="popup-wrap message type-header">
                                            <div className="dropdown">
                                                <button
                                                    className="btn btn-secondary dropdown-toggle"
                                                    type="button"
                                                    id="dropdownMenuButton2"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    <span className="header-item">
                                                        <span className="text-tiny">1</span>
                                                        <i className="icon-message-square" />
                                                    </span>
                                                </button>
                                                <ul
                                                    className="dropdown-menu dropdown-menu-end has-content"
                                                    aria-labelledby="dropdownMenuButton2"
                                                >
                                                    <li>
                                                        <h6>Notifications</h6>
                                                    </li>
                                                    <li>
                                                        <div className="message-item item-1">
                                                            <div className="image">
                                                                <i className="icon-noti-1" />
                                                            </div>
                                                            <div>
                                                                <div className="body-title-2">Discount available</div>
                                                                <div className="text-tiny">
                                                                    Morbi sapien massa, ultricies at rhoncus at,
                                                                    ullamcorper nec diam
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="message-item item-2">
                                                            <div className="image">
                                                                <i className="icon-noti-2" />
                                                            </div>
                                                            <div>
                                                                <div className="body-title-2">
                                                                    Account has been verified
                                                                </div>
                                                                <div className="text-tiny">
                                                                    Mauris libero ex, iaculis vitae rhoncus et
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="message-item item-3">
                                                            <div className="image">
                                                                <i className="icon-noti-3" />
                                                            </div>
                                                            <div>
                                                                <div className="body-title-2">
                                                                    Order shipped successfully
                                                                </div>
                                                                <div className="text-tiny">
                                                                    Integer aliquam eros nec sollicitudin sollicitudin
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="message-item item-4">
                                                            <div className="image">
                                                                <i className="icon-noti-4" />
                                                            </div>
                                                            <div>
                                                                <div className="body-title-2">
                                                                    Order pending: <span>ID 305830</span>
                                                                </div>
                                                                <div className="text-tiny">
                                                                    Ultricies at rhoncus at ullamcorper
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="tf-button w-full">
                                                            View all
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="header-item button-zoom-maximize">
                                            <div className="">
                                                <i className="icon-maximize" />
                                            </div>
                                        </div>
                                        <div className="popup-wrap apps type-header">
                                            <div className="dropdown">
                                                <button
                                                    className="btn btn-secondary dropdown-toggle"
                                                    type="button"
                                                    id="dropdownMenuButton4"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    <span className="header-item">
                                                        <i className="icon-grid" />
                                                    </span>
                                                </button>
                                                <ul
                                                    className="dropdown-menu dropdown-menu-end has-content"
                                                    aria-labelledby="dropdownMenuButton4"
                                                >
                                                    <li>
                                                        <h6>Related apps</h6>
                                                    </li>
                                                    <li>
                                                        <ul className="list-apps">
                                                            <li className="item">
                                                                <div className="image">
                                                                    <img src="images/apps/item-1.png" alt="" />
                                                                </div>
                                                                <a href="#">
                                                                    <div className="text-tiny">Photoshop</div>
                                                                </a>
                                                            </li>
                                                            <li className="item">
                                                                <div className="image">
                                                                    <img src="images/apps/item-2.png" alt="" />
                                                                </div>
                                                                <a href="#">
                                                                    <div className="text-tiny">illustrator</div>
                                                                </a>
                                                            </li>
                                                            <li className="item">
                                                                <div className="image">
                                                                    <img src="images/apps/item-3.png" alt="" />
                                                                </div>
                                                                <a href="#">
                                                                    <div className="text-tiny">Sheets</div>
                                                                </a>
                                                            </li>
                                                            <li className="item">
                                                                <div className="image">
                                                                    <img src="images/apps/item-4.png" alt="" />
                                                                </div>
                                                                <a href="#">
                                                                    <div className="text-tiny">Gmail</div>
                                                                </a>
                                                            </li>
                                                            <li className="item">
                                                                <div className="image">
                                                                    <img src="images/apps/item-5.png" alt="" />
                                                                </div>
                                                                <a href="#">
                                                                    <div className="text-tiny">Messenger</div>
                                                                </a>
                                                            </li>
                                                            <li className="item">
                                                                <div className="image">
                                                                    <img src="images/apps/item-6.png" alt="" />
                                                                </div>
                                                                <a href="#">
                                                                    <div className="text-tiny">Youtube</div>
                                                                </a>
                                                            </li>
                                                            <li className="item">
                                                                <div className="image">
                                                                    <img src="images/apps/item-7.png" alt="" />
                                                                </div>
                                                                <a href="#">
                                                                    <div className="text-tiny">Flaticon</div>
                                                                </a>
                                                            </li>
                                                            <li className="item">
                                                                <div className="image">
                                                                    <img src="images/apps/item-8.png" alt="" />
                                                                </div>
                                                                <a href="#">
                                                                    <div className="text-tiny">Instagram</div>
                                                                </a>
                                                            </li>
                                                            <li className="item">
                                                                <div className="image">
                                                                    <img src="images/apps/item-9.png" alt="" />
                                                                </div>
                                                                <a href="#">
                                                                    <div className="text-tiny">PDF</div>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="tf-button w-full">
                                                            View all app
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="popup-wrap user type-header">
                                            <div className="dropdown">
                                                <button
                                                    className="btn btn-secondary dropdown-toggle"
                                                    type="button"
                                                    id="dropdownMenuButton3"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    <span className="header-user wg-user">
                                                        <span className="image">
                                                            <img src="images/avatar/user-1.png" alt="" />
                                                        </span>
                                                        <span className="flex flex-column">
                                                            <span className="body-title mb-2">Kristin Watson</span>
                                                            <span className="text-tiny">Admin</span>
                                                        </span>
                                                    </span>
                                                </button>
                                                <ul
                                                    className="dropdown-menu dropdown-menu-end has-content"
                                                    aria-labelledby="dropdownMenuButton3"
                                                >
                                                    <li>
                                                        <a href="#" className="user-item">
                                                            <div className="icon">
                                                                <i className="icon-user" />
                                                            </div>
                                                            <div className="body-title-2">Account</div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="user-item">
                                                            <div className="icon">
                                                                <i className="icon-mail" />
                                                            </div>
                                                            <div className="body-title-2">Inbox</div>
                                                            <div className="number">27</div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="user-item">
                                                            <div className="icon">
                                                                <i className="icon-file-text" />
                                                            </div>
                                                            <div className="body-title-2">Taskboard</div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="setting.html" className="user-item">
                                                            <div className="icon">
                                                                <i className="icon-settings" />
                                                            </div>
                                                            <div className="body-title-2">Setting</div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="user-item">
                                                            <div className="icon">
                                                                <i className="icon-headphones" />
                                                            </div>
                                                            <div className="body-title-2">Support</div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="login.html" className="user-item">
                                                            <div className="icon">
                                                                <i className="icon-log-out" />
                                                            </div>
                                                            <div className="body-title-2">Log out</div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* /header-dashboard */}
                            {/* main-content */}
                            <div className="main-content">
                                {/* main-content-wrap */}
                                <div className="main-content-inner">
                                    {/* main-content-wrap */}
                                    <div className="main-content-wrap">
                                        <div className="tf-section-4 mb-30">
                                            {/* chart-default */}
                                            <div className="wg-chart-default">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap14">
                                                        <div className="image type-white">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={48}
                                                                height={52}
                                                                viewBox="0 0 48 52"
                                                                fill="none"
                                                            >
                                                                <path
                                                                    d="M19.1094 2.12943C22.2034 0.343099 26.0154 0.343099 29.1094 2.12943L42.4921 9.85592C45.5861 11.6423 47.4921 14.9435 47.4921 18.5162V33.9692C47.4921 37.5418 45.5861 40.8431 42.4921 42.6294L29.1094 50.3559C26.0154 52.1423 22.2034 52.1423 19.1094 50.3559L5.72669 42.6294C2.63268 40.8431 0.726688 37.5418 0.726688 33.9692V18.5162C0.726688 14.9435 2.63268 11.6423 5.72669 9.85592L19.1094 2.12943Z"
                                                                    fill="#22C55E"
                                                                />
                                                            </svg>
                                                            <i className="icon-shopping-bag" />
                                                        </div>
                                                        <div>
                                                            <div className="body-text mb-2">Total Sales</div>
                                                            <h4>34,945</h4>
                                                        </div>
                                                    </div>
                                                    <div className="box-icon-trending up">
                                                        <i className="icon-trending-up" />
                                                        <div className="body-title number">1.56%</div>
                                                    </div>
                                                </div>
                                                <div className="wrap-chart">
                                                    <div id="line-chart-1" />
                                                </div>
                                            </div>
                                            {/* /chart-default */}
                                            {/* chart-default */}
                                            <div className="wg-chart-default">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap14">
                                                        <div className="image type-white">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={48}
                                                                height={52}
                                                                viewBox="0 0 48 52"
                                                                fill="none"
                                                            >
                                                                <path
                                                                    d="M19.1094 2.12943C22.2034 0.343099 26.0154 0.343099 29.1094 2.12943L42.4921 9.85592C45.5861 11.6423 47.4921 14.9435 47.4921 18.5162V33.9692C47.4921 37.5418 45.5861 40.8431 42.4921 42.6294L29.1094 50.3559C26.0154 52.1423 22.2034 52.1423 19.1094 50.3559L5.72669 42.6294C2.63268 40.8431 0.726688 37.5418 0.726688 33.9692V18.5162C0.726688 14.9435 2.63268 11.6423 5.72669 9.85592L19.1094 2.12943Z"
                                                                    fill="#FF5200"
                                                                />
                                                            </svg>
                                                            <i className="icon-dollar-sign" />
                                                        </div>
                                                        <div>
                                                            <div className="body-text mb-2">Total Income</div>
                                                            <h4>$37,802</h4>
                                                        </div>
                                                    </div>
                                                    <div className="box-icon-trending down">
                                                        <i className="icon-trending-down" />
                                                        <div className="body-title number">1.56%</div>
                                                    </div>
                                                </div>
                                                <div className="wrap-chart">
                                                    <div id="line-chart-2" />
                                                </div>
                                            </div>
                                            {/* /chart-default */}
                                            {/* chart-default */}
                                            <div className="wg-chart-default">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap14">
                                                        <div className="image type-white">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={48}
                                                                height={52}
                                                                viewBox="0 0 48 52"
                                                                fill="none"
                                                            >
                                                                <path
                                                                    d="M19.1094 2.12943C22.2034 0.343099 26.0154 0.343099 29.1094 2.12943L42.4921 9.85592C45.5861 11.6423 47.4921 14.9435 47.4921 18.5162V33.9692C47.4921 37.5418 45.5861 40.8431 42.4921 42.6294L29.1094 50.3559C26.0154 52.1423 22.2034 52.1423 19.1094 50.3559L5.72669 42.6294C2.63268 40.8431 0.726688 37.5418 0.726688 33.9692V18.5162C0.726688 14.9435 2.63268 11.6423 5.72669 9.85592L19.1094 2.12943Z"
                                                                    fill="#CBD5E1"
                                                                />
                                                            </svg>
                                                            <i className="icon-file" />
                                                        </div>
                                                        <div>
                                                            <div className="body-text mb-2">Orders Paid</div>
                                                            <h4>34,945</h4>
                                                        </div>
                                                    </div>
                                                    <div className="box-icon-trending">
                                                        <i className="icon-trending-up" />
                                                        <div className="body-title number">0.00%</div>
                                                    </div>
                                                </div>
                                                <div className="wrap-chart">
                                                    <div id="line-chart-3" />
                                                </div>
                                            </div>
                                            {/* /chart-default */}
                                            {/* chart-default */}
                                            <div className="wg-chart-default">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap14">
                                                        <div className="image type-white">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={48}
                                                                height={52}
                                                                viewBox="0 0 48 52"
                                                                fill="none"
                                                            >
                                                                <path
                                                                    d="M19.1094 2.12943C22.2034 0.343099 26.0154 0.343099 29.1094 2.12943L42.4921 9.85592C45.5861 11.6423 47.4921 14.9435 47.4921 18.5162V33.9692C47.4921 37.5418 45.5861 40.8431 42.4921 42.6294L29.1094 50.3559C26.0154 52.1423 22.2034 52.1423 19.1094 50.3559L5.72669 42.6294C2.63268 40.8431 0.726688 37.5418 0.726688 33.9692V18.5162C0.726688 14.9435 2.63268 11.6423 5.72669 9.85592L19.1094 2.12943Z"
                                                                    fill="#2377FC"
                                                                />
                                                            </svg>
                                                            <i className="icon-users" />
                                                        </div>
                                                        <div>
                                                            <div className="body-text mb-2">Total Visitor</div>
                                                            <h4>34,945</h4>
                                                        </div>
                                                    </div>
                                                    <div className="box-icon-trending up">
                                                        <i className="icon-trending-up" />
                                                        <div className="body-title number">1.56%</div>
                                                    </div>
                                                </div>
                                                <div className="wrap-chart">
                                                    <div id="line-chart-4" />
                                                </div>
                                            </div>
                                            {/* /chart-default */}
                                        </div>
                                        <div className="tf-section-5 mb-30">
                                            {/* chart */}
                                            <div className="wg-box">
                                                <div className="flex items-center justify-between">
                                                    <h5>Recent Order</h5>
                                                    <div className="dropdown default">
                                                        <button
                                                            className="btn btn-secondary dropdown-toggle"
                                                            type="button"
                                                            data-bs-toggle="dropdown"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                        >
                                                            <span className="icon-more">
                                                                <i className="icon-more-horizontal" />
                                                            </span>
                                                        </button>
                                                        <ul className="dropdown-menu dropdown-menu-end">
                                                            <li>
                                                                <a href="javascript:void(0);">This Week</a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0);">Last Week</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div id="line-chart-5" />
                                            </div>
                                            {/* /chart */}
                                            {/* top-product */}
                                            <div className="wg-box">
                                                <div className="flex items-center justify-between">
                                                    <h5>Top Products</h5>
                                                    <div className="dropdown default">
                                                        <button
                                                            className="btn btn-secondary dropdown-toggle"
                                                            type="button"
                                                            data-bs-toggle="dropdown"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                        >
                                                            <span className="view-all">
                                                                View all
                                                                <i className="icon-chevron-down" />
                                                            </span>
                                                        </button>
                                                        <ul className="dropdown-menu dropdown-menu-end">
                                                            <li>
                                                                <a href="javascript:void(0);">3 days</a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0);">7 days</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="wg-table table-top-product">
                                                    <ul className="flex flex-column gap14">
                                                        <li className="product-item">
                                                            <div className="image">
                                                                <img src="images/products/1.png" alt="" />
                                                            </div>
                                                            <div className="flex items-center justify-between flex-grow">
                                                                <div className="name">
                                                                    <a
                                                                        href="product-list.html"
                                                                        className="body-title-2"
                                                                    >
                                                                        Patimax Fragrance Long...
                                                                    </a>
                                                                    <div className="text-tiny mt-3">100 Items</div>
                                                                </div>
                                                                <div>
                                                                    <div className="text-tiny mb-3">Coupon Code</div>
                                                                    <div className="body-text">Sflat</div>
                                                                </div>
                                                                <div className="country">
                                                                    <img src="images/country/2.png" alt="" />
                                                                </div>
                                                                <div>
                                                                    <div className="body-title-2 mb-3">-15%</div>
                                                                    <div className="text-tiny">$27.00</div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="product-item">
                                                            <div className="image">
                                                                <img src="images/products/2.png" alt="" />
                                                            </div>
                                                            <div className="flex items-center justify-between flex-grow">
                                                                <div className="name">
                                                                    <a
                                                                        href="product-list.html"
                                                                        className="body-title-2"
                                                                    >
                                                                        Nulo MedalSeries Adult Cat...
                                                                    </a>
                                                                    <div className="text-tiny mt-3">100 Items</div>
                                                                </div>
                                                                <div>
                                                                    <div className="text-tiny mb-3">Coupon Code</div>
                                                                    <div className="body-text">Sflat</div>
                                                                </div>
                                                                <div className="country">
                                                                    <img src="images/country/3.png" alt="" />
                                                                </div>
                                                                <div>
                                                                    <div className="body-title-2 mb-3">-15%</div>
                                                                    <div className="text-tiny">$27.00</div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="product-item">
                                                            <div className="image">
                                                                <img src="images/products/3.png" alt="" />
                                                            </div>
                                                            <div className="flex items-center justify-between flex-grow">
                                                                <div className="name">
                                                                    <a
                                                                        href="product-list.html"
                                                                        className="body-title-2"
                                                                    >
                                                                        Pedigree Puppy Dry Dog...
                                                                    </a>
                                                                    <div className="text-tiny mt-3">100 Items</div>
                                                                </div>
                                                                <div>
                                                                    <div className="text-tiny mb-3">Coupon Code</div>
                                                                    <div className="body-text">Sflat</div>
                                                                </div>
                                                                <div className="country">
                                                                    <img src="images/country/1.png" alt="" />
                                                                </div>
                                                                <div>
                                                                    <div className="body-title-2 mb-3">-15%</div>
                                                                    <div className="text-tiny">$27.00</div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="product-item">
                                                            <div className="image">
                                                                <img src="images/products/4.png" alt="" />
                                                            </div>
                                                            <div className="flex items-center justify-between flex-grow">
                                                                <div className="name">
                                                                    <a
                                                                        href="product-list.html"
                                                                        className="body-title-2"
                                                                    >
                                                                        Biscoito Premier Cookie...
                                                                    </a>
                                                                    <div className="text-tiny mt-3">100 Items</div>
                                                                </div>
                                                                <div>
                                                                    <div className="text-tiny mb-3">Coupon Code</div>
                                                                    <div className="body-text">Sflat</div>
                                                                </div>
                                                                <div className="country">
                                                                    <img src="images/country/4.png" alt="" />
                                                                </div>
                                                                <div>
                                                                    <div className="body-title-2 mb-3">-15%</div>
                                                                    <div className="text-tiny">$27.00</div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="product-item">
                                                            <div className="image">
                                                                <img src="images/products/5.png" alt="" />
                                                            </div>
                                                            <div className="flex items-center justify-between flex-grow">
                                                                <div className="name">
                                                                    <a
                                                                        href="product-list.html"
                                                                        className="body-title-2 mb-3"
                                                                    >
                                                                        Pedigree Adult Dry Dog...
                                                                    </a>
                                                                    <div className="text-tiny">100 Items</div>
                                                                </div>
                                                                <div>
                                                                    <div className="text-tiny mb-3">Coupon Code</div>
                                                                    <div className="body-text">Sflat</div>
                                                                </div>
                                                                <div className="country">
                                                                    <img src="images/country/5.png" alt="" />
                                                                </div>
                                                                <div>
                                                                    <div className="body-title-2 mb-3">-15%</div>
                                                                    <div className="text-tiny">$27.00</div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* /top-product */}
                                            {/* top-countries */}
                                            <div className="wg-box">
                                                <div className="flex items-center justify-between">
                                                    <h5>Top Countries By Sales</h5>
                                                    <div className="dropdown default">
                                                        <button
                                                            className="btn btn-secondary dropdown-toggle"
                                                            type="button"
                                                            data-bs-toggle="dropdown"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                        >
                                                            <span className="view-all">
                                                                View all
                                                                <i className="icon-chevron-down" />
                                                            </span>
                                                        </button>
                                                        <ul className="dropdown-menu dropdown-menu-end">
                                                            <li>
                                                                <a href="javascript:void(0);">3 days</a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0);">7 days</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap10">
                                                    <h4>$37,802</h4>
                                                    <div className="box-icon-trending up">
                                                        <i className="icon-trending-up" />
                                                        <div className="body-title number">1.56%</div>
                                                    </div>
                                                    <div className="text-tiny">since last weekend</div>
                                                </div>
                                                <ul className="flex flex-column justify-between gap10 h-full">
                                                    <li className="country-item">
                                                        <div className="image">
                                                            <img src="images/country/6.png" alt="" />
                                                        </div>
                                                        <div className="flex-grow flex items-center justify-between">
                                                            <a href="countries.html" className="body-text name">
                                                                Turkish Flag
                                                            </a>
                                                            <div className="box-icon-trending up">
                                                                <i className="icon-trending-up" />
                                                            </div>
                                                            <div className="body-text number">6,972</div>
                                                        </div>
                                                    </li>
                                                    <li className="country-item">
                                                        <div className="image">
                                                            <img src="images/country/7.png" alt="" />
                                                        </div>
                                                        <div className="flex-grow flex items-center justify-between">
                                                            <a href="countries.html" className="body-text name">
                                                                Belgium
                                                            </a>
                                                            <div className="box-icon-trending up">
                                                                <i className="icon-trending-up" />
                                                            </div>
                                                            <div className="body-text number">6,972</div>
                                                        </div>
                                                    </li>
                                                    <li className="country-item">
                                                        <div className="image">
                                                            <img src="images/country/8.png" alt="" />
                                                        </div>
                                                        <div className="flex-grow flex items-center justify-between">
                                                            <a href="countries.html" className="body-text name">
                                                                Sweden
                                                            </a>
                                                            <div className="box-icon-trending down">
                                                                <i className="icon-trending-down" />
                                                            </div>
                                                            <div className="body-text number">6,972</div>
                                                        </div>
                                                    </li>
                                                    <li className="country-item">
                                                        <div className="image">
                                                            <img src="images/country/9.png" alt="" />
                                                        </div>
                                                        <div className="flex-grow flex items-center justify-between">
                                                            <a href="countries.html" className="body-text name">
                                                                Vietnamese
                                                            </a>
                                                            <div className="box-icon-trending up">
                                                                <i className="icon-trending-up" />
                                                            </div>
                                                            <div className="body-text number">6,972</div>
                                                        </div>
                                                    </li>
                                                    <li className="country-item">
                                                        <div className="image">
                                                            <img src="images/country/10.png" alt="" />
                                                        </div>
                                                        <div className="flex-grow flex items-center justify-between">
                                                            <a href="countries.html" className="body-text name">
                                                                Australia
                                                            </a>
                                                            <div className="box-icon-trending down">
                                                                <i className="icon-trending-down" />
                                                            </div>
                                                            <div className="body-text number">6,972</div>
                                                        </div>
                                                    </li>
                                                    <li className="country-item">
                                                        <div className="image">
                                                            <img src="images/country/11.png" alt="" />
                                                        </div>
                                                        <div className="flex-grow flex items-center justify-between">
                                                            <a href="countries.html" className="body-text name">
                                                                Saudi Arabia
                                                            </a>
                                                            <div className="box-icon-trending down">
                                                                <i className="icon-trending-down" />
                                                            </div>
                                                            <div className="body-text number">6,972</div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* /top-countries */}
                                        </div>
                                        <div className="tf-section-6 mb-30">
                                            {/* best-shop-sellers */}
                                            <div className="wg-box">
                                                <div className="flex items-center justify-between">
                                                    <h5>Best Shop Sellers</h5>
                                                    <div className="dropdown default">
                                                        <button
                                                            className="btn btn-secondary dropdown-toggle"
                                                            type="button"
                                                            data-bs-toggle="dropdown"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                        >
                                                            <span className="view-all">
                                                                View all
                                                                <i className="icon-chevron-down" />
                                                            </span>
                                                        </button>
                                                        <ul className="dropdown-menu dropdown-menu-end">
                                                            <li>
                                                                <a href="javascript:void(0);">3 days</a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0);">7 days</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="wg-table table-best-shop-sellers">
                                                    <ul className="table-title flex gap20 mb-14">
                                                        <li>
                                                            <div className="body-title">Shop</div>
                                                        </li>
                                                        <li>
                                                            <div className="body-title">Categories</div>
                                                        </li>
                                                        <li>
                                                            <div className="body-title">Total</div>
                                                        </li>
                                                        <li>
                                                            <div className="body-title">Status</div>
                                                        </li>
                                                    </ul>
                                                    <ul className="flex flex-column gap18">
                                                        <li className="shop-item">
                                                            <div className="image">
                                                                <img src="images/shop/1.png" alt="" />
                                                            </div>
                                                            <div className="flex-grow flex items-center justify-between gap20">
                                                                <div>
                                                                    <a href="#" className="body-text name">
                                                                        Robert
                                                                    </a>
                                                                    <div className="text-tiny mt-4">73 Purchases</div>
                                                                </div>
                                                                <div className="body-text">Kitchen, Pets</div>
                                                                <div className="body-text">$1,000</div>
                                                                <div className="flex items-center justify-between gap10">
                                                                    <div className="progress-level-bar">
                                                                        <span
                                                                            data-progress={29}
                                                                            data-max={70}
                                                                            className=""
                                                                        />
                                                                    </div>
                                                                    <div className="text-tiny">100%</div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="shop-item">
                                                            <div className="image">
                                                                <img src="images/shop/2.png" alt="" />
                                                            </div>
                                                            <div className="flex-grow flex items-center justify-between gap20">
                                                                <div>
                                                                    <a href="#" className="body-text name">
                                                                        Calvin
                                                                    </a>
                                                                    <div className="text-tiny mt-4">66 Purchases</div>
                                                                </div>
                                                                <div className="body-text">Health, Grocery</div>
                                                                <div className="body-text">$4,000</div>
                                                                <div className="flex items-center justify-between gap10">
                                                                    <div className="progress-level-bar t1">
                                                                        <span
                                                                            data-progress={59}
                                                                            data-max={70}
                                                                            className=""
                                                                        />
                                                                    </div>
                                                                    <div className="text-tiny">100%</div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="shop-item">
                                                            <div className="image">
                                                                <img src="images/shop/3.png" alt="" />
                                                            </div>
                                                            <div className="flex-grow flex items-center justify-between gap20">
                                                                <div>
                                                                    <a href="#" className="body-text name">
                                                                        Dwight
                                                                    </a>
                                                                    <div className="text-tiny mt-4">
                                                                        15,890 Purchases
                                                                    </div>
                                                                </div>
                                                                <div className="body-text">Electronics</div>
                                                                <div className="body-text">$2,700</div>
                                                                <div className="flex items-center justify-between gap10">
                                                                    <div className="progress-level-bar t2">
                                                                        <span
                                                                            data-progress={29}
                                                                            data-max={70}
                                                                            className=""
                                                                        />
                                                                    </div>
                                                                    <div className="text-tiny">100%</div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="shop-item">
                                                            <div className="image">
                                                                <img src="images/shop/4.png" alt="" />
                                                            </div>
                                                            <div className="flex-grow flex items-center justify-between gap20">
                                                                <div>
                                                                    <a href="#" className="body-text name">
                                                                        Cody
                                                                    </a>
                                                                    <div className="text-tiny mt-4">15 Purchases</div>
                                                                </div>
                                                                <div className="body-text">Movies, Music</div>
                                                                <div className="body-text">$2,100</div>
                                                                <div className="flex items-center justify-between gap10">
                                                                    <div className="progress-level-bar">
                                                                        <span
                                                                            data-progress={25}
                                                                            data-max={70}
                                                                            className=""
                                                                        />
                                                                    </div>
                                                                    <div className="text-tiny">100%</div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="shop-item">
                                                            <div className="image">
                                                                <img src="images/shop/5.png" alt="" />
                                                            </div>
                                                            <div className="flex-grow flex items-center justify-between gap20">
                                                                <div>
                                                                    <a href="#" className="body-text name">
                                                                        Bruce
                                                                    </a>
                                                                    <div className="text-tiny mt-4">127 Purchases</div>
                                                                </div>
                                                                <div className="body-text">Sports, Fitness</div>
                                                                <div className="body-text">$4,400</div>
                                                                <div className="flex items-center justify-between gap10">
                                                                    <div className="progress-level-bar t3">
                                                                        <span
                                                                            data-progress={52}
                                                                            data-max={70}
                                                                            className=""
                                                                        />
                                                                    </div>
                                                                    <div className="text-tiny">100%</div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="shop-item">
                                                            <div className="image">
                                                                <img src="images/shop/6.png" alt="" />
                                                            </div>
                                                            <div className="flex-grow flex items-center justify-between gap20">
                                                                <div>
                                                                    <a href="#" className="body-text name">
                                                                        Jorge
                                                                    </a>
                                                                    <div className="text-tiny mt-4">30 Purchases</div>
                                                                </div>
                                                                <div className="body-text">Toys, Baby</div>
                                                                <div className="body-text">$4,750</div>
                                                                <div className="flex items-center justify-between gap10">
                                                                    <div className="progress-level-bar t4">
                                                                        <span
                                                                            data-progress={23}
                                                                            data-max={70}
                                                                            className=""
                                                                        />
                                                                    </div>
                                                                    <div className="text-tiny">100%</div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="shop-item">
                                                            <div className="image">
                                                                <img src="images/shop/7.png" alt="" />
                                                            </div>
                                                            <div className="flex-grow flex items-center justify-between gap20">
                                                                <div>
                                                                    <a href="#" className="body-text name">
                                                                        Kristin Watson
                                                                    </a>
                                                                    <div className="text-tiny mt-4">93 Purchases</div>
                                                                </div>
                                                                <div className="body-text">Gift Cards</div>
                                                                <div className="body-text">$1,000</div>
                                                                <div className="flex items-center justify-between gap10">
                                                                    <div className="progress-level-bar t5">
                                                                        <span
                                                                            data-progress={45}
                                                                            data-max={70}
                                                                            className=""
                                                                        />
                                                                    </div>
                                                                    <div className="text-tiny">100%</div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* /best-shop-sellers */}
                                            {/* product-overview */}
                                            <div className="wg-box">
                                                <div className="flex items-center justify-between">
                                                    <h5>Product overview</h5>
                                                    <div className="dropdown default">
                                                        <button
                                                            className="btn btn-secondary dropdown-toggle"
                                                            type="button"
                                                            data-bs-toggle="dropdown"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                        >
                                                            <span className="view-all">
                                                                View all
                                                                <i className="icon-chevron-down" />
                                                            </span>
                                                        </button>
                                                        <ul className="dropdown-menu dropdown-menu-end">
                                                            <li>
                                                                <a href="javascript:void(0);">3 days</a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0);">7 days</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="wg-table table-product-overview">
                                                    <ul className="table-title flex gap20 mb-14">
                                                        <li>
                                                            <div className="body-title">Name</div>
                                                        </li>
                                                        <li>
                                                            <div className="body-title">Product ID</div>
                                                        </li>
                                                        <li>
                                                            <div className="body-title">Price</div>
                                                        </li>
                                                        <li>
                                                            <div className="body-title">Quantity</div>
                                                        </li>
                                                        <li>
                                                            <div className="body-title">Sale</div>
                                                        </li>
                                                        <li>
                                                            <div className="body-title">Revenue</div>
                                                        </li>
                                                        <li>
                                                            <div className="body-title">Status</div>
                                                        </li>
                                                    </ul>
                                                    <ul className="flex flex-column gap10">
                                                        <li className="product-item gap14">
                                                            <div className="image">
                                                                <img src="images/products/6.png" alt="" />
                                                            </div>
                                                            <div className="flex items-center justify-between flex-grow">
                                                                <div className="name">
                                                                    <a href="product-list.html" className="body-text">
                                                                        Soft Fluffy Cats
                                                                    </a>
                                                                </div>
                                                                <div className="body-text">#327</div>
                                                                <div className="body-text">$11.70</div>
                                                                <div className="body-text">28</div>
                                                                <div className="body-text">On sale</div>
                                                                <div className="body-text">$328.85</div>
                                                                <div className="block-not-available">
                                                                    Not Available
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="product-item gap14">
                                                            <div className="image">
                                                                <img src="images/products/7.png" alt="" />
                                                            </div>
                                                            <div className="flex items-center justify-between flex-grow">
                                                                <div className="name">
                                                                    <a href="product-list.html" className="body-text">
                                                                        Taste of the Wild Formula Finder
                                                                    </a>
                                                                </div>
                                                                <div className="body-text">#380</div>
                                                                <div className="body-text">$8.99</div>
                                                                <div className="body-text">10</div>
                                                                <div className="body-text">On sale</div>
                                                                <div className="body-text">$105.55</div>
                                                                <div className="block-not-available">
                                                                    Not Available
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="product-item gap14">
                                                            <div className="image">
                                                                <img src="images/products/8.png" alt="" />
                                                            </div>
                                                            <div className="flex items-center justify-between flex-grow">
                                                                <div className="name">
                                                                    <a href="product-list.html" className="body-text">
                                                                        Wellness Natural Food
                                                                    </a>
                                                                </div>
                                                                <div className="body-text">#126</div>
                                                                <div className="body-text">$5.22</div>
                                                                <div className="body-text">578</div>
                                                                <div className="body-text">--/--</div>
                                                                <div className="body-text">$202.87</div>
                                                                <div className="block-not-available">
                                                                    Not Available
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="product-item gap14">
                                                            <div className="image">
                                                                <img src="images/products/9.png" alt="" />
                                                            </div>
                                                            <div className="flex items-center justify-between flex-grow">
                                                                <div className="name">
                                                                    <a href="product-list.html" className="body-text">
                                                                        Dog Food Rachael Ray
                                                                    </a>
                                                                </div>
                                                                <div className="body-text">#582</div>
                                                                <div className="body-text">$14.81</div>
                                                                <div className="body-text">36</div>
                                                                <div className="body-text">--/--</div>
                                                                <div className="body-text">$475.22</div>
                                                                <div>
                                                                    <div className="block-available">Available</div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="product-item gap14">
                                                            <div className="image">
                                                                <img src="images/products/10.png" alt="" />
                                                            </div>
                                                            <div className="flex items-center justify-between flex-grow">
                                                                <div className="name">
                                                                    <a href="product-list.html" className="body-text">
                                                                        Best Buddy Bits Dog Treats
                                                                    </a>
                                                                </div>
                                                                <div className="body-text">#293</div>
                                                                <div className="body-text">$6.48</div>
                                                                <div className="body-text">84</div>
                                                                <div className="body-text">--/--</div>
                                                                <div className="body-text">$219.78</div>
                                                                <div className="block-not-available">
                                                                    Not Available
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="divider" />
                                                <div className="flex items-center justify-between flex-wrap gap10">
                                                    <div className="text-tiny">Showing 5 entries</div>
                                                    <ul className="wg-pagination">
                                                        <li>
                                                            <a href="#">
                                                                <i className="icon-chevron-left" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">1</a>
                                                        </li>
                                                        <li className="active">
                                                            <a href="#">2</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">3</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="icon-chevron-right" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* /product-overview */}
                                        </div>
                                        <div className="tf-section-3">
                                            {/* orders */}
                                            <div className="wg-box">
                                                <div className="flex items-center justify-between">
                                                    <h5>Orders</h5>
                                                    <div className="dropdown default">
                                                        <button
                                                            className="btn btn-secondary dropdown-toggle"
                                                            type="button"
                                                            data-bs-toggle="dropdown"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                        >
                                                            <span className="icon-more">
                                                                <i className="icon-more-horizontal" />
                                                            </span>
                                                        </button>
                                                        <ul className="dropdown-menu dropdown-menu-end">
                                                            <li>
                                                                <a href="javascript:void(0);">This Week</a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0);">Last Week</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="wg-table table-orders">
                                                    <ul className="table-title flex gap10 mb-14">
                                                        <li>
                                                            <div className="body-title">Product</div>
                                                        </li>
                                                        <li>
                                                            <div className="body-title">Price</div>
                                                        </li>
                                                        <li>
                                                            <div className="body-title">Delivery date</div>
                                                        </li>
                                                    </ul>
                                                    <ul className="flex flex-column gap18">
                                                        <li className="product-item gap14">
                                                            <div className="image small">
                                                                <img src="images/products/11.png" alt="" />
                                                            </div>
                                                            <div className="flex items-center justify-between flex-grow gap10">
                                                                <div className="name">
                                                                    <a href="product-list.html" className="body-text">
                                                                        Prodotti per il tuo cane...
                                                                    </a>
                                                                </div>
                                                                <div className="body-text">20 Nov 2023</div>
                                                                <div className="body-text">20 Nov 2023</div>
                                                            </div>
                                                        </li>
                                                        <li className="product-item gap14">
                                                            <div className="image small">
                                                                <img src="images/products/12.png" alt="" />
                                                            </div>
                                                            <div className="flex items-center justify-between flex-grow gap10">
                                                                <div className="name">
                                                                    <a href="product-list.html" className="body-text">
                                                                        Wholesome Pride...
                                                                    </a>
                                                                </div>
                                                                <div className="body-text">20 Nov 2023</div>
                                                                <div className="body-text">20 Nov 2023</div>
                                                            </div>
                                                        </li>
                                                        <li className="product-item gap14">
                                                            <div className="image small">
                                                                <img src="images/products/13.png" alt="" />
                                                            </div>
                                                            <div className="flex items-center justify-between flex-grow gap10">
                                                                <div className="name">
                                                                    <a href="product-list.html" className="body-text">
                                                                        Beneful Baked Delights...
                                                                    </a>
                                                                </div>
                                                                <div className="body-text">20 Nov 2023</div>
                                                                <div className="body-text">20 Nov 2023</div>
                                                            </div>
                                                        </li>
                                                        <li className="product-item gap14">
                                                            <div className="image small">
                                                                <img src="images/products/14.png" alt="" />
                                                            </div>
                                                            <div className="flex items-center justify-between flex-grow gap10">
                                                                <div className="name">
                                                                    <a href="product-list.html" className="body-text">
                                                                        Taste of the Wild...
                                                                    </a>
                                                                </div>
                                                                <div className="body-text">20 Nov 2023</div>
                                                                <div className="body-text">20 Nov 2023</div>
                                                            </div>
                                                        </li>
                                                        <li className="product-item gap14">
                                                            <div className="image small">
                                                                <img src="images/products/15.png" alt="" />
                                                            </div>
                                                            <div className="flex items-center justify-between flex-grow gap10">
                                                                <div className="name">
                                                                    <a href="product-list.html" className="body-text">
                                                                        Canagan - Britain's...
                                                                    </a>
                                                                </div>
                                                                <div className="body-text">20 Nov 2023</div>
                                                                <div className="body-text">20 Nov 2023</div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* /orders */}
                                            {/* earnings */}
                                            <div className="wg-box">
                                                <div className="flex items-center justify-between">
                                                    <h5>Earnings</h5>
                                                    <div className="dropdown default">
                                                        <button
                                                            className="btn btn-secondary dropdown-toggle"
                                                            type="button"
                                                            data-bs-toggle="dropdown"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                        >
                                                            <span className="icon-more">
                                                                <i className="icon-more-horizontal" />
                                                            </span>
                                                        </button>
                                                        <ul className="dropdown-menu dropdown-menu-end">
                                                            <li>
                                                                <a href="javascript:void(0);">This Week</a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0);">Last Week</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="flex flex-wrap gap40">
                                                    <div>
                                                        <div className="mb-2">
                                                            <div className="block-legend">
                                                                <div className="dot t1" />
                                                                <div className="text-tiny">Revenue</div>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center gap10">
                                                            <h4>$37,802</h4>
                                                            <div className="box-icon-trending up">
                                                                <i className="icon-trending-up" />
                                                                <div className="body-title number">0.56%</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="mb-2">
                                                            <div className="block-legend">
                                                                <div className="dot t2" />
                                                                <div className="text-tiny">Profit</div>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center gap10">
                                                            <h4>$28,305</h4>
                                                            <div className="box-icon-trending up">
                                                                <i className="icon-trending-up" />
                                                                <div className="body-title number">0.56%</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="line-chart-6" />
                                            </div>
                                            {/* /earnings */}
                                            {/* new-comment */}
                                            <div className="wg-box">
                                                <div className="flex items-center justify-between">
                                                    <h5>New Comments</h5>
                                                    <div className="dropdown default">
                                                        <button
                                                            className="btn btn-secondary dropdown-toggle"
                                                            type="button"
                                                            data-bs-toggle="dropdown"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                        >
                                                            <span className="icon-more">
                                                                <i className="icon-more-horizontal" />
                                                            </span>
                                                        </button>
                                                        <ul className="dropdown-menu dropdown-menu-end">
                                                            <li>
                                                                <a href="javascript:void(0);">This Week</a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0);">Last Week</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <ul className="flex flex-column gap20 overflow-h">
                                                    <li className="comment-item">
                                                        <div className="image">
                                                            <img src="images/avatar/user-2.png" alt="" />
                                                        </div>
                                                        <div className="">
                                                            <div className="mb-4 name">
                                                                <a href="all-user.html" className="body-title-2">
                                                                    Kathryn Murphy
                                                                </a>
                                                            </div>
                                                            <div className="ratings mb-10">
                                                                <i className="icon-star1 active" />
                                                                <i className="icon-star1 active" />
                                                                <i className="icon-star1 active" />
                                                                <i className="icon-star1 active" />
                                                                <i className="icon-star1" />
                                                            </div>
                                                            <div className="text-tiny">
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                                                elit. Cras nec dolor vel est interdum
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="comment-item">
                                                        <div className="image">
                                                            <img src="images/avatar/user-3.png" alt="" />
                                                        </div>
                                                        <div className="">
                                                            <div className="mb-4 name">
                                                                <a href="all-user.html" className="body-title-2">
                                                                    Leslie Alexander
                                                                </a>
                                                            </div>
                                                            <div className="ratings mb-10">
                                                                <i className="icon-star1 active" />
                                                                <i className="icon-star1 active" />
                                                                <i className="icon-star1 active" />
                                                                <i className="icon-star1 active" />
                                                                <i className="icon-star1" />
                                                            </div>
                                                            <div className="text-tiny">
                                                                Cras nec viverra justo, a mattis lacus. Vestibulum
                                                                eleifend, leo sit amet aliquam laoreet, turpis leo
                                                                vulputate orci
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="comment-item">
                                                        <div className="image">
                                                            <img src="images/avatar/user-4.png" alt="" />
                                                        </div>
                                                        <div className="">
                                                            <div className="mb-4 name">
                                                                <a href="all-user.html" className="body-title-2">
                                                                    Devon Lane
                                                                </a>
                                                            </div>
                                                            <div className="ratings mb-10">
                                                                <i className="icon-star1 active" />
                                                                <i className="icon-star1 active" />
                                                                <i className="icon-star1 active" />
                                                                <i className="icon-star1 active" />
                                                                <i className="icon-star1" />
                                                            </div>
                                                            <div className="text-tiny">
                                                                Morbi eget commodo diam. Praesent dignissim purus ac
                                                                turpis porta
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="comment-item">
                                                        <div className="image">
                                                            <img src="images/avatar/user-5.png" alt="" />
                                                        </div>
                                                        <div className="">
                                                            <div className="mb-4 name">
                                                                <a href="all-user.html" className="body-title-2">
                                                                    Eleanor Pena
                                                                </a>
                                                            </div>
                                                            <div className="ratings mb-10">
                                                                <i className="icon-star1 active" />
                                                                <i className="icon-star1 active" />
                                                                <i className="icon-star1 active" />
                                                                <i className="icon-star1 active" />
                                                                <i className="icon-star1" />
                                                            </div>
                                                            <div className="text-tiny">
                                                                Phasellus et eros ullamcorper, efficitur eros eget,
                                                                pharetra ante. Sed blandit risus vitae dolor feugiat,
                                                                eu vulputate elit rhoncus
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="comment-item">
                                                        <div className="image">
                                                            <img src="images/avatar/user-2.png" alt="" />
                                                        </div>
                                                        <div className="">
                                                            <div className="mb-4 name">
                                                                <a href="all-user.html" className="body-title-2">
                                                                    Kathryn Murphy
                                                                </a>
                                                            </div>
                                                            <div className="ratings mb-10">
                                                                <i className="icon-star1 active" />
                                                                <i className="icon-star1 active" />
                                                                <i className="icon-star1 active" />
                                                                <i className="icon-star1 active" />
                                                                <i className="icon-star1" />
                                                            </div>
                                                            <div className="text-tiny">
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                                                elit. Cras nec dolor vel est interdum
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="comment-item">
                                                        <div className="image">
                                                            <img src="images/avatar/user-3.png" alt="" />
                                                        </div>
                                                        <div className="">
                                                            <div className="mb-4 name">
                                                                <a href="all-user.html" className="body-title-2">
                                                                    Leslie Alexander
                                                                </a>
                                                            </div>
                                                            <div className="ratings mb-10">
                                                                <i className="icon-star1 active" />
                                                                <i className="icon-star1 active" />
                                                                <i className="icon-star1 active" />
                                                                <i className="icon-star1 active" />
                                                                <i className="icon-star1" />
                                                            </div>
                                                            <div className="text-tiny">
                                                                Cras nec viverra justo, a mattis lacus. Vestibulum
                                                                eleifend, leo sit amet aliquam laoreet, turpis leo
                                                                vulputate orci
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="comment-item">
                                                        <div className="image">
                                                            <img src="images/avatar/user-4.png" alt="" />
                                                        </div>
                                                        <div className="">
                                                            <div className="mb-4 name">
                                                                <a href="all-user.html" className="body-title-2">
                                                                    Devon Lane
                                                                </a>
                                                            </div>
                                                            <div className="ratings mb-10">
                                                                <i className="icon-star1 active" />
                                                                <i className="icon-star1 active" />
                                                                <i className="icon-star1 active" />
                                                                <i className="icon-star1 active" />
                                                                <i className="icon-star1" />
                                                            </div>
                                                            <div className="text-tiny">
                                                                Morbi eget commodo diam. Praesent dignissim purus ac
                                                                turpis porta
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="comment-item">
                                                        <div className="image">
                                                            <img src="images/avatar/user-5.png" alt="" />
                                                        </div>
                                                        <div className="">
                                                            <div className="mb-4 name">
                                                                <a href="all-user.html" className="body-title-2">
                                                                    Eleanor Pena
                                                                </a>
                                                            </div>
                                                            <div className="ratings mb-10">
                                                                <i className="icon-star1 active" />
                                                                <i className="icon-star1 active" />
                                                                <i className="icon-star1 active" />
                                                                <i className="icon-star1 active" />
                                                                <i className="icon-star1" />
                                                            </div>
                                                            <div className="text-tiny">
                                                                Phasellus et eros ullamcorper, efficitur eros eget,
                                                                pharetra ante. Sed blandit risus vitae dolor feugiat,
                                                                eu vulputate elit rhoncus
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* /new-comment */}
                                        </div>
                                    </div>
                                    {/* /main-content-wrap */}
                                </div>
                                {/* /main-content-wrap */}
                                {/* bottom-page */}
                                <div className="bottom-page">
                                    <div className="body-text">Copyright © 2024 Remos. Design with</div>
                                    <i className="icon-heart" />
                                    <div className="body-text">
                                        by{" "}
                                        <a href="https://themeforest.net/user/themesflat/portfolio">
                                            Themesflat
                                        </a>{" "}
                                        All rights reserved.
                                    </div>
                                </div>
                                {/* /bottom-page */}
                            </div>
                            {/* /main-content */}
                        </div>
                        {/* /section-content-right */}
                    </div>
                    {/* /layout-wrap */}
                </div>
                {/* /#page */}
            </div>

            <Plugins />
        </>
    )
}

export default AdminLayout;
