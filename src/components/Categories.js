
function Categories({ setActiveCategory, categories, activeCategory }) {
    return (
      <div >
        <select
          value={activeCategory}
          onChange={(e) => setActiveCategory(e.target.value)}
        >
          <option value="">---</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <button onClick={() => setActiveCategory("")}>RĂ©initialiser</button>
      </div>
    );
  }
  
  export default Categories;