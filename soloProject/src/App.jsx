import { useState } from 'react';
import { places } from './data.jsx';
import { getImageUrl } from './util.jsx';
import { useContext } from 'react';
import ImageContext from './Context.jsx';


export default function App() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;
  return (
    <>
    <ImageContext value={imageSize}>
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
      <hr />

       <List />
    </ImageContext>
    </>
  )
}

function List() {
  const listItems = places.map(place =>
    <li key={place.id}>
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
        <b>{place.name}</b>
        {': ' + place.description}
      </p>
    </>
  );
}

function PlaceImage({ place }) {
  let imageSizes = useContext(ImageContext)
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSizes}
      height={imageSizes}
    />
  );
}
