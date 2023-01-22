import React from 'react'
import Tweet from './Tweet';
const Tweets = (props) => {
  const tweets = [
    {name: 'cooper', tweet: 'This is react'},
    {name: 'rakesh', tweet:" Happy new year"},
    {name: 'tyrone', tweet: 'Welcome magnusiteee'},
  ];
  return (
    <section>
         {/* <Tweet me={props.me} age={props.age}/> */}
         {tweets.map((tweet) =>
            <Tweet name={tweet.name} tweet={tweet.tweet}/>
         )}
    </section>
  );
}

export default Tweets;