frontend-nanodegree-arcade-game
===============================

## Table of Contents

* [Instructions](#instructions)
* [Contributing](#contributing)
* [Gameplay](#gameplay)
* [Bugs](#bugs)
* [Resources](#resources)
* [Dependencies](#dependencies)

## Instructions

Load the index.html file in the browser.

## Gameplay

When the page loads the board, players, and enemies will automatically render.  The player appears at the bottom left in the grass.  Enemies travel horizontally from left to right across the road.  It is the player's job to cross the road and get to the water without colliding into any enemies.  When collisions do occur the player is reset to the original location.  The speed and position of the enemies continues normally without alteration.  Use the arrow keys to move up, down, left, and right respectively.  Moving to far up, down, left, or right results in the player's position being reset.  The player must remain within the bounds of the rendered game board.

Once the player gets to the water, an alert will show, and all entities are removed from the canvas.  The background remains.  Reload the page to play a new game.

## Bugs

The following are known bugs:

* Once the player moves out of bounds, the player's location is reset to the beginning.  Moving out of bounds cannot be corrected by moving back into bounds.  Movement is not prevented.

* If the player and enemy entities are not removed the alert box repeatedly shows.  Clicking 'ok' on the alert box allows animation to continue until the next alert box shows fractions of a second later.

## Resources

Starter code provided by Udacity.

[2D Collisions](https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection "2D Collisions")

Students should use this [rubric](https://review.udacity.com/#!/projects/2696458597/rubric) for self-checking their submission. Make sure the functions you write are **object-oriented** - either class functions (like Player and Enemy) or class prototype functions such as Enemy.prototype.checkCollisions, and that the keyword 'this' is used appropriately within your class and class prototype functions to refer to the object the function is called upon. Also be sure that the **readme.md** file is updated with your instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).

## Dependencies

* [resources.js](js/resources.js "resources.js")

* [engine.js](js/engine.js "engine.js")

* [app.js](js/app.js "app.js")

* [style.css](css/style.css "style.css")

* [images](images "images")

