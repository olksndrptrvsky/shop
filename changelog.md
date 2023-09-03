## [0.0.5] - 2023-09-02

### Added

- Currency pipe for Total Cost in CartListComponent view
- Uppercase pipe for product name in ProductComponent view
- getProducts returns Promise, async pipe is used in ProductListComponent view
- OrderBy pipe is used inside CartListCompotent view (not working from the initializing)


## [0.0.4] - 2023-09-02

### Added

- Highlights of the product name on click
- ConfigOptionsService, GeneratorFactory, GeneratorService, LocalStorageService

### Fixed

- Refactored CartService


## [0.0.3] - 2023-08-23

### Added

- Buy button is only enabled if the product is available
- Display product name and count in the cart
- Display total sum and count in the cart
- Highlight cart item on the hover 


## [0.0.2] - 2023-08-21

### Fixed

- Product component to send event instead of modifying data via service
- Switched to short property notation via constructor

## [0.0.1] - 2023-08-08

### Added

- Product list to the main page
- Buy button under each product to add the product to the Cart
- Cart is being displayed under the product list on the main page
(message in case cart is empty)
- Clear Cart button for non-empty cart