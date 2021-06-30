import './menu-item.styles.scss'


const MenuItem = ({title, imageUrl, size, linkUrl}) => {

    return (
        <div className={`menu-item ${size}`}>

            <div className="background-image" style={{ backgroundImage: `url(${imageUrl})`}}></div>
            
            <div className="content">
                <div className="title">{title}</div>
                <div className="subtitle">SHOP NOW</div>
            </div>
        </div>
    )
}

export default MenuItem
