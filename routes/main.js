// Create a new router
const express = require("express");
const router = express.Router();
var shopData = {
    shopName: "Drinks R Us",
    productCategories: ["Beer", "Wine", "Soft Drinks", "Hot Drinks"],
    shopLocations: [
        { manager: "Victor Rosa", address: "123 London Road, London" },
        { manager: "Bob Johnson", address: "45 Queens Road, Manchester" },
        { manager: "Charlie Lopez", address: "9 Lynton Road, Brighton" }
    ]
};

// This is the validation function you are reusing
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
    
// Handle the main routes

router.get("/", (req, res) => {
    res.render("index.ejs", shopData)
});
router.get("/about", (req, res) => {
    res.render("about.ejs", shopData)
}); 

router.get("/search", (req, res) => {
    res.render("search.ejs", shopData)
});

router.get('/search_result', function (req, res) {
    res.render("search_result.ejs", {
        shopName: shopData.shopName,
        searchText: req.query.search_text,
        category: req.query.category
    });
});

router.get("/register", (req,res) => {
    res.render("register.ejs",  shopData); 
});


router.post("/registered", (req, res) => {
    let message = ""; // Create a message variable
    
    // Check if the email is valid
    if (validateEmail(req.body.email)) {
        // If valid, set success message
        message = 'Hello '+ req.body.first+' '+req.body.last+', you are now registered!. An email has been sent to '+ req.body.email;
    } else {
        // If invalid, set error message
        message = 'Email validation failed: "'+ req.body.email + '" is not a valid email. Please go back and try again.';
    }

    // Render the template and pass the message
    res.render("registered.ejs", {
        shopName: shopData.shopName,
        message: message
    });

});

// This route displays the survey page
router.get("/survey", (req, res) => {
    res.render("survey.ejs", shopData);
});

// This route handles the submitted survey data
router.post("/survey_results", (req, res) => {
    
    // Check if the email is valid first
    if (validateEmail(req.body.email)) {
        // Email IS valid, proceed as normal
        
        // Checkbox value is 'on' if checked, undefined if not
        let isStudent = req.body.student === 'on' ? 'Yes' : 'No';

        // Render the results page with the submitted data
        res.render("survey_results.ejs", {
            shopName: shopData.shopName,
            firstName: req.body.first_name,
            surname: req.body.surname,
            email: req.body.email,
            age: req.body.age,
            drinkCategory: req.body.drink_category,
            studentStatus: isStudent
        });
    } else {
        // Email IS NOT valid, render an error message
        // We can reuse the registered.ejs template to show the error
        res.render("registered.ejs", {
            shopName: shopData.shopName,
            message: 'Email validation failed: "' + req.body.email + '" is not a valid email. Please go back and try again.'
        });
    }
});



// Export the router object so index.js can access it
module.exports = router;