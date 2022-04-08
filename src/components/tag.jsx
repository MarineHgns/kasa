import "../css/tag.css"

function Tags(props) {
    return (
        <ul className='tags'>
            {props.listTags.map((tagItem, index) => {
                return (
                <li key={index} className="tag">
                    {tagItem}
                </li>
                )
            })}
        </ul>
  )
}

export default Tags