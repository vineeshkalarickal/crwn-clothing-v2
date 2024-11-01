import "./category-item.styles.scss";

const CategoryItem = ({ category: { title, imageUrl } }) => {
  //const { title, imageUrl } = category;
  const titleName = title[0].toUpperCase() + title.slice(1);
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{titleName}</h2>
        <button>Shop now</button>
      </div>
    </div>
  );
};

export default CategoryItem;
