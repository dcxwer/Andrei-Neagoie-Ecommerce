import './menu-item.styles.scss'
import {withRouter} from 'react-router-dom'

const MenuItem = ({title, imageUrl, size, linkUrl, history, match, location}) => {

    return (
        <div className={`menu-item ${size}`} onClick={e => history.push(match.url + linkUrl)}>

            <div className="background-image" style={{ backgroundImage: `url(${imageUrl})`}}></div>

            <div className="content">
                <div className="title">{title}</div>
                <div className="subtitle">SHOP NOW</div>
            </div>
        </div>
    )
}

export default withRouter(MenuItem)
