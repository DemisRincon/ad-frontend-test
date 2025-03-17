# Frontend Developer Test

**Context**: We would like you to build a small responsive web application to test your
knowledge of React and Next.js development and related technologies.

Please refer to the attached Figma Project for an understanding of what the finished app should look like. You will also find the design details and specifications like font family, size, colors, etc., as well as the assets to build the UI:

- [Figma Project](https://www.figma.com/file/p0DCxHDFbJriZsBmiYMmoE/Reto-Programaci%C3%B3n-Frontend?type=design&node-id=1-11806&mode=design&t=PdEzAKSIKP2kH7sf-0)
- Password: ewKDk0ZS97F8

## API

The web application must request data from the local API found in the app/api folder. The `genre` filter component should use the URL parameter "genre" in order to filter the results in the Catalog page.
For example: `http://localhost:3000/api/games?genre=Battle%20Royale&page=1`

The "See more" functionality should be implemented using the “page” URL parameter from this API. The attributes to use for the games are `id`, `genre`, `image`, `name`, `description`, `price`, `isNew`.


## REQUIREMENTS

### General

- Games added to the cart should persist on local storage.
- Deployment of the web app on Vercel from your own GitHub repository.
- The web app must have a responsive design.
- Implement unit testing.
- Do not use any 3rd party components like Material-ui, Shadcn-ui, etc. Use the TailwindCSS config file for colors, etc.
- In the footer, the Apply Digital logo should redirect you to the route "/".
- The header should only have two navigation elements, a logo that redirects you to "/" and a cart icon to "/cart"

### Catalog Page

- The page must have a loading indicator.
- The selected "genre" filter should persist on the url and be used when querying the results if the page is visited for the first time using these parameters.
- When clicking on the "Add To Cart" button, the game has to be added to the Cart.
- If the item is added to cart, the button should say "Remove" and if clicked it should remove the item from the cart.
- ¨See more¨ button must be implemented.
- The "genre" filter selector can be implemented using the native select element. It doesn’t need to be complex.

### Cart Page

- It should display every item added to the cart, including `name`, `description`, `price`, `image`, `genre`, and display the "New" label using the `isNew` attribute.
- The "X" button on each item should remove it from the cart.
- The Order Summary section should display the items quantity, each item's price and the order total.
- It should display a "Back to Catalog" button that takes back to "/"

## WHAT WILL BE EVALUATED?

- Clean code, good naming practices.
- Software design and good use of the tech stack.
- Use of Services for fetching logic.
- Git History (using [Conventional Commits](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines))
- Environment Variables (for API url).
- Solution deployed meets the requirements.

## DELIVERABLES

- A GitHub repo url, with the entire codebase. Example: `https://github.com/your-username/ad-frontend-test`
- A Vercel url with the deployed solution. Example: `https://ad-frontend-test-13912.vercel.app `

When you finish, write an email to `<recruiter email>` to let us know.

If you have any questions about the task, please let us know.

Once again, thank you for your time and we are looking forward to seeing the results!
