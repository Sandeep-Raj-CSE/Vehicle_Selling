import express  from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import { brainTreePaymentController, braintreeTokenController, createProductController, deleteProductController, getProductController, getSingleProductController, 
  productCategoryController, 
  productCountController, 
  productFiltersController, productListController, productPhotoController, realtedProductController, searchProductController, updateProductController } from "../controllers/productController.js";

import Formidable from "express-formidable";
import ExpressFormidable from "express-formidable";

const router = express.Router()
//

router.post('/create-product',requireSignIn,isAdmin,Formidable(),createProductController)

//routes
router.put(
    "/update-product/:pid",
    requireSignIn,
    isAdmin,
    ExpressFormidable(),
    updateProductController
  );


//get products
router.get("/get-product", getProductController);


//single product
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete rproduct
router.delete("/delete-product/:pid", deleteProductController);

//update product

// filter product

router.post('/product-filters',productFiltersController)

// product count 

router.get('/product-count',productCountController);

//product per page
router.get('/product-list/:page',productListController);


// search

router.get('/search/:keyword',searchProductController);


//similar product

router.get('/related-product/:pid/:cid', realtedProductController)


// category wise router
router.get('/product-category/:slug',productCategoryController)


//Payment
router.get('/braintree/token',braintreeTokenController)

//payments 

router.post('/braintree/payment',requireSignIn,brainTreePaymentController)

export default router