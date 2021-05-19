import React from 'react';
import './App.css';
import Button from './Button.js'
import Products from "./Products";
import bag_1 from "./assets/bag_1.png"
import bag_2 from "./assets/bag_2.png"
import bag_3 from "./assets/bag_3.png"
import bag_4 from "./assets/bag_4.png"
import brand from "./assets/brand.png"
import our_story from "./assets/our_story.png"
import Tile from "./Tile"


function App() {
  return (
      <div>
      <h1>Handbags & Purses</h1>
      <nav>
        <Button
        title={"to the collection"}
        disabled={false}
        />
          <Button
              title={"shop all bags"}
              disabled={false}
          />
          <Button
              title={"pre-orders"}
              disabled={true}
          />
      </nav>
          <main>
              <Products
                  banner={"Best seller"}
                  image={bag_1}
                  name={"The handy bag"}
                  price={"€400,-"}
              />
              <Products
                  banner={"Best seller"}
                  image={bag_2}
                  name={"The stylish bag"}
                  price={"€250,-"}
              />
              <Products
                  banner={"New collection"}
                  image={bag_3}
                  name={"The simple bag"}
                  price={"€300,-"}
              />
              <Products
                  banner={"New collection"}
                  image={bag_4}
                  name={"The trendy bag"}
                  price={"€150,-"}
              />
          </main>
          <footer>
              <Tile
                  header={"The Brand"}
                  text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, beatae distinctio doloribus error explicabo fuga in iure laboriosam libero magnam neque nihil officiis perferendis placeat quaerat, qui sed veritatis? Consequuntur dicta fugit laborum recusandae repellendus sit temporibus. Accusantium, distinctio mollitia?"}
              />
              <Tile
                  image={brand}
              />
              <Tile
                  image={our_story}
              />
              <Tile
                  header={"Our story"}
                  text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, beatae distinctio doloribus error explicabo fuga in iure laboriosam libero magnam neque nihil officiis perferendis placeat quaerat, qui sed veritatis? Consequuntur dicta fugit laborum recusandae repellendus sit temporibus. Accusantium, distinctio mollitia?"}
              />
          </footer>
      </div>
  );
}

export default App;



