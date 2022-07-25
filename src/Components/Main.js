import { useContext, useState } from 'react';
import { places } from './data.js';
import { getImageUrl } from './utils.js';
import { ImageSizeContext } from './Context.js';
export default function Main() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;
  return (
<div style= {{background: "grey"}}>
    <ImageSizeContext.Provider value={imageSize}>
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={e => {
            setIsLarge(e.target.checked);
          }}
        />
        Use large images
      </label>
      <hr color={"black"} />
      <List/>
      </ImageSizeContext.Provider>
      </div>
  )
}

function List({ imageSize }) {
  const listItems = places.map(place =>
    <li key={place.id}>
        {console.log(place)}
      <Place
        place={place}
      />
    </li>
  );
  return <ul>{listItems}</ul>;
}

function Place({ place }) {
  return (
    <>
      <PlaceImage
        place={place}
      />
      <p>
        <b style={{color:"White"}}>{place.name} </b>
        {': ' + place.description}
      </p>
    </>
  );
}

function PlaceImage({ place}) {
    const imageSize=useContext(ImageSizeContext);
    console.log(place)
    console.log(imageSize)
  return (
    <img border={5}
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}
