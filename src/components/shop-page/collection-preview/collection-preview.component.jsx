import './collection-preview.styles.scss'
import CollectionItem from '../collection-item/collection-item.component'

const CollectionPreview = ({title, items}) => {

    return (
        <div className="collection-preview">
            <div className="title">{title}</div>
            <div className="preview">

                {items.filter((itm, index) => index < 4).map(item => (

                    <CollectionItem key={item.id} item={item}/>
                    
                ))}

            </div>            
        </div>
    )
}

export default CollectionPreview
