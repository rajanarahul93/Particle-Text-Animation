# Particle Text Animation

This project creates a vibrant and interactive particle text animation using HTML5 Canvas and JavaScript. The particles form the text "RAHUL" and exhibit dynamic animations such as color changes, pulsing sizes, rotations, and interaction with the mouse cursor.

## Features

- **Particle Animation**: Particles form the text "RAHUL" and move dynamically.
- **Color Cycling**: Particles change colors over time, creating a visually appealing effect.
- **Mouse Interaction**: Particles are repelled by the mouse cursor, changing color and direction when in close proximity.
- **Pulsing Effect**: Particles pulse in size to create a breathing effect.
- **Particle Trails**: Particles leave a fading trail as they move, enhancing the visual effect.
- **Gravity Effect**: Particles fall down when not influenced by the mouse, simulating a gravity effect.
- **Connecting Lines**: Lines connect particles that are close to each other, forming a web-like structure.


### Installation

1. Clone the repository:

   ```
   git clone https://github.com/rajanarahul93/particle-text-animation.git
   ```

2. Navigate to the project directory:

   ```
   cd particle-text-animation
   ```

3. Open `index.html` in your web browser.

## Usage

Simply open the `index.html` file in your preferred web browser. Move your mouse over the canvas to interact with the particles.

## Code Structure

- **index.html**: The main HTML file that sets up the canvas and includes the JavaScript and CSS files.
- **style.css**: The CSS file for styling the canvas and body.
- **script.js**: The JavaScript file containing the particle logic and animation functions.

### index.html

This file sets up the HTML structure and includes the necessary CSS and JS files.

### style.css

This file contains basic styling for the body and canvas.

### script.js

This file contains the core logic for the particle animation, including:

- **Particle Class**: Defines the properties and methods for each particle.
- **init()**: Initializes the particles based on the text coordinates.
- **animate()**: The animation loop that updates and draws the particles.
- **connect()**: Draws lines between particles that are close to each other.

## Customization

You can customize the text, colors, and effects by modifying the JavaScript code:

- **Text**: Change the text in `ctx.fillText('RAHUL', 0, 30);`.
- **Colors**: Modify the colors array in the `colorCycle` method.
- **Particle Size and Effects**: Adjust properties like `this.size`, `this.baseSize`, `this.speed`, and others in the `Particle` class.

## Contributing

Feel free to contribute to this project by submitting issues or pull requests. Please ensure all changes are well-documented and tested.

## License

This project is open-source and available under the [MIT License](LICENSE).
