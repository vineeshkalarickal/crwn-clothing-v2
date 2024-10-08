import './category-item.styles.scss';

const CategoryItem = ({ category: { title, imageUrl } }) => {
  //const { title, imageUrl } = category;

  return (<div className="category-container">
    <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="category-body-container">
      <h2>{title}</h2>
      <button>Shop now</button>
    </div>
  </div>)
}

export default CategoryItem;