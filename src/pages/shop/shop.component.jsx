import {useState} from 'react'
import SHOP_DATA from './shop.data'
import CollectionPreview from '../../components/shop-page/collection-preview/collection-preview.component'
import './shop.scss'

const ShopPage = () => {

    const [collections, setCollections] = useState(SHOP_DATA)

    return (
        <div className="shop-page">
            
            {collections.map(({id, ...rest}) => (
                <CollectionPreview key={id} {...rest} />
            ))}
                
        </div>
    )
}

export default ShopPage
