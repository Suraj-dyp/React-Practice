const Card = (props) => {
	return(
  	<div style={{margin: '1em'}}>
    	<img width="75" src={props.avatar_url}/>
      <div style={{display: 'inline-block', marginLeft:10}}>
      	<div style={{fontSize: '1.25em', fontWeight:'bold'}}>{props.name}</div>
        <div>{props.company}</div>
      </div>
    </div>
  )
}

let data = [
	{
  	name: "Ravi",
    avatar_url: "https://avatars1.githubusercontent.com/u/70863?v=4",
    company: "TPT-1"
  },
  {
  	name: "Suraj",
    avatar_url: "https://avatars2.githubusercontent.com/u/20740522?v=4",
    company: "TPT"
  },
]
const CardList = (props) => {
	return (
  	<div>
    	{props.cards.map(card => <Card {...card}/>)}
    </div>
  )
}

ReactDOM.render(<CardList cards={data}/>, mountNode)
