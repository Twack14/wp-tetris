# Womack Projects - Simple Tetris
This is a simple tetris copy written in Javascript. I build this by following [this tutorial on youtube.](https://youtu.be/H2aW5V46khA) To take small baby steps into game development, I wanted to start simple and learn how to re-create classic games. Any advice is welcome!



# Installation
To download and run and make adjustments yourself, follow the instructions below.

## Prerequisites
- [Node.js](https://node.js.org) must be installed
- Have a text editor program. I recommend [Visual Studio Code.](https://code.visualstudio.com/download) (It's FREE!)

### Step 1 - Clone repo & install dependencies
Clone this repo by opening up terminal and entering this command (if on windows, make sure you have git installed):
```
git clone https://github.com/Twack14/wp-tetris.git
```
A folder will be created in your home directory named **wp-tetris**

Move into the newly created directory:
```
cd wp-tetris
```

Next, install dependencies:
```
npm install
```

### Step 2 - Adding environment variables
Open up the wp-tetris directory in VS Code. In the root of the wp-tetris folder project, create a file named ```.env```

Inside the ```.env``` file, add the following code:
```
HOSTNAME=127.0.0.1
PORT=8008
```

Save the ```.env``` file, and now you are ready to spin up this simple tetris clone!

### Step 3 - Start up the game!
Save and close out of VS Code, and open up a fresh terminal window. Navigate to the wp-tetris directory (```cd wp-tetris```), and then type the following command:
```
npm start
```

Head over to http://127.0.0.1:8008 and you can now run the tetris game in your browser!

# Notes
This is a very basic funtioning tetris. It doesn't speed up over time, it doesn't have a game over screen, and it doesn't display your score at the end. When you get a game over, it simply starts at 0 and clears the canvas. I would love to learn simple game dev tips and tricks from developers, so I would love to collaborate! 








