const Stack = (props) => {
    const favorites = props.stack;
  
    return (
      <div style={{display: 'flex', justifyContent: 'center', padding: '2rem'}}>
        <main>
          <h1>My Favorites Stack</h1>
          <ul>
            {favorites.map((favorite) => {
              return <li key={favorite}>{favorite}</li>;
            })}
          </ul>
        </main>
      </div>
    );
  };
  
export default Stack;


export async function getStaticProps() 
{
    const favoriteStack = [
      'Javascript',
      'TypeScript',
      'React.js',
      'Next.js',
      'GraphQL',
      'Amazon Web Services',
      'Firebase',
    ];
  
    return {
      props: {
        stack: favoriteStack
      }
    }
}