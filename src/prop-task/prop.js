import { getImageUrl } from './utils.js';
const Profile = ({
  profileName,
  imageId,
  ImageSize = 70,
  profession,
  awards,
  discovery,
}) => {
  return (
    <div>
      <h2>{profileName}</h2>
      <img
        className='avatar'
        src={getImageUrl(imageId)}
        alt={profileName}
        width={ImageSize}
        height={ImageSize}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: {awards.length} </b>({awards.join(', ')})
        </li>
        <li>
          <b>Discovered: </b>
          {discovery}
        </li>
      </ul>
    </div>
  );
};

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <section className='profile'>
        <Profile
          profileName='Maria Sklodowska-Curie'
          imageId='szV5sdG'
          profession='physicist and chemist'
          awards={[
            'Nobel Prize in Physics',
            ' Nobel Prize in Chemistry',
            'Davy Medal',
            'Matteucci Medal',
          ]}
          discovery='polonium (element)'
        />
      </section>

      <section className='profile'>
        <Profile
          profileName='Katsuko Saruhashi'
          imageId='YfeOqp2'
          profession='geochemist'
          awards={['Miyake Prize for geochemistry', 'Tanaka Prize']}
          discovery='  a method for measuring carbon dioxide in seawater'
        />
      </section>
    </div>
  );
}
