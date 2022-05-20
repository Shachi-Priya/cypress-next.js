const Platforms = (props) => {
    const favorites = props.stack;
  
    return (
      <div style={{display: 'flex', justifyContent: 'center', padding: '2rem'}}>
        <main>
          <h1>My Favorites Freelance platforms</h1>
          <ul>
            {favorites.map((favorite) => {
              return <li key={favorite}>{favorite}</li>;
            })}
          </ul>
        </main>
      </div>
    );
  };
  
  export default Platforms;
  
  export async function getServerSideProps() {
    const favoritesPlatforms = [
      'Toptal',
      'Upwork',
      'Malt',
      'Comet'
    ];
  
    return {
      props: {
        stack: favoritesPlatforms
      }
    }
  }