import './Postfoliolist.scss';

const Portfoliolist = ({id,title,active,setSelected}) => {
    return (
        <li className={"postfoliolist " + (active && "active")} onClick={()=>setSelected(id)}>
             {title}
        </li>
    )
}

export default Portfoliolist;
